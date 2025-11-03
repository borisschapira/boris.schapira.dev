import { ready } from './utils';

ready(function latePrefetch() {
  ['rel', 'media'].forEach(type =>
    [...document.querySelectorAll(`[data-${type}]`)].forEach(x =>
      x.setAttribute(type, x.dataset[type])
    )
  );
});
