importScripts("/assets/scripts/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/scripts/workbox-v4.3.1"});

self.__precacheManifest = [{"url":"/assets/scripts/vendors/twitter-wjs.min.js","revision":"82e61d0b2650c5098b3009716b271e0b"},{"url":"/assets/scripts/search.min.js","revision":"c210354bbff864fb31bb024e728a8f17"},{"url":"/assets/scripts/comments.min.js","revision":"99bf349d7f1c2ee67b0879f1c74064cb"},{"url":"/assets/scripts/index.min.js","revision":"d88e168111aa0f4cbc19fa50206a7cf0"},{"url":"/assets/fonts/pt-serif-v10-latin-regular.woff2","revision":"ff25871623e1666bd25b38913237ee42"},{"url":"/assets/fonts/pt-serif-v10-latin-700.woff2","revision":"8a8c41ff05d6e438571da9491ffa4678"},{"url":"/assets/fonts/pt-serif-v10-latin-700italic.woff2","revision":"aaae50ae1bf44f6728f579ab2158046b"},{"url":"/assets/fonts/pt-serif-v10-latin-italic.woff2","revision":"142081ae93931660dd16cdf1cd300c1b"},{"url":"/assets/styles/vendors/highlightjs.css","revision":"bf6c14925e66edb1526b6c9489b3c042"},{"url":"/assets/styles/hl.css","revision":"26cd895873290dc2a8ffd0981682f1b9"},{"url":"/assets/styles/main.css","revision":"2e9caf818d2d10fc574853985fceeb63"},{"url":"/assets/styles/critical.css","revision":"9639194da72b231b494139c95941084d"},{"url":"/assets/styles/core.css","revision":"c9e6cb7cd7fb87d1822c7b931b2f5172"},{"url":"/index.html","revision":"2858d0adea6a9e4c579586e6a602124f"},{"url":"/web/index.html","revision":"cac581aa8f4986c8cbe4aadeb1a1bdff"},{"url":"/citoyen/index.html","revision":"28b56408f1e28491860bfa6b3a19138c"},{"url":"/papa/index.html","revision":"191c6c017b95b01f9fbf7130bb654d57"},{"url":"/en/index.html","revision":"a0980c9566ffcf5588f9792e3af9ca08"},{"url":"/en/web/index.html","revision":"0a672089b4ad19f3cc68c0792cc7e49f"},{"url":"/en/citizen/index.html","revision":"e28f27455619e63ca4fd7246102e79f3"},{"url":"/en/dad/index.html","revision":"4ecdd0ac2bf97854a5f90d310a9a0549"},{"url":"/2019/09/user-timing-api-next-frame/","revision":"d97b9370b6fe8882a49c96cc620ff962"},{"url":"/2019/09/les-dessins/","revision":"9530d2384adf93c4fb369692eb844b06"},{"url":"/2019/09/les-podcasts/","revision":"f9019168cc4bafeb96935bbe8fd6b625"},{"url":"/2019/09/le-sarcasme/","revision":"cae6fee72f6941307cd37cc9295a8a7d"},{"url":"/2019/09/rokhaya-diallo/","revision":"38cb4096429e6ddf91cccdce62c89c7c"}];

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
