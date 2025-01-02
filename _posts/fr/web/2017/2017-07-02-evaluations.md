---
title: Évaluations
---

> [...] enseigner en école était de loin **l’expérience de transmission la plus contre-intuitive**, et donc la plus fascinante pour moi.  
> <cite>"[Enseigner le développement web à 85 étudiants sans s’arracher les cheveux ✌️](https://medium.com/scribe/enseigner-le-d%C3%A9veloppement-web-%C3%A0-85-%C3%A9tudiants-sans-sarracher-les-cheveux-%EF%B8%8F-e518274f7063)", Adrien Joly</cite>

Adrien écrit avec beaucoup de justesse ce qu'il a appris en enseignant. Son article donne envie d'en savoir plus et je ne peux pas m'empêcher d'y entendre des échos de ma propre expérience.

<!-- more -->

Quelle que soit la taille de la classe (de 8 à 40 élèves), le type de cursus (en temps plein ou en alternance) ou l'année d'enseignement (de BAC+1 à BAC+5 ou auprès de professionnels en formation continue) :

- même si on veut tous être [Robin Williams](https://www.youtube.com/watch?v=4lj185DaZ_o), il est difficile de se passer de réaliser un enseignement classique avec des cours magistraux ;
- les élèves ne sont souvent pas, ou mal, formé·es à la prise de notes. Elles et ils **se dispersent très vite** sur les réseaux sociaux si on leur en laisse l'occasion ;
- être né·es avec Internet ne signifie pas savoir s'en servir, ou avoir le recul pour [comprendre et mettre en perspective ce qu'on y lit](/notes/2016-11-infobesite-et-rebellion/). Il faut donc **reprendre tout ce qu'on considère soi-même comme une base** ;
- le cours et les exercices ne suffisent pas : **les élèves ont besoin de supports**. Adrien fournit son cours. Je le fais aussi, a posteriori, en ligne. Je me rends compte, cependant, que la plupart du temps ce sont les supports de TD qui sont les plus demandés. Les élèves sont parfois d'apprentis artisans : elles et ils ont besoin de répéter pour **acquérir la mémoire du geste**.

## Mes expériences

J'ai enseigné, ces dernières années, plusieurs matières. En vrac : ASP.NET ; le développement Windows Phone ; le <span lang="en">Lean Canvas</span> ; l'introduction aux CMS .NET et PHP ; le PHP ; les <abbr title="Systèmes de gestion de bases de données relationelles">SGBDR</abbr> via l'usage de MySQL ; le framework Symfony ; le <abbr title="Responsive Web Design" lang="en">RWD</abbr> ; la gestion de projet <abbr title="Capability Maturity Model integration">CMMi</abbr> ; la gestion de projet Agile ; l'accessibilité Web ; le <span lang="en" title="gestion de version de code source">versionning</span> avec git et, une première cette année, l'obtention de la certification Opquast.

Au fil de ces cursus, j'ai tenté différents types d'évaluations qui me permettent de remplir mes obligations de prof ("une note toutes les trois heures").

### Des QCM "rigoureux"

- succès binaire (pas de ½ ou ¼ de points) ;
- des questions liées entre elles (si l'élève ratait une question mais en réussissait une autre sur le même sujet, je ne mettais aucun point, considérant qu'il s'agissait de chance)

C'était le type de questionnaires avec lesquels j'avais été moi-même formé en cursus d'ingénieur [ESIEE](http://www.esiee.fr/ "Site Web de l'École Supérieur d'Ingénieurs en Électronique et Électrotechnique"). J'ai rencontré un franc échec avec des notes très basses et un très faible écart type (comprendre : c'était une vraie boucherie). J'ai rapidement arrêté.

### Des TP notés avec la connaissance du sujet en amont

J'ai proposé cela une année, sur la base d'un exercice non-corrigé que j'avais contribué sur [Traindrop](https://traindrop.github.io/). Le résultat ne m'a pas satisfait : les disparités entre les élèves ne représentaient pas leur niveau mais plutôt :

- leur disponibilité : les élèves occupés par une activité autre (par exemple, de l'entrepreunariat pour payer l'École ou leur loyer) n'avaient pas autant de temps à consacrer au projet ;
- leur capacité à s'organiser en groupes sociaux : les élèves constitués en groupes soudés s'échangaient les réponses (ce qui était assez facile à voir une fois leur code passé dans mon Sonar[^sonar]). Les élèves plus isolés n'avaient pas accès au même niveau d'informations. Ils trichaient moins mais avançaient moins vite ;
- collectivement : leur faible investissement sur le projet (parfois, même les points vus en cours n'étaient pas traités).

[^sonar]: [SonarQube](https://www.sonarqube.org/) est un outil d'inspection continue de la qualité de code. Je m'en sers surtout pour sa fonctionnalité de détection de code dupliqué, qui permet de découvrir assez rapidement les "petits raccourcis" que prennent des étudiants en "s'empruntant" du code.

### Des rédactions (oui, oui)

> Vous postulez chez { insérer ici une société au site plus ou moins adapté à la navigation sur mobiles ou tablettes }. La responsable vous demande de rédiger vos recommandations argumentées sur les pistes d'amélioration que vous envisagez sur le _Front_ du site web. Vous soulignerez les problèmes identifiés, les solutions possibles et les modalités de la direction de projet qui en découlent.

J'ai proposé un sujet de ce type deux fois. La première fois, j'avais pas loin de 35 élèves et j'ai mis trois mois à corriger. Donc premier point : envisagez d'avoir du temps et une grille de notation posée en amont avant de vous lancer dans la correction.

L'examen, s'il est très instructif, présente également ses limites : **les élèves ne sont pas rompus aux usages de la communication en entreprise**. Ils se perdent souvent dans les circonvolutions d'un niveau de français soutenu plutôt que d'aller à l'essentiel. Au final, j'ai moins pu juger du niveau de compréhension des élèves que de leur niveau de synthèse. L'exercice reste pertinent, mais trop consommateur de temps de correction pour être pratiqué à grande échelle et doit être complété par d'autres modes d'évaluation.

## Mes modes d'évaluations favoris

Aujourd'hui, j'évalue souvent les élèves avec des **QCM faciles** mais réguliers. Google Forms[^alt] est très pratique pour ça, puisque depuis cette année, on peut pré-affecter des points aux questions. La correction est ainsi immédiate.

[^alt]: Je serais ravi d'utiliser un autre service que Google pour cet usage. Je surveille les évolutions de [FramaForms](https://framaforms.org/) pour, justement, me défaire de cette dépendance.

Je demande aux élèves de pratiquer une veille sur le sujet en cours. Je leur impose **un ou plusieurs oraux "de veille"**. Elles et ils doivent choisir une source de leur choix (je fournis des références pour les moins à l'aise) et la présenter au reste de la classe en cinq à dix minutes : auteur·trice, contexte, objet, critique, pistes de lecture pour approfondir… Chaque présentation est, en général, suivie d'une série de questions et réponses pour encourager la curiosité et l'esprit critique des élèves. Je n'organise pas de tours de passage mais je préviens en amont que ma notation sera dégressive : les premiers à passer auront facilement plus de 18/20 mais que j'attends de chaque nouveau passage qu'il ait au moins le même niveau d'analyse que le précédent, voire qu'il aille plus loin. Le dernier à passer aura donc beaucoup plus de travail à fournir pour avoir une bonne note.

Quand nous profitons de plusieurs jours consécutifs sur le même sujet, nous basculons en mode projet. Comme tout est fait pour assurer aux élèves une grande autonomie (je pilote les apports pédagogiques en affectant tel ou tel ticket à une équipe qui n'aurait pas abordé la notion en question), j'en profite pour mener en dehors de la classe **des interviews en face-à-face**, pendant lesquelles je tente d'évaluer la compréhension de l'élève.

Enfin, nous pratiquons des **évaluations pratiques en pair-à-pair** pour lesquelles j'applique le protocole suivant :

1.  toute la classe découvre le sujet ;
1.  **nous élaborons collectivement les critères objectifs qui constituent la grille de notation**. Idéalement, chaque critère ne doit pas être noté sur plus de deux points ;
1.  les élèves traitent l'énoncé ;
1.  nous faisons passer les "copies" (souvent, les fichiers) vers les correcteurs (affectés aléatoirement) et l'évaluation a lieu. Les élèves me l'envoient par e-mail ;
1.  j'évalue _a posteriori_ et compare mes notes aux notes envoyées par les élèves. Quand ma note diverge fortement, j'écris une réponse au correcteur pour qu'il sache pourquoi.

Idéalement, il faudrait le faire deux fois : la première fois, les élèves prennent conscience de la difficulté que représente une notation. Ils se rendent compte qu'on ne note pas entre 10 et 20, mais bien entre 0 et 20, et que **sortir de la zone située entre 8 et 12 sur 20 est difficile**.

En réalité, nous sommes souvent limités par le temps que cela consomme sur le volume d'heure du cursus. Cependant, je note toujours une différence de comportement après l'exercice. Il n'y a rien de plus difficile que de noter objectivement un ou une camarade.

Et vous, comment notez-vous ?
