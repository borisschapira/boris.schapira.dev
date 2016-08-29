---
# You can insert information in the Front-Matter if needed
---
## `git stash`

```bash
git stash # Met de côté les modifications en cours
git stash save <message> # Idem, mais avec un message
```

```bash
git stash list # Liste les stashs disponibles
git stash show [<stash>]
```

```bash
git stash apply [<stash>] # Applique le stash 0
git stash pop [<stash>] # Applique le stash 0 et le supprime de la list
git stash branch <branchname> [<stash>] # Créé une branche
git stash clear # Supprime tous les stashs
git stash drop [<stash>] # Supprime le stash <stash>
```
