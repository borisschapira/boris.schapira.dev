# Tests fonctionnels E-Boutique

## Installation

```
npm install
```
## Configuration

* Comptes utilisés pour les tests : renommer `credentials-examples.js` en `credentials.js`
* Affichage/masquage du navigateur : dans les fichiers de tests, la configuration de Nightmare définit la visibilité :

```
var nm_config = {
  show: true
};
```

## Utilisation

En local :

```
npm test
```

En integ :

```
npm run integ
```

En recette :

```
npm run recette
```
