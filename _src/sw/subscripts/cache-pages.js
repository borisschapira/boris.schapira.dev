import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';

registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'pages',
    networkTimeoutSeconds: 5,
    plugins: [new BroadcastUpdatePlugin()],
  })
);
