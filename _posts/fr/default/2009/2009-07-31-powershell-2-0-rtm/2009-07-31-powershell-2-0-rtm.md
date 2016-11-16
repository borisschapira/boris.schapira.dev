---
title: 'PowerShell 2.0 RTM'
canonical: 'http://www.nexeo.fr/blog/2009/07/31/powershell-2-0-rtm/'
tags:
    - Nexdotnet
date: '2009-07-31'
section: default
lang: fr
type: post
---

A l’instar des systèmes d’exploitation Windows 7 et Windows Server 2008 R2, **PowerShell 2** vient lui aussi de passer en [version RTM](http://blogs.technet.com/powershell/archive/2009/07/28/windows-powershell-2-0-est-rtm.aspx). Logique, puisque PowerShell 2 sera intégré dans ces deux systèmes dès leur sortie.

Rappelons à toutes fins utiles que PowerShell est une interface en ligne de commande basée sur le framework Microsoft .NET. A ce titre, il est possible de faire des choses très sympathiques avec de l’Orienté Objet. Un exemple ? La gestion des service :

```
[System.ServiceProcess.ServiceController]::GetServices('MonService') (new-Object System.ServiceProcess.ServiceController('Service','MonService')).Start() (new-Object System.ServiceProcess.ServiceController('Service','MonService')).WaitForStatus('Running',(new-timespan -seconds 5))
``

PowerShell 2 se distinguera notamment de sa version précédente via plusieurs nouvelles fonctionnalités telles que :

* Exécution à distance
* Interface graphique
* Fonctions avancées
* Support WMI étendu
* Nouvelles cmdlets

De quoi s’amuser quelques temps à enrichir les outils d’administrations de nos serveurs !
