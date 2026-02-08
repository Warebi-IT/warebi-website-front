import { motion } from 'framer-motion';
import { Rocket, BookOpen, Users, Globe, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const culture = [
  {
    icon: Rocket,
    title: 'Autonomie et responsabilité',
    description: 'On fait confiance à chaque membre de l\'équipe. Vous avez la liberté de prendre des initiatives et de façonner votre travail.',
  },
  {
    icon: BookOpen,
    title: 'Apprentissage continu',
    description: 'Budget formation, temps dédié à la veille tech, conférences. On investit dans votre croissance professionnelle.',
  },
  {
    icon: Users,
    title: 'Collaboration et transparence',
    description: 'Pas de hiérarchie lourde. Communication directe, décisions collectives, feedback régulier.',
  },
  {
    icon: Globe,
    title: 'Remote-friendly',
    description: 'Travaillez d\'où vous voulez. Bureau à Paris disponible, mais pas obligatoire. Flexibilité totale.',
  },
];

const jobs = [
  {
    title: 'Data Engineer',
    type: 'CDI',
    location: 'Remote / Paris',
    description: 'Concevez et implémentez des pipelines de données robustes pour nos clients.',
    stack: ['Python', 'SQL', 'Airflow', 'BigQuery'],
  },
  {
    title: 'Développeur Full-Stack',
    type: 'CDI',
    location: 'Remote / Paris',
    description: 'Développez des applications web modernes et scalables.',
    stack: ['React', 'Laravel', 'PostgreSQL', 'API REST'],
  },
  {
    title: 'Data Analyst',
    type: 'CDI',
    location: 'Remote / Paris',
    description: 'Transformez les données en insights actionnables pour nos clients.',
    stack: ['Power BI', 'SQL', 'Python', 'Statistics'],
  },
  {
    title: 'ML Engineer',
    type: 'Freelance',
    location: 'Remote',
    description: 'Déployez des modèles de machine learning en production.',
    stack: ['Python', 'TensorFlow', 'GCP', 'MLOps'],
  },
];

export default function Carrieres() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
              Rejoignez l'aventure <span className="text-neon">WareBi</span>
            </h1>
            <p className="text-xl text-text-secondary">
              On cherche des esprits brillants qui veulent construire le digital de demain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Notre <span className="text-neon">culture</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Ce qui nous définit et fait de WareBi un endroit unique pour travailler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-dark border border-border hover:border-neon/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Opportunités <span className="text-neon">ouvertes</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Rejoignez-nous pour travailler sur des projets passionnants et faire la différence.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-dark-surface border border-border hover:border-neon/50 transition-all cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-neon/10 text-neon text-xs font-mono">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-text-secondary text-xs">{job.location}</span>
                      <span className="text-border">•</span>
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="btn-secondary text-sm whitespace-nowrap">
                    Postuler
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Candidature <span className="text-neon">spontanée</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature 
                spontanée. On étudie toutes les candidatures avec attention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">CV et lettre de motivation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">Portfolio ou projets (si applicable)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-neon" />
                  <span className="text-text-secondary text-sm">LinkedIn ou site personnel</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-neon/10 border border-neon/30 text-center"
                >
                  <CheckCircle2 size={48} className="text-neon mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Candidature envoyée !
                  </h3>
                  <p className="text-text-secondary">
                    On vous répond dans les 7 jours ouvrés.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Nom complet *"
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                  <input
                    type="url"
                    placeholder="LinkedIn ou site personnel"
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-neon transition-colors resize-none"
                  />
                  <div>
                    <label className="block w-full px-4 py-3 rounded-lg bg-dark border border-border border-dashed text-text-secondary hover:border-neon hover:text-neon transition-colors cursor-pointer text-center">
                      <span>Joindre votre CV (PDF)</span>
                      <input type="file" accept=".pdf" className="hidden" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Envoyer ma candidature
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Devenir <span className="text-neon">partenaire</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Vous êtes un cabinet de conseil, une agence ou un indépendant ? 
              Collaborons ensemble pour offrir le meilleur à nos clients.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              Nous contacter
              <Send size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
