---
# You can insert information in the Front-Matter if needed
---
## `git fetch`

* Récupère en local une copie de toutes les dernières révisions
* N'altère pas les branches locales
* Seule opération nécessitant le réseau pour pouvoir travailler
 * après, on peut basculer _offline_

```bash
git fetch origin master # explicite
git fetch origin # branches suivie par origin
git fetch # branches suivies du distant par défaut
git fetch --all # branches suivies de tous les distants
```

<aside class="notes">
  Avant de perdre la connexion…
</aside>
