---
# You can insert information in the Front-Matter if needed
---
## Ajout à l'index (_staging_)

```bash
git add <file> # Ajout du fichier <file>
git add . # Ajout de tous les fichiers non-ignorés du répertoire
git add -u # Enregistre la suppression de fichiers/dossiers
git add -f # Ajout même si ignoré
git add -i # Pour ne prendre que des parties des modifications

```

L'ajout **git** fait une capture (_snapshot_) de l'état actuel du fichier et la place dans l'index (_staging_). L'ajout est :

  * local
  * non-versionné
  * non-partagé

C'est un mécanisme qui doit rester **temporaire** !
