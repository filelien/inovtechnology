2. **Configurer un service email**
   - Dans le dashboard, allez dans "Email Services"
   - Ajoutez un service (Gmail, Outlook, etc.)
   - Suivez les instructions pour connecter votre compte email

3. **Créer un template**
   - Allez dans "Email Templates"
   - Créez un nouveau template avec ces variables :
     - `{{from_name}}` - Nom de l'expéditeur
     - `{{from_email}}` - Email de l'expéditeur
     - `{{phone}}` - Téléphone
     - `{{company}}` - Entreprise
     - `{{subject}}` - Sujet
     - `{{message}}` - Message
   - Définissez l'email de réception dans "To Email"

4. **Récupérer les identifiants**
   - Service ID : Dans "Email Services"
   - Template ID : Dans "Email Templates"
   - Public Key : Dans "Account" > "General"

5. **Configurer les variables d'environnement**
   - Copiez `.env.example` vers `.env`
   - Remplissez les valeurs :
     ```
     VITE_EMAILJS_SERVICE_ID=votre_service_id
     VITE_EMAILJS_TEMPLATE_ID=votre_template_id
     VITE_EMAILJS_PUBLIC_KEY=votre_public_key
     ```

## Option 2 : Backend SMTP (Pour production)

Pour utiliser un vrai serveur SMTP, vous devez créer un endpoint backend.

### Exemple avec Node.js/Express :

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // ex: smtp.gmail.com
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { from, to, subject, html } = req.body;
    
    await transporter.sendMail({
      from: process.env.SMTP_FROM || from,
      to: to || 'ynovafrik@gmail.com',
      subject: subject,
      html: html
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Configuration :

1. Installez les dépendances :
   ```bash
   npm install express nodemailer cors
   ```

2. Configurez les variables d'environnement :
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=votre_email@gmail.com
   SMTP_PASSWORD=votre_mot_de_passe_app
   SMTP_FROM=ynovafrik@gmail.com
   ```

3. Activez l'option backend dans `.env` :
   ```
   VITE_USE_BACKEND_EMAIL=true
   VITE_EMAIL_API_ENDPOINT=http://localhost:3000/api/send-email
   ```

## Test

1. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Remplissez le formulaire de contact
3. Vérifiez que l'email arrive bien dans votre boîte de réception

## Notes importantes

- **EmailJS** : Limite de 100 emails/mois en gratuit, parfait pour les petits sites
- **SMTP Backend** : Plus flexible, nécessite un serveur backend
- Pour Gmail, vous devrez créer un "Mot de passe d'application" dans les paramètres de sécurité
- Pour la production, utilisez toujours HTTPS

