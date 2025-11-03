import { ready } from './utils';

if (navigator && navigator.share) {
  ready(function setWebSharing() {
    const shareElement = document.querySelector('.webshare');
    if (shareElement) {
      const urlLocation = new URL(window.location);
      let url = urlLocation.origin + urlLocation.pathname;
      const canonicalElement = document.querySelector('link[rel=canonical]');
      if (canonicalElement !== null) {
        url = canonicalElement.href;
      }

      const sharedData = {
        title: shareElement.dataset.title,
        text: shareElement.dataset.text,
        url: url,
      };

      let canShare = true;
      if (!!navigator.canShare) {
        canShare = navigator.canShare(sharedData);
      }
      if (canShare) {
        shareElement.querySelector('button').addEventListener('click', function shareContent() {
          navigator
            .share({
              title: sharedData.title,
              text: sharedData.text,
              url: sharedData.url,
            })
            .then(() => console.log('Successful share'))
            .catch(error => console.log('Error sharing', error));
        });

        shareElement.classList.add('visible');
      }
    }
  });
}
