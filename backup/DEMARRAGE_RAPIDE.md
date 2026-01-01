# 🚀 Démarrage Rapide - Envoi d'Emails

## ✅ Configuration terminée !

Les fichiers de configuration sont prêts avec vos identifiants SMTP.

## 📋 Étapes pour démarrer

### 1. Installer les dépendances (si pas déjà fait)

```bash
npm install express nodemailer cors
```

### 2. Démarrer le serveur email backend

Dans un terminal, lancez :

```bash
node start-email-server.js
```

Vous devriez voir :
```
✅ Serveur SMTP prêt à envoyer des emails
📧 Les emails seront envoyés à: ynovafrik@gmail.com
🚀 Serveur email démarré sur le port 3000
```

### 3. Démarrer le frontend (dans un autre terminal)

```bash
npm run dev
```

### 4. Tester l'envoi d'email

1. Allez sur la page de contact du site
2. Remplissez le formulaire
3. Envoyez le message
4. Vérifiez la boîte mail **ynovafrik@gmail.com**

## ✅ Configuration actuelle

- **Email de réception** : ynovafrik@gmail.com
- **SMTP** : smtp.gmail.com (port 587)
- **Compte Gmail** : ynovafrik@gmail.com
- **Serveur backend** : http://localhost:3000/api/send-email

## 🔍 Vérification

Pour vérifier que le serveur fonctionne, ouvrez dans votre navigateur :
- http://localhost:3000/api/health

Vous devriez voir : `{"status":"OK","message":"Serveur email opérationnel"}`

## ⚠️ Important

- Le serveur backend (`start-email-server.js`) doit être démarré en continu
- Ne fermez pas le terminal où tourne le serveur backend
- Pour la production, déployez le serveur backend sur un hébergeur (Heroku, Railway, etc.)

