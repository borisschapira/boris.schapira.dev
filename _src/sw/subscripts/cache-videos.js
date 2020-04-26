import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { RangeRequestsPlugin } from 'workbox-range-requests';

// use a special strategy for mp4
// This is only going to work reliably for same-origin video requests.
// (Or maybe CORS-enabled ones, but https://bugs.webkit.org/show_bug.cgi?id=184447
//  suggests that could be a problem in Safari.)
// We need access to the video data in the response body, so opaque responses are a no-no.

registerRoute(
  ({ event }) => event.request.destination === 'video',
  new CacheFirst({
    cacheName: 'videos',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new RangeRequestsPlugin(),
    ],
  })
);
