/*
 * Author: Usman Liaqat
 * URL: https://usmanliaqat-portofolio.web.app
 */
const defaultData = {
  topkeyword: !0,
  tags: !0,
  rates: !0,
  orders: !0,
  favs: !0,
  bars: !0,
  country: !0,
  qview: !0,
};
chrome.runtime.onMessage.addListener(function (t, e, a) {
  return (
    t.popUpData &&
      chrome.storage.local.set({ myData: t.popUpData }, function () {}),
    !0
  );
}),
  chrome.runtime.onMessage.addListener(function (t, e, a) {
    if ("script" === t.action)
      return (
        chrome.storage.local.get("myData", function (t) {
          null == t.myData
            ? chrome.storage.local.set({ myData: defaultData }, function () {
                a(defaultData);
              })
            : a(t.myData);
        }),
        !0
      );
  }),
  chrome.runtime.onInstalled.addListener(function (t) {
    "install" == t.reason &&
      (chrome.tabs.create({ url: "https://www.buymeacoffee.com/usmanliaqat" }),
      chrome.tabs.create({ url: "https://www.buymeacoffee.com/usmanliaqat" }));
  }),
  chrome.runtime.setUninstallURL &&
    chrome.runtime.setUninstallURL("https://www.buymeacoffee.com/usmanliaqat");
