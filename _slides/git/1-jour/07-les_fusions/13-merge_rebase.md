---
# You can insert information in the Front-Matter if needed
---
## `merge` vs `rebase`

* Dans le cas du rebase, il n'y a pas de _commit_ de fusion&nbsp;:
    * chaque commit d'origine en produit un nouveau, le SHA change à chaque fois ;
* **git** est malin, il arrive à détecter les commits en doublon et évite les commits vides
    * quand on rebase une modification A sur une base qui la contient déjà, le commit associé ne la reprend pas.

<aside class="notes">
  Une règle&nbsp;: Ne rebasez jamais des commits qui ont déjà été poussés sur un dépôt public. (nouveaux commits similaires mais différents)
</aside>
