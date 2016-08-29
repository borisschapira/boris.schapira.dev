---
# You can insert information in the Front-Matter if needed
---
## Contribuer (_commit_)

Différentes façons de procéder&nbsp;:

```bash
git commit -m "Message" # Message de commit
git commit -a # contribuer tout fichier déjà suivi
git commit -am # Le combo des deux
git commit … -- chemin... # commit certain fichier seulement.
# Ne tient pas compte du staging.
git commit -t <file> # utilise un gabarit de message
```

<aside class="notes">
  Le commit n'est normalement effectué que sur les modification dans le staging. Ex : un fichier est ajouté au staging (modif1) puis est re-modifié (modif2). Seul la modif1 sera incluse au commit si on ne refait pas un "git add" sur ce fichier.
</aside>
