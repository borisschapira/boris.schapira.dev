---
# You can insert information in the Front-Matter if needed
---
## Voir les différences entre deux états

```bash
git diff # Montre les différences entre le WD et le staging

git diff <file> # Limite à un seul fichier ou chemin

git diff --cached # Différences entre staging et HEAD

git diff HEAD # Différences entre le WD et HEAD

git diff <commit> # Différences avec un commit / branch particulier

git diff <commit> <commit> # Différences entre deux commits

git diff --word-diff # Différences mot à mot, au lieu de ligne à ligne

git diff -w # Ignore les espaces dans la comparaison
```
