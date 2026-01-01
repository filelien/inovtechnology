# 📝 Créer le fichier .env

## ⚠️ Important : Créer le fichier .env manuellement

Vous devez créer un fichier `.env` à la **racine du projet** (même niveau que `package.json`).

### Contenu du fichier `.env` :

```env
VITE_USE_BACKEND_EMAIL=true
VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
VITE_CONTACT_EMAIL=ynovafrik@gmail.com
```

### Comment créer le fichier :

1. **Dans VS Code ou votre éditeur :**
   - Cliquez sur "Nouveau fichier"
   - Nommez-le `.env` (avec le point au début)
   - Copiez-collez le contenu ci-dessus

2. **Ou via le terminal :**
   ```bash
   echo "VITE_USE_BACKEND_EMAIL=true
   VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
   VITE_CONTACT_EMAIL=ynovafrik@gmail.com" > .env
   ```

## ✅ Alternative : Utiliser start-email-server.js

J'ai créé un fichier **`start-email-server.js`** qui contient déjà votre configuration SMTP.
Vous pouvez l'utiliser directement sans fichier .env pour le serveur.

