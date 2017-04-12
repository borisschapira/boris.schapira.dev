//= require vendors/instantclick.min
//= require vendors/touchtap-event.js
//= require vendors/abbr-touch.js

InstantClick.on('change', function onChange(isInitialChange) {
  (function (abbrTouch) {
    'use strict';

    var tooltipTimeout;

    abbrTouch(document.querySelector('article'), function (target, title, touchX, touchY) {
      var tooltip = getTooltipElement();
      // Ensure the tooltip is ready so that the initial transition works
      setTimeout(function () {
        updateTooltip(tooltip, target.innerHTML, title);
      }, 0);
    });

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
      tooltipTimeout = setTimeout(function () {
        tooltip.classList.remove('visible');
      }, timeoutLength);
    }
  })(abbrTouch);
});

InstantClick.init(50);
