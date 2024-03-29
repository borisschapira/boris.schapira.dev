---
title: 'F12 de IE11 : du nouveau pour les développeurs'
tags:
    - Outils
    - 'Performance Web'
canonical: 'https://blog.clever-age.com/fr/2013/07/02/f12-de-ie11-du-nouveau-pour-les-developpeurs/'
canonical_title: 'le blog de Clever Age'
---

Cela fait un petit moment que je n’avais pas vu de challenger sérieux aux Dev. Tools de Chrome (de nombreuses études montrent que Firebug pénalise le Firefox sur lequel il est installé, faussant ainsi les mesures réalisées au niveau WebPerf, par exemple).

Une fois n’est pas coutume, c’est Microsoft qui s’apprête à donner un coup dans la fourmilière avec le [F12 de IE11](<http://msdn.microsoft.com/en-us/library/ie/bg182632(v=vs.85).aspx>).

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Outre les classiques onglets explorateurs de DOM, Console, Debugger, Réseau, il proposera également un onglet dédié aux temps de réponse de l’interface ([UI Responsiveness](<http://msdn.microsoft.com/en-us/library/ie/dn255009(v=vs.85).aspx>)), un outil de [diagnostic de la mémoire](<http://msdn.microsoft.com/en-us/library/ie/dn255003(v=vs.85).aspx>) (idéal pour détecter les fuites) et un [émulateur](<http://msdn.microsoft.com/en-us/library/ie/dn255001(v=vs.85).aspx>) (mode document, affichage, et géolocalisation).

{% capture img_alt %}Capture d'écran de l'onglet 'UI Responsiveness' des outils de développement d'Internet Explorer 11{% endcapture %} {% capture img_caption %}Le panel d'analyse de la réactivité de l'interface sera d'une aide précieuse dans l'évaluation des optimisations à réaliser pour améliorer la performance ressentie.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2013-07-02/1.png"
alt=img_alt
caption=img_caption
%}

Un effort manifeste a été fait sur le design, ce n’est pas négligeable quand vous passez plusieurs heures par jour sur ces écrans. Il n’y a plus qu’à attendre la mise à jour de Windows 8 vers 8.1 pour profiter de tout cela !
