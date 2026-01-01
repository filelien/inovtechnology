// Exemple de serveur backend pour l'envoi d'emails via SMTP Gmail
// Installez les dépendances: npm install express nodemailer cors dotenv
// Lancez avec: node server-example.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuration du transporteur SMTP Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.SMTP_USER || 'votre_email@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'votre_mot_de_passe_application'
  }
});

// Vérifier la connexion au démarrage
transporter.verify(function (error, success) {
  if (error) {
    console.log('Erreur de configuration SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
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
      from: process.env.SMTP_FROM || 'ynovafrik@gmail.com',
      to: to || process.env.VITE_CONTACT_EMAIL || 'ynovafrik@gmail.com',
      replyTo: from, // Permet de répondre directement à l'expéditeur
      subject: subject,
      html: html
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email envoyé avec succès:', info.messageId);
    
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Erreur lors de l\'envoi de l\'email' 
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Serveur email opérationnel' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur email démarré sur le port ${PORT}`);
  console.log(`📧 Endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`\n⚠️  Assurez-vous d'avoir configuré vos variables d'environnement SMTP !`);
});

