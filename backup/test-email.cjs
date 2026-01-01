// Script de test pour vérifier que l'envoi d'email fonctionne (CommonJS)
const http = require('http');

const testEmail = async () => {
  try {
    console.log('🧪 Test d\'envoi d\'email...\n');
    
    const testData = JSON.stringify({
      from: 'test@inovtechnology.com',
      to: 'ynovafrik@gmail.com',
      subject: 'Test Email - INOV TECHNOLOGY',
      html: `
        <h2>Test d'envoi d'email depuis le site</h2>
        <p><strong>Ceci est un email de test</strong></p>
        <p><strong>Nom:</strong> Test User</p>
        <p><strong>Email:</strong> test@inovtechnology.com</p>
        <p><strong>Téléphone:</strong> +228 70 66 28 21</p>
        <p><strong>Entreprise:</strong> INOV TECHNOLOGY</p>
        <p><strong>Sujet:</strong> Test Email</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>Ceci est un message de test pour vérifier que le système d'envoi d'emails fonctionne correctement.</p>
        <p>Date du test: ${new Date().toLocaleString('fr-FR')}</p>
      `
    });

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/send-email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(testData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.success) {
            console.log('✅ Email envoyé avec succès!');
            console.log('📧 Message ID:', result.messageId);
            console.log('\n💡 Vérifiez votre boîte mail: ynovafrik@gmail.com');
          } else {
            console.log('❌ Erreur lors de l\'envoi:', result.error);
          }
        } catch (error) {
          console.log('❌ Erreur de parsing:', error.message);
          console.log('Réponse brute:', data);
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Erreur:', error.message);
      console.log('\n⚠️  Assurez-vous que le serveur email est démarré:');
      console.log('   node start-email-server.js');
    });

    req.write(testData);
    req.end();

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
};

testEmail();

