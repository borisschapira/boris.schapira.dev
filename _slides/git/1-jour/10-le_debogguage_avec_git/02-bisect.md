---
# You can insert information in the Front-Matter if needed
---
## La recherche binaire

Un des outils les plus puissants et méconnus de **git**. Elle permet d'effectuer une recherche dichotomique pour identifier le commit ayant introduit un bug. On délimite la partie à tester, puis git va nous positioner à coup de plus grand/plus petit pour localiser le _commit_ recherché.

Recherche dichotomique donc en _O(ln(2))_ :

* 30 commits&nbsp;: 5 tests au pire
* 1000 commits&nbsp;: 10 tests au pire

<aside class="notes">
  https://github.com/borisschapira/git-bisect-example
</aside>
