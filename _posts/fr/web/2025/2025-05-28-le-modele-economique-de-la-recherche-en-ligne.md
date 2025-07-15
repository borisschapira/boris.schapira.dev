---
title: 'Recherche en ligne : quel modèle économique ?'
translations:
    en: business-model-of-online-search
---

Hier matin, j'ai échange sur Mastodon à propos du modèle économique de la recherche en ligne. Mais j'ai besoin d'un peu plus d'espace pour étaler mon raisonnement.

{% capture note %}Dans cet article, je vais parler de monétisation de la recherche, donc de monétisation de l'attention des internautes. Je ne considère pas que c'est souhaitable ou désirable, j'explique comment cela fonctionne aujourd'hui et comment cela fonctionnera, probablement, demain.{% endcapture note %} {% include note.html.liquid content=note %}

La monétisation de la recherche en ligne repose historiquement sur un paradigme éprouvé : la valorisation du trafic généré. Il s'articule principalement autour de deux axes majeurs :

**Sur les pages de résultats (ou SERP – <i lang="en">Search Engine Results Page</i>)** : les entreprises investissent pour positionner leurs annonces en réponse à des requêtes spécifiques des utilisateurs. Par exemple, une recherche pour "chaussures de course Paris" affichera prioritairement des publicités ciblées de distributeurs parisiens.

**Dans les sites web** : les moteurs de recherche collaborent avec un vaste réseau de sites web pour y diffuser des campagnes publicitaires sous divers formats (liens textuels, bannières graphiques, vidéos, habillages de page, etc.). Les revenus issus de ces campagnes sont ensuite partagés entre le moteur de recherche et l'éditeur du site web.

La pérennité de ce système est assurée par un ensemble d'outils technologiques spécialisés :

- **Des plateformes d'achat de positiions, de liens et d'espaces publicitaires** : des systèmes d'enchères en temps réel[^rtb] permettent l'acquisition automatisée et optimisée d'emplacements publicitaires.
- **Des outils de mesure de performance** : Des solutions logicielles sont dédiées au décompte du nombre de clics obtenus ou à l'analyse du trafic entrant[^conflit].
- **Un système de ciblage avancé** : le suivi du parcours des utilisateurs (<i lang="en">tracking</i>) permet de construire des profils publicitaires détaillés et de mettre en œuvre des campagnes de reciblage publicitaire (ou <i lang="en">retargeting</i>).

[^rtb]: Connues sous l'acronyme anglais RTB pour <i lang="en">Real-Time Bidding</i>.

[^conflit]: Je reste persuadé qu'il y a conflit d'intérêt quand les outils appartenant au vendeur de la publicité sont considérés comme les seuls à même d'en juger l'efficacité. Je n'ai jamais connu d'outils vantant autant les vertues de la publicité sur l'acquisition que Google Analytics lui-même.

---

Au cours des deux dernières décennies, les pages de résultats des moteurs de recherche majeurs, tels que Google, ont connu des ajustements notables.

D'une part, le cadre réglementaire, notamment dans certains pays, ainsi que les attentes du public en matière de transparence, ont conduit à une identification visuelle plus claire des liens sponsorisés par rapport aux résultats dits "naturels".

D'autre part, des innovations d'interface ont été introduites, telles que la "position zéro" (un encadré informatif apparaissant avant les résultats organiques pour fournir une réponse directe) ou l'amélioration algorithmique des titres des liens.

Malgré ces évolutions en surface, **les fondements structurels du modèle économique sont restés les mêmes** : des espaces ou des liens, vendus contre des clics.

---

L'intégration croissante de l'intelligence artificielle générative au cœur des moteurs de recherche marque une potentielle rupture.

Ces systèmes d'IA proposent désormais des paragraphes explicatifs, rédigés dynamiquement, en réponse directe aux requêtes des utilisateurs. Dans ce nouveau paradigme, les liens traditionnels peuvent subsister, mais ils se trouvent contextualisés par une sémantique préexistante, déjà porteuse d'une partie de la réponse.

Cette transformation de l'interaction utilisateur n'est pas une simple innovation d'usage ; elle implique **un changement profond et systémique pour une partie importante du modèle économique des moteurs de recherche**. Si l'IA fournit des réponses directes et complètes, le trafic vers les sites web sources pourrait chuter drastiquement. En contrepartie, ces réponses créent un potentiel d'influence considérable, susceptible de déterminer une navigation voire un achat futur.

Comment se monétisera l'influence dans ce nouveau paysage numérique ?

**Sur les pages de résultats** : prenons l'exemple d'une recherche pour "meilleur parfum floral pour femmes" qui aurait, auparavant, proposé comme premier lien une page produit pour une eau de parfum "Dior, J'adore" sur le site de Sephora. Dans une réponse IA, le parfum sera-t-il mis en avant comme étant "le plus connu", "le plus vendu", ou "le plus apprécié" ou est-ce la marque Sephora qui sera mise en avant, en rapport avec une des ses campagnes en cours ? Sur quels critères ce choix sémantique sera-t-il fondé ? La réponse sera-t-elle personnalisée en fonction des informations de profil de l'internaute, et si oui, avec quelle granularité (fidélité au parfum, fidélité au vendeur, sensibilité à la preuve sociale) ? Indépendamment du client, une valeur monétaire sera-t-elle affectée à l'exposition à ce type de message ?

**Évolution des achats** : comment les plateformes d'achat de campagnes publicitaires devront-elles évoluer ? Sera-t-il nécessaire pour une marque de définir les champs sémantiques auxquels elle souhaite être associée ? Faudra-t-il définir un univers sémantique spécifique pour chaque produit ou service ? Par conséquent, comment évolueront les mécanismes d'enchères associés et sur quels nouveaux critères (qualitatifs, contextuels, d'engagement) reposeront-ils ?

**Évolution des mesures** : La plupart des solutions d'analyse d'audience (les <i lang="en">analytics</i>) se transforment progressivement, passant d'un suivi du trafic brut à des analyses de cohortes d'utilisateurs et de leurs comportements. Il est donc probable que les analystes se retrouvent à comparer l'impact de différents messages générés par l'IA sur des segments d'audience spécifiques.

L'objectif sera alors d'identifier les champs sémantiques les plus porteurs d'engagement ou de conversion, et de déterminer à partir de quelle fréquence d'exposition un message est susceptible de provoquer un engagement ou une conversion. D'un point de vue projet, cela implique de redéfinir les indicateurs clés de performance au-delà du simple clic, pour y intégrer des mesures d'influence et de persuasion.

**Évolution du ciblage** : Les outils de profilage vont, si ce n'est déjà le cas, évoluer pour intégrer la sensibilité des personnes à tel ou tel champ lexical, niveau de langue, ou type d'argumentation. Cette perspective, bien que technologiquement séduisante pour l'optimisation publicitaire, soulève une préoccupation éthique majeure : le risque de créer un internet qui enferme toujours davantage les individus dans leurs biais cognitifs ou leurs préférences existantes (les "bulles de filtres"), plutôt que de leur permettre d'exprimer et de développer leur potentiel.

Cet aspect touche directement à la qualité de l'expérience utilisateur et à la responsabilité sociétale des plateformes numériques, notamment en matière d'accès équitable à l'information.

**Évolution des placements publicitaires dans les sites** : une fois généralisé l'usage des IA pour la publicité, elle devrait peu à peu gagner toutes les sphères. Plutôt que des liens d'affiliation, ce sont des paragraphes entiers de sites ou d'articles qui devraient bientôt être écrits par des IA dans des emplacements monétisés au sein-même des contenus. Je n'ai pas hâte de voir les premiers articles de Presse contenant un publi-communiqué au sein-même de l'article, avec la même logique d'évaluation de la valeur du paragraphe en fonction de son adéquation au ciblage.

---

Google, acteur aujourd'hui hégémonique sur le marché de la recherche, pourrait, parvenir à conserver sa position dominante en adaptant son modèle, mais ça n'est pas gagné. La croissance considérable de Google au cours des vingt dernières années s'est principalement construite sur la capitalisation et l'optimisation de son modèle économique existant. Cette inertie structurelle pourrait paradoxalement représenter un frein à sa capacité à se réinventer en profondeur.

La clé de son succès futur pourrait résider davantage dans la maîtrise de l'écosystème des échanges et des interactions entre intelligences artificielles que dans la possession et l'exploitation de tous les services finaux eux-mêmes. Il s'agirait alors pour Google de s'atteler à la normalisation des protocoles et des interfaces permettant à des agents intelligents, développés par divers acteurs, de communiquer et de collaborer efficacement. C'est notamment l'objectif avoué du projet Google Agentspace : définir les règles du jeu de ce nouveau marché plutôt que de chercher à dominer chaque application spécifique qui y verrait le jour.

Cela me rappelle la stratégie historiquement adoptée par Google avec son Chrome. En investissant massivement dans le développement de Chrome et en proposant le navigateur gratuitement au public, Google a acquis une influence considérable sur l'évolution des standards du web, lui permettant d'orienter de nombreux chantiers de normalisation de manière favorable à son écosystème.

Est-ce que Google parviendra à reproduire ce succès dans un écosystème des IA déjà beaucoup plus fragmenté et compétitif que celui des navigateurs à l'époque du lancement de Chrome ?

Et comment cela s'articulera-t-il avec l'évolution du cadre régulatoire de certaines régions, comme l'UE qui impose une "obligation de transparence" (notamment dans les réponses "optimisées" sémantiquement, via l'<i lang="en">AI Act</i> et le <i lang="en">Digital Services Act</i>) ?
