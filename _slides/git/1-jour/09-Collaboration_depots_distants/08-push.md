---
# You can insert information in the Front-Matter if needed
---
## `git push`

Synchronise les modifications sur le dépôt distant. Par défaut, c'est automatique&nbsp;:

```bash
git push # (En fonction de la configuration push.default)
git push <remote> # (toutes les branches du distant <remote>)
git push -u <remote> <branch> # pour une branche spécifique
```

Les branches ne sont pas obligées d'avoir le même nom

```bash
# Alors qu'on est sur "master"
git push -u origin master:mymaster
```

Pour supprimer une branche distante

```bash
git push origin :branch-to-delete
```
