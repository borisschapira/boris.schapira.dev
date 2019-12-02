var inputDisplay = document.getElementById('strike512-close');
if (inputDisplay) {
  try {
    var lastTimestamp = localStorage.getItem('strike512-hide');
    if (lastTimestamp) {
      inputDisplay.checked = lastTimestamp > new Date().setHours(0, 0, 0, 0);
    }

    var node = document.createElement('style');
    node.innerHTML = '.strike512-container{display:flex;}';
    document.body.appendChild(node);

    inputDisplay.addEventListener('change', function() {
      localStorage.setItem('strike512-hide', Date.now());
    });
  } catch (e) {}
}
