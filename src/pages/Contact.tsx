import { Mail, Phone, MapPin, Send, Clock, Globe, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sendContactEmail, initEmailJS } from '../services/emailService';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message });
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard ou nous contacter directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Contactez-Nous
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-10 leading-relaxed">
              Discutons de votre projet et découvrons comment INOV TECHNOLOGY peut transformer votre vision en réalité
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations de Contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                      <a href="tel:+22890000000" className="text-blue-600 hover:text-blue-700 transition">
                        +228 90 00 00 00
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Lun - Ven: 8h - 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:ynovafrik@gmail.com" className="text-blue-600 hover:text-blue-700 transition">
                        ynovafrik@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                      <p className="text-gray-600">
                        Lomé, Togo
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Afrique de l'Ouest</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                      <Globe className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Présence Mondiale</p>
                      <p className="text-gray-600">
                        180+ pays à travers le monde
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Services internationaux</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-xl flex-shrink-0">
                      <Clock className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Horaires</p>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h - 18h
                      </p>
                      <p className="text-gray-600">
                        Samedi: 9h - 13h
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Support 24/7 disponible</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Pourquoi Choisir INOV TECHNOLOGY ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>15+ ans d'expérience en solutions IT</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>500+ projets réalisés avec succès</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Expertise Oracle, Cloud & Cybersécurité</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Équipe d'experts certifiés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Support 24/7 et SLA garantis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span>Présence dans 180+ pays</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-10 space-y-6">
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    <p className="font-semibold">{submitMessage.text}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-3">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-3">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-base font-semibold text-gray-700 mb-3">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base font-semibold text-gray-700 mb-3">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="web-mobile">Développement Web & Mobile</option>
                    <option value="cloud">Cloud & Infrastructure</option>
                    <option value="data">Data Engineering & BI</option>
                    <option value="security">Cybersécurité</option>
                    <option value="oracle">Oracle Apex & Database</option>
                    <option value="erp">ERP / CRM</option>
                    <option value="support">Support & Infogérance</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={8}
                    className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-10 py-5 rounded-lg hover:bg-blue-700 transition font-semibold text-xl shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="h-6 w-6" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par INOV TECHNOLOGY concernant votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

