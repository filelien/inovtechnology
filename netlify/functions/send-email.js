// Netlify Function pour envoyer des emails via SMTP Gmail
// Utilise CommonJS pour une compatibilité maximale avec Netlify Functions

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Méthode non autorisée' }),
    };
  }

  try {
    const { from, to, subject, html } = JSON.parse(event.body || '{}');

    if (!from || !subject || !html) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Champs manquants: from, subject et html sont requis',
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' ? true : false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || 'ynovafrik@gmail.com',
      to: to || process.env.VITE_CONTACT_EMAIL || 'ynovafrik@gmail.com',
      replyTo: from,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        messageId: info.messageId,
        message: 'Email envoyé avec succès',
      }),
    };
  } catch (error) {
    console.error('Erreur lors de lenvoi de lemail:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Erreur lors de lenvoi de lemail',
      }),
    };
  }
};


