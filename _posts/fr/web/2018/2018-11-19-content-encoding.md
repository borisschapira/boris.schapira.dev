---
title: "Content Encoding: pourquoi utiliser la balise meta charset et l'en-tête Content-Type"
thumbnail_background: /assets/images/2018-11-16/hiragana-blur.png
canonical: 'https://blog.dareboost.com/fr/2018/11/encodage-meta-charset-content-type-header/'
canonical_title: 'le blog de Dareboost'
tags:
    - 'Performance Web'
    - Headers
    - Encoding
cloudinary_logo: dareboost-logo
translations:
    en: content-encoding-how-why
---

Améliorer la vitesse à laquelle une page Web est affichée implique souvent de rendre la vie du navigateur aussi facile que possible. Lorsque le navigateur reçoit une réponse HTTP, il reçoit en fait du texte encodé en octets, où chaque octet ou séquence d'octets représente un caractère donné. Si le navigateur ne sait pas clairement quel encodage utiliser, il perdra du temps à essayer de le deviner et sera susceptible d'échouer dans certains cas.

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Bien que le Web se veuille universel, les différents groupes humains qui l'utilisent ont leurs propres spécificités. L'une de ces spécificités est le langage, surtout lorsqu'il est écrit. Tout contenu textuel est composé de caractères, provenant d'un répertoire destiné à un type donné d'utilisation. Les hiraganas, par exemple, constituent un système phonétique destiné à la transcription sans ambiguïté de la langue japonaise.

{% capture img_alt %}Hiraganas{% endcapture %} {% capture img_caption %}Tableau montrant le sens d'écriture des hiraganas  
par Karine WIDMER ([CC-BY-SA-3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [Source](https://commons.wikimedia.org/wiki/File:Table_hiragana.svg)){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-11-16/hiragana.png"
alt=img_alt
caption=img_caption
%}

Pour pouvoir désigner chaque caractère sans ambiguïté, il faut attribuer à chacun d'eux un identifiant unique. L'ensemble des identifiants sera appelé un jeu de caractères. Une fois cette table de correspondance définie, chaque caractère doit être converti en une séquence d'octets afin que nous puissions les stocker ou les partager entre systèmes informatiques. C'est ce qu'on appelle l'encodage de caractères (encoding).

Imaginez que j'utilise un jeu de caractères pour écrire du texte et un encodage correspondant pour le convertir en octets, et qu'enfin, je vous l'envoie. Comment le décoder et lire le contenu, sans savoir quel encodage ou quel jeu de caractères j'ai utilisé ? Vous n’aurez pas d’autre choix que d’essayer les jeux de caractères les plus couramment utilisés, en espérant que le résultat ait un sens... Au pire, que pourrait-il bien se passer ?

> Remplacer un point-virgule (;) par un point d’interrogation grec (;) dans le code JavaScript de vos amis puis regardez-les s’arracher les cheveux sur les erreurs de syntaxe. <cite>Ben Johnson (@benbjohnson), [16 novembre 2014](https://twitter.com/benbjohnson/status/533848879423578112)</cite>

Oui, bon… ce n’est visiblement pas une bonne idée.

À titre d’exemple, la séquence de bits 1100 0011 1010 1001 correspond au caractère "é" dans l’encoding UTF-8\. Si vous décodez cette séquence en supposant devoir utiliser l’encoding Latin-1 et non de l’UTF-8, vous lirez "Ã ©".  
En Latin-1, le caractère "é" est représenté par la séquence 1110 1001.

Lorsque le navigateur reçoit des octets, il doit identifier la collection de lettres et de symboles qui ont été utilisés pour écrire le texte qui a été converti en ces octets, ainsi que le codage utilisé pour cette conversion, afin de l'inverser. Si aucune information de ce type n'a été transmise, le navigateur tentera de trouver des motifs reconnaissables dans les octets pour déterminer l'encodage lui-même, et éventuellement essayer certains jeux de caractères courants, ce qui prendra du temps, retardant le traitement ultérieur de la page.

Pour accélérer l'affichage de vos pages, vous devez spécifier l'encodage du contenu dans votre réponse HTTP.

## Comment choisir le bon jeu de caractères ?

Il fut un temps où coexistaient des centaines d'encodages de caractères, tous limités et ne pouvant pas contenir suffisamment de caractères pour convenir à la plupart des langues du monde. Parfois, aucun encodage n'était adéquat pour toutes les lettres dans une seule langue.

Aujourd'hui, Unicode (un jeu de caractères universel, définissant tous les caractères nécessaires pour écrire la majorité des langues) est devenu un standard, quelle que soit la plate-forme, le périphérique, l'application ou la langue que vous visez. UTF-8 est l'un des encodages Unicode et celui qui devrait être utilisé pour le contenu Web, selon le W3C :

> Tous ceux qui développent du contenu, qu’ils soient des auteurs de contenus ou des programmeurs, devraient utiliser l’encodage de caractères UTF-8, sauf s’il existe des raisons très spéciales pour utiliser autre chose. (Si vous décidez de ne pas utiliser UTF-8, vous devrez choisir l’un des quelques encodages interopérables mis en place sur tous les navigateurs.) <cite>"[Présentation des jeux et encodages de caractères](https://www.w3.org/International/getting-started/characters.fr)", W3C</cite>

_Note : si vous utilisez une base de données pour stocker votre contenu côté serveur, vous pourriez être tenté d'utiliser aussi le jeu de caractères "utf-8". Attention : sur MySQL et MariaDB, c'est un alias pour "utf8mb3", un encodage UTF-8 appelé "Basic Multilingual Plane" (ou BMP) qui ne stocke qu'un maximum de trois octets par caractère. Préférez plutôt utiliser "utf8mb4", un encodage qui stocke un maximum de quatre octets par caractère. Sinon, vous ne pourrez pas utiliser certains caractères populaires, tels que 🚀, autrement connu sous le nom de "U+1F680 ROCKET" !_

## Comment communiquer l’encodage utilisé... et la meilleure façon de le faire.

Avant d'aller plus loin, faisons un point sur le vocabulaire usité :

> Historiquement, les termes "character encoding", "character map", "character set" et "code page" étaient synonymes en informatique [...]. de nos jours, les termes ont des significations connexes bien que distinctes [...] Quoi qu'il en soit, les termes sont toujours utilisés de façon interchangeable, "character set" s'imposant presque partout. <cite>"[Character encoding](https://en.wikipedia.org/wiki/Character_encoding#Character_sets,_character_maps_and_code_pages)", Wikipedia, traduction française</cite>

On retrouve cette utilisation de "character set" ou "charset" pour désigner, en réalité, un encodage, dans les spécifications HTML. Nous ferons de même dans la suite de cet article. Une des façons les plus simples de spécifier un jeu de caractères dans une page HTML est de mettre une balise `<meta>` dans l'élément :

```
<meta charset="utf-8">
```

Déclarer un jeu de caractères de cette façon nécessite de [respecter certaines contraintes [EN]](https://www.w3.org/TR/html5/document-metadata.html#specifying-the-documents-character-encoding), l'une d'entre elles étant que l'élément contenant la déclaration d'encodage de caractères doit être complètement sérialisé sur les premiers 1024 octets du document. Cela permet de s’assurer que les navigateurs recevront l’information par les premiers paquets IPs transitant sur le réseau, et qu’ils seront ensuite en mesure de décoder le contenu du document de manière fiable. Comme la balise charset `<meta>` est la seule à présenter ce type d’impératifs, il est de bon ton de la placer directement après la balise ouvrante :

```
<html …>
  <head …>
    <meta charset="utf-8">
```

Si vous avez peur d’oublier, ne vous inquiétez pas. C'est évidemment l'un des contrôles que Dareboost effectuera pour vous au sein de notre [outil d’analyse de la qualité web](https://www.dareboost.com/fr/service/analyse-site-web). Cependant, il se peut que vous vous trouviez dans la situation où cette déclaration n’est pas suffisante, et que le navigateur n’en tienne pas compte. Pourquoi ? Parce que les métadonnées de la page peuvent indiquer un autre jeu de caractères et qu’en cas de conflit, ces informations, définies dans les en-têtes HTTP, sont prioritaires.

Pour s'assurer de l'information transmise par les métadonnées de la page, vous pouvez utiliser [notre fonctionnalité d’affichage de la Timeline/Waterfall](https://www.dareboost.com/fr/doc/rapport-analyse/timeline-waterfall). Dépliez les informations détaillées de votre document principal pour afficher les en-têtes HTTP de la réponse, y compris l'en-tête `Content-Type`, contenant les métadonnées d'encodage.

{% capture img_alt %}En-tête de type de contenu dans une réponse HTTP{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-11-16/content-type.png"
alt=img_alt
%}

Pour changer cet en-tête HTTP, vous devrez vous adresser à la personne qui gère votre serveur web, qu’il s’agisse de votre hébergeur ou d’un responsable de votre organisation, car la configuration des en-têtes HTTP est très spécifique au serveur Web utilisé, et vous aurez besoin des droits d’administration appropriés pour pouvoir modifier ces paramètres.

Sur **Apache 2.2+**, la configuration de l'UTF-8 comme jeu de caractères par défaut pour les fichiers de types `text/plain` ou `text/html` implique d’utiliser [la directive `AddDefaultCharset` [EN]](https://httpd.apache.org/docs/2.2/en/mod/core.html#adddefaultcharset):

```
AddDefaultCharset utf-8
```

Pour les autres types de fichiers, vous aurez besoin d'utiliser la directive [`AddCharset`](https://httpd.apache.org/docs/current/fr/mod/mod_mime.html#addcharset):

```
AddCharset utf-8 .js .css …
```

Dans **nginx**, vous devrez vous assurer que le [module ngx_http_charset_module est chargé](http://nginx.org/en/docs/http/ngx_http_charset_module.html), puis utiliser la directive `charset`.

```
charset utf-8;
```

Ici aussi, il est possible d'affiner le champs d'application pour que d'autres types de fichiers que `text/html` soient livrés en utf-8, en utilisant la directive `charset_types`:

```
charset_types text/html text/css application/javascript
```

Bien sûr, vous pouvez aussi configurer l’en-tête HTTP `Content-Type` dans votre code côté serveur. En **PHP**, par exemple, vous pouvez utiliser [la fonction réseau the header()](http://php.net/manual/fr/function.header.php). N'oubliez pas, si vous le faites, de définir le type de média (ou type MIME) du corps de la réponse, en plus du jeu de caractères.

```
header('Content-type: text/html; charset=utf-8');
```

_Attention : si vos pages sont délivrées par un Content Delivery Network (CDN), vous devrez peut-être configurer l'en-tête `Content-Type` dans la configuration du CDN, car la plupart d'entre eux ne répercutent pas les en-têtes qu’ils trouvent sur vos serveurs._

## Additional Resources

-   [La liste des types de médias de l'IAN [EN]](https://www.iana.org/assignments/media-types/media-types.xhtml)
-   [Le site web d’Unicode [EN]](http://www.unicode.org/)
-   "[Character encodings: Essential concepts [EN]](https://www.w3.org/International/articles/definitions-characters/#httpheader)", sur le site du W3C dédié à l’internationalisation
-   Vous pensez toujours que l'encodage de caractères est une question triviale ? Regardez "[Anatomy of a Critical Security Bug](https://www.youtube.com/watch?v=yQaRUEwEKxE)", par Andrew Nacin lors de Loop Conf 2015.
