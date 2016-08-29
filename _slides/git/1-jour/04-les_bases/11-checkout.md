---
# You can insert information in the Front-Matter if needed
---
## Annuler les modifications d’un fichier

Annuler les modifications non-indexées&nbsp;:

```bash
git checkout <file> # Copie la version de l'index du fichier dans l'espace de travail
```

Trop de bazar dans un dossier, envie de reprendre la dernière version&nbsp;?
```bash
rm -Rf folder/.
git checkout folder
```

<small>Attention&nbsp;: les fichiers non-suivis seront perdus</small>
