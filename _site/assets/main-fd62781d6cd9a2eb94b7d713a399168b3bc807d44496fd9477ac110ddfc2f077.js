/* by Andrea Giammarchi - WTFPL */
(function(e,t){var n=t+"-accepted",r="#"+t,i=r+" ."+n,s="className",o="click",u="hidden",a="mousewheel",f="scroll",l=e.document,c=e.location,h=e.setTimeout,p=e.clearTimeout,d=350,v=function(e){return l.querySelector(e)},m=function(e,t,n){e.addEventListener(t,n,!e)},g=function(e,t,n){e.removeEventListener(t,n,!e)},y=function(e){e.parentNode.removeChild(e)},b=function(t){var n=v(r);p(S),n&&(g(e,a,b),g(e,f,b),n[s]+=" "+u,h(y,d,n),n=v(i),n&&(t.type===o&&w(t.preventDefault()),g(n,o,b)))},w=function(){var e=new Date;e.setFullYear(e.getFullYear()+1),l.cookie="".concat(n,"=1",";expires=",e.toGMTString(),";path=/",";domain=.",c.hostname,c.protocol==="https"?";secure":"")},E=function(){var t=v(r);t?l.cookie.indexOf(n)<0?(S=h(function(){S=0,m(e,a,b),m(e,f,b)},d*10),t[s]=t[s].replace(u,""),t=v(i),t&&m(t,o,b)):w(y(t)):S=h(E,d)},S=h(E,d)})(window,"cookies-monster");

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
;


