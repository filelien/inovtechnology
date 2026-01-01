import { Smartphone, Database, Cloud, Shield, LineChart, Wrench, Users, Code2, Layers, Server, Lock } from 'lucide-react';

export const services = [
  {
    id: 'web-mobile',
    icon: Smartphone,
    title: 'Développement Web & Mobile',
    description: 'Applications web progressives, sites e-commerce, applications mobiles cross-platform (iOS/Android), interfaces utilisateur modernes et responsives.',
    features: ['React, Vue, Angular', 'React Native, Flutter', 'Progressive Web Apps', 'UI/UX Design'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Nous développons des applications web et mobiles sur mesure qui offrent une expérience utilisateur exceptionnelle. Nos solutions sont optimisées pour la performance, la sécurité et l\'évolutivité.',
    benefits: [
      'Applications cross-platform performantes',
      'Design moderne et responsive',
      'Optimisation SEO et performance',
      'Support et maintenance continue'
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'React Native', 'Flutter', 'Node.js', 'TypeScript'],
    subject: 'web-mobile'
  },
  {
    id: 'data-engineering',
    icon: Database,
    title: 'Data Engineering & BI',
    description: 'Conception et gestion de data warehouses, pipelines ETL/ELT, business intelligence, visualisation de données, analytics avancés.',
    features: ['Data Warehouse', 'ETL/ELT Pipelines', 'Power BI, Tableau', 'Big Data Analytics'],
    color: 'green',
    image: 'https://images.pexels.com/photos/5905903/pexels-photo-5905903.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Transformez vos données en insights actionnables avec nos solutions de data engineering et business intelligence. Nous construisons des architectures de données robustes et scalables.',
    benefits: [
      'Data warehouses optimisés',
      'Dashboards interactifs en temps réel',
      'Analytics prédictifs et machine learning',
      'Conformité et gouvernance des données'
    ],
    technologies: ['Python', 'Apache Spark', 'PostgreSQL', 'Power BI', 'Tableau', 'Apache Airflow'],
    subject: 'data'
  },
  {
    id: 'cloud-infrastructure',
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Déploiement Oracle Cloud, AWS, Azure. Architecture cloud-native, conteneurisation Docker/Kubernetes, solutions IaaS/PaaS.',
    features: ['Oracle Cloud', 'AWS, Azure, GCP', 'Docker & Kubernetes', 'Infrastructure as Code'],
    color: 'purple',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Migrez vers le cloud et optimisez votre infrastructure avec nos solutions cloud-native. Nous garantissons haute disponibilité, sécurité et coûts optimisés.',
    benefits: [
      'Migration cloud sans interruption',
      'Architecture hautement disponible',
      'Optimisation des coûts cloud',
      'Sécurité et conformité renforcées'
    ],
    technologies: ['Oracle Cloud', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    subject: 'cloud'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Audits de sécurité, protection contre les menaces, conformité RGPD, sécurisation des infrastructures et applications.',
    features: ['Audit Sécurité', 'Protection DDoS', 'Conformité RGPD', 'Pentest & Monitoring'],
    color: 'red',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Protégez votre entreprise contre les cybermenaces avec nos solutions de cybersécurité complètes. Nous assurons la conformité et la protection de vos données sensibles.',
    benefits: [
      'Audits de sécurité approfondis',
      'Protection 24/7 contre les menaces',
      'Conformité RGPD et ISO 27001',
      'Formation et sensibilisation des équipes'
    ],
    technologies: ['SIEM', 'WAF', 'IDS/IPS', 'Penetration Testing', 'Security Monitoring'],
    subject: 'security'
  },
  {
    id: 'oracle-apex',
    icon: Code2,
    title: 'Développement Oracle Apex',
    description: 'Expertise Oracle Apex pour applications d\'entreprise rapides et sécurisées. Développement de solutions métier personnalisées.',
    features: ['Oracle Apex', 'PL/SQL Expert', 'Forms & Reports', 'Integration SOA'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Développez rapidement des applications d\'entreprise robustes avec Oracle Apex. Nos experts créent des solutions métier personnalisées et performantes.',
    benefits: [
      'Développement rapide d\'applications',
      'Intégration native avec Oracle Database',
      'Applications sécurisées et performantes',
      'Support et formation Oracle'
    ],
    technologies: ['Oracle Apex', 'PL/SQL', 'Oracle Database', 'Oracle Forms'],
    subject: 'oracle'
  },
  {
    id: 'devops',
    icon: Layers,
    title: 'DevOps & CI/CD',
    description: 'Automatisation des déploiements, intégration continue, orchestration, monitoring et observabilité des systèmes.',
    features: ['Jenkins, GitLab CI', 'Terraform, Ansible', 'Prometheus, Grafana', 'Automatisation'],
    color: 'teal',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Automatisez vos processus de développement et déploiement avec nos solutions DevOps. Réduisez les temps de livraison et améliorez la qualité.',
    benefits: [
      'CI/CD automatisé',
      'Infrastructure as Code',
      'Monitoring et observabilité',
      'Réduction des temps de déploiement'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    subject: 'devops'
  },
  {
    id: 'database-admin',
    icon: Server,
    title: 'Administration Bases de Données',
    description: 'Administration Oracle, PostgreSQL, MySQL, MongoDB. Optimisation, sauvegarde, haute disponibilité, migration.',
    features: ['Oracle DBA', 'PostgreSQL, MySQL', 'Performance Tuning', 'Backup & Recovery'],
    color: 'cyan',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Optimisez et sécurisez vos bases de données avec nos services d\'administration. Nous garantissons performance, disponibilité et sécurité.',
    benefits: [
      'Optimisation des performances',
      'Haute disponibilité et réplication',
      'Sauvegardes automatisées',
      'Migration et modernisation'
    ],
    technologies: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    subject: 'database'
  },
  {
    id: 'support',
    icon: Wrench,
    title: 'Infogérance & Support',
    description: 'Maintenance applicative, support 24/7, supervision des systèmes, gestion de parc IT, helpdesk, SLA garantis.',
    features: ['Support 24/7', 'Monitoring Proactif', 'Maintenance Préventive', 'SLA Personnalisés'],
    color: 'gray',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Concentrez-vous sur votre cœur de métier pendant que nous gérons votre infrastructure IT. Support réactif et proactif 24/7.',
    benefits: [
      'Support technique 24/7',
      'Monitoring proactif des systèmes',
      'Maintenance préventive',
      'SLA garantis et respectés'
    ],
    technologies: ['Monitoring Tools', 'Ticketing Systems', 'Remote Support', 'Automation'],
    subject: 'support'
  },
  {
    id: 'consulting',
    icon: LineChart,
    title: 'Conseil & Transformation Digitale',
    description: 'Accompagnement stratégique, audit IT, gouvernance, roadmap digitale, formation des équipes, transfert de compétences.',
    features: ['Audit & Conseil', 'Stratégie IT', 'Formation Équipes', 'Change Management'],
    color: 'yellow',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Accompagnez votre transformation digitale avec nos experts en conseil. Nous définissons votre stratégie IT et formons vos équipes.',
    benefits: [
      'Audit et diagnostic complet',
      'Roadmap de transformation',
      'Formation et transfert de compétences',
      'Accompagnement au changement'
    ],
    technologies: ['Strategy Tools', 'Assessment Frameworks', 'Training Platforms'],
    subject: 'consulting'
  },
  {
    id: 'erp-crm',
    icon: Users,
    title: 'Solutions ERP/CRM Métier',
    description: 'Développement et déploiement d\'ERP, CRM, solutions comptables, paie, microfinance, e-commerce personnalisés.',
    features: ['ERP Sur Mesure', 'CRM & Sales', 'Fintech Solutions', 'E-commerce'],
    color: 'pink',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Optimisez vos processus métier avec nos solutions ERP et CRM sur mesure. Intégration complète de vos systèmes d\'information.',
    benefits: [
      'Solutions ERP/CRM personnalisées',
      'Intégration avec systèmes existants',
      'Formation utilisateurs',
      'Support et évolution continue'
    ],
    technologies: ['Custom ERP', 'CRM Platforms', 'Integration APIs', 'Business Logic'],
    subject: 'erp'
  },
  {
    id: 'compliance',
    icon: Lock,
    title: 'Conformité & Gouvernance',
    description: 'Mise en conformité RGPD, ISO 27001, audits, politiques de sécurité, documentation, plan de continuité d\'activité.',
    features: ['RGPD/ISO 27001', 'Audit Conformité', 'PCA/PRA', 'Documentation'],
    color: 'slate',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Assurez la conformité de votre organisation avec les normes internationales. Nous vous accompagnons dans la mise en conformité et l\'audit.',
    benefits: [
      'Conformité RGPD et ISO 27001',
      'Audits de conformité réguliers',
      'Plans de continuité d\'activité',
      'Documentation complète'
    ],
    technologies: ['Compliance Tools', 'Audit Frameworks', 'Documentation Systems'],
    subject: 'compliance'
  },
  {
    id: 'migration',
    icon: Cloud,
    title: 'Migration & Modernisation',
    description: 'Migration vers le cloud, modernisation d\'applications legacy, refonte architecturale, migration bases de données.',
    features: ['Cloud Migration', 'Legacy Modernization', 'Re-architecture', 'Zero Downtime'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Modernisez vos systèmes legacy et migrez vers le cloud en toute sécurité. Nous garantissons une migration sans interruption de service.',
    benefits: [
      'Migration cloud sécurisée',
      'Modernisation des applications legacy',
      'Refonte architecturale',
      'Migration zéro downtime'
    ],
    technologies: ['Migration Tools', 'Cloud Platforms', 'Modernization Frameworks'],
    subject: 'migration'
  }
];

