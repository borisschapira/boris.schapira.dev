var inputDisplay = document.getElementById('strike512-close');
try {
  var lastTimestamp = localStorage.getItem('strike512-hide');
  if (lastTimestamp) {
    inputDisplay.checked = (lastTimestamp > new Date().setHours(0, 0, 0, 0));
  }
  inputDisplay.addEventListener('change', function() {
    localStorage.setItem('strike512-hide', Date.now());
  });
} catch (e) {}
