// Serveur backend pour l'envoi d'emails via SMTP Gmail
// Lancez avec: node start-email-server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration du transporteur SMTP Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: 'ynovafrik@gmail.com',
    pass: 'zwya hjhj oher zvbx' // Mot de passe d'application Gmail
  }
});

// Vérifier la connexion au démarrage
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ Erreur de configuration SMTP:', error);
    console.log('\n⚠️  Vérifiez que:');
    console.log('   1. Le mot de passe d\'application est correct');
    console.log('   2. La validation en 2 étapes est activée sur le compte Gmail');
    console.log('   3. Vous avez créé un mot de passe d\'application sur https://myaccount.google.com/apppasswords\n');
  } else {
    console.log('✅ Serveur SMTP prêt à envoyer des emails');
    console.log('📧 Les emails seront envoyés à: ynovafrik@gmail.com\n');
  }
});

// Route pour envoyer un email
app.post('/api/send-email', async (req, res) => {
  try {
    const { from, to, subject, html } = req.body;
    
    if (!from || !subject || !html) {
      return res.status(400).json({ 
        success: false, 
        error: 'Champs manquants: from, subject et html sont requis' 
      });
    }

    const mailOptions = {
      from: 'ynovafrik@gmail.com',
      to: 'ynovafrik@gmail.com', // Tous les emails vont vers ynovafrik@gmail.com
      replyTo: from, // Permet de répondre directement à l'expéditeur
      subject: subject,
      html: html
    };

    console.log(`📤 Tentative d'envoi d'email de: ${from}`);
    
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email envoyé avec succès:', info.messageId);
    
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Erreur lors de l\'envoi de l\'email' 
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Serveur email opérationnel',
    email: 'ynovafrik@gmail.com'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🚀 Serveur email démarré sur le port', PORT);
  console.log(`📧 Endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`🔍 Test: http://localhost:${PORT}/api/health\n`);
});

