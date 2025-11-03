/************************************************
  Saving Light/Dark/Auto preferences on click
  into the localstorage.
************************************************/
try {
  document.querySelectorAll('.color-mode-labels label').forEach(function (label) {
    label.addEventListener('click', function () {
      localStorage.setItem('dark_mode', this.dataset.value);
    });
  });
} catch (e) {}
