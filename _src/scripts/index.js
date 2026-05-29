import easyToggle from 'easy-toggle-state';
import 'touchtap-event';
import { ready } from './subscripts/utils';

import './subscripts/savedata';
import './subscripts/localstorageSaveDarkMode';
import './subscripts/footnotesAlternatives';
import { abbrTouch } from './vendors/abbr-touch';

ready(function () {
  easyToggle();

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
    tooltipTimeout = setTimeout(function () {
      tooltip.classList.remove('visible');
    }, timeoutLength);
  }

  abbrTouch(document.querySelector('article'), function (target, title) {
    var tooltip = getTooltipElement();
    // Ensure the tooltip is ready so that the initial transition works
    setTimeout(function () {
      updateTooltip(tooltip, target.innerHTML, title);
    }, 0);
  });

  // Keyboard navigation: ← previous post, → next post
  // with a debound/throttle to prevent accidental double navigation
  // from a single key press
  let navLocked = false;
  document.addEventListener('keydown', function (e) {
    if (
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.isContentEditable
    )
      return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

    var link;
    if (e.key === 'ArrowLeft') {
      link = document.querySelector('.nav-arrow.prev a');
    } else if (e.key === 'ArrowRight') {
      link = document.querySelector('.nav-arrow.next a');
    }

    if (link && !navLocked) {
      navLocked = true;
      setTimeout(() => (navLocked = false), 1000);
      link.click();
    }
  });
});

import './subscripts/webshare';
import './subscripts/nakedDay';
import './subscripts/lazyNetworkLoad';
