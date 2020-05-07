import { ready } from './utils';

if (navigator && navigator.share) {
  ready(function setWebSharing() {
    const shareElement = document.querySelector('.webshare');
    if (shareElement) {
      let url = document.location.href;
      const canonicalElement = document.querySelector('link[rel=canonical]');
      if (canonicalElement !== null) {
        url = canonicalElement.href;
      }

      const title = document.querySelector('head>title').innerText;
      const desc = document.querySelector('meta[name=description]').content;

      const sharedData = {
        title: title,
        text: desc,
        url: url,
      };

      if (navigator.canShare(sharedData)) {
        shareElement
          .querySelector('button')
          .addEventListener('click', function shareContent() {
            navigator
              .share({
                title: title,
                text: desc,
                url: url,
              })
              .then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing', error));
          });

        shareElement.classList.add('visible');
      }
    }
  });
}
