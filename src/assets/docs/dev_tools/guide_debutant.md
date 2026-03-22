# Guide pour Débutants : Projet Warebi Website Front

Bienvenue dans le projet Warebi Website Front ! Ce guide est destiné aux nouveaux développeurs qui intègrent l'équipe. Il explique comment le site web est construit, comment le faire tourner, et comment apporter des modifications.

## Technologies Utilisées

Ce projet est une application web moderne construite avec :

- **React 19** : Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript** : Superset de JavaScript avec typage statique
- **Vite** : Outil de build rapide pour le développement
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **shadcn/ui** : Bibliothèque de composants UI basée sur Radix UI
- **Framer Motion** : Bibliothèque pour les animations
- **i18next** : Pour l'internationalisation (support français et anglais)
- **Lucide React** : Icônes SVG
- **React Router** : Pour la navigation entre pages

## Structure du Projet

Le projet suit une architecture atomique pour les composants :

```
src/
├── components/
│   ├── atoms/          # Composants de base (boutons, inputs, etc.)
│   ├── molecules/      # Composants composés d'atoms (cartes, switchers, etc.)
│   ├── organisms/      # Sections plus complexes (navbar, footer)
│   └── templates/      # Layouts de page
├── pages/              # Pages principales du site
├── hooks/              # Hooks React personnalisés
├── i18n/               # Configuration et fichiers de traduction
├── lib/                # Utilitaires
└── utils/              # Fonctions utilitaires
```

## Comment Lancer le Projet

1. Assurez-vous d'avoir Node.js installé (version 18+ recommandée)
2. Ouvrez un terminal dans le dossier du projet
3. Exécutez `npm install` pour installer les dépendances
4. Lancez `npm run dev` pour démarrer le serveur de développement
5. Ouvrez http://localhost:5173 dans votre navigateur

## Comment Modifier une Page

### Exemple : Modifier la Page Services

La page Services se trouve dans `src/pages/Services.tsx`. Voici comment procéder :

1. **Comprendre la Structure** :
   - La page utilise des animations avec Framer Motion
   - Les textes sont traduits via i18next
   - Les services sont définis dans un tableau `serviceKeys`

2. **Ajouter/Modifier un Service** :
   - Éditez le tableau `serviceKeys` dans Services.tsx
   - Chaque service a : id, key (pour les traductions), icon, technologies, image
   - Ajoutez les traductions correspondantes dans `src/i18n/locales/fr/services.json` et `en/services.json`

3. **Modifier le Contenu** :
   - Pour changer les textes, modifiez les fichiers JSON dans `src/i18n/locales/`
   - Pour changer le layout, éditez le JSX dans Services.tsx

4. **Tester les Changements** :
   - Sauvegardez et vérifiez dans le navigateur
   - Utilisez `npm run lint` pour vérifier le code
   - Testez en mode responsive

## Internationalisation (i18n)

Le site supporte le français et l'anglais :

- **Configuration** : `src/i18n/config.ts`
- **Traductions** : `src/i18n/locales/[lang]/[page].json`
- **Utilisation** : `const { t } = useTranslation('page');` puis `t('key')`

Pour ajouter une nouvelle langue :
1. Créez un dossier dans `locales/`
2. Copiez les fichiers JSON existants
3. Traduisez le contenu
4. Mettez à jour la config

## Composants

### Utiliser les Composants Existants

- Les composants UI sont dans `src/components/atoms/ui/`
- Ils suivent la convention shadcn/ui
- Importez et utilisez comme `<Button>Contenu</Button>`

### Créer un Nouveau Composant

1. Choisissez le bon niveau (atoms/molecules/organisms)
2. Créez un dossier avec le nom du composant
3. Exportez le composant depuis un fichier index.tsx
4. Utilisez TypeScript pour les props

## Styles et Thèmes

- **Tailwind CSS** : Classes utilitaires dans le JSX
- **Thèmes** : Défini dans `tailwind.config.js`
- **Couleurs personnalisées** : `text-neon`, `bg-dark`, etc.
- **Responsive** : Utilisez les préfixes `sm:`, `lg:`, etc.

## Déploiement

- `npm run build` crée les fichiers optimisés
- `npm run preview` pour tester la build localement
- Le dossier `dist/` contient les fichiers à déployer

## Bonnes Pratiques

- Utilisez TypeScript pour le typage
- Respectez la structure atomique des composants
- Testez en responsive design
- Utilisez les traductions pour tous les textes
- Commitez régulièrement avec des messages clairs
- Respectez ESLint pour la qualité du code

## Ressources Utiles

- [Documentation React](https://react.dev/)
- [Guide Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)

Si vous avez des questions, n'hésitez pas à demander à l'équipe !</content>
<parameter name="filePath">c:\Users\ymarega\OneDrive - NORDIKeau\Bureau\warebi\warebi-website-front\src\assets\docs\guide_debutant.md