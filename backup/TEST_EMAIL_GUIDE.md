# 🧪 Guide de Test - Envoi d'Email

## 📋 Prérequis

1. Le serveur email doit être démarré
2. Le fichier `.env` doit être créé à la racine du projet

## ✅ Configuration

### 1. Créer le fichier `.env`

Créez un fichier `.env` à la racine du projet avec ce contenu :

```env
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

### 2. Démarrer le serveur email

Ouvrez un terminal et exécutez :

```bash
node start-email-server.js
```

Vous devriez voir :
```
✅ Serveur SMTP prêt à envoyer des emails
📧 Les emails seront envoyés à: ynovafrik@gmail.com
🚀 Serveur email démarré sur le port 3000
```

**IMPORTANT : Gardez ce terminal ouvert pendant que vous testez !**

### 3. Démarrer le frontend (dans un autre terminal)

```bash
npm run dev
```

### 4. Tester l'envoi d'email

**Option A : Via le script de test**
```bash
node test-email.cjs
```

**Option B : Via le formulaire de contact**
1. Ouvrez http://localhost:5173/contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre boîte mail : ynovafrik@gmail.com

## 🔍 Vérification

- ✅ Le serveur répond sur http://localhost:3000/api/health
- ✅ Les emails sont envoyés à ynovafrik@gmail.com
- ✅ Le formulaire affiche un message de succès

## ❌ En cas d'erreur

1. **Erreur de connexion** : Vérifiez que le serveur est bien démarré
2. **Email non reçu** : Vérifiez les spams et attendez quelques minutes
3. **Erreur SMTP** : Vérifiez le mot de passe d'application Gmail

