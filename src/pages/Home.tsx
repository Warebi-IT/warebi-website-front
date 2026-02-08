import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Code2, 
  TrendingUp, 
  Settings2, 
  Brain,
  ArrowDown,
  ChevronRight
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import AnimatedCounter from '../components/AnimatedCounter';

const services = [
  {
    icon: Database,
    title: 'Data & Business Intelligence',
    description: 'Transformez vos données en décisions stratégiques avec des tableaux de bord interactifs et des analyses avancées.',
    link: '/services#data-bi',
  },
  {
    icon: Code2,
    title: 'Développement Logiciel & Web',
    description: 'Des applications sur mesure, robustes et scalables pour répondre à vos besoins spécifiques.',
    link: '/services#developpement',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Marketing Digital',
    description: 'Mesurez, optimisez et performez avec une approche data-driven de votre marketing.',
    link: '/services#analytics',
  },
  {
    icon: Settings2,
    title: 'Automatisation de Processus',
    description: 'Éliminez les tâches répétitives et gagnez en efficacité avec l\'automatisation intelligente.',
    link: '/services#automatisation',
  },
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'L\'IA au service de votre business : modèles prédictifs, chatbots et solutions ML.',
    link: '/services#ia',
  },
];

const projects = [
  {
    title: 'Migration Data vers GCP + Dashboards Power BI',
    client: 'PME secteur logistique',
    description: 'Centralisation des données dispersées et création de dashboards connectés pour une vision unifiée.',
    result: '-60% temps reporting',
    tags: ['BigQuery', 'Dataflow', 'Power BI', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Automatisation pipelines data avec Airflow',
    client: 'Entreprise e-commerce',
    description: 'Orchestration complète des traitements de données avec monitoring et alerting.',
    result: '20h/semaine économisées',
    tags: ['Airflow', 'Python', 'SQL', 'Cloud Scheduler'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    title: 'Développement plateforme SaaS',
    client: 'Startup fintech',
    description: 'Application web complète avec modèle de leasing intégré et système d\'abonnement.',
    result: 'Live en 3 mois',
    tags: ['Laravel', 'React', 'PostgreSQL', 'API REST'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 15, suffix: '+', label: 'Clients accompagnés' },
  { value: 99, suffix: '%', label: 'Taux de satisfaction' },
  { value: 5, suffix: '', label: 'Domaines d\'expertise' },
];

const techStack = [
  'Power BI', 'GCP', 'Python', 'Airflow', 'Laravel', 'React', 'BigQuery', 'TensorFlow'
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-neon/10 text-neon text-sm font-mono border border-neon/20 mb-8">
                Expertise Digitale & Data
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight mb-6"
            >
              <span className="text-white">Vos </span>
              <span className="text-neon glow-text">données</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-white">Notre </span>
              <span className="text-neon glow-text">expertise</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-white">Votre </span>
              <span className="text-neon glow-text">avantage</span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            >
              WareBi accompagne les entreprises dans leur transformation digitale — 
              de la data à l'intelligence artificielle, nous construisons les solutions 
              qui font la différence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                Nous contacter
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-20"
            >
              <p className="text-text-secondary text-sm mb-6">Technologies maîtrisées</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-dark-surface border border-border text-text-secondary text-sm font-mono hover:border-neon/50 hover:text-neon transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-text-secondary"
          >
            <span className="text-sm mb-2">En savoir plus</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              5 expertises, une seule mission :
              <span className="text-neon"> votre succès digital</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-6xl font-heading font-bold text-neon mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
                Ce qu'on a construit
                <span className="text-neon"> récemment</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl">
                Découvrez nos projets récents et l'impact qu'ils ont eu sur nos clients.
              </p>
            </div>
            <Link
              to="/realisations"
              className="mt-6 lg:mt-0 inline-flex items-center text-neon font-medium hover:underline"
            >
              Voir toutes nos réalisations
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-surface to-dark" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              Prêt à transformer votre business
              <span className="text-neon"> avec la data ?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Discutons de votre projet. Premier échange gratuit et sans engagement.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
