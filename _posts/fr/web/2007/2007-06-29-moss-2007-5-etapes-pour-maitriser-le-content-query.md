---
title: '[MOSS 2007] 5 étapes pour le Content Query Web Part'
tags:
    - 'Content Query Web Part'
    - 'MOSS 2007'
slug: moss-2007-5-etapes-pour-maitriser-le-content-query-web-part
---

Le Content Query Web Part est le module Web pour Microsoft Office SharePoint Server 2007 permettant de récupérer une liste quelconque du site courant pour l'afficher dans la page. Voici quelques explications pour apprendre à s'en servir.

<!-- more -->

Les modalités d'affichage sont de deux types : _la sélection et la mise en page_.

La _sélection_ consiste à filtrer et grouper les éléments, à partir des propriétés renseignées dans les colonnes de la liste, pour n'afficher que ceux que l'on désire afficher. Dans une liste de "documents publiés dans la Presse", on pourra ainsi choisir d'afficher sur la page dédiée à un magasine uniquement les articles qui y ont été publiés (filtrage sur la source de l'article) ou seulement les articles du mois de mai (filtrage sur la date de parution).

La _mise en page_ définit la façon dont les éléments vont être affichés. Elle se définit principalement dans la feuille de style de votre site et dans le fichier ItemStyle.xsl qui se situe dans &lt;SiteSP&gt;/Style Library/XSL Style Sheets/. Consistant en un template XSL, la mise en page peut profiter de différentes fonctions XML.

Les mises en page définies dans ItemStyle.xsl apparaissent ensuite dans l'attribut Style d'élément (ItemStyle) du Content Query Web Part, dans "Présentation".

**Ce qu'il faut savoir**

Le Content Query Web Part ne récupère pas toutes les colonnes de votre liste. En fait, il ne récupère à chaque requête qu'une petite partie des informations. Par défaut, il est ainsi impossible d'afficher dans un Content Query Web Part le contenu d'une page d'article. Pour cela, il va falloir manipuler un peu.

On pourrait le faire en codant à la main un Web Part sous Visual Studio. Mais avouez que ce n'est pas très sport et surtout, ça entraine une charge inutile car il est possible d'utiliser les outils existants pour contourner ce problème. Ouvrez SharePoint Designer et rendez vous dans &lt;SiteSP&gt;/\_catalogs/wp.

Copiez l'actuel ContentQuery.Web Part puis éditez la copie renommée avec un nom qui fait sens. Le code de ce fichier est composé de balises XML. Modifiez ou ajoutez la propriété suivante :

```
<property name="CommonViewFields" type= »string »></property>
```

Cette propriété concerne les colonnes qui devront exceptionnellement être considérées. Vous devez connaitre le nom en dur de votre colonne et son type puis les entrer sous le modèle "Nom, Type ;". Pour connaitre le nom de votre colonne en dur (qui peut être différent du nom affiché), rendez vous en mode interface dans les paramètres de votre liste, puis éditez la colonne qui vous intéresse. Dans la barre d'adresse de votre navigateur, notez ce qui est noté entre "&amp;Field=" (et "&amp;").

Attention, certains caractères sont traduits par leurs valeurs HTML. Par exemple, la colonne "Type de Publication" deviendra "Type%5Fx0020%5Fde%5Fx0020%5Fpublication". Évitez donc, au moment de nommer vos colonnes, les espaces et caractères spéciaux.

Sachez également que le nom en dur (celui qu'on retrouve dans la barre d'adresse) ne se changera pas si vous renommez votre colonne.

**Exemple de procédure complète**

Votre bibliothèque de pages contient des articles référencés (une référence consiste en un numéro à 3 chiffres dans cet exemple) et vous voulez afficher dans un Content Query Web Part l'ensemble des articles dont la référence est supérieurdes à 200 avec pour chaque article la photo Image Report de l'article, le nom de l'auteur, son email, et un aperçu du contenu de son article.

1)<span> </span>Vérifiez que votre bibliothèque contient bien une colonne "Auteur" et une colonne "Courrier Electronique" (d'origine sur MOSS 2007). Vérifiez la présence de votre colonne personnalisée "Ref" et son renseignement correct pour chacun des articles.

2)<span> </span>Ouvrez ItemStyle.xsl et ajoutez ce nouveau style à la fin, juste avant la balise &lt;/xsl:stylesheet&gt;:

```
<xsl:template name= »customItemStyle » match= »Row[@Style=’ customItemStyle ‘] » mode= »itemstyle »> <xsl:variable name= »len » select= »150 »/> <xsl:variable name= »SafeImageUrl »> <xsl:call-template name= »OuterTemplate.GetSafeStaticUrl »> <xsl:with-param name= »UrlColumnName » select= »‘ImageUrl’ »/> </xsl:call-template> </xsl:variable> <xsl:variable name= »SafeLinkUrl »> <xsl:call-template name= »OuterTemplate.GetSafeLink »> <xsl:with-param name= »UrlColumnName » select= »‘LinkUrl’ »/> </xsl:call-template> </xsl:variable> <xsl:variable name= »DisplayTitle »> <xsl:call-template name= »OuterTemplate.GetTitle »> <xsl:with-param name= »Title » select= »@Title »/> <xsl:with-param name= »UrlColumnName » select= »‘LinkUrl’ »/> </xsl:call-template> </xsl:variable> <xsl:variable name= »LinkTarget »> <xsl:if test= »@OpenInNewWindow = ‘True’ » >_blank</xsl:if> </xsl:variable> <xsl:variable name= »JustContent »> <xsl:call-template name= »removeMarkup »> <xsl:with-param name= »string » select= »@PublishingPageContent » /> </xsl:call-template> </xsl:variable> <div id= »linkitem » class= »item »> <table style= »width:100%; »> <tr> <xsl:if test= »string-length($SafeImageUrl) != 0 »> <td class= »image-area-left »> <a href= »{$SafeLinkUrl} » target= »{$LinkTarget} »> <img class= »image-fixed-width » src= »{$SafeImageUrl} » alt= »{@ImageUrlAltText} »/> </a> </td> </xsl:if> <td class= »link-item »> <xsl:call-template name= »OuterTemplate.CallPresenceStatusIconTemplate »/> <a href= »{$SafeLinkUrl} » target= »{$LinkTarget} » title= »{@LinkToolTip} »> <xsl:value-of select= »$DisplayTitle »/> </a> <div class= »description »> <xsl:value-of select= »concat(substring($JustContent,0,$len),substring-before(substring($JustContent,$len, $len+30),’ ‘)) »/> <a href= »{$SafeLinkUrl} » target= »{$LinkTarget} » title= »En savoir plus »>…</a><br> Contact : <a href= »mailto:{@EMail} »><xsl:value-of select= »@_Author »/></a> </div> </td> </tr> </table> </div> </xsl:template>
```

Cette mise en page affichera les premiers mots du contenu de l'article (la définition sera composée des mots entamés dans les 150 premières lettres de l'article).

3)<span> </span>Copiez ContentQuery.Web Part et renommez en customArticleQuery.Web Part. Ouvrez customArticleQuery.Web Part et ajoutez :

```
<property name= »CommonViewFields » type= »string »> PublishingPageContent,Note; _Author,Text; EMail, Text; Ref, Integer; </property>
```

Pour que votre Content Query Web Part requête, en plus des champs habituels, le contenu des pages, l'auteur, son email et la référence de la page.

Profitez-en pour redéfinir les propriétés "Title" et "Description" de customArticleQuery.Web Part afin de le rendre facilement trouvable dans votre galerie de Web Parts.

4)<span> </span>Insérez votre Web Part personnalisé dans votre page. Filtrez sur la colonne de référence pour n'afficher que les éléments dont la référence est supérieure à 200.

5)<span> </span>Choisissez le style d'élément (Item Style) "customItemStyle".

Et voilà , vous maitrisez votre Content Query Web Part. À vous la puissance des listes sans avoir ouvert Visual Studio. Elle est pas belle la vie ?
