importScripts("/assets/scripts/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/scripts/workbox-v4.3.1"});

self.__precacheManifest = [{"url":"/assets/scripts/vendors/twitter-wjs.min.js","revision":"82e61d0b2650c5098b3009716b271e0b"},{"url":"/assets/scripts/search.min.js","revision":"c210354bbff864fb31bb024e728a8f17"},{"url":"/assets/scripts/comments.min.js","revision":"99bf349d7f1c2ee67b0879f1c74064cb"},{"url":"/assets/scripts/index.min.js","revision":"d88e168111aa0f4cbc19fa50206a7cf0"},{"url":"/assets/fonts/pt-serif-v10-latin-regular.woff2","revision":"ff25871623e1666bd25b38913237ee42"},{"url":"/assets/fonts/pt-serif-v10-latin-700.woff2","revision":"8a8c41ff05d6e438571da9491ffa4678"},{"url":"/assets/fonts/pt-serif-v10-latin-700italic.woff2","revision":"aaae50ae1bf44f6728f579ab2158046b"},{"url":"/assets/fonts/pt-serif-v10-latin-italic.woff2","revision":"142081ae93931660dd16cdf1cd300c1b"},{"url":"/assets/styles/vendors/highlightjs.css","revision":"bf6c14925e66edb1526b6c9489b3c042"},{"url":"/assets/styles/hl.css","revision":"26cd895873290dc2a8ffd0981682f1b9"},{"url":"/assets/styles/main.css","revision":"2e9caf818d2d10fc574853985fceeb63"},{"url":"/assets/styles/critical.css","revision":"9639194da72b231b494139c95941084d"},{"url":"/assets/styles/core.css","revision":"c9e6cb7cd7fb87d1822c7b931b2f5172"},{"url":"/index.html","revision":"b174c0500d25d65698713cfde1d802b6"},{"url":"/web/index.html","revision":"d26ad345256ca1fd076d3ce76c4483ce"},{"url":"/citoyen/index.html","revision":"0a94c6848601d4152dc1d798e7abd301"},{"url":"/papa/index.html","revision":"89ae6dc4efdc351aefb75fc5a88a661f"},{"url":"/en/index.html","revision":"6781d3b822eef0cc1288e76a97daa2c4"},{"url":"/en/web/index.html","revision":"ab37c49b0e6a19151c65e2d041549fb9"},{"url":"/en/citizen/index.html","revision":"22d752c9efaa84b6d70a647556d96c51"},{"url":"/en/dad/index.html","revision":"5b7dd61030be5b39d7d68440015fc50d"},{"url":"/2030/01/test-typo/","revision":"5a8b19dcb0a8e90835b49c17aa123d19"},{"url":"/2030/01/typo-test/","revision":"c677fdb4435760cf9c2cfb0a2ae74f38"},{"url":"/2030/01/roselyne-bachelot/","revision":"d0dd2358b5276686e833ef0a1c32ad33"},{"url":"/2030/01/rama-yade/","revision":"14173aefc15c5df4d9e5123fb38c49fb"},{"url":"/2030/01/najat-vallaud-belkacem/","revision":"aebb760e35900a437917ef888344de15"}];

// service-worker.js

workbox.setConfig({
  debug: false
});

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'boris-schapira-dev',
    suffix: '6YqfWP12F6estkvF',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest,
  {
    // Ignore all URL parameters:
    // https://developers.google.com/web/tools/workbox/modules/workbox-precaching#ignore_url_parameters
    ignoreURLParametersMatching: [/.*/]
  }
);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use a special strategy for mp4
// This is only going to work reliably for same-origin video requests.
// (Or maybe CORS-enabled ones, but https://bugs.webkit.org/show_bug.cgi?id=184447
//  suggests that could be a problem in Safari.)
// We need access to the video data in the response body, so opaque responses are a no-no.
workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "video",
  new workbox.strategies.CacheFirst({
    cacheName: 'video',
    plugins: [
      new workbox.cacheableResponse.Plugin({statuses: [200]}),
      new workbox.rangeRequests.Plugin(),
    ],
  })
);

// use `cacheFirst` strategy for images and fonts
workbox.routing.registerRoute(
    /assets\/(images|fonts)/,
    new workbox.strategies.StaleWhileRevalidate()
);

let currentCacheNames = Object.assign({
        precacheTemp: workbox.core.cacheNames.precache + "-temp"
    },
    workbox.core.cacheNames
);

// clean up old SW caches
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            let validCacheSet = new Set(Object.values(currentCacheNames));
            return Promise.all(
                cacheNames
                .filter(function (cacheName) {
                    return !validCacheSet.has(cacheName);
                })
                .map(function (cacheName) {
                    console.log("deleting cache", cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('installed', function (event) {
  if (event.isUpdate) {
    window.location.reload();
  }
});
