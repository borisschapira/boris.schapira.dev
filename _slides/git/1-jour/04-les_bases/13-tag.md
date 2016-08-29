---
# You can insert information in the Front-Matter if needed
---
## Créer une étiquette (_tag_)

Comme beaucoup de VCS, **git** intègre cette fonctionalité de marquage de jalon.

```bash
git tag 1.0.0 # Création d'un tag simple
git tag -a 1.1.0 -m "My release" # Création d'un tag annoté
git show 1.1.0 # Afficher le détail
git tag 0.9 <commit short-sha> # Création d'un tag associé à un commit
```


Il est possible de signer les tags avec GPG (pour vérifier que l'auteur du tag n'est pas usurpé par la suite).

```bash
git tag -s 1.5 -m 'My signed 1.5 tag'
```

<aside class="notes">
  TP&nbsp;: A/ Modifier un fichier et contribuer B/ Créer un fichier et contribuer C/ Annuler le dernier commit D/ Créer un tag
</aside>
