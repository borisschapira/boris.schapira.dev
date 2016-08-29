---
# You can insert information in the Front-Matter if needed
---
## Sortir des fichiers de l'index (_staging_)

```bash
git reset <file> # Copie la dernière version contribuée dans le staging
git reset -p # La même, en interactif
git reset HEAD <file> # réalise la même chose, mais on peut remonter dans l'historique
```



Ces trois commandes ne touchent pas à l'espace de travail.
