---
# You can insert information in the Front-Matter if needed
---
## Protocoles de communication

Bien que pas tous équivalents au niveau de la performance, des droits, et de la prise en charge, **git** supporte plusieurs protocoles&nbsp;:

* SSH (port 22)&nbsp;: protocole R/W sécurisé, Le plus fréquent
```bash
git clone ssh://user@git-repo
```
* **git** (port 9418)&nbsp;: pour consultation
```bash
git clone git://github.com/bfolliot/formation-git.git
```
* HTTP(S), FTP(S) (port 80) ou _Filesystem_&nbsp;: à éviter tant que possible&nbsp;!
