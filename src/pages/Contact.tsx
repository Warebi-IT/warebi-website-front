import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, ChevronDown, CheckCircle2 } from 'lucide-react';

const subjects = [
  'Data & BI',
  'Développement',
  'Analytics',
  'Automatisation',
  'IA',
  'Autre',
];

const faqs = [
  {
    question: 'Combien coûte un projet avec WareBi ?',
    answer: 'Chaque projet est unique. On établit un devis gratuit après un premier échange pour comprendre vos besoins précis et vous proposer la solution la plus adaptée.',
  },
  {
    question: 'Quels sont vos délais ?',
    answer: 'Variable selon la complexité. Un dashboard peut être livré en 2 semaines, une application complète en 2-3 mois. On établit un planning détaillé dès le début du projet.',
  },
  {
    question: 'Travaillez-vous à distance ?',
    answer: 'Oui, on travaille avec des clients partout en France et à l\'international. Nos outils collaboratifs nous permettent d\'être aussi efficaces à distance qu\'en présentiel.',
  },
  {
    question: 'On peut commencer petit ?',
    answer: 'Absolument. On recommande souvent de démarrer par un projet pilote pour valider la valeur avant de scaler. C\'est une approche pragmatique qui limite les risques.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Parlons de votre <span className="text-neon">projet</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Que vous ayez une idée précise ou juste un besoin, on est là pour en discuter. 
              Premier échange gratuit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-8">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-neon/10 border border-neon/30 text-center"
                >
                  <CheckCircle2 size={48} className="text-neon mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-text-secondary">
                    On vous répond dans les 24h ouvrées.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                        placeholder="Votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <div className="relative">
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white focus:outline-none focus:border-neon transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Envoyer le message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <a href="mailto:contact@warebi.fr" className="text-text-secondary hover:text-neon transition-colors">
                      contact@warebi.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Téléphone</p>
                    <a href="tel:+33123456789" className="text-text-secondary hover:text-neon transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Localisation</p>
                    <p className="text-text-secondary">Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={20} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-neon transition-colors">
                      linkedin.com/company/warebi
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-neon" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">WhatsApp</p>
                    <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-neon hover:underline">
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Calendly CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neon/10 to-transparent border border-neon/20">
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Préférez un appel ?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Réservez directement un créneau de 30 minutes dans notre agenda.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center text-sm"
                >
                  Réserver un créneau de 30 min
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Questions <span className="text-neon">fréquentes</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-dark-surface border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-neon flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
