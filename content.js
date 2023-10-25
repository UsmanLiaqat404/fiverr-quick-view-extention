function myMain() {
  console.log("Fiverr Quick View By Usman Liaqat"),
    chrome.runtime.sendMessage({ action: "script" }, function (e) {
      if ("true" === e.qview) {
        const i = document.querySelectorAll(
          ".gig-card-layout:not(.gig_listings-package)"
        );
        if (
          null !==
          document.querySelector(
            ".gig_listings-package.listing-carousel.gig-card-layout"
          )
        ) {
          document
            .querySelectorAll(
              ".listing-carousel.gig-card-layout .slick-track .slick-slide>div, .listing-carousel.gig-card-layout .slick-track .slick-slide>div .gig-card-layout, .listing-carousel.gig-card-layout .slick-track .slick-slide>div .gig-card-layout>div"
            )
            .forEach((e) => {
              e.style.height = "auto";
            });
        }
        let l = [];
        const o = document.querySelectorAll("#topbar");
        if (o.length > 0) {
          const e = document.createElement("div");
          (e.className = "layout-row"),
            (e.id = "fiverquickview"),
            (e.style.padding = "5px 35px"),
            (e.style.marginTop = "9px"),
            (e.style.height = "200px");
          const t = document.createElement("div");
          (t.style.width = "100%"),
            (t.style.border = "1px solid  #1dbf73"),
            (t.style.borderRadius = "5px");
          const n = document.createElement("div");
          (n.id = "fiverquickview-data"), (n.style.padding = "1px 15px");
          const r = document.createElement("h2");
          (r.textContent = "Fiverr Quick View"),
            (r.style.textAlign = "center"),
            (r.style.color = "#1dbf73"),
            (r.style.margin = "10px");
          const i = document.createElement("img");
          (i.src = "https://ik.imagekit.io/FiverrQuickView/giphy.gif"),
            (i.style.width = "40px"),
            (i.style.margin = "auto"),
            (i.style.display = "block"),
            (i.style.marginTop = "42px"),
            t.appendChild(r),
            n.appendChild(i),
            t.appendChild(n),
            e.appendChild(t),
            o[0].insertAdjacentElement("afterend", e);
        }
        function t(e, t, n, r, i) {
          const l = document.createElement("span");
          (l.style.background = t),
            (l.style.padding = "2px 8px"),
            (l.style.lineHeight = "20px"),
            (l.style.display = "inline-block"),
            (l.style.fontSize = "13px"),
            (l.style.borderRadius = "5px"),
            (l.style.marginLeft = "7px"),
            (l.style.color = n),
            (l.textContent = e),
            (l.title = i),
            r.appendChild(l);
        }
        function n(e) {
          if (e >= 1e3) {
            const t = ["", "k", "M", "B", "T"],
              n = Math.floor(("" + e).length / 3);
            let r = parseFloat(
              (0 != n ? e / Math.pow(1e3, n) : e).toPrecision(3)
            );
            return r % 1 != 0 && (r = r.toFixed(1)), r + t[n];
          }
          return e;
        }
        function r(e, t) {
          document.getElementById(e).addEventListener("click", () => {
            const e = Array.from(
              document.querySelectorAll(".listing-container > .gig-card-layout")
            );
            e.sort((e, n) => n.dataset[t] - e.dataset[t]);
            const n = document.querySelector(".listing-container");
            e.forEach((e) => {
              n.appendChild(e);
            });
          });
        }
        !(async function () {
          const s = Array.from(i).map((r) => {
              const i = r.querySelector("a").getAttribute("href").split("?")[0];
              return fetch("https://www.fiverr.com/" + i)
                .then((e) => e.text())
                .then((i) => {
                  r.style.border = "1px solid #ccc";
                  const o = new DOMParser()
                      .parseFromString(i, "text/html")
                      .querySelector("script#perseus-initial-props"),
                    s = JSON.parse(o.textContent),
                    a = s.tags.tagsGigList,
                    d = s.overview.gig.ordersInQueue,
                    c = s.topNav.gigCollectedCount,
                    u =
                      null === s.sellerCard.ratingsCount
                        ? 0
                        : s.sellerCard.ratingsCount,
                    y = s.sellerCard.countryCode,
                    g = a.map((e) => e.name);
                  var p = document.createElement("div"),
                    f = document.createElement("div");
                  (p.style.marginTop = "5px"),
                    (f.style.marginTop = "10px"),
                    (f.style.marginBottom = "5px"),
                    r.appendChild(p),
                    r.appendChild(f),
                    r.setAttribute("data-orders", d),
                    r.setAttribute("data-favs", c),
                    r.setAttribute("data-ratings", u),
                    r.setAttribute("data-country", y);
                  for (var m = 0; m < g.length; m++) {
                    var v = g[m];
                    if ((l.unshift(v), "true" === e.tags)) {
                      var h = document.createElement("span");
                      (h.style.background = "#4a73e8"),
                        (h.style.padding = "0px 5px"),
                        (h.style.display = "inline-block"),
                        (h.style.fontSize = "13px"),
                        (h.style.marginBottom = "5px"),
                        (h.style.marginLeft = "10px"),
                        (h.style.borderRadius = "5px"),
                        (h.style.margin = "0px 7px"),
                        (h.style.color = "#ffffff"),
                        (h.textContent = v),
                        p.appendChild(h);
                    }
                  }
                  if (
                    ("true" === e.orders &&
                      d > 0 &&
                      t(`🚚 ${n(d)}`, "#1dbf73", "#ffffff", f, d),
                    "true" === e.favs &&
                      c > 0 &&
                      t(`❤️ ${n(c)}`, "#eb0507", "#ffffff", f, c),
                    "true" === e.rates &&
                      u > 0 &&
                      t(`🌟 ${n(u)}`, "#ff9800", "#ffffff", f, u),
                    "true" === e.country)
                  ) {
                    const e = chrome.runtime.getURL(`flags/${y}.png`),
                      t = document.createElement("img");
                    (t.src = e),
                      (t.style.marginLeft = "7px"),
                      (t.style.height = "21px"),
                      (t.style.marginBottom = "-8px"),
                      (t.style.border = "1px solid #19a463"),
                      (t.style.borderRadius = "5px"),
                      (t.title = y),
                      f.appendChild(t);
                  }
                  return g;
                })
                .catch((e) => {
                  console.log(e);
                });
            }),
            a = await Promise.all(s),
            d = (function (e) {
              for (var t = [], n = e.slice(0), r = 0; r < e.length; r++) {
                for (var i = 0, l = 0; l < n.length; l++)
                  e[r] == n[l] && (i++, delete n[l]);
                if (i > 0) {
                  var o = new Object();
                  (o.value = e[r]), (o.count = i), t.push(o);
                }
              }
              return t;
            })((l = a.flat())).sort(function (e, t) {
              return t.count - e.count;
            });
          if (o.length > 0) {
            (document.getElementById("fiverquickview").style.height = "auto"),
              (document.getElementById("fiverquickview-data").innerHTML =
                '<div style=\'width: 100%;\'>\n          <h5 id=\'Topkeywords-title\'>Top Focus Keywords:</h5> \n          <div id=\'Topkeywords\' style=\'margin: 13px 1px;\'></div> \n          <h5 id=\'fillter-title\'>Fillter By:</h5> \n          <div id=\'fillter\' style="text-align: center; margin: 10px;">\n            <button class="FW1syM7 co-white bg-co-green-700" type="button" id="sort_by_orders">🚚 Orders</button>\n            <button class="FW1syM7 co-white bg-co-green-700" type="button" id="sort_by_favourites">❤️ Favourites</button>\n            <button class="FW1syM7 co-white bg-co-green-700" type="button" id="sort_by_reviews">🌟 Reviews</button>\n            </div>\n          </div>'),
              "false" === e.orders &&
                (document.getElementById("sort_by_orders").style.display =
                  "none"),
              "false" === e.rates &&
                (document.getElementById("sort_by_reviews").style.display =
                  "none"),
              "false" === e.favs &&
                (document.getElementById("sort_by_favourites").style.display =
                  "none"),
              (("false" === e.orders &&
                "false" === e.orders &&
                "false" === e.orders) ||
                "false" === e.bars) &&
                ((document.getElementById("fillter").style.display = "none"),
                (document.getElementById("fillter-title").style.display =
                  "none")),
              "false" === e.topkeyword &&
                ((document.getElementById("Topkeywords").style.display =
                  "none"),
                (document.getElementById("Topkeywords-title").style.display =
                  "none"));
            var c = document.getElementById("Topkeywords");
            if (d.length >= 60)
              for (var u = 0; u < 60; u++)
                t(
                  `${d[u].value} (${d[u].count})`,
                  "#4a73e8",
                  "#ffffff",
                  c,
                  d[u].value
                );
            else
              for (u = 0; u < d.length; u++)
                t(
                  `${d[u].value} (${d[u].count})`,
                  "#4a73e8",
                  "#ffffff",
                  c,
                  d[u].value
                );
            r("sort_by_orders", "orders"),
              r("sort_by_reviews", "ratings"),
              r("sort_by_favourites", "favs");
          }
        })();
      }
    });
}
window.addEventListener("load", myMain, !1);
