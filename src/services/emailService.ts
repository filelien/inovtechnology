import emailjs from '@emailjs/browser';

// Configuration EmailJS (à remplacer par vos identifiants)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Configuration SMTP alternative (pour backend)
export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
}

// Initialiser EmailJS
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

// Envoyer un email via EmailJS
export const sendEmailViaEmailJS = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id') {
      throw new Error('EmailJS non configuré. Veuillez configurer les variables d\'environnement.');
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Non spécifiée',
      subject: formData.subject,
      message: formData.message,
      to_email: 'ynovafrik@gmail.com', // Email de réception
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.'
    };
  }
};

// Fonction pour envoyer via API backend (SMTP)
export const sendEmailViaSMTP = async (
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
  },
  apiEndpoint: string = '/api/send-email'
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: formData.email,
        to: 'ynovafrik@gmail.com',
        subject: `Contact INOV TECHNOLOGY: ${formData.subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Entreprise:</strong> ${formData.company || 'Non spécifiée'}</p>
          <p><strong>Sujet:</strong> ${formData.subject}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.'
    };
  }
};

// Fonction principale d'envoi (utilise EmailJS par défaut, peut basculer vers SMTP)
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  // Vérifier si une API backend est configurée
  const useBackend = import.meta.env.VITE_USE_BACKEND_EMAIL === 'true';
  const apiEndpoint = import.meta.env.VITE_EMAIL_API_ENDPOINT;

  if (useBackend && apiEndpoint) {
    return sendEmailViaSMTP(formData, apiEndpoint);
  } else {
    return sendEmailViaEmailJS(formData);
  }
};

