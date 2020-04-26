import { clientsClaim, skipWaiting } from 'workbox-core';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { setDefaultHandler } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkOnly } from 'workbox-strategies';

cleanupOutdatedCaches();

// default strategy
setDefaultHandler(
  new StaleWhileRevalidate({
    cacheName: 'default',
    plugins: [new BroadcastUpdatePlugin()],
  })
);

// specialized strategies
import './subscripts/cache-videos';
import './subscripts/cache-images';
import './subscripts/cache-pages';
import './subscripts/cache-google-fonts';
import './subscripts/no-cache-matomo';

self.addEventListener('installed', function (event) {
  if (event.isUpdate) {
    window.location.reload();
  }
});

self.addEventListener('message', (event) => {
  console.log(`[SW] Receiving a message: ${event.data.type}`);
});

skipWaiting();
clientsClaim();
