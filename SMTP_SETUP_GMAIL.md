# Configuration SMTP Gmail pour YNOV-AFRIK

Ce guide vous explique comment configurer l'envoi d'emails via SMTP Gmail.

## 📋 Prérequis

1. Un compte Gmail
2. Node.js installé sur votre serveur
3. Un serveur backend (voir `server-example.js`)

## 🔐 Étape 1 : Créer un Mot de Passe d'Application Gmail

Gmail nécessite un "Mot de passe d'application" pour les connexions SMTP sécurisées.

### Instructions :

1. **Activez la validation en 2 étapes** (si ce n'est pas déjà fait)
   - Allez sur https://myaccount.google.com/security
   - Activez "Validation en deux étapes"

2. **Créez un mot de passe d'application**
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Application" : "Autre (nom personnalisé)"
   - Entrez "YNOV-AFRIK Website"
   - Cliquez sur "Générer"
   - **Copiez le mot de passe** (16 caractères, espaces inclus)

## 🖥️ Étape 2 : Configurer le Serveur Backend

### Installation des dépendances

```bash
npm install express nodemailer cors dotenv
```

### Configuration

1. **Créez un fichier `.env` dans le dossier de votre serveur** avec :

```env
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre_email@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_application_16_caracteres
SMTP_FROM=ynovafrik@gmail.com
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

2. **Utilisez le fichier `server-example.js`** comme base pour votre serveur

3. **Démarrez le serveur** :

```bash
node server-example.js
```

Le serveur devrait démarrer sur `http://localhost:3000`

## 🌐 Étape 3 : Configurer le Frontend

1. **Dans le fichier `.env` du frontend**, assurez-vous d'avoir :

```env
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

2. **Pour la production**, remplacez `localhost:3000` par l'URL de votre serveur :

```env
VITE_EMAIL_API_ENDPOINT=https://votre-domaine.com/api/send-email
```

## ✅ Test

1. Démarrez le serveur backend
2. Démarrez le frontend (`npm run dev`)
3. Remplissez le formulaire de contact
4. Vérifiez que l'email arrive dans la boîte `ynovafrik@gmail.com`

## 🔒 Sécurité

- ⚠️ **Ne commitez JAMAIS** le fichier `.env` avec vos mots de passe
- ✅ Utilisez des variables d'environnement
- ✅ En production, utilisez HTTPS
- ✅ Limitez les requêtes à votre API (rate limiting)

## 🐛 Dépannage

### Erreur "Invalid login"
- Vérifiez que vous utilisez un **mot de passe d'application**, pas votre mot de passe Gmail normal
- Vérifiez que la validation en 2 étapes est activée

### Erreur "Connection timeout"
- Vérifiez que le port 587 n'est pas bloqué par votre firewall
- Vérifiez que `SMTP_SECURE=false` pour le port 587

### Erreur CORS
- Assurez-vous que `cors()` est bien configuré dans votre serveur Express
- Vérifiez que l'URL de l'API correspond bien

## 📧 Alternative : EmailJS

Si vous préférez une solution sans backend, consultez `EMAIL_SETUP.md` pour utiliser EmailJS.

