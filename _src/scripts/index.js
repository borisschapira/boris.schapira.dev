import easyToggle from 'easy-toggle-state';
import 'touchtap-event';
import { ready } from './subscripts/utils';

import './subscripts/savedata';
import './subscripts/localstorageSaveDarkMode';
import './subscripts/footnotesAlternatives';

ready(function () {
  easyToggle();

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
