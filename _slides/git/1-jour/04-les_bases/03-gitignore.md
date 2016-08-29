---
# You can insert information in the Front-Matter if needed
---
## Ignorer des fichiers

Il est possible de ne pas suivre (_track_) des fichiers ou des répertoires listés dans le fichier &nbsp;: ```.gitignore```

```bash
# Les lignes vides ou commençant par # sont ignorées
*.cache # Les Glob Patterns* sont acceptés
/vendor/ # Pour un répertoire entier, finir la ligne avec un /
# Pour inclure un fichier ou une expression, utiliser '!'
/cache/*
!/cache/readme.md
```

* Bonnes pratiques :
 * Utilisez des [.gitignore type](https://github.com/github/gitignore).
 * Référencez dans votre configuration un `.gitignore` de système d'exploitation


<small>\* Les _Glob Patterns_ sont des expressions régulières simplifiées, utilisées dans le _shell_ de tous les systèmes Unix.</small>

<aside class="notes">
  git config --global core.excludesfile ~/.gitignore_global           par exemple .DS_Store
</aside> 
