---
# You can insert information in the Front-Matter if needed
---
## `git pull`

Commande classique, qui est en fait un raccourci

* `git fetch` + `git merge`
* Mais… et si je ne veux pas faire un `merge`&nbsp;?
  * `git pull --rebase`

Généralement, on dissocie le `fetch` et le `merge` lorsqu'on a relativement peu de temps en ligne&nbsp;:

```bash
git fetch # Depuis une connexion mobile
# Déconnexion du réseau (chérie, je passe sous un tunnel...)
git merge # En mode hors-ligne, tranquilement
```

<aside class="notes">
  <code>git config pull.rebase = true</code>
</aside>
