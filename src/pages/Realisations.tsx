import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Migration Data vers GCP + Dashboards Power BI',
    client: 'PME secteur logistique',
    shortDesc: 'Centralisation des données et création de dashboards connectés',
    fullDesc: 'Entreprise avec données éparpillées dans des fichiers Excel et bases legacy. Nous avons centralisé toutes les données sur BigQuery, créé des pipelines ETL automatisés et développé des dashboards Power BI connectés en temps réel.',
    challenge: 'Les données étaient dispersées dans multiples fichiers Excel et systèmes legacy, rendant impossible une vision unifiée pour la direction.',
    solution: 'Migration complète vers BigQuery, orchestration avec Dataflow, création de dashboards Power BI interactifs et formation des équipes.',
    result: '-60% de temps de reporting, décisions 3x plus rapides',
    tags: ['BigQuery', 'Dataflow', 'Power BI', 'SQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Data & BI',
  },
  {
    id: 2,
    title: 'Automatisation pipelines data avec Airflow',
    client: 'Entreprise e-commerce',
    shortDesc: 'Orchestration complète des traitements de données',
    fullDesc: 'Traitements manuels quotidiens mobilisant une équipe entière. Nous avons automatisé et fiabilisé les traitements récurrents avec Airflow.',
    challenge: 'Une équipe de 3 personnes passait 20h par semaine sur des traitements manuels de données, sources d\'erreurs et de retard.',
    solution: 'Orchestration avec Airflow, DAGs automatisés, monitoring et alerting en temps réel, documentation complète.',
    result: '20h de travail manuel éliminées par semaine, 0 erreur de traitement',
    tags: ['Airflow', 'Python', 'SQL', 'Cloud Scheduler'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    category: 'Automatisation',
  },
  {
    id: 3,
    title: 'Développement plateforme SaaS',
    client: 'Startup fintech',
    shortDesc: 'Application web complète avec modèle de leasing',
    fullDesc: 'Client souhaitant digitaliser son activité avec un modèle de leasing. Nous avons conçu une application complète, scalable, avec gestion des paiements.',
    challenge: 'Créer une plateforme from scratch avec gestion complexe des contrats de leasing, paiements récurrents et tableau de bord client.',
    solution: 'Application web full-stack avec Laravel, API REST complète, intégration Stripe pour les paiements, architecture cloud scalable.',
    result: 'Plateforme live avec 500+ utilisateurs actifs en 3 mois',
    tags: ['Laravel', 'JavaScript', 'PostgreSQL', 'API REST', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Développement',
  },
  {
    id: 4,
    title: 'Solution analytics pour le marketing digital',
    client: 'Agence marketing',
    shortDesc: 'Tracking et optimisation des campagnes',
    fullDesc: 'Équipe marketing sans visibilité sur le ROI de ses campagnes. Nous avons mis en place un système complet de tracking et d\'optimisation.',
    challenge: 'Aucune visibilité sur le ROI des campagnes, impossible d\'optimiser les budgets marketing efficacement.',
    solution: 'Setup Google Analytics 4 avancé, dashboards de suivi personnalisés, tracking custom des conversions, reporting automatisé.',
    result: '+35% de ROI sur les campagnes grâce aux insights data',
    tags: ['Google Analytics', 'Tag Manager', 'Data Studio', 'Google Ads'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    category: 'Analytics',
  },
  {
    id: 5,
    title: 'Chatbot IA pour le support client',
    client: 'SaaS B2B',
    shortDesc: 'Automatisation du support de niveau 1',
    fullDesc: 'Support client débordé par le volume de demandes récurrentes. Nous avons développé un chatbot IA intelligent.',
    challenge: 'L\'équipe support passait 70% de son temps sur des questions récurrentes, retardant les demandes complexes.',
    solution: 'Chatbot basé sur LLM, intégration avec la base de connaissances, escalation intelligente vers les humains.',
    result: '70% des demandes support de niveau 1 gérées automatiquement',
    tags: ['Python', 'LangChain', 'OpenAI', 'API REST'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'IA',
  },
  {
    id: 6,
    title: 'Data warehouse moderne',
    client: 'Retail chain',
    shortDesc: 'Modernisation de l\'infrastructure data',
    fullDesc: 'Infrastructure data obsolète ne supportant pas la croissance. Migration vers une architecture moderne cloud-native.',
    challenge: 'Temps de requête de plusieurs minutes, données non fiables, impossible de scaler avec la croissance.',
    solution: 'Architecture cloud-native avec BigQuery, dbt pour la transformation, monitoring complet, gouvernance des données.',
    result: 'Temps de requête divisé par 10, 99.9% de disponibilité',
    tags: ['BigQuery', 'dbt', 'SQL', 'Dataflow'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    category: 'Data & BI',
  },
];

const categories = ['Tous', 'Data & BI', 'Développement', 'Analytics', 'Automatisation', 'IA'];

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ce qu'on a construit.
              <br />
              <span className="text-neon">Ce qu'on a prouvé.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              Chaque projet est une histoire de transformation. Voici les nôtres.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon text-black'
                    : 'bg-dark-elevated text-text-secondary border border-border hover:border-neon/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-dark border border-border card-hover">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                    
                    {/* Result Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-neon/20 border border-neon/30">
                      <span className="text-neon text-xs font-mono font-medium">{project.result}</span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-dark/80 border border-border">
                      <span className="text-white text-xs">{project.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-text-secondary text-sm mb-2">{project.client}</p>
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-neon transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-dark-elevated text-text-secondary text-xs font-mono border border-border">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-dark-surface border-border text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="p-2">
              {/* Header Image */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-8">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/80 flex items-center justify-center hover:bg-dark transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-neon/10 text-neon text-xs font-mono border border-neon/20">
                      {selectedProject.category}
                    </span>
                    <span className="text-text-secondary text-sm">{selectedProject.client}</span>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Result Highlight */}
                <div className="p-4 rounded-xl bg-neon/10 border border-neon/20">
                  <p className="text-neon font-medium">
                    <span className="font-bold">Résultat clé :</span> {selectedProject.result}
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">Le contexte</h3>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.fullDesc}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">Le défi</h3>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">Notre solution</h3>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-3">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-dark-elevated text-neon text-sm font-mono border border-neon/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="btn-primary inline-flex items-center"
                  >
                    Discuter de mon projet
                    <ArrowUpRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
