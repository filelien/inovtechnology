import { Mail, Phone, MapPin, Send, Clock, Globe, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sendContactEmail, initEmailJS } from '../services/emailService';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
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
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      return;
    }

    const applySubjectFromUrl = () => {
      const url = new URL(window.location.href);
      const subjectParam = url.searchParams.get('subject');
      if (!subjectParam) {
        return;
      }

      setFormData(prev => {
        if (prev.subject === subjectParam) {
          return prev;
        }
        return { ...prev, subject: subjectParam };
      });
    };

    applySubjectFromUrl();
    window.addEventListener('popstate', applySubjectFromUrl);
    return () => window.removeEventListener('popstate', applySubjectFromUrl);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: t('contact.success') });
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: t('contact.error') });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: t('contact.error')
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Téléphone</p>
                    <a href="tel:+22870662821" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">
                      +228 70 66 28 21
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Lun - Ven: 8h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                    <a href="mailto:ynovafrik@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">
                      ynovafrik@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Adresse</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lomé, Togo
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Afrique de l'Ouest</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl flex-shrink-0">
                    <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Présence Mondiale</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      180+ pays à travers le monde
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Services internationaux</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Horaires</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lundi - Vendredi: 8h - 18h
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Samedi: 9h - 13h
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Support 24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-lg p-8 text-white">
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
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100 dark:border-gray-700">
              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <p className="font-semibold">{submitMessage.text}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.name')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t('contact.email')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t('contact.phone')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.company')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">{t('contact.selectSubject')}</option>
                  <option value="web-mobile">{t('footer.webMobile')}</option>
                  <option value="cloud">{t('footer.cloud')}</option>
                  <option value="data">{t('footer.dataEngineering')}</option>
                  <option value="security">{t('footer.cybersecurity')}</option>
                  <option value="oracle">{t('footer.oracle')}</option>
                  <option value="erp">ERP / CRM</option>
                  <option value="support">Support & Infogérance</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.message')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>{t('contact.sending')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {t('contact.formAcceptance')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
