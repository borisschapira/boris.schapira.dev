---
title: 'Quelles nouveautés pour C# 4.0'
tags:
    - .NET
---

Le langage C# (qui arrive gentiment sur ses 10 ans) évolue de version en version. C# 2 a apporté les [Génériques](<http://msdn.microsoft.com/fr-fr/library/512aeb7t(VS.80).aspx>), C# 3.0 a propulsé [LINQ](http://msdn.microsoft.com/fr-fr/library/bb397933.aspx) et tout ce qui était nécessaire à son intégration.

_Quelques infos sur cette présentation_ :

- Mitsu semble avoir utiliser les slides de la présentation TechEd 08 "**The future of C#**" (par Mads Torgersen). Nous devrions donc la voir apparaitre rapidement sur TechNet.
- Pour les anglophones, un article très complet est disponibles sur [MSDN : C# Futures](https://code.msdn.microsoft.com:443/csharpfuture).

## Quelle surprise nous réserve C# 4.0 ?

C'est ce que [Mitsu Furuta](http://blogs.msdn.com/b/mitsufu/) nous a dévoilé mardi en session aux Microsoft TechDays 2009\. Pour répondre à cette question, Mitsu nous a proposé d’analyser les grandes tendances actuelles en matière de développement :

- L’envie de développer sur [des langages de plus en plus déclaratifs](https://fr.wikipedia.org/wiki/Programmation_d%C3%A9clarative), facilement compréhensibles. Les développeurs peuvent ainsi se concentrer d’avantage sur ce qu'ils doivent faire, pas sur la façon dont ils pourront rendre leur [code impératif](https://fr.wikipedia.org/wiki/Programmation_imp%C3%A9rative) fonctionnel.
- L’attrait pour les langages dynamiques. Php, Javascript, Ruby… connaissent un succès qui ne se dément pas. La simplicité du développement, le typage implicite et l’absence de compilation y sont pour beaucoup.
- Paradoxalement, un intérêt sans cesse renouvelé pour les langages statiques. Ils apportent leur lot de robustesse, de performance et d’outils intelligents comme IntelliSense dans Visual Studio, ainsi que, généralement, une meilleure capacité à* monté en charge* ([ce point a été développé par Mitsu en commentaire](/notes/2009-02-quelles-nouveautes-pour-c-40/)).
- Enfin, un besoin important d’économiser de l’énergie en privilégiant les technologie multicores, et donc de maitriser les problématiques d’accès concurrent et de gestion de ressources démultipliées.

C# 4.0 s’efforcera donc de répondre à l’ensemble de ses problématiques. Il poursuivra le travail de C# 3.0 et continuera à promouvoir l'utilisation de [LINQ](http://msdn.microsoft.com/fr-fr/library/bb397933.aspx), afin de rendre le code facilement compréhensible. Il fournira également des capacités nouvelles en programmation dynamique grâce à la DLR, un socle de création de langages dynamiques implanté sur la CLR qui donnera accès aussi bien à un Object Binder .NET qu’à des Binder Silverlight, Python ou Ruby…

Mais la grosse révolution de C# 4.0 est qu'il permettra aussi de typer des objets dynamiquement. Enfin, soyons plus précis, il introduira un type statique `dynamic` dont la résolution se fera non pas à la compilation, mais à l’exécution (la compilation générant en fait du script). Une vraie révolution dans le monde du .NET et une annonce très attendue par ceux qui utilisent la [réflexion](http://emerica.developpez.com/dotnet/reflection/introduction/csharp/) à outrance. L’exemple donnée est assez parlant. Imaginez que vous ayez une méthode `GetCalculator()` en provenance d’une [usine logicielle](https://fr.wikipedia.org/wiki/Software_factory), qui renvoie un objet de type **Object** (mais dont vous savez qu’il s’agit d’un calculateur). Voici ce qu’il fallait écrire avant pour calculer 10+20 :

```cs
object calc = GetCalculator();
Type calctype = calc.gettype();
object res = calctype.InvokeMember("Add", BindingFlags.InvokeMethod, null, new object[] {10, 20}); int sum = convert.ToInt32(res).
```

Pas très sexy, un ? Notamment la phase d’appel à la procédure par invocation… Voilà ce que cela pourra donner en C# 4.0 :

```cs
dynamic calc = GetCalculator();
int sum = calc.add(10,20);
```

C’est pas franchement mieux ? C# 4.0 introduira également les paramètres optionnels et nommés (oui, il aura fallu un certain temps…). Plus la peine d’écrire des appels COM à rallonge (quel enfer), ou de développer 8 signatures d’une même méthode pour définir des valeurs par défaut.

Le dernier point abordé par Mitsu lors de cette présentation est [la sécurité de la co- et de la contra-variance](<http://msdn.microsoft.com/fr-fr/library/ms173174(VS.80).aspx>). Mais je ne crois pas que je vous en parlerai tout de suite… je n’ai pas encore compris ce que c’était (mais j’y travaille) !
