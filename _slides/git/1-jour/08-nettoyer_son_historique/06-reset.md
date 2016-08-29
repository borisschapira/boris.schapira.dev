---
# You can insert information in the Front-Matter if needed
---
## Supprimer les dernières contributions

```bash
git reset --soft|--hard HEAD~3
git reset --soft|--hard HEAD^^^
```

* `soft` : les modifications subsistent dans l'espace de travail
* `hard` : les modifications disparaissent

<aside class="notes">
  par default --mixed&nbsp;: reset index mais pas wd
</aside>
