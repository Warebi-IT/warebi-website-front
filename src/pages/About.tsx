import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Toujours à la recherche des meilleures technologies pour vous offrir des solutions d\'avant-garde.',
  },
  {
    icon: Target,
    title: 'Expertise',
    description: 'Chaque projet est piloté par des spécialistes confirmés avec des années d\'expérience.',
  },
  {
    icon: Users,
    title: 'Partenariat',
    description: 'On ne livre pas un produit, on construit une relation durable basée sur la confiance.',
  },
  {
    icon: Shield,
    title: 'Rigueur',
    description: 'Approche data-driven, code propre, livrables documentés et processus éprouvés.',
  },
];

const process = [
  {
    number: '01',
    title: 'Comprendre',
    description: 'On analyse votre contexte, vos données et vos objectifs pour bien cerner vos besoins.',
  },
  {
    number: '02',
    title: 'Construire',
    description: 'On développe la solution technique adaptée, en mode agile avec des itérations régulières.',
  },
  {
    number: '03',
    title: 'Mesurer',
    description: 'On suit les KPIs et on optimise en continu pour maximiser l\'impact de nos solutions.',
  },
  {
    number: '04',
    title: 'Accompagner',
    description: 'On reste à vos côtés pour faire évoluer la solution et répondre à vos nouveaux défis.',
  },
];

const team = [
  {
    name: 'Alexandre Martin',
    role: 'CEO & Fondateur',
    expertise: 'Data & Stratégie',
    initials: 'AM',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    expertise: 'Architecture & Dev',
    initials: 'SC',
  },
  {
    name: 'Thomas Dubois',
    role: 'Lead Data Engineer',
    expertise: 'Data & Analytics',
    initials: 'TD',
  },
  {
    name: 'Marie Lefebvre',
    role: 'Head of AI',
    expertise: 'Machine Learning',
    initials: 'ML',
  },
];

export default function About() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              On est <span className="text-neon">WareBi.</span>
              <br />
              On transforme les données
              <br />
              en <span className="text-neon">avantage concurrentiel.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              WareBi est né d'une conviction : les données sont le nouveau pétrole, 
              mais seulement si vous savez comment les exploiter. Notre mission est 
              d'aider les entreprises à tirer le meilleur parti de leurs actifs digitaux 
              grâce à l'expertise data, le développement sur mesure et l'intelligence artificielle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Notre histoire & <span className="text-neon">vision</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Fondée en 2020, WareBi est le fruit de plusieurs années d'expérience 
                  dans le conseil en data et le développement logiciel. Nous avons constaté 
                  que de nombreuses entreprises accumulaient des données sans savoir 
                  comment les valoriser.
                </p>
                <p>
                  Notre vision est simple : rendre la data accessible et actionnable 
                  pour toutes les entreprises, des PME aux grands groupes. Nous croyons 
                  fermement que l'expertise technique doit être au service de la compréhension 
                  métier.
                </p>
                <p>
                  Aujourd'hui, WareBi accompagne plus de 15 clients sur des projets 
                  variés : migration de données, développement d'applications, 
                  automatisation de processus et intégration de l'IA.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neon/20 to-dark-surface border border-neon/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-heading font-bold text-neon mb-4">5</div>
                  <p className="text-white text-xl">années d'expertise</p>
                  <p className="text-text-secondary mt-2">à votre service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              Comment on <span className="text-neon">travaille</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des résultats mesurables à chaque étape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-heading font-bold text-neon/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-neon/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 lg:py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              Les experts derrière <span className="text-neon">WareBi</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Une équipe passionnée par la tech et dédiée à votre réussite.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-dark-elevated border border-border hover:border-neon/50 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon/30 to-neon/10 flex items-center justify-center mb-4 mx-auto group-hover:from-neon/50 group-hover:to-neon/20 transition-all">
                    <span className="text-2xl font-heading font-bold text-neon">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neon text-sm text-center mb-2">{member.role}</p>
                  <p className="text-text-secondary text-xs text-center">
                    {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              Nos <span className="text-neon">valeurs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-dark-surface border border-border hover:border-neon/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <value.icon size={24} className="text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              'Expertise certifiée GCP',
              'Partenaire Microsoft',
              'Certifié Power BI',
              'ISO 27001',
            ].map((badge) => (
              <div key={badge} className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle2 size={18} className="text-neon" />
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
