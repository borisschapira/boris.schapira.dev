---
# You can insert information in the Front-Matter if needed
---
## `git merge`, quelques astuces

* `--squash`&nbsp;: un gros commit de fusion qui colle l'état de la branche à fusionner dans un commit
 * C'est efficace, mais on perd l'historique. Méthode _Hulk_.
* `--ff-only`&nbsp;: demande à **git** d'essayer uniquement le _fast-forward_*

<small>\* on va y revenir</small>

<aside class="notes">
  --squash =  prend tout le travail de la branche à fusionner et le colle dans un commit sans fusion - --ff-only OK si current HEAD is already up-to-date ou fast-forward OK - Strategy&nbsp;: recursive, octopusf
</aside>
