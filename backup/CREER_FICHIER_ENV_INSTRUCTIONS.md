# 📧 Instructions pour créer le fichier .env

Pour que la messagerie fonctionne correctement, vous devez créer un fichier `.env` à la racine du projet.

## ✅ Étape 1 : Créer le fichier .env

Créez un fichier nommé `.env` (sans extension) à la racine du projet (même niveau que `package.json`) avec ce contenu :

```env
# Configuration Email - Backend SMTP
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

## 🚀 Étape 2 : Démarrer le serveur email

Dans un terminal, démarrez le serveur email :

```bash
node start-email-server.js
```

Le serveur devrait démarrer sur le port 3000 et afficher :
- ✅ Serveur SMTP prêt à envoyer des emails
- 📧 Les emails seront envoyés à: ynovafrik@gmail.com

## 🧪 Étape 3 : Tester l'envoi

Dans un autre terminal, vous pouvez tester l'envoi d'email :

```bash
node test-email.cjs
```

Ou simplement remplir le formulaire de contact sur le site et soumettre.

## ✅ Vérification

Les emails seront envoyés à **ynovafrik@gmail.com** automatiquement.

