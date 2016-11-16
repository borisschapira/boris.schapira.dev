---
title: 'Vagrant, Windows et NFS'
tags:
    - Outils
    - Windows
date: '2014-06-23'
section: default
lang: fr
type: post
---

Si vous développez avec Vagrant sous Windows, vous avez probablement déjà vu ce message&nbsp;:

> **Windows users**: NFS folders do not work on Windows hosts. Vagrant will ignore your request for NFS synced folders on Windows.
>   <cite>[NFS - Synced Folders - Vagrant Documentation](https://docs.vagrantup.com/v2/synced-folders/nfs.html "NFS - Synced Folders - Vagrant Documentation")</cite>

Ce temps est révolu ! Voici un plugin très pratique, qui permet d'activer NFS sous Windows pour vos _boxes_ Vagrant. Il s'agit de [vagrant-winnfsd](https://github.com/GM-Alex/vagrant-winnfsd "Dépôt GitHub du plugin vagrant-winnfsd"), qui s'installe par un simple&nbsp;:

```
    vagrant plugin install vagrant-winnfsd
```

A noter que vous pouvez conditionner l'activation de NFS à sa présence, comme ceci&nbsp;:

```
nfs_setting = RUBY_PLATFORM =~ /darwin/ &quot;, &quot;, RUBY_PLATFORM =~ /linux/ &quot;, &quot;, Vagrant.has_plugin?("vagrant-winnfsd")
config.vm.synced_folder ".", "/var/www", :nfs => nfs_setting
```

Très pratique pour le développement Symfony2 notamment, car les nombreux accès fichiers ralentissent énormément l'exécution sans cela.
