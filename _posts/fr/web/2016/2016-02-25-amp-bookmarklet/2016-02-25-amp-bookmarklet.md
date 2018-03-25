---
title: 'Amp Bookmarklet'
date: '2016-02-25'
type: post
locale: fr_FR
---

Les premières pages <abbr title="Accelerated Mobile Pages">AMP</abbr> apparaissent dans les résultats de recherche Google.

Même si je suis très réservé sur ce nouveau format, très bien expliqué par mon collègue Olivier [sur le blog de Clever Age](http://blog.clever-age.com/fr/2016/02/08/amp-project-booste-le-chargement-des-pages-web/ "&quot;AMP Project booste le chargement des pages web&quot;, Oliver Keul"), je suis bien obligé de reconnaître que naviguer en <abbr title="Accelerated Mobile Pages">AMP</abbr> est plus rapide et plus agréable que de supporter les <span lang="en">templates</span> classiques des sites de Presse. **Alors pourquoi ne pas en profiter ?**

J'ai créé un petit <span lang="en">bookmarklet</span> sur à glisser dans vos favoris : <a href="javascript:void function(){var e=document.querySelector('link[rel=%22amphtml%22]');e%26%26(location.href=e.href)}();">Amp Bookmarklet</a>.

Si le code vous intéresse, [c'est par là](https://gist.github.com/borisschapira/f240f1db4490e5902af0 "&quot;AMP Bookmarket : go to the AMP version of the current page.&quot;, on Gist").
