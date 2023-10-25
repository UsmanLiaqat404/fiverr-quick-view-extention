$(document).ready(function () {
  let t = localStorage.getItem("topkeyword");
  null !== t
    ? "true" == t
      ? $("#Tkeywords").bootstrapToggle("on")
      : $("#Tkeywords").bootstrapToggle("off")
    : ($("#Tkeywords").bootstrapToggle("on"),
      localStorage.setItem("topkeyword", "true")),
    $("#Tkeywords").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("topkeyword", t), c();
    });
  let e = localStorage.getItem("tags");
  null !== e
    ? "true" == e
      ? $("#tags_gig").bootstrapToggle("on")
      : $("#tags_gig").bootstrapToggle("off")
    : ($("#tags_gig").bootstrapToggle("on"),
      localStorage.setItem("tags", "true")),
    $("#tags_gig").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("tags", t), c();
    });
  let o = localStorage.getItem("rates");
  null !== o
    ? "true" == o
      ? $("#rate").bootstrapToggle("on")
      : $("#rate").bootstrapToggle("off")
    : ($("#rate").bootstrapToggle("on"), localStorage.setItem("rates", "true")),
    $("#rate").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("rates", t), c();
    });
  let a = localStorage.getItem("orders");
  null !== a
    ? "true" == a
      ? $("#order").bootstrapToggle("on")
      : $("#order").bootstrapToggle("off")
    : ($("#order").bootstrapToggle("on"),
      localStorage.setItem("orders", "true")),
    $("#order").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("orders", t), c();
    });
  let r = localStorage.getItem("favs");
  null !== r
    ? "true" == r
      ? $("#fav").bootstrapToggle("on")
      : $("#fav").bootstrapToggle("off")
    : ($("#fav").bootstrapToggle("on"), localStorage.setItem("favs", "true")),
    $("#fav").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("favs", t), c();
    });
  let g = localStorage.getItem("bars");
  null !== g
    ? "true" == g
      ? $("#bar").bootstrapToggle("on")
      : $("#bar").bootstrapToggle("off")
    : ($("#bar").bootstrapToggle("on"), localStorage.setItem("bars", "true")),
    $("#bar").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("bars", t), c();
    });
  let l = localStorage.getItem("country");
  null !== l
    ? "true" == l
      ? $("#country").bootstrapToggle("on")
      : $("#country").bootstrapToggle("off")
    : ($("#country").bootstrapToggle("on"),
      localStorage.setItem("country", "true")),
    $("#country").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("country", t), c();
    });
  let s = localStorage.getItem("qview");
  function c() {
    let t = {
      topkeyword: localStorage.getItem("topkeyword"),
      tags: localStorage.getItem("tags"),
      rates: localStorage.getItem("rates"),
      orders: localStorage.getItem("orders"),
      favs: localStorage.getItem("favs"),
      bars: localStorage.getItem("bars"),
      country: localStorage.getItem("country"),
      qview: localStorage.getItem("qview"),
    };
    chrome.runtime.sendMessage({ popUpData: t }, function (t) {});
  }
  null !== s
    ? "true" == s
      ? ($("#qviewv").bootstrapToggle("on"),
        $(".hide_q").css({ display: "table-row" }))
      : ($("#qviewv").bootstrapToggle("off"),
        $(".hide_q").css({ display: "none" }))
    : ($("#qviewv").bootstrapToggle("on"),
      $(".hide_q").css({ display: "table-row" }),
      localStorage.setItem("qview", "true")),
    $("#qviewv").change(function () {
      var t = $(this).prop("checked");
      localStorage.setItem("qview", t),
        t
          ? $(".hide_q").css({ display: "table-row" })
          : $(".hide_q").css({ display: "none" }),
        c();
    }),
    c();
}); //Author: Usman Liaqat URL: usmanliaqat-portofolio.web.app
