---
# You can insert information in the Front-Matter if needed
---
## La recherche binaire

Comment ça marche ?

```bash
git bisect start # demarre le bisect
git bisect bad # sous-entendu, HEAD
git bisect good <le dernier commit qui marchait>
#Pour chaque checkout auto, on teste puis on indique : bad, good ou skip
git bisect reset # pour arrêter
```

<aside class="notes">
  https://github.com/borisschapira/git-bisect-example
</aside>
