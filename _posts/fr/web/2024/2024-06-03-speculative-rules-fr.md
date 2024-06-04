---
title: L'API Speculative Rules
subtitle: une nouvelle itération dans l'histoire du préchargement
translations:
    en: speculative-rules-en
---

En Web Performance, il arrive un moment où vous avez épuisé toutes les options pour accélérer la vitesse de la page web que vous optimisez. Peut-être parce que vous avez appliqué toutes les améliorations que vous aviez prévues, ou peut-être que les contraintes de votre stack techno ne permettent pas d'aller plus loin. Lorsque vous atteignez ce point, votre attention se déplace généralement vers l'accélération du temps de chargement de la **prochaine** page web.

J'ai vu _beaucoup_ d'expériences en ce sens au fil des ans, et je surveille de près la nouvelle itération : **l'API <span lang="en">Speculative Rules</span>**.

## Petit historique personnel

Au début des années 2000s, les abonnements d'accès à Internet étaient limités dans le temps. Mon moi adolescent utilisait FasterFox, une extension Firefox qui préchargeait tous les liens possibles sur une page web pendant que je la lisais, me permettant de poursuivre ma navigation hors ligne. C'était particulièrement utile pour les sites web riches en contenu, comme ceux avec des paroles de chansons et des astuces de jeux vidéo !

À un moment, Firefox a introduit le support de la balise `<link rel="next">`, qui permettait au navigateur de précharger une page vers laquelle il prévoyait que l'utilisateur naviguerait ensuite. J'ai trouvé cette fonctionnalité particulièrement pratique pour créer des articles étalés sur plusieurs pages sur mes premiers blogs.

Pendant une période, je me suis concentré sur .NET et je ne me suis pas beaucoup intéressé au préchargement (j'ai surtout utilisé Wordpress pour la création de contenu, et j'ai appris jQuery, puis JavaScript, en cours de route). Je m'y suis remis sérieusement vers 2012.

Quelques années plus tard, Alexandre Dieulot a proposé un concept intéressant : il a remarqué qu'il y a généralement **un délai de 200 à 300 millisecondes entre le moment où une personne survole un lien et celui où elle clique dessus**. Il s'est demandé si ce délai pouvait être utilisé pour précharger la page, afin qu'elle soit prête dès que l'utilisateur clique. Cette idée, bien qu'elle nécessite de définir ce qu'était un préchargement et d'exclure les liens de téléchargement, était relativement simple et a conduit à la création de la bibliothèque [InstantClick.io](http://instantclick.io/) et son utilisation d'un requête XHR similaire à un `prefetch`.

D'autres bibliothèques ont suivi, offrant des possibilités supplémentaires. La plus remarquable d’entre elles était sûrement [turbolinks](https://github.com/turbolinks/turbolinks). Ces bibliothèques visaient à offrir à l'utilisateur la même expérience avec les <span lang="en">Multiple Page Apps (MPA)</span> qu'avec les <span lang="en">Single Page Apps (SPA)</span>. Elles s'appuyaient sur des [Resource Hints](/notes/2020-05-preload-prefetch-et-preconnect-resource-hints/) et sur la toute nouvelle API HTML5 <span lang="en">History</span> pour **conserver l'usage des boutons Retour et Rechargement**. Il était possible d'utiliser à la fois une solution de type SPA et InstantClick, comme je l'ai fait sur ce blog pendant un certain temps. Cependant, j'ai finalement décidé que les avantages étaient trop faibles compte tenu du temps de réponse natif déjà rapide du site.

Compte tenu de l'efficacité de ces solutions et de leur faible besoin de maintenance au fil du temps (InstantClick n'a pratiquement pas changé en 10 ans), il semblait logique de développer une nouvelle API de navigateur qui améliorerait nativement les performances pour les navigations futures.

## Découvrons l'API Speculative Rules

L'API <span lang="en">Speculative Rules</span> introduit une nouvelle méthode déclarative pour indiquer au navigateur quel contenu doit être préchargé et/ou pré-rendu à la demande du concepteur ou de la conceptrice du site.

Les règles de spéculation contiennent un paramètre appelé `eagerness` (qu'on peut traduire par "degré d'impatience") qui détermine quand le navigateur doit télécharger le contenu. Doit-il le faire immédiatement (comme le faisait FasterFox), ou doit-il attendre un signal supplémentaire, tel qu'un survol (comme InstantClick), ou même le déplacement du pointeur de la souris _vers_ le lien ?

Je trouve que les règles établies par cette API sont **élégamment définies** et faciles à comprendre. Prenons l'exemple suivant, directement à la fin du `<body>` :

```
<script type="speculationrules">
  {
    "prefetch": [
      { "where":
        { "href_matches": "/*" },
        "eagerness": "moderate"
      }
    ]
  }
</script>
```

Ou sous la forme d'un snippet à intégrer dans votre tag manager (pour un A/B test, par exemple) :

```
(function () {
  const script = document.createElement("script");
  script.type = "speculationrules"
  script.textContent = JSON.stringify({
    prefetch: [
      {
        where: { 'href_matches': '/*' },
        eagerness: 'moderate'
      }
    ]
  });
  document.body.appendChild(script);
})()
```

Il indique au navigateur que pour toutes les URLs du domaine courant `/*`, il peut faire du `prefetch` s'il pense que l'utilisateur va avoir besoin du contenu. Avec une impatience "modérée" (`moderate`), cela se produira principalement lorsque l'utilisateur survolera le lien.

Est-ce vraiment si simple ? Oui.

Vous avez également la possibilité d'utiliser `prerender` au lieu de `prefetch`. Cependant, permettez-moi d'insister sur le fait que si la règle `prerender$ est appliquée, elle récupère **et traite** la ressource à l'avance, ce qui inclut _la récupération des sous-ressources_ également, qu'elles proviennent d'une première ou d'une troisième partie.

## Devons-nous attendre un peu ?

Déjà, précisions que même si la fonctionnalité est déployée dans Chrome depuis quelques mois, **elle reste récente**. Certaines alchimies, comme la spéculation `prefetch` couplée à un Service Worker, ne fonctionnent pas encore. Rien de dramatique, mais précaution est mère de sûreté.

Le préchargement et le rendu spéculatif, bien que bénéfiques pour l'expérience de certains utilisateurs, **comportent le risque de gaspiller des ressourses** : de la bande passante et des ressources du serveur si les données extraites ne sont pas utilisées parce que l'utilisateur ne navigue pas jusqu'à la page ainsi optimisée.

Si votre objectif est d'améliorer la sobriété de votre site web ou si vous êtes tenu d'en rendre compte (par exemple, en raison de la directive européenne sur les rapports de développement durable des entreprises), il n'est peut-être pas judicieux de gonfler artificiellement le nombre de pages que vos serveurs calculent et délivrent et que vos utilisateurs téléchargent.[^press]

[^press]: A l'inverse, vous pouvez avoir un intérêt particulier à gonfler ces chiffres. En France, par exemple, les aides publiques à la Presse sont calculées en fonction du nombre de pages vues. Il est évident que certaines entités exploiteront ces règles pour "générer des pages vues", tout comme elles le faisaient auparavant avec des rafraîchissements excessifs.

Du côté du serveur, l'utilisation de règles de spéculation peut potentiellement présenter un risque pour votre site web. Si une règle est trop gourmande, elle peut déclencher un grand nombre de chargements de pages et de ressources pour chaque utilisateur. **Cette charge accrue** peut mettre à rude épreuve la capacité de votre serveur à fournir rapidement du contenu à tous les utilisateurs, en particulier si vous n'avez pas mis en place de fonctionnalités de mise en cache au préalable. Dans les cas extrêmes, cela peut vous conduire à **vous infliger à vous-même un déni de service distribué (DDoS)**.

L'utilisation de l'API <span lang="en">Speculative Rules</span> ne doit se faire uniquement au regard des impératifs d'amélioration de l'UX, mais aussi en prenant en compte d'autres facteurs. Nous pouvons aussi optimiser les règles : en tant qu'administrateurs de sites web, nous pouvons utiliser l'analyse comportementale pour mieux connaître les pages les plus populaires et les parcours de navigation des utilisateur·ices. Ces informations peuvent nous aider à déterminer si l'utilisation de l'API <span lang="en">Speculative Rules</span> améliorerait ou nuirait à l'UX.

Enfin, et ce n'est pas neutre, l'utilisation de l'API <span lang="en">Speculative Rules</span> peut s'apparenter à une forme de suivi des survols des utilisateurs. En effet, si on imagine qu'un survol d'un lien ou qu'un glissement du pointeur de la souris vers un lien déclenche un `prefetch` ou un `prerender` alors il suffirait d'aller consulter les logs du serveur pour savoir ce qu'il a intéressé un utilisateur, qu'il visite la page… ou non[^gdpr].

[^gdpr]: Si un tel traitement des données est fait, il devrait –en tout cas dans l'Union Européenne– être encadré par un consentement.

## Alors, on y va ?

L'API <span lang="en">Speculative Rules</span> est **le dernier développement d'une histoire qui dure depuis longtemps**. Les problèmes que j'ai évoqués étaient déjà inhérents aux solutions précédentes. l'API <span lang="en">Speculative Rules</span> ne fait qu'intégrer ce comportement directement dans le navigateur, ce qui présente certains avantages par rapport à JavaScript.

Tout d'abord, le navigateur est mieux équipé qu'un développeur pour déterminer la position des éléments et comprendre les mouvements de la souris de l'utilisateur. C'est pourquoi il constitue actuellement l'option la plus efficace pour ce type d'optimisation. Deuxièmement, le navigateur est conscient de l'état de la connexion et du niveau de la batterie, et peut choisir de ne pas charger les ressources de manière spéculative si les conditions ne sont pas favorables. Si le navigateur détecte que les réponses du serveur à cette origine sont trop lentes, il peut également désactiver ce comportement.

Tout ceci étant dit, **la demande du public pour un web plus durable et respectueux de la vie privée n'a jamais été aussi forte**. Soyez donc peu gourmand dans vos règles et n'abusez pas des droits que vous avez sur les logs produits. Le chargement de ressources le plus sobre est celui qui n'a jamais eu lieu.
