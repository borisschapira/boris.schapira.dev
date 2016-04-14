(function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(function () {
  var href = window.location.href;
  var value = decodeURIComponent(href.substr(href.slice(0, -1).lastIndexOf('/') + 1));
  value = value.lastIndexOf('/') + 1 == value.length ? value.slice(0, -1) : value;

  var $searchInput = $('.js-algolia__input');
  $searchInput.val(value).keyup();
});
