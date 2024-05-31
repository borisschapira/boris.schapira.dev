---
title: 'Punir la loyauté'
description: >-
    Que se passe-t-il lorsque vos utilisateurs vous donnent leur consentement pour l'utilisation de leurs données ? Bien souvent, leur qualité de service se détériore...


tags:
    - 'Performance Web'
    - RGPD
slug: consentement-tests
translations:
    en: consent-tos-webperf
---

Imaginons que vous déployiez, sur votre site, un outil de collecte du consentement lié à vos conditions générales d'utilisation (CGU). Ce consentement se découpe le plus généralement autour de différents usages : consentement à la télémétrie, consentement à la publicité, consentement à la transmission d'information à des tiers…

Si vous souhaitez mesurer avec finesse l'impact de ces différents "niveaux de consentement" sur la Performance Web, alors il faut faire le tour de tous les cas d'usage, en fonction de la relation qu'entretient la personne concernée avec votre site.

Pour mesurer les performances de ces cas d'utilisation, vous aurez besoin soit de mesures réelles, soit de solutions de surveillance synthétique. La plupart des outils ignoreront la bannière de cookies et testeront donc sans charger ces dépendances supplémentaires. Vous devrez donc configurer vos tests de manière à ce qu'ils commencent par une configuration spécifique (souvent un cookie) pour reproduire tous les cas d'utilisation :

1. Cette personne bloque le script de demande du consentement (via un adblocker, par exemple).
2. Cette persone a donné son consentement à cette version des CGU.
3. Cette personne a donné son consentement à une version antérieure des CGU, il est donc nécessaire de lui redemander son consentement.
4. Cette personne a refusé son consentement à cette version des CGU.
5. Cette personne a refusé son consentement à une version antérieure des CGU ; il peut être opportun de lui demander son consentement à nouveau.

Le cas numéro 3 peut donner lieu à une quantité importante de tests car il faudrait idéalement procéder à tes tests pour l'ensemble des combinaisons de consentements : "télémétrie", "télémétrie + publicités", "publicités seule"…

**Pour simplifier**, vous pouvez vous concentrer sur les deux tests les plus extrêmes :

1. que se passe-t-il si la personne refuse ou ne donne pas son consentement ?
2. que se passe-t-il si la personne a accepté l'ensemble des usages courants ?

Très souvent, le second cas est bien plus lent et inutilisable que le premier, sans pour autant que ces personnes ne se voient offrir de nouvelles fonctionnalités compensant cette dégradation.

L'occasion pour les Responsables Produit de réfléchir à l'éthique de ce type d'implémentation. Est-il normal que nous offrions **l'expérience la plus dégradée à nos utilisateurs et utilisatrices les plus fidèles** ?

Cette réflexion peut aboutir à une transformation de l'offre, soit vers un modèle où les utilisateurs et utilisatrices fidèles sont récompensé·es pour leur sacrifice (en ayant accès à des fonctionnalités qui ne sont disponibles que pour celles et ceux qui acceptent la collecte de données par des tiers), soit vers un modèle payant, plus protecteur mais moins accessible à tous.

Philosophiquement, nous entrons alors dans des considérations très actuelles sur la vie privée en tant que capital ou en tant que commun. Un sujet fascinant.
