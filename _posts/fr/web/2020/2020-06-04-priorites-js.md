---
title: 'Priorités des chargements JavaScript dans Chrome'
description: >-
    Traduction d'une synthèse d'Addy Osmani sur la manière dont les scripts étaient téléchargés et exécutés dans Chrome jusqu'à février 2019.


tags:
    - 'Performance Web'
    - JavaScript
slug: priorites-js
thumbnail_background: /assets/images/2020-06-04/synthese.png
header1: 'Priorité de chargement (network/Blink)'
header2: "Priorité d'exécution"
header3: "Comment l'utiliser ?"
---

_Je relis et conseille souvent cet article d'Addy Osmani de **février 2019** mais mes interlocuteurs et interlocutrices ne sont pas forcément anglophones. J'ai donc décidé de le traduire._

<div class="emphasis">
<strong>Retrouvez l'original sur le blog d'Addy Osmani&nbsp;:</strong> <a href="https://addyosmani.com/blog/script-priorities/" hreflang="en" lang="en">JavaScript Loading Priorities in Chrome</a>.
</div>

La façon dont les navigateurs ordonnancent et exécutent les scripts peut avoir un impact sur les performances des pages web. Si des techniques comme `<script defer>`, `<link rel=preload>` (et d'autres) influencent le chargement des scripts, il peut également être utile de savoir comment les navigateurs les interprètent. Grâce à Kouhei Ueno, nous disposons maintenant d'un résumé actualisé de la manière dont les scripts sont ordonnancés dans Chrome.

<table class="responsive">
  <thead>
    <tr>
      <td></td>
      <td>
        <strong
          >{{ page.header1 }}</strong
        >
      </td>
      <td><strong>{{ page.header2 }}</strong></td>
      <td><strong>{{ page.header3 }}</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="heading">
        <code>&lt;script&gt;</code> dans <code>&lt;head&gt;</code>
      </td>
      <td data-label="{{ page.header1 }}" class="medium">Moyenne/Haute</td>
      <td data-label="{{ page.header2 }}" class="veryhigh">
        Très Haute -<br>
        Interrompt l'analyse
      </td>
      <td data-label="{{ page.header3 }}">
        <ul>
          <li>
            Scripts ayant une incidence sur le rendu du
            <a
              href="https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_meaningful_paint_and_hero_element_timing" hreflang="en" lang="en"
              >First Meaningful Paint</a
            >
            (FMP) /
            <a
              href="https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint" hreflang="en" lang="en"
              >First Contentful Paint</a
            >
            (FCP) content
          </li>
          <li>
            Scripts devant être exécutés avant d'autres scripts 
            <br><br>
            <strong>Exemples&nbsp;:</strong>
            <ul>
              <li>
                Runtime de Framework (s'il n'y a pas de 
                <a
                  href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web" hreflang="en"
                  >rendu statique</a
                >)
              </li>
              <li>Polyfills</li>
              <li>Tests A/B qui modifient la structure du DOM de l'ensemble de la page</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="heading">
        astuce <code>&lt;link rel=preload&gt;</code> +<br>
        <code>&lt;script async&gt;</code>
        <br>
          <em>ou</em>
        <br>
          <code>&lt;script type=module async&gt;</code>
      </td>
      <td data-label="{{ page.header1 }}" class="medium">Moyenne/Haute</td>
      <td data-label="{{ page.header2 }}" class="high">
        Haute -<br>
        Interrompt l'analyse
      </td>
      <td data-label="{{ page.header3 }}">
        <ul>
          <li>
            Scripts qui produisent un contenu critique (requis pour le FMP)
            <ul>
              <li>Mais ne devraient pas affecter la mise en page au-dessus de la ligne de flottaison</li>
              <li>
                Scripts qui déclenchent des requêtes réseau pour injecter dynamiquement du contenu
              </li>
              <li>
                Scripts devant être exécutés dès que leurs dépendances sont téléchargées, utilisez <code>&lt;script async type=module&gt;</code>
                <br><br>
                <strong>Exemples&nbsp;:</strong>
                <ul>
                  <li>Dessiner quelque chose dans un <code>&lt;canvas&gt;</code></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="heading"><code>&lt;script async&gt;</code></td>
      <td data-label="{{ page.header1 }}" class="low">La plus basse/Basse</td>
      <td data-label="{{ page.header2 }}" class="high">
        Haute -<br>
        Interrompt l'analyse
      </td>
      <td data-label="{{ page.header3 }}">
        <p>Faites
        <a href="https://calendar.perfplanet.com/2016/prefer-defer-over-async/"
          >attention</a
        >
        lorsque vous utilisez <code>&lt;script async&gt;</code>. De nos jours, il est souvent utilisé pour indiquer des scripts non-critiques mais ce n'est pas cohérent car même si le script est chargé en basse priorité, il est exécuté en haute priorité.</p>
        <p><em>NdBoris : la attributes ne sont pas cumulatifs. Un script <code>&lt;script async defer&gt;</code> sera perçu par le navigateur comme un <code>&lt;script async&gt;</code> partout où <code>async</code> est supporté (c'est-à-dire… <a href="https://caniuse.com/script-async" title="Support de l'attribut async pour les scripts externes sur CanIUse.com">quasiment partout</a>). La navigateur ne supportant pas <code>async</code> le considéreront comme un <code>&lt;script defer&gt;</code>.</em></p>
      </td>
    </tr>
    <tr>
      <td class="heading"><code>&lt;script defer&gt;</code></td>
      <td data-label="{{ page.header1 }}" class="low">La plus basse/Basse</td>
      <td data-label="{{ page.header2 }}" class="lowest">
        Très basse -<br>
        S'exécute après les <code>&lt;script&gt;</code>s en fin de
        <code>&lt;body&gt;</code>
      </td>
      <td data-label="{{ page.header3 }}">
        <ul>
          <li>Scripts qui génèrent du contenu non-critique</li>
          <li>
            Scripts qui fournissent des fonctionnalités critiques que &gt;50% de sessions de pages utiliseront
            <br><br>
            <strong>Exemples&nbsp;:</strong>
            <ul>
              <li>Frameworks publicitaires</li>
              <li>
                Runtime de Framework (rendu
                <a
                  href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web#csr" hreflang="en"
                  >côté client</a
                >
                comme
                <a
                  href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web#server-rendering" hreflang="en"
                  >côté serveur</a
                >)
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="heading">
        <code>&lt;script&gt;</code> en fin de <code>&lt;body&gt;</code>
      </td>
      <td data-label="{{ page.header1 }}" class="medium">Moyenne/Haute</td>
      <td data-label="{{ page.header2 }}" class="low">
        Basse -<br>
        Attend la fin de l'analyse
      </td>
      <td data-label="{{ page.header3 }}">
        Attention, quand vous utilisez <code>&lt;script&gt;</code> à la fin de 
        <code>&lt;body&gt;</code> et que vous pensez définir une priorité basse. Ces scripts sont ordonnancés avec une priorité Moyenne/Haute.
      </td>
    </tr>
    <tr>
      <td class="heading">
        <code>&lt;script defer&gt;</code> en fin de
        <code>&lt;body&gt;</code>
      </td>
      <td data-label="{{ page.header1 }}" class="lowest">
        La plus basse/Basse -<br>
        fin de queue
      </td>
      <td data-label="{{ page.header2 }}" class="lowest">
        Très basse -<br>
        S'exécute après les <code>&lt;script&gt;</code>s en fin de
        <code>&lt;body&gt;</code>
      </td>
      <td data-label="{{ page.header3 }}">
        <ul>
          <li>
            Scripts offrant des fonctionnalités interactives utilisées occasionnellement
            <br><br>
            <strong>Exemples&nbsp;:</strong>
            <ul>
              <li>Chargement des "Articles connexes"</li>
              <li>Fonctionnalité "Votre avis nous intéresse"</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;link rel=prefetch&gt;</code> + <code>&lt;script&gt;</code> lors d'une navigation vers la page suivante
      </td>
      <td data-label="{{ page.header1 }}" class="lowest">Inactive / La plus basse</td>
      <td data-label="{{ page.header2 }}" class="medium">Dépend du moment et de la manière dont le script est consommé.</td>
      <td data-label="{{ page.header3 }}">
        Des scripts très susceptibles d'apporter des fonctionnalités importantes à une page visitée ultérieurement.
        <br><br>
        <strong>Exemples&nbsp;:</strong>
        <ul>
          <li>Bundle JavaScript d'une future route</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Note : Les priorités de chargement ne sont pas nécessairement cohérentes d'un navigateur à l'autre. Utilisez donc ces connaissances à bon escient et mesurez-les en cas de doute. Dans l'idéal, cherchez à offrir une expérience de qualité au plus grand nombre d'utilisateurs possible.

Si vous êtes un développeur ou une développeuse web et que vous vous demandez où vous pouvez voir la "Priorité de chargement", Chrome DevTools a une colonne "Priorité" optionnelle disponible dans le panneau Réseau. Cliquez avec le bouton droit de la souris sur les en-têtes de colonne et vous pourrez l'activer :

{% capture img_alt %}Une capture des outils DevTools ouverts sur Walmart.com, onglet Réseau. On y voit un script de polyfill et un script de header en priorité haute, et un script de footer en priorité basse.{% endcapture %}{% include rwd-image.html.liquid
path="/assets/images/2020-06-04/illustration.png"
alt=img_alt
%}

Cette [synthèse](/assets/images/2020-06-04/synthese.png) des priorités ci-dessus est toujours valable en février 2019. Je souhaiterais personnellement avoir une meilleure compréhension des priorités de chargement dans d'autres navigateurs également. J'espère que cet aperçu sera utile à quelqu'un·e d'autre !

Merci à Kouhei, Dom Faralino, Pat Meenan, Kenji Baheux et Yoav Weiss pour leurs contributions permettant de mieux expliquer la pile réseau de Chrome.

## En savoir plus

- <a href="https://bit.ly/script-scheduling" hreflang="en" lang="en">Scheduling Scripts Intuitively and Performantly</a>
- <a href="https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit#" hreflang="en" lang="en">Chrome Resource Priorities and Scheduling</a>
- <a href="https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf" hreflang="en" lang="en">Preload, Prefetch And Priorities in Chrome</a>
- <a href="https://twitter.com/yoavweiss/status/1096075414697639936" hreflang="en" lang="en">Priorities for rel=preload in Chrome and WebKit</a>

---

_[Note de Boris] Et j'ajoute mes propres articles, en français_ :

- [Preload, Prefetch et Preconnect : accélerez votre site avec les Resource Hints](/notes/2020-05-preload-prefetch-et-preconnect-resource-hints/)
- [Comment optimiser les performance de vos parties tierces](/notes/2020-05-optimiser-parties-tierces/)
- [Comment différer l’exécution d’un script ?](/notes/2017-12-comment-differer-l-execution-d-un-script/)
