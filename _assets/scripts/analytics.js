
/* Hacked isogram with http://isogrammer.com/ */
(function (d,e,v,i,a,n,t) {
  d['GoogleAnalyticsObject'] = a;d[a] = d[a] || function () {
(d[a].q = d[a].q || []).push(arguments);},d[a].l = 1 * new Date();n = e.createElement(v),
  t = e.getElementsByTagName(v)[0];n.async = 1;n.src = i;t.parentNode.insertBefore(n, t);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

if (document.getElementById('data-analytics')) {
  var gadata = JSON.parse(document.getElementById('data-analytics').value);

  if (gadata.environment == 'production') {
    ga('set', 'dimension1', gadata.categories);
    ga('set', 'dimension2', gadata.tags);

    ga('create', 'UA-4257717-9', 'auto');
    ga('send', 'pageview');
  }
}

/* Piwik */
var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//filature.borisschapira.com/";
  _paq.push(['setTrackerUrl', u+'p']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'suivre'; s.parentNode.insertBefore(g,s);
})();
/* End Piwik */
