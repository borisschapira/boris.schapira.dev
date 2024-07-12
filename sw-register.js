/******/ (() => { // webpackBootstrap
'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js?v=1587903381').then(function (e) {
  e.onupdatefound = function () {
    var t = e.installing;
    t.onstatechange = function () {
      switch (t.state) {
        case 'installed':
          if (navigator.serviceWorker.controller) {
            var e = document.createEvent('Event');
            e.initEvent('sw.update', !0, !0), window.dispatchEvent(e);
          }
      }
    };
  };
}).catch(function (e) {
  console.error('Error during service worker registration:', e);
});
/******/ })()
;
//# sourceMappingURL=sw-register.js.map