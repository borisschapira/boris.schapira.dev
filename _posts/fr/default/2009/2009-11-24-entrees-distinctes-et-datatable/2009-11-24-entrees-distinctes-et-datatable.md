---
title: 'Entrées distinctes et DataTable'
canonical: 'http://www.nexeo.fr/blog/2009/11/24/entrees-distinctes-et-datatabl/'
tags:
    - Nexdotnet
date: '2009-11-24'
section: default
lang: fr
type: post
---

Vous avez souvent eu un `DataSet` dont vous vouliez considérer une colonne pour alimenter une liste déroulante pour réaliser, par exemple, un filtre ?

Prenons pour exemple la `DataTable` "MyDataTable" ci-dessous. Si vous définissez directement `MyDataTable` comme source de votre `DropDownList`, en précisant comme `DataValueField` et `DataTextField` la colonne "Etiquette", vous risquez d’apercevoir un doublon pour "Visual Studio".

| Auteur          | Article                                                     | Etiquette     |
|-----------------|-------------------------------------------------------------|---------------|
| Julien Doillon  | [Votre première application .NET pour IPhone](http://blogs.dotnet-france.com/juliend/post/MonoTouch-Votre-premiere-application-NET-pour-IPhone.aspx)                 | MonoTouch     |
| Wilfried Woivré | [Trucs et astuces : Le débuggeur Visual Studio               | Visual Studio](http://wilfriedwoivre.wordpress.com/2009/10/01/trucs-et-astuces-le-dbuggeur-visual-studio/) |
| Thomas Levesque | [Implémenter un objet dynamique personnalisé                 | .NET Futures](http://tomlev.wordpress.com/2009/10/06/c-4-0-implementer-un-objet-dynamique-personnalise/)  |
| Thomas Lebrun   | [Exemples sur l’extensibilité des designers Silverlight/WPF…](http://blogs.developpeur.org/tom/archive/2009/09/17/wpf-des-exemples-sur-l-extensibilit-des-designers-silverlight-wpf-dans-visual-studio-2010-beta-2.aspx) | Visual Studio |

Pour contourner ce problème, utilisez une `DataView` intermédiaire, et la fonction `ToTable`, dont le deuxième argument à True vous assurera l’unicité des éléments pour les colonnes précisées (ici, uniquement "Etiquette") :

```
Public Function GetDropDownListTable() As DataTable
   Dim TempDv As New DataView
   Dim Columns(0) As String
   Columns(0) = "Etiquette"
   TempDv.Table = MyDataTable
   TempDv.Sort = "Etiquette desc"
   Return TempDv.ToTable("Etiquettes", True, Columns)
End Function
```
