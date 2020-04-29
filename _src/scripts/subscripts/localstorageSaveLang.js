import { perfmark } from './utils';

/************************************************
  On first visite, detects user language and
  redirect to the right alternative page (if it
  exist). Saves the lang in localstorage.
************************************************/

perfmark(function () {
  let lang_user;
  try {
    lang_user = localStorage.getItem('lang_user');
  } catch (e) {}
  if (!lang_user) {
    lang_user = (
      window.navigator.userLanguage ||
      (window.navigator.languages.length > 0 &&
        window.navigator.languages[0]) ||
      window.navigator.language
    ).slice(0, 2);
    try {
      localStorage.setItem('lang_user', lang_user);
    } catch (e) {}
    var lang_site = document.getElementsByTagName('html')[0].lang;
    if (lang_user != lang_site) {
      window.location = document.querySelector(
        '[hreflang][rel="alternate"]'
      ).href;
    }
  }

  document.addEventListener(
    'click',
    (event) => {
      if (event.target.matches('[lang][href*="/"]')) {
        try {
          localStorage.setItem('lang_user', event.target.getAttribute('lang'));
        } catch (e) {}
      }
    },
    false
  );
}, 'switchlang');
