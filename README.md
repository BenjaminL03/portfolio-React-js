Portfolio - Benjamin Leo

## Description

Ce projet est un portfolio de développeur web full stack réalisé avec React.js. Il présente mes compétences, mes services et mes réalisations dans le domaine du développement web.

Le site comprend les pages suivantes :

- **Accueil** : Présentation personnelle et compétences techniques
- **Services** : Offres de services (UX Design, Développement web, Référencement)
- **Portfolio** : Galerie de projets réalisés
- **Contact** : Formulaire de contact et coordonnées
- **Mentions légales** : Informations légales du site

## Technologies utilisées

- **React.js** - Framework JavaScript
- **React Router** - Gestion des routes
- **Bootstrap 5** - Framework CSS responsive
- **Bootstrap Icons** - Icônes
- **Google Fonts** - Police Nunito Sans
- **API GitHub** - Récupération dynamique des données de profil

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 14 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn**
- **Git** - [Télécharger Git](https://git-scm.com/)

Pour vérifier les installations :

```bash
node --version
npm --version
git --version
```

Installation

Cloner le dépôt\*\*

```bash
git clone https://github.com/BenjaminL03/portfolio.git
```

Accéder au dossier du projet\*\*

```bash
cd portfolio
```

Installer les dépendances\*\*

```bash
npm install
```

Lancement

Mode développement

Pour lancer le serveur de développement :

```bash
npm start
```

Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

Le serveur se recharge automatiquement à chaque modification du code.

Mode production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build/`.

Structure du projet

```
portfolio/
├── public/
│   ├── images/           # Images du site
│   ├── favicon.png       # Favicon
│   └── index.html        # Page HTML principale
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── GitHubModal.js
│   ├── pages/            # Pages du site
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   └── MentionsLegales.js
│   ├── App.js            # Composant principal
│   ├── App.css           # Styles personnalisés
│   ├── index.js          # Point d'entrée
│   └── index.css         # Styles globaux
├── package.json          # Dépendances du projet
└── README.md             # Documentation
```

Auteur

\*\*Benjamin Leo - Développeur web full stack

GitHub : [@BenjaminL03](https://github.com/BenjaminL03)

Licence

Ce projet est réalisé dans le cadre d'une formation au Centre Européen de Formation.
