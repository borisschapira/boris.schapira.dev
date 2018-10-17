/* global instantsearch */
var search = instantsearch({
    appId: document.getElementById('algolia-app-id').innerHTML,
    apiKey: document.getElementById('algolia-api-key').innerHTML,
    indexName: document.getElementById('algolia-index-name').innerHTML,
    urlSync: true
});

search.addWidgets(
    [
    instantsearch.widgets.refinementList({
        container: '#refinement-list',
        attributeName: 'categories'
    }),
    
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Recherche',
        autofocus: false,
        poweredBy: true,
        reset: true,
        loadingIndicator: false
    }),
    
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: 'Aucun résultat&nbsp;!',
            item: document.getElementById('hit-template').innerHTML
        }
    }),

    instantsearch.widgets.pagination({
        container: '#pagination-container',
        maxPages: 20,
        scrollTo: false,
        showFirstLast: false
    })
    ]
);
search.start();