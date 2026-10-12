(function () {
  "use strict";

  var NONE = "none";
  var UNKNOWN_YEAR = "unknown";
  var data = window.FAILURE_REPORTS;

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    stats: $("stats"),
    triggerBars: $("trigger-bars"),
    causeBars: $("cause-bars"),
    yearColumns: $("year-columns"),
    controls: $("controls"),
    q: $("q"),
    provider: $("provider"),
    year: $("year"),
    sort: $("sort"),
    analyzed: $("analyzed"),
    chips: $("trigger-chips"),
    causeChips: $("cause-chips"),
    count: $("count"),
    reset: $("reset"),
    emptyReset: $("empty-reset"),
    cards: $("cards"),
    empty: $("empty"),
    dialog: $("detail"),
    detailBody: $("detail-body"),
    generated: $("generated"),
    theme: $("theme-toggle")
  };

  function h(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      var value = props[key];
      if (value === null || value === undefined || value === false) return;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key === "style") Object.keys(value).forEach(function (name) { node.style.setProperty(name, value[name]); });
      else if (key.slice(0, 2) === "on") node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value === true ? "" : value);
    });
    (children || []).forEach(function (child) {
      if (child === null || child === undefined || child === false) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function normalize(text) {
    return String(text || "").normalize("NFKC").toLowerCase();
  }

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function safeUrl(value) {
    try {
      var url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch (e) {
      return null;
    }
  }

  function slug(key) {
    return String(key).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function tone(key) {
    return "var(--t-" + slug(key) + ")";
  }

  function triggerLabel(key) {
    if (key === NONE) return "未分類";
    return data.triggerLabels[key] || key;
  }

  function causeLabel(key) {
    return (data.rootCauseLabels && data.rootCauseLabels[key]) || key;
  }

  function causeTone(key) {
    return "var(--c-" + slug(key) + ")";
  }

  var CAUSE_MUTED = { undetermined: true, "not-a-report": true };

  function primaryKey(incident) {
    return incident.triggers.length ? incident.triggers[0] : NONE;
  }

  function formatDate(iso) {
    if (!iso) return null;
    var parts = iso.split("-");
    return parts[0] + "年" + Number(parts[1]) + "月" + Number(parts[2]) + "日";
  }

  function hashHue(text) {
    var hash = 0;
    for (var i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
    return hash % 360;
  }

  function avatar(provider) {
    var initial = Array.from(provider)[0] || "?";
    return h("span", {
      class: "avatar",
      "aria-hidden": "true",
      style: { "--avatar": hashHue(provider) + " 62% 50%" },
      text: initial.toUpperCase()
    });
  }

  if (!data || !Array.isArray(data.incidents)) {
    els.count.textContent = "データを読み込めませんでした。";
    return;
  }

  var incidents = data.incidents;
  var byId = {};
  incidents.forEach(function (incident) {
    byId[incident.id] = incident;
    incident.haystack = normalize([
      incident.title,
      incident.provider,
      incident.summary,
      incident.rootCause,
      incident.triggerNote,
      incident.triggers.map(triggerLabel).join(" "),
      incident.triggers.join(" "),
      (incident.rootCauses || []).map(causeLabel).join(" "),
      (incident.rootCauses || []).join(" ")
    ].join("\n"));
  });

  var triggerKeys = Object.keys(data.triggerLabels).filter(function (key) {
    return incidents.some(function (incident) { return incident.triggers.indexOf(key) !== -1; });
  });
  var triggerCounts = {};
  triggerKeys.concat([NONE]).forEach(function (key) {
    triggerCounts[key] = incidents.filter(function (incident) {
      return key === NONE ? !incident.triggers.length : incident.triggers.indexOf(key) !== -1;
    }).length;
  });
  var triggerOrder = triggerKeys.slice().sort(function (a, b) { return triggerCounts[b] - triggerCounts[a]; });
  if (triggerCounts[NONE]) triggerOrder.push(NONE);

  var causeKeys = Object.keys(data.rootCauseLabels || {}).filter(function (key) {
    return incidents.some(function (incident) { return (incident.rootCauses || []).indexOf(key) !== -1; });
  });
  var causeCounts = {};
  causeKeys.forEach(function (key) {
    causeCounts[key] = incidents.filter(function (incident) {
      return (incident.rootCauses || []).indexOf(key) !== -1;
    }).length;
  });
  var causeTail = causeKeys.filter(function (key) { return CAUSE_MUTED[key]; });
  var causeOrder = causeKeys.filter(function (key) { return !CAUSE_MUTED[key]; }).sort(function (a, b) {
    return causeCounts[b] - causeCounts[a];
  }).concat(causeTail.sort(function (a, b) { return causeCounts[b] - causeCounts[a]; }));

  var years = incidents.map(function (incident) { return incident.year; }).filter(Boolean);
  var minYear = Math.min.apply(null, years);
  var maxYear = Math.max.apply(null, years);
  var yearCounts = {};
  years.forEach(function (year) { yearCounts[year] = (yearCounts[year] || 0) + 1; });

  var providerCounts = {};
  incidents.forEach(function (incident) {
    providerCounts[incident.provider] = (providerCounts[incident.provider] || 0) + 1;
  });
  var providerOrder = Object.keys(providerCounts).sort(function (a, b) {
    return providerCounts[b] - providerCounts[a] || a.localeCompare(b);
  });

  var state = { q: "", triggers: [], causes: [], providers: [], year: "", sort: "date-desc", analyzed: false };

  function readUrl() {
    var params = new URLSearchParams(location.search);
    state.q = params.get("q") || "";
    state.triggers = (params.get("t") || "").split(",").filter(function (key) {
      return key === NONE || triggerKeys.indexOf(key) !== -1;
    });
    state.causes = (params.get("c") || "").split(",").filter(function (key) {
      return causeKeys.indexOf(key) !== -1;
    });
    state.providers = (params.get("p") || "").split(",").filter(function (name) {
      return providerCounts[name];
    });
    var year = params.get("y");
    state.year = year === UNKNOWN_YEAR || yearCounts[year] ? year : "";
    state.sort = ["date-desc", "date-asc", "provider"].indexOf(params.get("s")) !== -1 ? params.get("s") : "date-desc";
    state.analyzed = params.get("a") === "1";
    return Number(params.get("id")) || null;
  }

  function writeUrl(openId) {
    var params = new URLSearchParams();
    if (state.q) params.set("q", state.q);
    if (state.triggers.length) params.set("t", state.triggers.join(","));
    if (state.causes.length) params.set("c", state.causes.join(","));
    if (state.providers.length) params.set("p", state.providers.join(","));
    if (state.year) params.set("y", state.year);
    if (state.sort !== "date-desc") params.set("s", state.sort);
    if (state.analyzed) params.set("a", "1");
    if (openId) params.set("id", openId);
    var query = params.toString();
    history.replaceState(null, "", location.pathname + (query ? "?" + query : ""));
  }

  function isFiltered() {
    return !!(state.q || state.triggers.length || state.causes.length || state.providers.length || state.year || state.analyzed);
  }

  function searchTerms() {
    return normalize(state.q).split(/\s+/).filter(Boolean);
  }

  function matches(incident, terms) {
    if (state.providers.length && state.providers.indexOf(incident.provider) === -1) return false;
    if (state.year === UNKNOWN_YEAR && incident.year) return false;
    if (state.year && state.year !== UNKNOWN_YEAR && String(incident.year) !== state.year) return false;
    if (state.analyzed && !incident.rootCause) return false;
    if (state.triggers.length) {
      var hit = state.triggers.some(function (key) {
        return key === NONE ? !incident.triggers.length : incident.triggers.indexOf(key) !== -1;
      });
      if (!hit) return false;
    }
    if (state.causes.length) {
      var causeHit = state.causes.some(function (key) {
        return (incident.rootCauses || []).indexOf(key) !== -1;
      });
      if (!causeHit) return false;
    }
    return terms.every(function (term) { return incident.haystack.indexOf(term) !== -1; });
  }

  function sortIncidents(list) {
    var copy = list.slice();
    var dateCompare = function (direction) {
      return function (a, b) {
        if (!a.date && !b.date) return a.id - b.id;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return a.date === b.date ? a.id - b.id : direction * (a.date < b.date ? -1 : 1);
      };
    };
    if (state.sort === "date-asc") copy.sort(dateCompare(1));
    else if (state.sort === "provider") copy.sort(function (a, b) { return a.provider.localeCompare(b.provider, "ja") || dateCompare(-1)(a, b); });
    else copy.sort(dateCompare(-1));
    return copy;
  }

  function highlight(parent, text, regex) {
    if (!regex || !text) {
      parent.appendChild(document.createTextNode(text));
      return parent;
    }
    text.split(regex).forEach(function (part, index) {
      if (!part) return;
      parent.appendChild(index % 2 ? h("mark", { text: part }) : document.createTextNode(part));
    });
    return parent;
  }

  function highlighter(terms) {
    if (!terms.length) return null;
    return new RegExp("(" + terms.map(escapeRegExp).join("|") + ")", "i");
  }

  function tagList(incident) {
    var keys = incident.triggers.length ? incident.triggers : [NONE];
    return h("ul", { class: "tags", "aria-label": "障害の引き金" }, keys.map(function (key) {
      return h("li", {
        class: "tag" + (key === NONE ? " is-muted" : ""),
        style: { "--tone": tone(key) },
        text: triggerLabel(key)
      });
    }));
  }

  function causeTagList(incident) {
    var keys = incident.rootCauses || [];
    if (!keys.length) return null;
    return h("ul", { class: "tags", "aria-label": "根本原因" }, keys.map(function (key) {
      return h("li", {
        class: "tag tag-cause" + (CAUSE_MUTED[key] ? " is-muted" : ""),
        style: { "--tone": causeTone(key) },
        text: causeLabel(key)
      });
    }));
  }

  function providerButton(provider, regex) {
    var selected = state.providers.indexOf(provider) !== -1;
    var name = h("span", { class: "provider-name" });
    highlight(name, provider, regex);
    return h("button", {
      class: "provider provider-button",
      type: "button",
      "aria-pressed": String(selected),
      "aria-label": provider + (selected ? "の絞り込みを解除" : "を絞り込み条件に追加"),
      onclick: function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleProvider(provider);
      }
    }, [
      avatar(provider),
      name
    ]);
  }

  function renderCard(incident, regex) {
    var link = safeUrl(incident.url);
    var titleNode = h("h2", { class: "card-title" });
    var titleContent = highlight(h("span"), incident.title, regex);
    titleNode.appendChild(link ? h("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, [titleContent]) : titleContent);

    var cause = incident.rootCause || incident.summary;
    var date = formatDate(incident.date);

    return h("article", { class: "card", style: { "--tone": tone(primaryKey(incident)) } }, [
      h("div", { class: "card-head" }, [
        providerButton(incident.provider, regex),
        h("time", { class: "date" + (date ? "" : " is-unknown"), datetime: incident.date || false, text: date || "日時不明" })
      ]),
      titleNode,
      cause
        ? highlight(h("p", { class: "card-cause" }), cause, regex)
        : h("p", { class: "card-cause is-empty", text: "原因分析はまだ入力されていません。" }),
      h("div", { class: "card-foot" }, [
        h("div", { class: "card-tags" }, [tagList(incident), causeTagList(incident)]),
        h("button", {
          class: "detail-button",
          type: "button",
          "aria-label": incident.title + "の詳細を見る",
          onclick: function () { openDetail(incident.id); }
        }, ["詳細"])
      ])
    ]);
  }

  function renderList() {
    var terms = searchTerms();
    var regex = highlighter(terms);
    var list = sortIncidents(incidents.filter(function (incident) { return matches(incident, terms); }));

    els.cards.replaceChildren.apply(els.cards, list.map(function (incident) { return renderCard(incident, regex); }));
    els.empty.hidden = list.length > 0;

    var countNode = [h("strong", { text: String(list.length) }), " 件のレポート"];
    if (list.length !== incidents.length) countNode.push(" / 全 " + incidents.length + " 件");
    els.count.replaceChildren.apply(els.count, countNode.map(function (part) {
      return typeof part === "string" ? document.createTextNode(part) : part;
    }));
    els.reset.hidden = !isFiltered();
  }

  function renderStats() {
    var analyzed = incidents.filter(function (incident) { return incident.rootCause; }).length;
    var providerTotal = Object.keys(providerCounts).filter(function (name) { return name !== "不明"; }).length;
    var items = [
      ["収録レポート", String(incidents.length), "件"],
      ["サービス", String(providerTotal), "社"],
      ["対象期間", minYear + "–" + maxYear, ""],
      ["原因分析あり", String(analyzed), "件"]
    ];
    els.stats.replaceChildren.apply(els.stats, items.map(function (item) {
      return h("div", { class: "stat" }, [
        h("dt", { text: item[0] }),
        h("dd", {}, [item[1], item[2] ? h("small", { text: item[2] }) : null])
      ]);
    }));
  }

  function renderCharts() {
    var maxTrigger = Math.max.apply(null, triggerOrder.map(function (key) { return triggerCounts[key]; }));
    els.triggerBars.replaceChildren.apply(els.triggerBars, triggerOrder.map(function (key) {
      var pressed = state.triggers.indexOf(key) !== -1;
      return h("li", {}, [
        h("button", {
          class: "bar-button",
          type: "button",
          "aria-pressed": String(pressed),
          onclick: function () { toggleTrigger(key); }
        }, [
          h("span", { class: "bar-label", text: triggerLabel(key) }),
          h("span", { class: "bar-track", "aria-hidden": "true" }, [
            h("span", { class: "bar-fill", style: { "--tone": tone(key), width: (triggerCounts[key] / maxTrigger * 100) + "%" } })
          ]),
          h("span", { class: "bar-value", text: String(triggerCounts[key]) })
        ])
      ]);
    }));

    var maxCause = Math.max.apply(null, causeOrder.map(function (key) { return causeCounts[key]; }).concat([1]));
    els.causeBars.replaceChildren.apply(els.causeBars, causeOrder.map(function (key) {
      var pressed = state.causes.indexOf(key) !== -1;
      return h("li", {}, [
        h("button", {
          class: "bar-button",
          type: "button",
          "aria-pressed": String(pressed),
          onclick: function () { toggleCause(key); }
        }, [
          h("span", { class: "bar-label", text: causeLabel(key) }),
          h("span", { class: "bar-track", "aria-hidden": "true" }, [
            h("span", { class: "bar-fill", style: { "--tone": causeTone(key), width: (causeCounts[key] / maxCause * 100) + "%" } })
          ]),
          h("span", { class: "bar-value", text: String(causeCounts[key]) })
        ])
      ]);
    }));

    var yearList = [];
    for (var year = minYear; year <= maxYear; year++) yearList.push(year);
    var maxYearCount = Math.max.apply(null, yearList.map(function (y) { return yearCounts[y] || 0; }));
    els.yearColumns.replaceChildren.apply(els.yearColumns, yearList.map(function (y) {
      var count = yearCounts[y] || 0;
      return h("li", { class: "column" }, [
        h("button", {
          class: "column-button",
          type: "button",
          disabled: count === 0,
          "aria-pressed": String(state.year === String(y)),
          "aria-label": y + "年 " + count + "件",
          onclick: function () { setYear(state.year === String(y) ? "" : String(y)); }
        }, [
          h("span", { class: "column-count", text: count ? String(count) : "" }),
          h("span", { class: "column-fill", style: { "--ratio": String(count / maxYearCount) } }),
          h("span", { class: "column-year" }, [
            h("span", { class: "y-full", text: String(y) }),
            h("span", { class: "y-short", text: "’" + String(y).slice(2) })
          ])
        ])
      ]);
    }));
  }

  function renderChips() {
    els.chips.replaceChildren.apply(els.chips, triggerOrder.map(function (key) {
      return h("button", {
        class: "chip",
        type: "button",
        style: { "--tone": tone(key) },
        "aria-pressed": String(state.triggers.indexOf(key) !== -1),
        onclick: function () { toggleTrigger(key); }
      }, [triggerLabel(key)]);
    }));
    els.causeChips.replaceChildren.apply(els.causeChips, causeOrder.map(function (key) {
      return h("button", {
        class: "chip",
        type: "button",
        style: { "--tone": causeTone(key) },
        "aria-pressed": String(state.causes.indexOf(key) !== -1),
        onclick: function () { toggleCause(key); }
      }, [causeLabel(key)]);
    }));
  }

  function populateSelects() {
    els.provider.replaceChildren.apply(els.provider, [h("option", { value: "", text: "すべてのサービス" })].concat(
      providerOrder.map(function (name) {
        return h("option", { value: name, text: name + " (" + providerCounts[name] + ")" });
      })
    ));
    var yearOptions = [h("option", { value: "", text: "すべての年" })];
    for (var year = maxYear; year >= minYear; year--) {
      if (yearCounts[year]) yearOptions.push(h("option", { value: String(year), text: year + "年 (" + yearCounts[year] + ")" }));
    }
    var unknownCount = incidents.filter(function (incident) { return !incident.year; }).length;
    if (unknownCount) yearOptions.push(h("option", { value: UNKNOWN_YEAR, text: "日時不明 (" + unknownCount + ")" }));
    els.year.replaceChildren.apply(els.year, yearOptions);
  }

  function syncControls() {
    els.q.value = state.q;
    var providerPlaceholder = els.provider.querySelector("option");
    if (providerPlaceholder) {
      providerPlaceholder.textContent = state.providers.length > 1
        ? "複数のサービス (" + state.providers.length + ")"
        : "すべてのサービス";
    }
    els.provider.value = state.providers.length === 1 ? state.providers[0] : "";
    els.year.value = state.year;
    els.sort.value = state.sort;
    els.analyzed.checked = state.analyzed;
  }

  function update(options) {
    options = options || {};
    syncControls();
    renderCharts();
    renderChips();
    renderList();
    writeUrl(options.keepDetail ? currentDetailId : null);
  }

  function toggleTrigger(key) {
    var index = state.triggers.indexOf(key);
    if (index === -1) state.triggers.push(key);
    else state.triggers.splice(index, 1);
    update();
  }

  function toggleCause(key) {
    var index = state.causes.indexOf(key);
    if (index === -1) state.causes.push(key);
    else state.causes.splice(index, 1);
    update();
  }

  function toggleProvider(name) {
    var index = state.providers.indexOf(name);
    if (index === -1) state.providers.push(name);
    else state.providers.splice(index, 1);
    if (els.dialog.open) els.dialog.close();
    update();
  }

  function setYear(value) {
    state.year = value;
    update();
  }

  var currentDetailId = null;

  function detailFact(label, value) {
    return value ? h("div", { class: "fact" }, [h("dt", { text: label }), h("dd", { text: value })]) : null;
  }

  function openDetail(id) {
    var incident = byId[id];
    if (!incident) return;
    currentDetailId = id;

    var link = safeUrl(incident.url);
    var extra = safeUrl(incident.extraUrl);
    var begin = [incident.datetimeBegin, incident.tz && incident.datetimeBegin ? "(" + incident.tz + ")" : ""].filter(Boolean).join(" ");
    var archiveLink = incident.archived && link ? "https://web.archive.org/web/2/" + link : null;

    var links = [];
    if (link) links.push(h("a", { class: "primary", href: link, target: "_blank", rel: "noopener noreferrer" }, ["出典を読む ↗"]));
    if (extra) links.push(h("a", { href: extra, target: "_blank", rel: "noopener noreferrer" }, ["関連リンク ↗"]));
    if (archiveLink) links.push(h("a", { href: archiveLink, target: "_blank", rel: "noopener noreferrer" }, ["Wayback Machine で開く ↗"]));

    var facts = [
      detailFact("発生日時", begin),
      detailFact("終了日時", incident.datetimeEnd),
      detailFact("継続時間", incident.duration && incident.duration !== "-" ? incident.duration : "")
    ].filter(Boolean);

    els.detailBody.style.setProperty("--tone", tone(primaryKey(incident)));
    els.detailBody.replaceChildren.apply(els.detailBody, [
      h("div", { class: "detail-top" }, [
        providerButton(incident.provider),
        h("button", { class: "close-button", type: "button", "aria-label": "閉じる", onclick: function () { els.dialog.close(); } }, ["×"])
      ]),
      h("h2", { id: "detail-title", text: incident.title }),
      tagList(incident),
      causeTagList(incident),
      facts.length ? h("dl", { class: "facts" }, facts) : null,
      h("section", { class: "detail-section" }, [
        h("h3", { text: "原因分析" }),
        incident.rootCause ? h("p", { text: incident.rootCause }) : h("p", { class: "is-empty", text: "原因分析はまだ入力されていません。" })
      ]),
      incident.summary ? h("section", { class: "detail-section" }, [h("h3", { text: "記事の概要" }), h("p", { text: incident.summary })]) : null,
      incident.triggerNote ? h("section", { class: "detail-section" }, [h("h3", { text: "引き金の補足" }), h("p", { text: incident.triggerNote })]) : null,
      incident.archived ? h("p", { class: "notice", text: "出典ページに現在アクセスできないため、タイトルは Internet Archive の保存データから取得しています。" }) : null,
      links.length ? h("div", { class: "detail-links" }, links) : null
    ].filter(Boolean));

    if (!els.dialog.open) els.dialog.showModal();
    els.detailBody.scrollTop = 0;
    els.detailBody.focus({ preventScroll: true });
    writeUrl(id);
  }

  function resetFilters() {
    state.q = "";
    state.triggers = [];
    state.causes = [];
    state.providers = [];
    state.year = "";
    state.analyzed = false;
    update();
  }

  function setupEvents() {
    els.controls.addEventListener("submit", function (event) { event.preventDefault(); });
    els.q.addEventListener("input", function () { state.q = els.q.value.trim(); update(); });
    els.provider.addEventListener("change", function () {
      var value = els.provider.value;
      if (!value) state.providers = [];
      else if (state.providers.indexOf(value) === -1) state.providers.push(value);
      update();
    });
    els.year.addEventListener("change", function () { state.year = els.year.value; update(); });
    els.sort.addEventListener("change", function () { state.sort = els.sort.value; update(); });
    els.analyzed.addEventListener("change", function () { state.analyzed = els.analyzed.checked; update(); });
    els.reset.addEventListener("click", resetFilters);
    els.emptyReset.addEventListener("click", resetFilters);
    els.dialog.addEventListener("click", function (event) {
      if (event.target === els.dialog) els.dialog.close();
    });
    els.dialog.addEventListener("close", function () {
      currentDetailId = null;
      writeUrl(null);
    });

    els.theme.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  var initialId = readUrl();
  populateSelects();
  renderStats();
  setupEvents();
  update();
  if (data.generatedAt) els.generated.textContent = "データ更新: " + data.generatedAt.slice(0, 10);
  if (initialId) openDetail(initialId);
})();
