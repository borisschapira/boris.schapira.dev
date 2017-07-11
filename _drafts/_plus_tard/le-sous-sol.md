---
layout: post
title: "Le sous-sol"
---

Ce projet e-commerce était relativement simple mais la stack technologique choisie par le client en amont du projet était peu mature. Bien que les languages utilisés soient robustes, le projet reposait sur des solutions récentes qui n'avaient jamais, ou très peu, été confrontée à la réalité du terrain. Nous n'avions jamais travaillé sur ces solutions donc nous avons décidé de monter rapidement en compétence en incluant dans l'équipe des sous-traitants expérimentés. Durant la réunion de lancement, le partage des tâches avait été acté. Certaines composantes du projet, notamment liées aux responsabilités légales et bancaires, restaient à la charge du client.

## Tomber et se relever

Plusieurs mois plus tard, force est de constater que nous avions tous été trop ambitieux. Le recrutement de personnes expérimentés ne s'étant pas passé comme prévu, nous avions perdu trois semaines sur le planning des développement. Le client n'avait pas encore souscrit de terminal de paiement, donc nous ne l'avions évidemment pas intégré. L'éditeur de la solution, enfin, ne corrigeait les bugs remontés que dans les nouvelles versions majeures, nous obligeant à migrer plusieurs fois ce qui n'était pas évident dans la mesure où d'autres projets étaient installés sur les mêmes serveurs et ces migrations entrainaient des incompatibilités. 

Bref, nous avons dépassé la date de livraison initialement prévue. Réunion de crise, toutes les parties actent l'échec et s'accordent pour se donner un mois, manches relevées, pour corriger le tir. L'éditeur redescend ses correctifs sur notre version, le client accélère la commande du <abbr title="Terminal de Paiement Électronique">TPE</abbr>, nous embauchons un sous-traitant supplémentaire sans discuter le tarif. Un mois plus tard, au lendemain de la souscription du <abbr title="Terminal de Paiement Électronique">TPE</abbr>, le site est en ligne.

## Un rendez-vous mystérieux

Quelques semaines plus tard, mon commercial et moi recevons une invitation pour discuter des fonctionnalités du prochain lot. L'adresse est inconnue, sur Paris, et le rendez-vous est, de manière surprenante pour ce type de réunion, programmé très tôt. Je prends le train la veille pour être sûr d'être à l'heure. Tandis que Paris s'éveille, je rejoins mon commercial devant les locaux d'une très grande structure de banque-assurance française qu'on appellera DUPONT.

Nous attendons notre interlocuteur quelques minutes. Il arrive dans la hall avec trois autres personnes que nous n'avions jamais croisées auparavant, puis nous emmène dans une petite salle de réunion, au deuxième sous-sol. Nous nous installaons silencieusement. Notre contact nous lance des regards inquiet. Il n'est pas à l'aise avec ce qui va se passer : quelque chose cloche.

Un des trois hommes nous tend une feuille.

> Avant de parler des nouvelles fonctionnalités à développer, nous allons faire un rétroplanning du projet.

Sur la feuille sont reprises toutes les principales dates du projet. En face de chaque date se trouve un commentaire nous inculpant :

> xx/xx/XXXX : élement non livré, échéance non respectée
> xx/xx/XXXX : élément non livré, échéance non respectée

Je suis abassourdi. D'une part, la plupart des éléments listés n'étaient pas de notre responsabilité. D'autre part, nos retards allaient de paire avec d'autres, en dehors de notre champs d'action. Même si nous avions livré notre code plus tôt, le client n'aurait toujours pas souscrit son <abbr title="Terminal de Paiement Électronique">TPE</abbr> et nous n'aurions pas mis en Production. Mon commercial, rouge de colère, se tient à deux mains au dos de sa chaise, crispé, dents serrées. La situation est inédite et incroyable. Un autre homme embraie :

> Nous sommes avocats spécialisés, détachés par DUPONT pour aider votre client à faire valoir ses droits. Nous souhaitons un nouveau lot de développement et vous allez le réaliser gratuitement.

Hors de question. Mon commercial exprime son désaccord d'un calme ardent. J'explique pour ma part que ce document n'a aucune valeur. Nous n'avons jamais enfreint nos obligations d'information et de conseil.

> — Là n'est pas la question. Nous avons les moyens de faire couler votre entreprise et nous le ferons.  
> — Vous seriez prêts à mettre 120 personnes sur le carreau ?  
> — Oh, vous savez, dans l'informatique, vous retrouverez vite un emploi.

J'en eus froid dans le dos. C'en était trop pour mon commercial qui se leva, menaçant, et m'ordonna de faire pareil. Merci, au revoir, le temps que je comprennes ce qui s'était passé, nous étions déjà dehors, en route vers le métro. J'étais encore sous le choc.

> — Tu crois qu'ils peuvent faire ce qu'ils ont dit.
> — Non, aucune chance. Ils sont juste aux abois parce qu'ils ne doivent plus avoir d'argent.
> — Je ne comprends pas.
> — Ils doivent avoir un partenariat avec DUPONT. Comme ils n'ont plus de fonds, ils ont dû demander à DUPONT de faire pression pour voir s'ils pouvaient obtenir quelque chose. C'est un mouvement stupide : nous ne développerons rien de plus. Ils peuvent toujours se brosser pour avoir leur nouveau lot.

On n'a jamais entendu parler d'eux à nouveau. Le site n'a jamais connu d'évolutions ou de nouvelle contribution. Le pied de page mentionne toujours un <i lang="en">copyright</i> en 2011…
