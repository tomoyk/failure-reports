#!/usr/bin/env python3
"""指定されたURLリストをスクレイピングしてSQLiteデータベースに追加する"""

import re
import sqlite3
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup
from incident_scraper import (
    make_session,
    scrape_url,
    parse_response,
    ScrapeResult,
    DEFAULT_DATABASE,
)


def extract_provider_from_url(url: str) -> str:
    """URLからプロバイダー名を抽出する"""
    parsed = urlparse(url)
    domain = parsed.hostname or ""
    
    # ドメインベースのマッピング
    provider_map = {
        'github.com': 'GitHub',
        'github.blog': 'GitHub',
        'blog.cloudflare.com': 'Cloudflare',
        'status.cloud.google.com': 'Google Cloud',
        'cloud.google.com': 'Google Cloud',
        'googleblog.blogspot.com': 'Google',
        'blog.google': 'Google',
        'aws.amazon.com': 'AWS',
        'azure.microsoft.com': 'Azure',
        'techcommunity.microsoft.com': 'Microsoft',
        'status.heroku.com': 'Heroku',
        'heroku.com': 'Heroku',
        'slack.engineering': 'Slack',
        'slackhq.com': 'Slack',
        'status.circleci.com': 'CircleCI',
        'discuss.circleci.com': 'CircleCI',
        'circleci.com': 'CircleCI',
        'traviscistatus.com': 'Travis CI',
        'blog.travis-ci.com': 'Travis CI',
        'discordstatus.com': 'Discord',
        'honeycomb.io': 'Honeycomb',
        'incident.io': 'Incident.io',
        'pagerduty.com': 'PagerDuty',
        'status.pagerduty.com': 'PagerDuty',
        'status.openai.com': 'OpenAI',
        'openai.com': 'OpenAI',
        'reddit.com': 'Reddit',
        'about.gitlab.com': 'GitLab',
        'gitlab.com': 'GitLab',
        'fastly.com': 'Fastly',
        'blog.sentry.io': 'Sentry',
        'datadoghq.com': 'Datadog',
        'stripe.com': 'Stripe',
        'support.stripe.com': 'Stripe',
        'joyent.com': 'Joyent',
        'asana.com': 'Asana',
        'launchdarkly.com': 'LaunchDarkly',
        'status.launchdarkly.com': 'LaunchDarkly',
        'status.duo.com': 'Duo',
        'okta.com': 'Okta',
        'twilio.com': 'Twilio',
        'status.twilio.com': 'Twilio',
        'mailchimp.com': 'Mailchimp',
        'status.mailgun.com': 'Mailgun',
        'eslint.org': 'ESLint',
        'npmjs.org': 'npm',
        'brew.sh': 'Homebrew',
        'rust-lang.org': 'Rust',
        'elastic.co': 'Elastic',
        'eveonline.com': 'EVE Online',
        'bungie.net': 'Bungie',
        'fortnite.com': 'Fortnite',
        'about.roblox.com': 'Roblox',
        'razorpay.com': 'Razorpay',
        'zerodha.com': 'Zerodha',
        'gocardless.com': 'GoCardless',
        'monzo.com': 'Monzo',
        'buildkite.com': 'Buildkite',
        'netlify.com': 'Netlify',
        'salesforce.com': 'Salesforce',
        'help.salesforce.com': 'Salesforce',
        'crowdstrike.com': 'CrowdStrike',
        'anthropic.com': 'Anthropic',
        'alignment.anthropic.com': 'Anthropic',
        'grafana.com': 'Grafana',
        'turso.tech': 'Turso',
        'parse.ly': 'Parse.ly',
        'instapaper.com': 'Instapaper',
        'telstra.com.au': 'Telstra',
        'browserstack.com': 'BrowserStack',
        'status.universe.com': 'Universe',
        'status.glia.com': 'Glia',
        'enomstatus.com': 'Enom',
        'status.bintray.com': 'Bintray',
        'sakura.ad.jp': 'Sakura',
        'cafe-dc.com': 'Tesla',
        'etsy.com': 'Etsy',
        'blog.etsy.com': 'Etsy',
        'stackstatus.net': 'Stack Overflow',
        'meta.stackoverflow.com': 'Stack Overflow',
        'engineering.fb.com': 'Facebook',
        'engineering.atspotify.com': 'Spotify',
        'netflixtechblog.com': 'Netflix',
        'allegro.tech': 'Allegro',
        'web.archive.org': 'Archive',
    }
    
    # ドメインマッチング
    for key, value in provider_map.items():
        if key in domain:
            return value
    
    # その他のパターン
    if 'github.io' in domain or 'github.com' in url:
        return 'GitHub'
    if 'medium.com' in domain:
        # Medium記事の場合、ドメインから組織名を抽出
        parts = domain.split('.')
        if len(parts) > 2:
            return parts[0].title()
        return 'Medium'
    if 'engineering' in domain or 'tech' in domain:
        # blog.example.tech の先頭を会社名にしない。
        cleaned = domain
        for prefix in ('www.', 'blog.', 'status.'):
            if cleaned.startswith(prefix):
                cleaned = cleaned[len(prefix):]
        parts = cleaned.split('.')
        if len(parts) >= 2 and parts[0].lower() not in {'blog', 'www', 'status'}:
            return parts[0].title()
    
    # デフォルト: ドメインの主要部分を使用
    clean_domain = domain.replace('www.', '').replace('blog.', '').replace('status.', '')
    parts = clean_domain.split('.')
    if parts:
        return parts[0].title()
    
    return 'Unknown'


def extract_datetime_from_content(content: str, title: str) -> tuple[str, str]:
    """コンテンツから日付を抽出する（簡易版）"""
    # ISO 8601形式の日付を検索
    iso_pattern = re.compile(r'\b(20\d{2}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})')
    matches = iso_pattern.findall(content + ' ' + title)
    if matches:
        return matches[0], matches[0] if len(matches) > 1 else matches[0]
    
    # 年-月-日形式
    date_pattern = re.compile(r'\b(20\d{2}[-/]\d{1,2}[-/]\d{1,2})\b')
    matches = date_pattern.findall(content + ' ' + title)
    if matches:
        date_str = matches[0].replace('/', '-')
        return date_str, date_str
    
    return '', ''


def add_url_to_database(
    connection: sqlite3.Connection,
    url: str,
    result: ScrapeResult,
    next_row_num: int,
) -> None:
    """スクレイピング結果をデータベースに追加"""
    scraped_at = datetime.now(timezone.utc).isoformat()
    
    # URLからプロバイダーを推測
    provider = extract_provider_from_url(url)
    
    # タイトルとコンテンツから日付を抽出
    datetime_begin, datetime_end = extract_datetime_from_content(
        result.content, result.title
    )
    
    connection.execute(
        """
        INSERT INTO incidents (
            sheet_gid, sheet_row, tz, datetime_begin, datetime_end, duration,
            provider, source_original, source2_original, articles,
            root_cause_analysis, trigger, scraped_url, scraped_final_url,
            scraped_title, scraped_content, scraped_at, scrape_status,
            scrape_error, http_status
        ) VALUES (
            ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?
        )
        """,
        (
            'manual',  # sheet_gid
            next_row_num,  # sheet_row
            'UTC',  # tz
            datetime_begin,  # datetime_begin
            datetime_end,  # datetime_end
            '',  # duration
            provider,  # provider
            url,  # source_original
            '',  # source2_original
            result.title,  # articles
            '',  # root_cause_analysis
            '',  # trigger
            result.url,  # scraped_url
            result.final_url,  # scraped_final_url
            result.title,  # scraped_title
            result.content,  # scraped_content
            scraped_at,  # scraped_at
            result.status,  # scrape_status
            result.error,  # scrape_error
            result.http_status,  # http_status
        ),
    )


def normalize_url(url: str) -> str:
    """URLを正規化（末尾のスラッシュやフラグメントを削除）"""
    url = url.strip()
    # 不正なURL形式を修正
    if url.startswith('ttps://'):
        url = 'h' + url
    # URLの末尾のピリオドやカンマを削除
    while url and url[-1] in '.,;:':
        url = url[:-1]
    return url


def main():
    # URLリスト（ユーザーから提供されたもの）
    urls = """
https://web.archive.org/web/20160720200842/https://stackstatus.net/post/147710624694/outage-postmortem-july-20-2016
https://web.archive.org/web/20150404235419/https://stackstatus.net/post/115305251014/outage-postmortem-march-31-2015
https://status.cloud.google.com/incidents/6PM5mNd43NbMqjCZ5REh
https://web.archive.org/web/20161230103247/https://research.microsoft.com/en-us/um/people/mbj/Mars_Pathfinder/Authoritative_Account.html
https://blog.cloudflare.com/cloudflare-incident-on-october-30-2023
https://status.cloud.google.com/incidents/1xkAB1KmLrh5g3v9ZEZ7
https://eveonline.com/news/view/sleeping-beauty
https://heroku.com/blog/april-2022-incident-review
https://github.blog/news-insights/company-news/github-availability-report-july-2020/
https://status.circleci.com/incidents/hr0mm9xmm3x6
https://web.archive.org/web/20160610080136/https://www.scribd.com/doc/309574927/ShapeShift-Post-Mortem-Public
https://help.salesforce.com/s/articleView
https://engineering.saltside.se/our-first-kubernetes-outage-c6b9249cfd3a
https://github.blog/news-insights/company-news/github-availability-report-september-2023/
https://azure.status.microsoft/ja-jp/status/history/
https://aws.amazon.com/message/67457/
https://hacks.mozilla.org/2022/02/retrospective-and-technical-details-on-the-recent-firefox-outage
https://github.blog/news-insights/company-news/github-availability-report-october-2022/
https://github.blog/news-insights/company-news/github-availability-report-may-2022/
https://heroku.com/blog/category/engineering
https://discuss.circleci.com/t/postmortem-march-26-april-10-workflow-delay-incidents/30060
https://github.blog/news-insights/company-news/github-availability-report-august-2025/
https://about.gitlab.com/2017/02/10/postmortem-of-database-outage-of-january-31
https://web.archive.org/web/20230927050430/https://metrist.io/blog/how-we-found-azures-unannounced-breaking-change/
https://github.blog/news-insights/company-news/github-availability-report-november-2022/
https://mail.tarsnap.com/tarsnap-announce/msg00048.html
https://github.blog/news-insights/the-library/denial-of-service-attacks
https://hacks.mozilla.org/2019/07/add-ons-outage-post-mortem-result
https://tech.trivago.com/2021/10/05/postmortem-removing-all-users-from-github.com/trivago
https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues-2/
https://medium.com/xandr-tech/2013-09-17-outage-postmortem-586b19ae4307
https://status.openai.com/incidents/ctrsv3lwd797
https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug
https://www.reddit.com/r/RedditEng/comments/11xx5o0/you_broke_reddit_the_piday_outage/
https://status.cloud.google.com/incidents/X8SNkK2BPyCrc1sveeiu
https://crowdstrike.com/falcon-content-update-remediation-and-guidance-hub
https://blog.cloudflare.com/5-december-2025-outage/
https://blog.cloudflare.com/18-november-2025-outage/
https://status.circleci.com/incidents/8rklh3qqckp1
https://github.blog/news-insights/company-news/oct21-post-incident-analysis/
https://blog.cloudflare.com/todays-network-issue
https://blog.sentry.io/2016/06/14/security-incident-june-12-2016
https://aws.amazon.com/jp/message/41926/
https://incident.io/blog/database-performance
https://github.blog/news-insights/company-news/github-availability-report-july-2024/
https://airmap.com/incident-180719
https://github.blog/news-insights/company-news/github-availability-report-august-2021/
https://aws.amazon.com/message/656481
https://status.heroku.com/incidents/2558
https://razorpay.com/blog/day-of-rds-multi-az-failover
https://github.blog/news-insights/company-news/github-availability-report-april-2023/
https://datatracker.ietf.org/doc/html/rfc789.html
https://web.archive.org/web/20201018145502/http://yellerapp.com/posts/2014-08-04-postmortem1.html
https://github.blog/news-insights/company-news/github-availability-report-may-2026/
https://status.cloud.google.com/incident/cloud-networking/19005
https://slack.engineering/slacks-outage-on-january-4th-2021/
https://techcommunity.microsoft.com/blog/azurenetworkingblog/azure-front-door-implementing-lessons-learned-following-october-outages/4479416
https://status.cloud.google.com/incidents/mREMLwZFe3FuLLn3zfTw
https://blog.etsy.com/news/2012/demystifying-site-outages
https://blog.cloudflare.com/todays-outage-post-mortem-82515
https://web.archive.org/web/20180830181639/https://paritytech.io/the-multi-sig-hack-a-postmortem/
https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise
https://medium.com/preply-engineering/dns-postmortem-e169efd45afd
https://azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012
https://aws.amazon.com/jp/message/65648/
https://aws.amazon.com/message/680587
https://github.blog/news-insights/company-news/github-availability-report-july-2025/
https://incident.io/blog/intermittent-downtime
https://discuss.circleci.com/t/postmortem-may-21-2021-delay-in-starting-docker-jobs-machine-remote-docker-environments-blocked/40274
https://github.blog/news-insights/company-news/github-availability-report-august-2020/
https://aws.amazon.com/jp/message/101925/
https://blog.cloudflare.com/1-1-1-1-lookup-failures-on-october-4th-2023
https://grafana.com/blog/how-a-production-outage-was-caused-using-kubernetes-pod-priorities/
https://github.blog/news-insights/company-news/github-availability-report-april-2022/
http://users.csc.calpoly.edu/~jdalbey/SWE/Papers/att_collapse.html
https://indyweek.com/news/archives/human-error-caused-owasa-fluoride-overdose-owasa-sorry
https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/
https://incident.io/blog/clouds-caches-and-connection-conundrums
https://engineering.saltside.se/our-failure-migrating-to-kubernetes-25c28e6dd604
https://medium.com/@florian_7764/technical-post-mortem-of-the-august-incident-82ab4c3d6547
https://engineering.omio.com/cpu-limits-and-aggressive-throttling-in-kubernetes-c5b20bd8a718
https://gist.github.com/jomo/2bae3821acb433d0446d
https://blog.thousandeyes.com/facebook-outage-deep-dive
https://status.cloud.google.com/incidents/vLsxuKoRvykNHW3nnhsJ
https://github.blog/news-insights/company-news/github-availability-report-july-2021/
https://sethmccombs.github.io/work/2018/12/03/Outages.html
https://honeycomb.io/blog/incident-review-designed-failing
https://status.duo.com/incidents/4w07bmvnt359
https://github.blog/news-insights/company-news/github-availability-report-april-2026/
https://blog.cloudflare.com/post-mortem-what-todays-network-outage-looked
https://github.blog/news-insights/company-news/github-availability-report-september-2022/
https://github.blog/news-insights/the-library/postmortem-of-last-week-s-fileserver-failure/
https://github.blog/news-insights/company-news/github-availability-report-may-2023/
https://github.blog/news-insights/company-news/github-availability-report-october-2023/
https://blog.cloudflare.com/details-behind-todays-internet-hacks
https://github.blog/news-insights/company-news/github-availability-report-november-2023/
https://github.blog/news-insights/company-news/github-availability-report-august-2024/
https://googleblog.blogspot.com/2009/01/this-site-may-harm-your-computer-on.html
https://discordstatus.com/incidents/dj3l6lw926kl
https://discuss.circleci.com/t/post-incident-report-april-4-2025-circleci-ui-loading-build-triggering-issues/53208
https://varoa.net/kubernetes/migration/latency/dns/java/aws/microservices/2019/10/22/kubernetes-added-a-0-to-my-latency.html
https://blog.cloudflare.com/the-internet-is-a-cooperative-system-dns-outage-of-6-july-2015
https://blog.google/company-news/inside-google/company-announcements/todays-outage-for-several-google
https://lists.ubuntu.com/archives/xubuntu-users/2025-November/012210.html
https://adammargherio.com/a-perfect-dns-storm
https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes
https://aws.amazon.com/message/101925
https://www.pagerduty.com/eng/august-28-kafka-outages-what-happened-and-how-were-improving/
https://github.blog/news-insights/company-news/github-availability-report-march-2024/
https://discuss.circleci.com/t/incident-report-november-8-2021-jobs-stuck-in-a-not-running-state/41890
https://github.blog/news-insights/company-news/january-28th-incident-report
https://github.blog/news-insights/company-news/github-availability-report-june-2023/
https://github.blog/news-insights/company-news/github-availability-report-january-2024/
https://danveloper.medium.com/on-infrastructure-at-scale-a-cascading-failure-of-distributed-systems-7cff2a3cd2df
https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW
https://blog.pythonanywhere.com/189
https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/
http://code.google.com/p/chromium/issues/detail
https://eveonline.com/news/view/about-the-boot.ini-issue
https://heroku.com/blog/how-i-broke-git-push-heroku-main
https://deploy.live/blog/the-shipwreck-of-gke-cluster-upgrade
https://blog.sentry.io/transaction-id-wraparound-in-postgres/
https://status.cloud.google.com/incident/compute/15056
https://cloud.google.com/blog/products/infrastructure/details-of-google-cloud-gcve-incident
https://github.blog/news-insights/company-news/github-availability-report-november-2021
https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts
https://status.heroku.com/incidents/2451
https://about.roblox.com/newsroom/2022/01/roblox-return-to-service-10-28-10-31-2021
https://allegro.tech/2015/01/allegro-cast-post-mortem.html
https://blog.cloudflare.com/cloudflare-outage-february-20-2026
https://datadoghq.com/blog/2023-03-08-multiregion-infrastructure-connectivity-issue
https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jun-2019-kubelet-qps.md
https://github.blog/news-insights/company-news/github-availability-report-december-2023/
https://blog.allegro.tech/2018/08/postmortem-why-allegro-went-down.html
https://status.cloud.google.com/incident/compute/16007
https://traviscistatus.com/incidents/sxrh0l46czqn
https://medium.com/making-instapaper/instapaper-outage-cause-recovery-3c32a7e9cc5f
https://circleci.com/blog/jan-4-2023-incident-report
https://community.monzo.com/t/resolved-current-account-payments-may-fail-major-outage-27-10-2017/26296/95
https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025
https://github.blog/news-insights/company-news/github-availability-report-february-2023/
https://blog.cloudflare.com/analysis-of-todays-centurylink-level-3-outage
https://github.blog/news-insights/company-news/github-availability-report-march-2021/
https://www.telstra.com.au/exchange/some-mobile-calls-and-data-services-are-affected-today--here-s-w
https://slack.engineering/slacks-incident-on-2-22-22/
https://tibobeijen.nl/2019/02/01/learning-from-kubernetes-cluster-failure
https://aws.amazon.com/message/12721
https://blog.cloudflare.com/code-orange-fail-small-complete
https://github.blog/news-insights/the-library/dns-outage-post-mortem
https://blog.jetstack.io/blog/gke-webhook-outage
https://heroku.com/blog/category/engineering
https://github.blog/news-insights/the-library/downtime-last-saturday/
https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale
https://github.blog/news-insights/company-news/github-availability-report-november-2021
https://news.ycombinator.com/item
https://businessinsider.com.au/a-fire-in-a-telstra-exchange-is-causing-flight-delays-and-network-outages-2017-2
https://web.archive.org/web/20181208123409/https://slackhq.com/this-was-not-normal-really
https://wiki.gentoo.org/wiki/Github/2018-06-28
https://github.blog/news-insights/company-news/github-availability-report-december-2022/
https://blog.cloudflare.com/workers-kv-restoring-reliability
https://status.heroku.com/incidents/1091
https://aws.amazon.com/message/061323
https://stackstatus.net/post/96025967369/outage-post-mortem-august-25th-2014
https://github.blog/news-insights/company-news/github-availability-report-june-2026/
https://status.cloud.google.com/incident/compute/17007
https://github.blog/news-insights/company-news/github-availability-report-january-2021/
https://signalvnoise.com/posts/3729-basecamp-network-attack-postmortem
https://status.pagerduty.com/incidents/vbp7ht2647l8
https://datadoghq.com/blog/2020-09-25-infrastructure-connectivity-issue
https://brew.sh/2018/08/05/security-incident-disclosure
https://en.wikipedia.org/wiki/Mars_Climate_Orbiter
https://status.mailgun.com/incidents/p9nxxql8g9rh
https://aws.amazon.com/message/56489
https://medium.com/@SkyscannerEng/how-a-couple-of-characters-brought-down-our-site-356ccaf1fbc3
https://github.blog/news-insights/company-news/github-availability-report-february-2022/
https://blog.google/company-news/inside-google/company-announcements/todays-outage-for-several-google
https://githubengineering.com/ddos-incident-report
https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/
https://en.wikipedia.org/wiki/Cluster_%28spacecraft%29
https://github.blog/news-insights/company-news/github-availability-report-march-2025/
https://github.blog/news-insights/the-library/github-availability-this-week/
https://traviscistatus.com/incidents/z2b3lz2kwcfp
https://www.parse.ly/kafkapocalypse/
https://github.blog/news-insights/company-news/oct21-post-incident-analysis/
https://bloomberg.com/opinion/articles/2015-09-16/how-healthcare-gov-went-so-so-wrong
https://github.blog/news-insights/company-news/github-availability-report-june-2022/
https://blog.cloudflare.com/how-cloudflare-mitigated-yet-another-okta-compromise
https://support.stripe.com/questions/outage-postmortem-2015-10-08-utc
https://github.blog/news-insights/company-news/github-availability-report-january-2025/
https://deploy.live/blog/when-gke-ran-out-of-ip-addresses
https://aws.amazon.com/message/2329B7
https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy
https://aws.amazon.com/message/5467D2
https://status.aws.amazon.com/s3-20080720.html
https://blog.cloudflare.com/fail-small-resilience-plan
https://status.cloud.google.com/incident/compute/17003
https://aws.amazon.com/message/41926
https://digital.ai/catalyst-blog/subversion-sha1-collision-problem-statement-prevention-and-remediation-options
https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/
https://mail.tarsnap.com/tarsnap-announce/msg00050.html
https://github.blog/news-insights/company-news/github-availability-report-february-2026/
https://openai.com/index/march-20-chatgpt-outage/
https://aws.amazon.com/message/11201
https://blog.skyliner.io/post-mortem-outages-on-1-19-17-and-1-23-17-3f65cc6f693e
https://github.blog/news-insights/company-news/github-availability-report-march-2022/
https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022
https://twilio.com/en-us/blog/company/communications/billing-incident-post-mortem-breakdown-analysis-and-root-cause-html
https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026/
https://meta.stackoverflow.com/questions/340960/a-post-mortem-on-the-recent-developer-story-information-leak
https://github.blog/news-insights/company-news/github-availability-report-december-2021/
https://web.archive.org/web/20221003051111/https://www.ibm.com/blogs/solutions/jp-ja/ibm-network-issue-20200610/
https://mail.tarsnap.com/tarsnap-announce/msg00045.html
https://lkml.org/lkml/2009/1/2/373
https://github.blog/news-insights/company-news/github-availability-report-june-2025/
https://blog.cloudflare.com/cname-a-record-order-dns-standards
http://blog.bitly.com/post/85260908544/more-detail
https://browserstack.com/attack-and-downtime-on-9-November
https://www.okta.com/blog/company-and-culture/oktas-investigation-of-the-january-2022-compromise/
https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd/
https://aws.amazon.com/message/17908
https://medium.com/square-corner-blog/incident-summary-2017-03-16-2f65be39297
https://www.honeycomb.io/blog/incident-review-what-comes-up-must-first-go-down
https://status.pagerduty.com/incidents/70m30bh7qfmx
https://github.blog/news-insights/company-news/github-availability-report-january-2022/
https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jan-2019-dns-outage.md
https://fastly.com/blog/summary-of-june-8-outage
https://status.glia.com/incidents/xf6cr710yrzn
https://blog.cloudflare.com/todays-outage-post-mortem
https://kickstarter.engineering/the-day-the-replication-died-e543ba45f262
https://github.blog/news-insights/company-news/github-availability-report-february-2021/
https://github.blog/news-insights/the-library/github-availability-this-week/
https://aws.amazon.com/message/65648
https://aws.amazon.com/message/073024
https://github.com/valvesoftware/steam-for-linux/issues/3671
https://web.archive.org/web/20170130231315/https://stackstatus.net/post/156407746074/outage-postmortem-january-24-2017
https://status.heroku.com/incidents/642
https://chef.io/blog/supermarket-intermittent-unresponsiveness-postmortem
https://blog.cloudflare.com/post-mortem-the-ugly-the-bad-the-good
https://blog.cloudflare.com/partial-cloudflare-outage-on-october-25-2022
https://blog.cloudflare.com/cloudflare-outage-on-july-17-2020
https://github.blog/news-insights/company-news/github-availability-report-march-2026/
https://github.blog/news-insights/company-news/github-availability-report-june-2021/
https://github.blog/news-insights/company-news/github-availability-report-december-2025/
https://github.blog/news-insights/company-news/github-availability-report-january-2026/
https://blog.cloudflare.com/route-leak-incident-january-22-2026
https://status.cloud.google.com/incident/storage/19002
https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/
https://blog.cloudflare.com/connection-errors-in-asia-pacific-region-on-july-9-2023
https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions
https://status.launchdarkly.com/incidents/yltrp45vtxm2
https://github.blog/news-insights/company-news/github-availability-report-february-2025/
https://blog.cloudflare.com/cloudflare-incident-on-june-20-2024
https://blog.cloudflare.com/a-byzantine-failure-in-the-real-world
https://bluematador.com/blog/post-mortem-kubernetes-node-oom
https://status.heroku.com/incidents/1042
https://www.parse.ly/kafkapocalypse/
https://en.wikipedia.org/wiki/Northeast_blackout_of_2003
https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/
https://cvedetails.com/
https://cafe-dc.com/security/tesla-outage-server-issues-impact-car-and-powerwall-services/
https://blog.cloudflare.com/cloudflare-incident-on-august-21-2025/
https://joyent.com/blog/manta-postmortem-7-27-2015
https://eveonline.com/news/view/behind-the-scenes-of-a-long-eve-online-downtime
https://status.heroku.com/incidents/2453
https://github.blog/news-insights/company-news/github-availability-report-december-2024/
https://incident.io/blog/service-disruption-october-20th-2025
https://zerodha.com/marketintel/bulletin/229363/post-mortem-of-technical-issue-august-29-2019
https://blog.cloudflare.com/apache-killer-killed-zero-day-exploit-zero-da
https://github.blog/news-insights/company-news/february-service-disruptions-post-incident-analysis/
https://status.cloud.google.com/incident/cloud-networking/19009
https://itnext.io/kubernetes-and-the-menace-elb-the-tale-of-an-outage-c00bef678fc0
https://traviscistatus.com/incidents/khzk8bg4p9sy
https://42gems.com/blog
https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions
https://status.circleci.com/incidents/dcqb3fykhgvg
https://mail.tarsnap.com/tarsnap-announce/msg00035.html
https://blog.cloudflare.com/pipefail-how-a-missing-shell-option-slowed-cloudflare-down
https://github.blog/news-insights/company-news/github-availability-report-february-2024/
https://docs.google.com/document/d/1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0/preview
https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues
https://github.blog/news-insights/company-news/github-availability-report-march-2023/
https://atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage
http://circleci.com/blog/mongohq-security-incident-response
https://status.twilio.com/incidents/wdrlk4qps0z1
https://philpearl.github.io/post/k8s_ingress
https://blog.npmjs.org/post/74949623024/2014-01-28-outage-postmortem.html
https://deploy.live/blog/kubernetes-networking-problems-due-to-the-conntrack
https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd
https://twilio.com/en-us/blog/company/communications/billing-incident-post-mortem-breakdown-analysis-and-root-cause-html
https://github.blog/news-insights/company-news/github-availability-report-december-2020/
https://honeycomb.io/blog/incident-resolution-september-retrospective
https://tech.trivago.com/post/2021-10-05-postmortem-removing-all-users-from-github-trivago
https://discuss.circleci.com/t/post-incident-report-april-4-2025-delays-in-starting-workflows/53113
https://github.blog/news-insights/company-news/github-availability-report-june-2024/
https://prometheuskube.com/why-we-switched-from-fluent-bit-to-fluentd-in-2-hours
https://discordstatus.com/incidents/qk9cdgnqnhcn
https://aws.amazon.com/message/65649
http://42gems.com/blog
https://web.archive.org/web/20211019062735/https://www.pagerduty.com/blog/outage-post-mortem-april-13-2013/
https://github.blog/news-insights/company-news/github-availability-report-january-2023/
https://honeycomb.io/blog/incident-review-shepherd-cache-delays
https://status.universe.com/incidents/115n3vxqwzcf
https://aws.amazon.com/message/680342
https://support.sakura.ad.jp/mainte/mainteentry.php?id=24776&_ga=2.167940706.257968328.1536112466-688370593.1528265786&_bdld=1Ruz1i.mhEV4-Y&_gl=1*xmm8rx*_gcl_au*MzYzMjAwODkxLjE3Nzg4OTI4NzM.
https://gocardless.com/blog/incident-review-api-and-dashboard-outage-on-10th-october
https://status.cloud.google.com/incidents/fmEL9i2fArADKawkZAa2
https://stripe.com/en-jp/rcas/2019-07-10
https://medium.com/@CivisAnalytics/https-medium-com-civis-analytics-breaking-kubernetes-how-we-broke-and-fixed-our-k8s-cluster-adfa6fbade61
https://status.bintray.com/incidents/w4dfr0rpznkt
https://netflixtechblog.com/post-mortem-of-october-22-2012-aws-degradation-efcee3ab40d5
https://careersatdoordash.com/blog/how-to-handle-kubernetes-health-checks/
https://github.blog/news-insights/company-news/github-availability-report-july-2026/
https://blog.cloudflare.com/cloudflare-incident-on-february-6-2025/
https://blog.cloudflare.com/response-to-salesloft-drift-incident
https://blog.cloudflare.com/cloudflare-incident-march-21-2025
https://github.blog/news-insights/company-news/github-availability-report-november-2024/
https://engineering.fb.com/2010/09/23/uncategorized/more-details-on-today-s-outage/
https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd
https://keepthescore.co/blog/posts/deleting_the_production_database
https://github.blog/news-insights/company-news/github-availability-report-august-2023/
https://blog.cloudflare.com/the-four-critical-security-flaws-that-resulte
https://github.blog/news-insights/company-news/github-availability-report-may-2024/
https://github.blog/news-insights/company-news/github-availability-report-april-2021/
https://github.blog/news-insights/company-news/github-availability-report-october-2024/
https://github.blog/news-insights/company-news/github-availability-report-september-2025/
https://enomstatus.com/incidents/03q064h6rb7x
https://devops-hof.de/kubernetes-load-balancer-konfiguration-beware-when-draining-nodes
https://mail.tarsnap.com/tarsnap-announce/msg00038.html
https://meta.stackoverflow.com/questions/340960/a-post-mortem-on-the-recent-developer-story-information-leak
https://github.blog/news-insights/the-library/network-problems-last-friday
https://engineering.atspotify.com/2013/6/incident-management-at-spotify
https://aws.amazon.com/message/74876-2/
https://blog.cloudflare.com/a-post-mortem-on-this-mornings-incident/
https://pieterlange.github.io/failure-stories/2019-06.dex.html
https://github.blog/news-insights/company-news/github-availability-report-july-2022/
https://goteleport.com/blog/running-postgresql-on-kubernetes
https://blog.cloudflare.com/18-november-2025-outage-uk-ua
https://github.blog/news-insights/company-news/github-availability-report-april-2025/
https://github.blog/news-insights/company-news/github-availability-report-october-2020/
https://reddit.com/r/announcements/comments/4y0m56/why_reddit_was_down_on_aug_11
https://aws.amazon.com/jp/message/67457/
https://joyent.com/blog/postmortem-for-outage-of-us-east-1-may-27-2014
https://github.blog/news-insights/company-news/github-availability-report-september-2021/
https://blog.travis-ci.com/2016-09-30-the-day-we-deleted-our-vm-images
https://github.blog/news-insights/company-news/availability-report-november-2020/
https://shopify.engineering/that-old-certificate-expired-and-started-an-outage-this-is-what-happened-next
https://blog.cloudflare.com/post-mortem-on-cloudflare-control-plane-and-analytics-outage/
https://medium.com/techmindtickle/intermittent-delays-in-kubernetes-e9de8239e2fa
https://blog.cloudflare.com/cloudflare-outage
https://m.signalvnoise.com/postmortem-on-the-read-only-outage-of-basecamp-on-november-9th-2018
https://forbes.com/forbes/2000/1113/6613068a.html
https://status.incident.io/incidents/01JRDFKAGE07YYDY0KZR137BX3/write-up
https://blog.cloudflare.com/cloudflare-incident-on-january-24th-2023
https://blog.rust-lang.org/inside-rust/2023/07/21/crates-io-postmortem/
https://yashmehrotra.com/post/2020-03-16-case-of-missing-packet
https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
https://elastic.co/blog/elastic-cloud-incident-report-feburary-4-2019
https://lkml.org/lkml/2012/7/1/203
https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/
https://cloud.google.com/products/observability
https://medium.com/@jakubkulich/sailing-with-the-istio-through-the-shallow-water-8ae81668381e
https://blog.cloudflare.com/today-we-mitigated-1-1-1-1
https://aws.amazon.com/message/4372T8
https://github.blog/news-insights/company-news/oct21-post-incident-analysis
https://blog.cloudflare.com/quantifying-the-impact-of-cloudbleed
https://aws.amazon.com/jp/message/67457/
https://github.blog/news-insights/company-news/github-availability-report-july-2023/
https://github.blog/news-insights/company-news/github-availability-report-april-2024/
https://github.blog/news-insights/company-news/github-availability-report-may-2021/
https://blog.rust-lang.org/inside-rust/2023/02/08/dns-outage-portmortem/
https://blog.cloudflare.com/how-and-why-the-leap-second-affected-cloudflare-dns
https://github.blog/news-insights/company-news/github-availability-report-october-2021/
https://github.blog/news-insights/company-news/github-availability-report-september-2020/
https://blog.cloudflare.com/incorrect-proxying-of-24-hostnames-on-january-24-2022
https://blog.thousandeyes.com/steam-outage-monitor-data-center-connectivity
https://github.blog/news-insights/company-news/github-availability-report-november-2021/
https://codeascraft.com/2012/01/23/solr-bittorrent-index-replication
https://github.blog/news-insights/company-news/github-availability-report-august-2026/
https://updates.moonlightwork.com/outage-post-mortem-87370
https://medium.com/@SkyscannerEng/misunderstanding-the-behaviour-of-one-templating-line-and-the-pain-it-caused-our-k8s-clusters-a420f30a99f1
https://blog.cloudflare.com/tag/post-mortem/
https://dropbox.tech/
https://oswalt.dev/2018/12/december-4-nre-labs-outage-post-mortem
https://www.doneyles.com/LM/Tales.html
https://medium.com/jw-player-engineering/how-a-cryptocurrency-miner-made-its-way-onto-our-internal-kubernetes-clusters-9b09c4704205
https://github.blog/news-insights/company-news/oct21-post-incident-analysis
https://www.iimc.kyoto-u.ac.jp/ja/news/information/211228056999
https://aws.amazon.com/jp/message/56489/
https://www.bbc.co.uk/webarchive/https%3A%2F%2Fwww.bbc.co.uk%2Fblogs%2Finternet%2Fentries%2Fa37b0470-47d4-3991-82bb-a7d5b8803771
https://status.cloud.google.com/incidents/eo76pxZiDgWVz4z3kmUv
https://incident.io/blog/one-two-skip-a-few
https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues/
https://blog.cloudflare.com/the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monday
https://zerodha.com/marketintel/bulletin/105569/postmortem-trading-and-hanging-orders-on-12th-april-2018
https://blog.cloudflare.com/major-data-center-power-failure-again-cloudflare-code-orange-tested
https://launchdarkly.com/blog/what-happened-what-we-learned-and-how-were-improving
https://azure.microsoft.com/en-us/blog/update-on-azure-storage-service-interruption
https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions/
https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu
https://mailchimp.com/what-we-learned-from-the-recent-mandrill-outage/
https://cloud.google.com/products/observability
https://asana.com/inside-asana/yesterdays-outage
http://engineering.strava.com/the-upload-outage-of-july-29-2014
https://github.blog/news-insights/company-news/github-availability-report-november-2025/
https://github.blog/news-insights/company-news/github-availability-report-august-2022/
https://github.blog/news-insights/company-news/github-availability-report-may-2025/
https://blog.cloudflare.com/2022-07-sms-phishing-attacks
https://github.blog/news-insights/company-news/github-availability-report-september-2024/
https://bungie.net/en/News/Article/48723
https://github.blog/news-insights/company-news/january-28th-incident-report
https://github.blog/news-insights/company-news/github-availability-report-october-2025/
https://piyolog.hatenadiary.jp/entry/2026/08/22/033313
https://google.com/appsstatus/dashboard/incidents/k71P8nHp32hgcMSsC3mR
https://blog.cloudflare.com/post-mortem-todays-attack-apparent-google-app
https://turso.tech/blog/incident-2023-12-04-data-leak-and-loss-in-some-free-tier-databases-7cba5bc7
    """.strip().split('\n')
    
    # URLの正規化と重複除去
    urls = [normalize_url(url) for url in urls if url.strip()]
    urls = list(dict.fromkeys(urls))  # 順序を保ったまま重複削除
    
    print(f"合計 {len(urls)} 個のURLを処理します")
    
    # データベースに接続
    db_path = Path(DEFAULT_DATABASE)
    connection = sqlite3.connect(db_path)
    
    try:
        # 既存の最大行番号を取得
        cursor = connection.cursor()
        cursor.execute("SELECT MAX(sheet_row) FROM incidents WHERE sheet_gid = 'manual'")
        max_row = cursor.fetchone()[0]
        next_row = (max_row or 0) + 1
        
        # 既存のURLを取得して重複チェック
        cursor.execute("SELECT source_original FROM incidents")
        existing_urls = {row[0] for row in cursor.fetchall()}
        
        session = make_session()
        
        added_count = 0
        skipped_count = 0
        error_count = 0
        
        for index, url in enumerate(urls, 1):
            print(f"\n[{index}/{len(urls)}] {url}")
            
            # 既に存在するURLはスキップ
            if url in existing_urls:
                print(f"  スキップ: 既にデータベースに存在します")
                skipped_count += 1
                continue
            
            # URLをスクレイピング
            result = scrape_url(session, url)
            
            if result.status == 'success' and result.title:
                try:
                    add_url_to_database(connection, url, result, next_row)
                    connection.commit()
                    print(f"  追加成功: {result.title[:50]}...")
                    added_count += 1
                    next_row += 1
                except Exception as e:
                    print(f"  データベース追加エラー: {e}")
                    error_count += 1
            else:
                print(f"  スクレイピング失敗: {result.error}")
                error_count += 1
            
            # レート制限を避けるため、少し待機
            time.sleep(0.5)
        
        print(f"\n完了:")
        print(f"  追加: {added_count}")
        print(f"  スキップ: {skipped_count}")
        print(f"  エラー: {error_count}")
        
    finally:
        connection.close()


if __name__ == '__main__':
    main()
