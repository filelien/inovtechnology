# 📧 Configuration Email - Envoi vers ynovafrik@gmail.com

## ✅ Configuration Actuelle

Le système est **déjà configuré** pour envoyer les emails à **ynovafrik@gmail.com**.

## 🚀 Pour activer l'envoi via SMTP

### 1. Créer le fichier `.env` à la racine du projet

Créez un fichier `.env` à la racine du projet (même niveau que `package.json`) avec ce contenu :

```env
# Activez le backend SMTP
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

### 2. Configurer le serveur backend SMTP

Créez un fichier `.env` dans le même dossier que `server-example.js` avec :

```env
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ynovafrik@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_application_gmail
SMTP_FROM=ynovafrik@gmail.com
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

**Important :** Remplacez `votre_mot_de_passe_application_gmail` par le mot de passe d'application Gmail (16 caractères).

### 3. Obtenir un mot de passe d'application Gmail

1. Allez sur https://myaccount.google.com/apppasswords
2. Sélectionnez "Autre (nom personnalisé)" et entrez "INOV TECHNOLOGY"
3. Cliquez sur "Générer"
4. Copiez les 16 caractères (avec les espaces) dans `SMTP_PASSWORD`

### 4. Installer les dépendances du serveur

```bash
npm install express nodemailer cors dotenv
```

### 5. Démarrer le serveur backend

```bash
node server-example.js
```

Le serveur devrait démarrer sur `http://localhost:3000`

### 6. Démarrer le frontend

Dans un autre terminal :

```bash
npm run dev
```

## ✅ Vérification

Les emails seront envoyés à **ynovafrik@gmail.com** automatiquement. Le système utilise :
- **Destinataire (to)** : `ynovafrik@gmail.com`
- **Expéditeur (from)** : `ynovafrik@gmail.com` (ou celui défini dans SMTP_FROM)
- **Reply-To** : L'email de la personne qui remplit le formulaire

## 📝 Notes

- Pour la production, changez `VITE_EMAIL_API_ENDPOINT` vers l'URL de votre serveur de production
- Assurez-vous que le serveur backend est toujours en cours d'exécution
- Les emails incluent toutes les informations du formulaire (nom, email, téléphone, entreprise, sujet, message)

