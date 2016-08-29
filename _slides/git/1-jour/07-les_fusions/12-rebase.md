---
# You can insert information in the Front-Matter if needed
---
## git rebase


```bash
git rebase newbase [mybranch] # HEAD par défaut
```

* Rejoue intégralement les commits sur la nouvelle base
    * ce qui est équivalent à les fusionner un par un ;
    * risques de conflits & résolutions manuelles.
* En cas de résolution d'un conflit sur un des commits concerné&nbsp;:

```bash
git rebase --continue
git rebase --abort
git rebase --skip
```
