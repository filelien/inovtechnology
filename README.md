# INOV TECHNOLOGY - Site Web

Site web professionnel pour INOV TECHNOLOGY avec support multilingue, mode sombre/clair, et système de messagerie.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Configuration Email

1. **Créer le fichier `.env`** à la racine du projet :
```env
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

2. **Installer les dépendances du serveur email** (si nécessaire) :
```bash
npm install express nodemailer cors
```

### Démarrage

1. **Démarrer le serveur email** (Terminal 1) :
```bash
node start-email-server.cjs
```

2. **Démarrer le frontend** (Terminal 2) :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📧 Système de Messagerie

Le système utilise un serveur backend SMTP pour l'envoi d'emails.

- **Serveur SMTP** : Gmail (smtp.gmail.com:587)
- **Email de destination** : ynovafrik@gmail.com
- **Configuration** : Voir `start-email-server.cjs`

**Important** : Le serveur email doit être démarré avant d'utiliser le formulaire de contact.

## 🌍 Langues Supportées

- Français (fr)
- English (en)
- Español (es)
- Português (pt)
- العربية (ar)
- Kréyòl Gwiyan (cr) - Fallback vers le français

## 🎨 Thèmes

- Mode clair
- Mode sombre (toggle dans le footer)

## 📁 Structure du Projet

```
├── src/
│   ├── components/     # Composants React
│   ├── pages/         # Pages du site
│   ├── contexts/      # Contextes (Langue, Thème)
│   ├── data/          # Données (projets, services)
│   ├── services/      # Services (email)
│   └── utils/         # Utilitaires
├── public/            # Assets statiques
├── start-email-server.cjs  # Serveur backend email
└── .env              # Variables d'environnement
```

## 🔧 Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Nodemailer (backend)

## 📝 Scripts Disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser le build de production
```

## 🚀 Déploiement

### Vercel
1. Connectez votre repository GitHub à [Vercel](https://vercel.com)
2. Vercel détectera automatiquement la configuration dans `vercel.json`
3. Le déploiement se fera automatiquement à chaque push sur `main`

### Netlify
1. Connectez votre repository GitHub à [Netlify](https://netlify.com)
2. Netlify utilisera automatiquement `netlify.toml` pour la configuration
3. Le fichier `public/_redirects` gère le routing SPA (Single Page Application)

### GitHub Pages
Si vous utilisez GitHub Pages, vous devrez configurer le base path dans `vite.config.ts` :
```typescript
export default defineConfig({
  base: '/nom-du-repo/',
  // ...
});
```

**Note** : Pour GitHub Pages, assurez-vous que le dossier `dist` est bien généré après `npm run build`.

## ⚠️ Dépannage

### Erreur "Le serveur email n'est pas accessible"
**Solution** : Démarrez le serveur email avec `node start-email-server.cjs` avant d'utiliser le formulaire de contact.

### Erreur SMTP
Vérifiez que :
- Le mot de passe d'application Gmail est correct
- La validation en 2 étapes est activée
- Le serveur email est démarré

## 📞 Contact

- Email : ynovafrik@gmail.com
- Téléphone : +228 70 66 28 21

## 📄 Licence

Tous droits réservés - INOV TECHNOLOGY
