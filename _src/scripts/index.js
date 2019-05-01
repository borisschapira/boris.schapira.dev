/*! easy-toggle-state v1.10.2 | (c) 2019 Matthieu Bué <https://twikito.com> | MIT License | https://twikito.github.io/easy-toggle-state/ */
!function(){"use strict";const t=document.documentElement.getAttribute("data-easy-toggle-state-custom-prefix")||"toggle",e=(e,r=(()=>t)())=>["data",r,e].filter(Boolean).join("-"),r=e("arrows"),i=e("class"),n=e("escape"),s=e("event"),o=e("group"),a=e("is-active"),c=e("outside"),g=e("outside-event"),u=e("radio-group"),l=e("target"),A=e("target-all"),d=e("target-next"),h=e("target-only"),b=e("target-parent"),f=e("target-previous"),v=e("target-self"),E=e("state"),m=e("trigger-off"),T=new Event("toggleAfter"),w=new Event("toggleBefore"),p=(t,e)=>{const r=t?`[${t}]`:"";return e?[...e.querySelectorAll(r)]:[...document.querySelectorAll(`[${i}]${r}`.trim())]},L=(t,e)=>t.dispatchEvent(e),$=(t,e={"aria-checked":t.isToggleActive,"aria-expanded":t.isToggleActive,"aria-hidden":!t.isToggleActive,"aria-selected":t.isToggleActive})=>Object.keys(e).forEach(r=>t.hasAttribute(r)&&t.setAttribute(r,e[r])),k=t=>{const e=t.hasAttribute(o)?o:u;return p(`${e}="${t.getAttribute(e)}"`).filter(t=>t.isToggleActive)},y=(t,e)=>{if(0===e.length)return console.warn(`There's no match for the selector '${t}' for this trigger`),[];const r=t.match(/#\w+/gi);return r&&r.forEach(t=>{const r=[...e].filter(e=>e.id===t.slice(1));r.length>1&&console.warn(`There's ${r.length} matches for the selector '${t}' for this trigger`)}),[...e]},S=t=>document.addEventListener(t.getAttribute(g)||t.getAttribute(s)||"click",x,!1),x=t=>{const e=t.target,r=t.type;let i=!1;p(c).filter(t=>t.getAttribute(g)===r||t.getAttribute(s)===r&&!t.hasAttribute(g)||"click"===r&&!t.hasAttribute(s)&&!t.hasAttribute(g)).forEach(t=>{const r=e.closest("["+E+'="true"]');r&&r.easyToggleStateTrigger===t&&(i=!0),!i&&t!==e&&t.isToggleActive&&(t.hasAttribute(o)||t.hasAttribute(u)?Y:q)(t)}),i||document.removeEventListener(r,x,!1),e.hasAttribute(c)&&e.isToggleActive&&S(e)},O=t=>q(t.currentTarget.targetElement),D=t=>{if(t.hasAttribute(c))return t.hasAttribute(u)?console.warn(`You can't use '${c}' on a radio grouped trigger`):t.isToggleActive?S(t):void 0},I=(t,e,r)=>(t=>{if(t.hasAttribute(l)||t.hasAttribute(A)){const e=t.getAttribute(l)||t.getAttribute(A);return y(e,document.querySelectorAll(e))}if(t.hasAttribute(b)){const e=t.getAttribute(b);return y(e,t.parentElement.querySelectorAll(e))}if(t.hasAttribute(v)){const e=t.getAttribute(v);return y(e,t.querySelectorAll(e))}return t.hasAttribute(f)?y("previous",[t.previousElementSibling].filter(Boolean)):t.hasAttribute(d)?y("next",[t.nextElementSibling].filter(Boolean)):[]})(t).forEach(i=>{L(i,w),i.isToggleActive=!i.isToggleActive,$(i),r&&!i.classList.contains(e)&&i.classList.add(e),r||i.classList.toggle(e),t.hasAttribute(c)&&(i.setAttribute(E,t.isToggleActive),i.easyToggleStateTrigger=t),L(i,T),((t,e)=>{const r=p(m,t);if(0!==r.length)e.isToggleActive?r.forEach(t=>{t.targetElement=e,t.addEventListener("click",O,!1)}):r.forEach(t=>{t.removeEventListener("click",O,!1)})})(i,t)}),q=t=>{L(t,w);const e=t.getAttribute(i)||"is-active";return t.isToggleActive=!t.isToggleActive,$(t),t.hasAttribute(h)||t.classList.toggle(e),L(t,T),I(t,e,!1),D(t)},B=t=>{L(t,w);const e=t.getAttribute(i)||"is-active";return t.isToggleActive=!0,$(t,{"aria-checked":!0,"aria-expanded":!0,"aria-hidden":!1,"aria-selected":!0}),t.hasAttribute(h)||t.classList.contains(e)||t.classList.add(e),L(t,T),I(t,e,!0),D(t)},Y=t=>{const e=k(t);return 0===e.length?q(t):-1===e.indexOf(t)?(e.forEach(q),q(t)):-1===e.indexOf(t)||t.hasAttribute(u)?void 0:q(t)},j=()=>{p(a).filter(t=>!t.isETSDefInit).forEach(t=>t.hasAttribute(o)||t.hasAttribute(u)?k(t).length>0?console.warn(`Toggle group '${t.getAttribute(o)||t.getAttribute(u)}' must not have more than one trigger with '${a}'`):(B(t),void(t.isETSDefInit=!0)):B(t));const t=p().filter(t=>!t.isETSInit);return t.forEach(t=>{t.addEventListener(t.getAttribute(s)||"click",e=>{e.preventDefault(),(t.hasAttribute(o)||t.hasAttribute(u)?Y:q)(t)},!1),t.isETSInit=!0}),p(n).length>0&&!document.isETSEscInit&&(document.addEventListener("keydown",t=>{"Escape"!==t.key&&"Esc"!==t.key||p(n).forEach(t=>{if(t.isToggleActive)return t.hasAttribute(u)?console.warn(`You can't use '${n}' on a radio grouped trigger`):(t.hasAttribute(o)?Y:q)(t)})},!1),document.isETSEscInit=!0),p(r).length>0&&!document.isETSArrInit&&(document.addEventListener("keydown",t=>{const e=document.activeElement;if(-1===["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].indexOf(t.key)||!e.hasAttribute(i)||!e.hasAttribute(r))return;if(!e.hasAttribute(o)&&!e.hasAttribute(u))return console.warn(`You can't use '${r}' on a trigger without '${o}' or '${u}'`);t.preventDefault();const n=e.hasAttribute(o)?p(`${o}='${e.getAttribute(o)}'`):p(`${u}='${e.getAttribute(u)}'`);let a=e;switch(t.key){case"ArrowUp":case"ArrowLeft":a=n.indexOf(e)>0?n[n.indexOf(e)-1]:n[n.length-1];break;case"ArrowDown":case"ArrowRight":a=n.indexOf(e)<n.length-1?n[n.indexOf(e)+1]:n[0];break;case"Home":a=n[0];break;case"End":a=n[n.length-1]}return a.focus(),a.dispatchEvent(new Event(a.getAttribute(s)||"click"))},!1),document.isETSArrInit=!0),t},C=()=>{j(),document.removeEventListener("DOMContentLoaded",C)};document.addEventListener("DOMContentLoaded",C),window.initEasyToggleState=j}();

/**
 * @license
 * touchtap-event <http://github.com/Tyriar/touchtap-event>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/touchtap-event/blob/master/LICENSE>
 */
(function () {
  'use strict';

  var touchTapEvent;
  var isTapLength;
  var tapLengthTimeout;
  var startPosition = { x: -1, y: -1 };
  var currentPosition = { x: -1, y: -1 };

  /**
   * Gets the touch object from a touch* event.
   * @param {Event} e The event.
   * @returns {Touch} The (first) touch object from the event.
   */
  function getTouchObject(e) {
    if (e.originalEvent && e.originalEvent.targetTouches) {
      return e.originalEvent.targetTouches[0];
    }
    if (e.targetTouches) {
      return e.targetTouches[0];
    }
    return e;
  }

  /**
   * Gets whether two numbers are approximately equal to each other.
   * @param {number} a The first number.
   * @param {number} b The second number.
   * @returns {Boolean}
   */
  function approximatelyEqual(a, b) {
    return Math.abs(a - b) < 2;
  }

  /**
   * Handler for the touchstart event.
   * @param {Event} e The touchstart event.
   */
  function touchstart(e) {
    var touchObject = getTouchObject(e);
    startPosition.x = touchObject.pageX;
    startPosition.y = touchObject.pageY;
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
    isTapLength = true;
    if (tapLengthTimeout) {
      clearTimeout(tapLengthTimeout);
    }
    tapLengthTimeout = setTimeout(function () {
      isTapLength = false;
    }, 200);
  }

  /**
   * Handler for the touchend event.
   * @param {Event} e The touchend event.
   */
  function touchend(e) {
    if (isTapLength &&
        approximatelyEqual(startPosition.x, currentPosition.x) &&
        approximatelyEqual(startPosition.y, currentPosition.y)) {
      touchTapEvent.customData = {
        touchX: currentPosition.x,
        touchY: currentPosition.y
      };
      e.target.dispatchEvent(touchTapEvent);
    }
  }

  /**
   * Handler for the touchmove event.
   * @param {Event} e The touchmove event.
   */
  function touchmove(e) {
    var touchObject = getTouchObject(e);
    currentPosition.x = touchObject.pageX;
    currentPosition.y = touchObject.pageY;
  }

  /**
   * Initialises the library.
   */
  function init() {
    try {
      // The basic events module is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent#Example
      touchTapEvent = document.createEvent('Event');
      touchTapEvent.initEvent('touchtap', true, true);

      // EventTarget.addEventListener() is supported by most browsers, including IE9 and newer.
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility
      document.addEventListener('touchstart', touchstart, false);
      document.addEventListener('touchend', touchend, false);
      document.addEventListener('touchcancel', touchend, false);
      document.addEventListener('touchmove', touchmove, false);
    }
    catch (err) {
      // Ignore "Object doesn't support this property or method" in IE8 and earlier.
    }
  }

  init();
})();

/**
 * @license
 * abbr-touch <http://github.com/Tyriar/abbr-touch>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/abbr-touch/blob/master/LICENSE>
 */
var abbrTouch = (function () { // eslint-disable-line no-unused-vars
  'use strict';

  /**
   * Generates a touchtap event handler that calls the tap handler provided.
   * @param {function} handler The tap handler to call.
   * @returns {function}
   */
  function generateTouchtapHandler(handler) {
    return function (e) {
      handler(e.currentTarget, e.currentTarget.title, e.customData.touchX, e.customData.touchY);
    };
  }

  /**
   * The default lightweight tap handler.
   */
  function defaultOnTapHandler(target, title, touchX, touchY) { // eslint-disable-line no-unused-vars
    alert(title); // eslint-disable-line no-alert
  }

  /**
   * Attaches abbrTouch events on all abbr[title] elements within an element
   * @param {HTMLElement} elementScope The element containing abbr[title]
   * elements.
   * @param {function} customTapHandler (Optional) A custom touchtap handler to
   * be used when abbr[title] elements are touched.
   */
  function init(elementScope, customTapHandler) {
    if (!elementScope) {
      elementScope = document;
    }

    var tapHandler = customTapHandler || defaultOnTapHandler;

    var elements = elementScope.querySelectorAll('abbr[title]');
    var touchtapHandler = generateTouchtapHandler(tapHandler);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchtap', touchtapHandler);
    }
  }

  return init;
})();

/* global abbrTouch */

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function perfmark(callback, key) {
  performance.mark('mark_' + key + '_start');
  callback();
  performance.mark('mark_' + key + '_end');
  performance.measure(
    'mark_' + key,
    'mark_' + key + '_start',
    'mark_' + key + '_end'
  );
}

(function darkModeSwitcher() {
  var labels = document.querySelectorAll('.color-mode-labels label');
  labels.forEach(function(label) {
    label.addEventListener('click', function() {
      localStorage.setItem('dark_mode', this.dataset.value);
    });
  });
})();

(function switchlang() {
  perfmark(function() {
    // Detect user language and redirect, if first time, to the right page ----------------
    try {
      var lang_user;
      lang_user = localStorage.getItem('lang_user');
      if (!lang_user) {
        lang_user = (
          window.navigator.userLanguage ||
          (window.navigator.languages.length > 0 &&
            window.navigator.languages[0]) ||
          window.navigator.language
        ).slice(0, 2);
        localStorage.setItem('lang_user', lang_user);
        var lang_site = document.getElementsByTagName('html')[0].lang;
        if (lang_user != lang_site) {
          window.location = document.querySelector(
            '[hreflang][rel="alternate"]'
          ).href;
        }
      }
    } catch (e) {}

    document.addEventListener(
      'click',
      function(event) {
        if (event.target.matches('[lang][href*="/"]')) {
          localStorage.setItem('lang_user', event.target.getAttribute('lang'));
        }
      },
      false
    );
  }, 'switchlang');
})();

ready(function() {
  perfmark(function() {
    window.initEasyToggleState();
  }, 'easy_toggle');

  (function(abbrTouch) {
    var tooltipTimeout;

    function getTooltipElement() {
      var tooltip = document.querySelector('#abbr-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'abbr-tooltip';
        // Technically this is duplicate content, just exposing it on mobile
        tooltip.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tooltip);
      }
      return tooltip;
    }

    function updateTooltip(tooltip, term, expandedTerm) {
      var text = term + ': ' + expandedTerm;
      tooltip.innerHTML = text;
      tooltip.classList.add('visible');

      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }

      var timeoutLength = text.length * 120;
      tooltipTimeout = setTimeout(function() {
        tooltip.classList.remove('visible');
      }, timeoutLength);
    }

    perfmark(function() {
      abbrTouch(document.querySelector('article'), function(target, title) {
        var tooltip = getTooltipElement();
        // Ensure the tooltip is ready so that the initial transition works
        setTimeout(function() {
          updateTooltip(tooltip, target.innerHTML, title);
        }, 0);
      });
    }, 'abbrTouch');
  })(abbrTouch);

  function decorate_footnotes() {
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang'),
      alternatives = {
        to: {
          en: 'footnote',
          fr: 'note de bas de page'
        },
        back: {
          en: 'return to the text',
          fr: 'retour au texte'
        }
      };

    var i,
      textnotes = [...document.querySelectorAll('.footnote-ref a')],
      footnotes = [...document.getElementsByClassName('footnote-backref')];
    for (i = 0; i < textnotes.length; i++) {
      textnotes[i].setAttribute('title', alternatives.to[lang]);
    }
    for (i = 0; i < footnotes.length; i++) {
      footnotes[i].setAttribute('title', alternatives.back[lang]);
    }
  }
  decorate_footnotes();
});
