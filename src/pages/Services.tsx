import { motion } from 'framer-motion';
import { 
  Database, 
  Code2, 
  TrendingUp, 
  Settings2, 
  Brain,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'data-bi',
    icon: Database,
    title: 'Data & Business Intelligence',
    tagline: 'Vos données ont des réponses. On vous aide à poser les bonnes questions.',
    description: 'Transformez vos données brutes en insights actionnables. Nous concevons des solutions de Business Intelligence complètes, de la collecte à la visualisation.',
    features: [
      'Collecte, structuration et nettoyage des données',
      'Analyse et exploitation pour la prise de décision',
      'Création de tableaux de bord interactifs (Power BI, GCP Looker)',
      'Migration et intégration de bases de données (PostgreSQL, BigQuery)',
      'Solutions de reporting et suivi des KPI en temps réel',
    ],
    technologies: ['Power BI', 'Google Cloud Platform', 'BigQuery', 'Dataflow', 'SQL', 'PostgreSQL'],
    result: 'Un client a réduit de 60% son temps de reporting grâce à nos dashboards automatisés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'developpement',
    icon: Code2,
    title: 'Développement Logiciel & Web',
    tagline: 'Du code propre, des applications qui durent.',
    description: 'Des applications sur mesure, robustes et scalables. De l\'architecture à la mise en production, nous construisons des solutions qui répondent exactement à vos besoins.',
    features: [
      'Conception d\'applications web sur mesure',
      'Développement de logiciels métier spécialisés',
      'Création d\'API et intégrations techniques',
      'Applications mobiles et web responsive',
      'Architecture technique et conseil',
    ],
    technologies: ['PHP', 'Laravel', 'WordPress', 'JavaScript', 'React', 'HTML/CSS', 'API REST'],
    result: 'Développement d\'une plateforme SaaS complète avec modèle de leasing intégré.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    id: 'analytics',
    icon: TrendingUp,
    title: 'Analytics & Marketing Digital',
    tagline: 'Chaque clic raconte une histoire. On vous aide à la lire.',
    description: 'Mesurez, optimisez et performez. Notre approche data-driven du marketing digital vous permet de prendre des décisions éclairées et d\'améliorer votre ROI.',
    features: [
      'Mesure d\'audience et analyse de performance',
      'Tracking et monitoring des campagnes marketing',
      'SEO (référencement naturel) et SEA (publicité en ligne)',
      'Reporting marketing et tableaux de bord de suivi',
      'Optimisation des conversions et du ROI',
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Tag Manager', 'Search Console', 'Data Studio'],
    result: '+35% de trafic organique en 6 mois grâce à une stratégie SEO data-driven.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'automatisation',
    icon: Settings2,
    title: 'Automatisation de Processus',
    tagline: 'Ce qui est répétitif devrait être automatisé. Point.',
    description: 'Éliminez les tâches manuelles et gagnez en efficacité. Nous concevons des pipelines automatisés qui traitent vos données de manière fiable et scalable.',
    features: [
      'Scripts SQL avancés pour automatiser les traitements de données',
      'Orchestration de pipelines de données (DAGs Airflow)',
      'Automatisation des flux avec Dataflow et Cloud Scheduler',
      'Industrialisation des processus récurrents',
      'Tests qualité et monitoring des traitements automatisés',
    ],
    technologies: ['Apache Airflow', 'Cloud Scheduler', 'SQL', 'Python', 'Dataflow', 'Cloud Functions'],
    result: 'Automatisation complète d\'un pipeline data réduisant 20h de travail manuel à 0.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    id: 'ia',
    icon: Brain,
    title: 'Intelligence Artificielle',
    tagline: 'L\'IA n\'est pas le futur. C\'est maintenant. Et on vous y emmène.',
    description: 'Intégrez l\'intelligence artificielle dans votre business. Des modèles prédictifs aux chatbots, nous développons des solutions IA adaptées à vos besoins.',
    features: [
      'Implémentation de solutions IA pour l\'optimisation business',
      'Modèles prédictifs et analytics avancés',
      'Mise en place de chatbots intelligents',
      'Intégration de modèles open-source (Qwen, LLMs)',
      'Automatisation intelligente des processus métier',
      'Solutions de machine learning adaptées aux besoins clients',
    ],
    technologies: ['Python', 'TensorFlow', 'Qwen', 'GCP AI/ML', 'LangChain', 'Hugging Face'],
    result: 'Déploiement d\'un chatbot IA qui gère 70% des demandes support de niveau 1.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
];

export default function Services() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Des solutions digitales complètes,
              <br />
              <span className="text-neon">de la data à l'IA</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Chaque entreprise est unique. On construit la solution qui correspond 
              exactement à vos besoins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`relative py-24 lg:py-32 ${
              index % 2 === 1 ? 'bg-dark-surface' : ''
            }`}
          >
            <div className="absolute inset-0 grid-overlay opacity-10" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-neon" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-neon text-lg mb-6 italic">
                    "{service.tagline}"
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle2 size={18} className="text-neon mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <p className="text-white text-sm font-medium mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-neon/10 border border-neon/20 mb-8">
                    <p className="text-neon text-sm">
                      <span className="font-bold">Résultat :</span> {service.result}
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
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
              Un besoin spécifique ?
              <span className="text-neon"> On en discute.</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour un devis gratuit et sans engagement.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center text-lg px-8 py-4">
              Demander un devis gratuit
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
