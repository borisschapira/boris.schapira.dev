// Init the search box
$(function(config) {
  'use strict';

  moment.locale('fr', {
    months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dans %s",
        past : "il y a %s",
        s : "quelques secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "un an",
        yy : "%d ans"
    },
    ordinalParse : /\d{1,2}(er|ème)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
    }
  );

  var applicationId = config.applicationId;
  var apiKey = config.apiKey;
  var indexName = config.indexName;

  var algolia = algoliasearch(applicationId, apiKey);
  var helper = algoliasearchHelper(algolia, indexName);
  helper.setQueryParameter('distinct', true);
  helper.on('result', onResult);

  // Input listening for queries
  var $searchInput = $('.js-algolia__input');

  var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $searchInput.on('keyup', function(){
    delay(function() {
				onQueryChange();
		}, 150);
  });

  // Content to hide/show when searching
  var $initialContent = $('.js-algolia__initial-content');
  var $searchContent = $('.js-algolia__search-content');
  var $searchContentResults = $searchContent.find('.algolia__results');
  $searchContentResults.on('click', 'a', onLinkClick);
  // Rendering templates
  var templateResult = Hogan.compile($('#algolia__template').html());
  var templateNoResults = $('#algolia__template--no-results').html();

  var lastQuery;

  // Toggle result page
  function showResults() {
    window.scroll(0, 0);
    $initialContent.addClass('algolia__initial-content--hidden');
    $searchContent.addClass('algolia__search-content--active');

  }
  function hideResults() {
    $initialContent.removeClass('algolia__initial-content--hidden');
    $searchContent.removeClass('algolia__search-content--active');
  }

  // Handle typing query
  function onQueryChange() {
    lastQuery = $searchInput.val();
    if (lastQuery.length === 0) {
      hideResults();
      return false;
    }
    helper.setQuery(lastQuery).search();
    showResults();
  }

  function onResult(data) {
    // Avoid race conditions, discard results that do not match the latest query
    if (data.query !== lastQuery) {
      return false;
    }
    var content = data.nbHits ? renderResults(data) : templateNoResults;
    $searchContentResults.html(content);
  }

  function renderResults(data) {
    return $.map(data.hits, function(hit) {
      if (hit.posted_at) {
        hit.posted_at_readable = moment.unix(hit.posted_at).fromNow();
      }
      hit.css_selector = encodeURI(hit.css_selector);
      hit.full_url = config.baseurl + hit.url;

      return templateResult.render(hit);
    }).join('');
  }

  // Scroll page to correct element
  function getAnchorSelector(hash) {
    var anchor = hash.substring(1);
    if (!anchor.match(/^algolia:/)) {
      return false;
    }
    return decodeURI(anchor.replace(/^algolia:/, ''));
  }

  function scrollPageToSelector(selector) {
    var target = $('.page,.post').find(selector);
    var targetOffset = target[0].getBoundingClientRect().top + window.pageYOffset - 20;
    window.setTimeout(function() {
      window.scroll(0, targetOffset);
    }, 100);
  }

  function onLinkClick(event) {
    var selector = getAnchorSelector(event.target.hash);
    // Normal link, going to another page
    if (event.target.pathname !== window.location.pathname || !selector) {
      return true;
    }
    // Scrolling to a result on the same page
    hideResults();
    scrollPageToSelector(selector);
    event.preventDefault();
    return false;
  }

  function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

  window.setTimeout(function() {
    var selector = getAnchorSelector(window.location.hash);
    if (selector) {
      scrollPageToSelector(selector);
    }
  }, 100);

  var searchQuery = getParameterByName('query') || getParameterByName('s');
  if (searchQuery) {
    $searchInput.val(searchQuery);
    onQueryChange();
  }

}({
  'applicationId': '97EL687MDM',
  'indexName': 'jekyll',
  'apiKey': '45e74dfb46facf8ee7f3038c305a9a7e',
  'baseurl': ''
}));
