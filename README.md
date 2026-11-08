# Manzil – site du brunch

Site statique (HTML / CSS / JS), sans outil de build.

## Structure

```
index.html          contenu de la page (textes, horaires, adresse)
css/style.css       styles ; les couleurs sont dans :root en haut du fichier
js/menu-data.js     tous les plats et prix du menu
js/main.js          affichage du menu par onglets
images/             photos et logo
```

## Modifier

- **Un prix ou un plat** : `js/menu-data.js`
- **Horaires et adresse** : section `<footer id="contact">` dans `index.html`
- **Couleurs** : variables `--ink`, `--clay`, `--sand`, `--olive` dans `css/style.css`
- **Photos** : remplace les fichiers de `images/` en gardant les mêmes noms

## Voir le site en local

Ouvre `index.html` dans ton navigateur.

## Mettre en ligne avec GitHub Pages

1. Pousse le dossier sur un dépôt GitHub.
2. Settings → Pages → Source : branche `main`, dossier `/ (root)`.
3. Le site est disponible à `https://<ton-user>.github.io/<ton-repo>/`.
