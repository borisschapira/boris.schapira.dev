import instantsearch from 'instantsearch.js';
import {
  searchBox,
  refinementList,
  hits,
  pagination,
} from 'instantsearch.js/es/widgets';

var search = instantsearch({
  indexName: document.getElementById('algolia-index-name').innerHTML,
  searchClient: algoliasearch(
    document.getElementById('algolia-app-id').innerHTML,
    document.getElementById('algolia-api-key').innerHTML
  ),
});

search.addWidgets([
  searchBox({
    container: '#search-box',
    placeholder: 'Recherche',
    autofocus: false,
    poweredBy: true,
    reset: true,
    loadingIndicator: false,
  }),

  refinementList({
    container: '#refinement-list',
    attribute: 'categories',
  }),

  hits({
    container: '#hits',
    templates: {
      empty: 'Aucun résultat&nbsp;!',
      item: document.getElementById('hit-template').innerHTML,
    },
  }),

  pagination({
    container: '#pagination-container',
    maxPages: 20,
    scrollTo: false,
    showFirstLast: false,
  }),
]);
search.start();
