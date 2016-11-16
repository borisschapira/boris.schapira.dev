---
title: '[SharePoint] Récupérer des informations de colonnes personnalisées dans des Librairies SharePoint à travers XSLT'
tags:
    - Sharepoint
date: '2007-05-23'
section: default
lang: fr
type: post
---

Lorsque vous utilisez un _Content Query Web Part_, le comportement associé par défaut pour la présentation des informations est celui contenu dans le fichier XML situé à l&#039;adresse _&lt;root&gt;/Style Library/XSL Style Sheet/ItemStyle.xsl_, entre les balises _&lt;xsl:template name=&quot;Default&quot;…_ et _&lt;/xsl:template&gt;._

Cette mise en page par défaut a donc cette tête&nbsp;:

`&lt;div id=&quot;linkitem&quot; class=&quot;item&quot;&gt;

&lt;xsl:if test=&quot;string-length($SafeImageUrl)&nbsp;!= 0&quot;&gt;

&lt;div class=&quot;image-area-left&quot;&gt;

&lt;a href=&quot;{$SafeLinkUrl}&quot; target=&quot;{$LinkTarget}&quot;&gt;

&lt;img class=&quot;image&quot; src=&quot;{$SafeImageUrl}&quot; alt=&quot;{@ImageUrlAltText}&quot; /&gt;

&lt;/a&gt;

&lt;/div&gt;

&lt;/xsl:if&gt;

&lt;div class=&quot;link-item&quot;&gt;

&lt;xsl:call-template name=&quot;OuterTemplate.CallPresenceStatusIconTemplate&quot;/&gt;

&lt;a href=&quot;{$SafeLinkUrl}&quot; target=&quot;{$LinkTarget}&quot; title=&quot;{@LinkToolTip}&quot;&gt;

&lt;xsl:value-of select=&quot;$DisplayTitle&quot;/&gt;

&lt;/a&gt;

&lt;div class=&quot;description&quot;&gt;

&lt;xsl:value-of select=&quot;@Description&quot; /&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;
`

Ce qui correspond à l'image de publication alignée à gauche, avec un titre/lien vers l'article et sa description.

Lorsque vous ajoutez des colonnes personnalisées, par exemple dans le cadre de la création d'un nouveau type de contenu de mise en page, il peut arriver que vous ne sachiez pas le nom exact donné à vos colonnes par SharePoint dans ses extractions XML (voir même que vous ne connaissiez pas les traductions anglaises des colonnes existantes).

Vous pouvez récupérez le nom de vos colonnes gr&acirc;ce à Microsoft Office SharePoint Designer.

Ouvrez le sous-site dans lequel se trouve la liste concernée. Affichez la barre d'outils _Data Source Library_. Recherchez à l'intérieur des _Librairies_ SharePoint celle que vous désirez requêter. Cliquez, puis sélectionnez _Show Data_. Là , choisissez la colonne qui vous intéresse, cliquez-droit et _Copy Item XPath_.

Votre presse-papier contient désormais le raccourci menant à la colonne que vous désirez requêter.