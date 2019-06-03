---
title: 'Acquisition de ReCaptcha, chapeau Google'
---

Je ne suis pas un fervent défenseur de la firme californienne mais là, je dois
avouer qu'ils ont fait l'une des meilleures opérations d'acquisition qui soit.
Explications.

<!-- more -->

Quitte à défrayer la chronique, Google mène actuellement la plus **grande
campagne de numérisation** d'ouvrages ayant jamais eu lieu. Pour cela, Google
utilise des algorithmes qui partent des pages scannées des ouvrages,
reconnaissent les caractères des mots et déterminent ainsi le contenu des
documents. Ces applications, appelées
<abbr title="Optical Character Recognition">OCR</abbr>, permettent donc de
passer d'une image (la page scannée) à un document numérique. Mais ces OCR ont
un défaut : **les ordinateurs ne sont plus capables de reconnaitre les mots
quand les pages sont trop abîmées**. Dommage, car un humain, lui, saurait.

Et voilà **l'idée géniale de Google** : racheter ReCaptcha. Qu'est qu'un
<abbr title="Completely Automated Public (Turing) Test (to tell) Computers (and) Humans Apart">CAPTCHA
</abbr>? Il s'agit d'un test sommaire permettant de déterminer que l'on a bien
affaire à une être humain très utilisé sur le Net (le test, pas l'umain, hein).
On affiche une série de lettres et de chiffres, parfois des mots complets sous
forme d'image que l'on a au préalable dégradée (lettres troubles, alignement
défectueux, bruit…), et on demande aux utilisateurs de retrouver les caractères
d'origine.

En remplaçant une partie du Captcha par une portion d'une image scannée qu'un
<abbr title="Optical Character Recognition">OCR</abbr> n'arrive pas reconnaitre,
Google fait d'une pierre deux coups. Il offre aux utilisateurs un Captcha
efficace (les propres algorithmes de Google sont incapables de résoudre le
problème) tout en les faisant travailler au grand projet de numérisation (en
reconnaissant à l'œil ce que les ordinateurs sont incapables de lire). Car dans
un ReCaptcha, l’image à reconnaitre est composée de deux parties. Seule une des
deux parties sera issue d’un échec
<abbr title="Optical Character Recognition">OCR</abbr>. L’autre servira
effectivement à la validation CAPTCHA. La question est alors : comment vérifier
que l’utilisateur donne la bonne réponse, c’est-à-dire écrive bien en caractères
numériques le mot représenté sur l’image ? Je pense que cela repose sur 4
facteurs :

1.  La confiance : l’utilisateur n’a aucun intérêt à donner la mauvais
    translation de l’image ou à se regrouper avec d’autres utilisateurs pour
    nuire au système.
2.  L’inconnu : l’utilisateur n’a aucun moyen de déterminer quelle partie du
    Capcha sert au test, et quelle partie est issue d’un échec OCR.
3.  La compétence: si l’utilisateur a trouvé le Captcha de TEST malgré les
    déformations, il y a fort à parier qu’il trouvera déterminera le mot sur
    lequel a buté l’OCR.
4.  Le nombre : en proposant la même image à plusieurs utilisateurs, on peut
    comparer leurs réponses. Si elles sont identiques, le processus est
    confirmé.

Voilà un superbe exemple de proposition où tout le monde est **gagnant**. Vous
en connaissez d'autres ?
