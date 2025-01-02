---
title: "Mon propre guide d'écriture inclusive"
tags:
    - guide
    - Égalité
last_modified_at: 2023-11-03 13:55:00 +0000
---

Cet article date de {{ page.date | l: "%B %Y" }}. Il me servira de note à moi-même ou d'explication vers laquelle pointer si j'ai besoin d'expliquer ma façon de procéder, et je n'hésiterai pas à le mettre à jour.  
_Dernière mise à jour : {{ page.last_modified_at | l: "%B %Y" }}_

## Les règle que j'essaie de suivre

- **L'ordre non-genré** : lorsque le masculin et le féminin sont présents, les ordonner selon l'ordre alphabétique "l'égalité femmes-hommes".
- **L'accord de proximité** : accorder avec le dernier groupe nominal plutôt qu'à un masculin qui n'a rien de neutre.  
  Exemple : "les auditeurs et les auditrices ont été appelées à s'exprimer".
- **Les épicènes** : recourir autant que possible aux mots permettant d'utiliser des formulations qui ne marquent pas le genre.  
  Exemple : "le personnel" plutôt que "les salariés". "L'équipe de développement" plutôt que "les développeurs".
- **Le point médian** quand, si on l'enlève, la phonétique du mot est proche du féminin. À l'usage, c'est ce qui est le moins gênant pour la lecture et permet de subtilement rappeler à l'existence de femmes dans le groupe.  
  Exemple : "les invité·es", "les amateur·ices", "les intelectuel·les", "les ingénieur·es"
- **Des néologismes** si cela permet d'alléger le texte (notamment dans certains contextes où l'on est amené à répéter des mots sans pouvoir remplacer par un terme épicène).  
  Exemple : "celleux", "iels".

## L'écriture inclusive ne se résume pas aux abbréviations inclusives, mais elles peuvent représenter une source de problèmes

Je suis intimement convaincu que l'écriture inclusive n'est pas un problème pour la lecture d'un grand nombre de personnes… valides.

Pour des gens sans problème de vue ou de lecture, les textes ci-dessous sont intelligibles. Au fil de la lecture, le cerveau s'adapte et rapidement, oublie la graphie particulière :

> Ça mrahce tèrs bein aevc un txtee éicrt cmome ça. Du memomnt que la pmrerièe et la dreinère lrette snot les bnones.

D'ailleurs cela "marche" aussi en remplaçant certaines lettres par des chiffres :

> 4U D3P4R7, C3 73X73 V4 V0U5 P4R417R3 D1FF1C1L3 4 L1R3, PU15 V07R3 C3RV34U V4 R4P1D3M3N7 5'4D4PT73R 37 V07R3 L3C7UR3 V4 37R3 D3 PLU5 EN PLU5 FLU1D3.  
> 1L Y 4 M3M3 UN P3717 C073 EXC174N7, N'357-C3 P45 ?  
> V07R3 C3RV34U V0U5 PR0UV3 41NS1 QU3 R3FU53R L'3CR17URE 1NCLU5IVE 50U5 PR373X73 QU'3LL3 35T N0N L151BL3 357 UN F4UX 4RGUM3NT

Mais ce n'est pas parce que **mon** cerveau et **mes yeux** n'ont pas de problème avec ça que ce n'est pas le cas pour d'autres, qui auront besoin qu'on évite des graphies spécifiques. La graphie particulière du point médian ("les utilisateur·ices"), du point de séparation ("les salarié.e.s"), des terminaisons néologiques épicènes ("æ") peuvent gêner certaines personnes, d'autant plus quand elles utilisent une synthèse vocale.

Pour mon propre usage des abbréviations inclusives, à savoir le point médian, j'ai donc décidé de recourir à des astuces phonétiques et techniques pour gêner le moins de gens. Phonétiquement, je limite son usage à des termes dont la prononciation sans ou avec la partie suivant le point médian est intelligible. Par exemple, "les contractuel·les", lu <a href="http://ipa-reader.xyz/?text=k%C9%94%CC%83.t%CA%81ak.t%C9%A5%C9%9Bl&voice=Celine" title="Prononciation du mot contractuel">&#92;kɔ̃.tʁak.tɥɛl&#92;</a> dans les deux cas. Techniquement, mon [plugin de correction microtypographique pour Jekyll](https://github.com/borisschapira/jekyll-microtypo/) détecte les parties du mot suivant un point médian et englobe tout d'un attribut `aria-hidden="true"` de manière à ce que le mot soit lu sans cette "extension".

De [toutes les possibilités](https://codepen.io/vincent-valentin/full/woGLVL 'Abbréviations inclusives, un CodePen par Vincent Valentin'), cela m'a semblé être la plus efficace à mettre en œuvre _pour moi_, étant donné que j'étais capable d'en surmonter la complexité technique.

## <span id="disambiguation">Pour éviter les malentendus</span>

**Oui**, c'est une évolution de la langue française. Mais ce n'est pas une nouveauté, c'est plutôt un retour à une innovation cosntante qui ne s'est arrêté que très récemment. Ni Voltaire ni Rabelais n'écrivaient pas dans le français jugé "légitime" par les réactionnaires d'aujourd'hui. Racine employait souvent l'accord de proximité, ce même accord que vous employez probablement souvent, en disant par exemple "des chants et des danses bretonnes" plutôt que "des chants et des danses bretons"[^proximite].

[^proximite]: "[L'accord de proximité du déterminant en français](https://journals.openedition.org/discours/pdf/9542)", Anne Abeillé, Aixiu An, Aoi Shiraïshi, PDF (403 Ko)

**Non**, ça n'est pas parfait, ni dans l'usage ni dans la graphie, et je suis prêt à faire évoluer ma position si on me propose mieux.

**Oui**, c'est complètement idéologique donc ce n'est pas la peine de le souligner. Permettez-moi, en revanche, de souligner que continuer à utiliser une langue dont on vous explique qu'elle peut être perçue comme sexiste est également un choix, que vous le revendiquiez ou non.

**Non**, ce n'est pas absolu et je n'oblige personne à pratiquer ces techniques. Par contre, je m'opposerait systématiquement à celles et ceux qui souhaiteraient les interdire partout et tout le temps. Mais sans y perdre d'énergie car il n'y a pas de véritable combat linguistique : l'usage est là, ils ont déjà perdu.

## Je me me moque pas de vous

Je comprends la réticence de certain·es face à ces règles. Je comprends même leur attachement très fort au français et je voudrais leur dire que nous nous ressemblons davantage qu'elles et ils le pensent.

Nous sommes attaché·es à notre langue car elle est, culturellement, un marqueur fort de notre patrimoine national. Et je vois dans l'opportunité de la faire évoluer le moyen de rendre notre culture plus juste. Je compte bien m'en saisir.
