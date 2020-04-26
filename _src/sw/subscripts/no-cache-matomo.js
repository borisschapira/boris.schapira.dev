import { registerRoute } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

// Never cache Matomo calls
registerRoute(/^https:\/\/analytics\.schapira\.dev/, new NetworkOnly());
