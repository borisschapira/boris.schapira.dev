/************************************************
  On save-data mode, modifyies images src to use
  grayscale, degraded images.
************************************************/
(function saveData() {
  let saveData = false;
  let prefersReducedData = window.matchMedia('(prefers-reduced-data: reduce)');
  if (prefersReducedData.matches) {
    console.info('(prefers-reduced-data: reduce) media query detected');
    saveData = true;
  }
  if ('connection' in navigator) {
    if (navigator.connection.saveData == true) {
      console.info('save-data connection');
      saveData = true;
    }
  }
  if (saveData) {
    // Add class to document
    document.documentElement.classList.add('save-data');
    // use default img src
    [...document.querySelectorAll('[srcset]')].forEach(img => {
      // eslint-disable-next-line require-unicode-regexp
      img.srcset = img.srcset
        .replace(/q_auto/g, 'q_0')
        .replace(/\/fetch\//g, '/fetch/e_grayscale/');
    });
  }
})();
