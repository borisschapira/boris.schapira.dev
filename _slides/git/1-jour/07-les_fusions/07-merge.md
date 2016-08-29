---
# You can insert information in the Front-Matter if needed
---
## La fusion

Si l'on est sur `master`&nbsp;:

* `git merge experiment` : merge la branche `experiment` dans `master`
* créé un commit sur `master` contenant le résultat du merge (si nécessaire)

<aside class="notes">
  La branche `experiment` peut éventuellement continuer à évoluer parallèlement. Un nouveau merge permettra de refaire le jonction.

  En fast-forward&nbsp;: ```git merge hotfix``` - avance la branche master sur la branche hotfix
</aside>
