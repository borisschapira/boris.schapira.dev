module.exports = {
  ready: function(fn) {
    if (
      document.attachEvent
        ? document.readyState === 'complete'
        : document.readyState !== 'loading'
    ) {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },
  perfmark: function(callback, key) {
    performance.mark('mark_' + key + '_start');
    callback();
    requestAnimationFrame(function() {
      requestAnimationFrame(() => {
        performance.mark('mark_' + key + '_end');
        performance.measure(
          'mark_' + key,
          'mark_' + key + '_start',
          'mark_' + key + '_end'
        );
      });
    });
  }
};
