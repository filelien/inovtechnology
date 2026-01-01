# 🚀 Création du fichier .env

## Étapes rapides

1. **Créez un fichier `.env`** à la racine du projet (même niveau que `package.json`)

2. **Copiez ce contenu** dans le fichier `.env` :

```env
# Configuration SMTP Google (Gmail)
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

3. **Pour le serveur backend**, créez un autre fichier `.env` dans le dossier de votre serveur avec :

```env
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre_email@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_application_gmail
SMTP_FROM=ynovafrik@gmail.com
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

## 📝 Important

- Remplacez `votre_email@gmail.com` par votre adresse Gmail
- Remplacez `votre_mot_de_passe_application_gmail` par le mot de passe d'application Gmail (voir `SMTP_SETUP_GMAIL.md`)
- Le fichier `.env` est déjà dans `.gitignore` pour ne pas être commité

## 🔐 Obtenir un mot de passe d'application Gmail

1. Allez sur https://myaccount.google.com/apppasswords
2. Créez un nouveau mot de passe d'application
3. Utilisez ce mot de passe (16 caractères) dans `SMTP_PASSWORD`

Voir `SMTP_SETUP_GMAIL.md` pour les instructions détaillées.

