import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'pt' | 'ar' | 'cr';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.services': {
    fr: 'Services',
    en: 'Services',
    es: 'Servicios',
    pt: 'Serviços',
    ar: 'الخدمات'
  },
  'nav.expertise': {
    fr: 'Expertise',
    en: 'Expertise',
    es: 'Experiencia',
    pt: 'Expertise',
    ar: 'الخبرة'
  },
  'nav.presence': {
    fr: 'Présence',
    en: 'Presence',
    es: 'Presencia',
    pt: 'Presença',
    ar: 'الحضور'
  },
  'nav.projects': {
    fr: 'Projets',
    en: 'Projects',
    es: 'Proyectos',
    pt: 'Projetos',
    ar: 'المشاريع'
  },
  'nav.technologies': {
    fr: 'Technologies',
    en: 'Technologies',
    es: 'Tecnologías',
    pt: 'Tecnologias',
    ar: 'التقنيات'
  },
  'nav.certifications': {
    fr: 'Certifications',
    en: 'Certifications',
    es: 'Certificaciones',
    pt: 'Certificações',
    ar: 'الشهادات'
  },
  'nav.about': {
    fr: 'À Propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    ar: 'من نحن'
  },
  'nav.blog': {
    fr: 'Blog',
    en: 'Blog',
    es: 'Blog',
    pt: 'Blog',
    ar: 'المدونة'
  },
  'nav.contact': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    ar: 'اتصل بنا'
  },
  // Hero Section
  'hero.badge': {
    fr: 'Leader en Solutions IT & Data en Afrique',
    en: 'Leader in IT & Data Solutions in Africa',
    es: 'Líder en Soluciones IT y Datos en África',
    pt: 'Líder em Soluções IT e Dados na África',
    ar: 'رائد في حلول تكنولوجيا المعلومات والبيانات في أفريقيا'
  },
  'hero.title': {
    fr: 'Solutions IT Complètes pour',
    en: 'Complete IT Solutions for',
    es: 'Soluciones IT Completas para',
    pt: 'Soluções IT Completas para',
    ar: 'حلول تكنولوجيا المعلومات الشاملة لـ'
  },
  'hero.titleHighlight': {
    fr: " l'Afrique Moderne",
    en: ' Modern Africa',
    es: ' África Moderna',
    pt: ' África Moderna',
    ar: ' أفريقيا الحديثة'
  },
  'hero.description': {
    fr: 'INOV TECHNOLOGY vous accompagne dans votre transformation digitale avec des services de développement d\'applications web & mobile, cloud, data engineering, cybersécurité et infrastructure IT.',
    en: 'INOV TECHNOLOGY accompanies you in your digital transformation with web & mobile application development, cloud, data engineering, cybersecurity and IT infrastructure services.',
    es: 'INOV TECHNOLOGY le acompaña en su transformación digital con servicios de desarrollo de aplicaciones web y móviles, cloud, ingeniería de datos, ciberseguridad e infraestructura IT.',
    pt: 'INOV TECHNOLOGY acompanha você em sua transformação digital com serviços de desenvolvimento de aplicações web e móveis, cloud, engenharia de dados, cibersegurança e infraestrutura IT.',
    ar: 'INOV TECHNOLOGY يرافقك في التحول الرقمي مع خدمات تطوير تطبيقات الويب والجوال، السحابة، هندسة البيانات، الأمن السيبراني والبنية التحتية لتكنولوجيا المعلومات.'
  },
  'hero.startProject': {
    fr: 'Démarrer un Projet',
    en: 'Start a Project',
    es: 'Iniciar un Proyecto',
    pt: 'Iniciar um Projeto',
    ar: 'بدء مشروع'
  },
  'hero.ourServices': {
    fr: 'Nos Services',
    en: 'Our Services',
    es: 'Nuestros Servicios',
    pt: 'Nossos Serviços',
    ar: 'خدماتنا'
  },
  'hero.countries': {
    fr: 'Pays Couverts',
    en: 'Countries Covered',
    es: 'Países Cubiertos',
    pt: 'Países Cobertos',
    ar: 'الدول المغطاة'
  },
  'hero.projects': {
    fr: 'Projets Réalisés',
    en: 'Completed Projects',
    es: 'Proyectos Realizados',
    pt: 'Projetos Realizados',
    ar: 'المشاريع المنجزة'
  },
  'hero.experience': {
    fr: "Ans d'Expérience",
    en: 'Years of Experience',
    es: 'Años de Experiencia',
    pt: 'Anos de Experiência',
    ar: 'سنوات من الخبرة'
  },
  'hero.webMobile': {
    fr: 'Développement Web & Mobile',
    en: 'Web & Mobile Development',
    es: 'Desarrollo Web y Móvil',
    pt: 'Desenvolvimento Web e Móvel',
    ar: 'تطوير الويب والجوال'
  },
  'hero.webMobileDesc': {
    fr: 'Applications sur mesure, performantes et évolutives',
    en: 'Custom, performant and scalable applications',
    es: 'Aplicaciones personalizadas, performantes y escalables',
    pt: 'Aplicações personalizadas, performáticas e escaláveis',
    ar: 'تطبيقات مخصصة وأداء عالي وقابلة للتوسع'
  },
  'hero.dataBi': {
    fr: 'Data & BI',
    en: 'Data & BI',
    es: 'Datos y BI',
    pt: 'Dados e BI',
    ar: 'البيانات والذكاء التجاري'
  },
  'hero.dataBiDesc': {
    fr: 'Data warehouse, analytics et visualisation',
    en: 'Data warehouse, analytics and visualization',
    es: 'Data warehouse, analytics y visualización',
    pt: 'Data warehouse, analytics e visualização',
    ar: 'مستودع البيانات والتحليلات والتصور'
  },
  'hero.cloud': {
    fr: 'Cloud & Infrastructure',
    en: 'Cloud & Infrastructure',
    es: 'Cloud e Infraestructura',
    pt: 'Cloud e Infraestrutura',
    ar: 'السحابة والبنية التحتية'
  },
  'hero.cloudDesc': {
    fr: 'Oracle Cloud, AWS, Azure, architecture scalable',
    en: 'Oracle Cloud, AWS, Azure, scalable architecture',
    es: 'Oracle Cloud, AWS, Azure, arquitectura escalable',
    pt: 'Oracle Cloud, AWS, Azure, arquitetura escalável',
    ar: 'Oracle Cloud و AWS و Azure، بنية قابلة للتوسع'
  },
  'hero.security': {
    fr: 'Cybersécurité',
    en: 'Cybersecurity',
    es: 'Ciberseguridad',
    pt: 'Cibersegurança',
    ar: 'الأمن السيبراني'
  },
  'hero.securityDesc': {
    fr: 'Protection avancée et conformité',
    en: 'Advanced protection and compliance',
    es: 'Protección avanzada y cumplimiento',
    pt: 'Proteção avançada e conformidade',
    ar: 'حماية متقدمة والامتثال'
  },
  'hero.certified': {
    fr: 'Certifié Oracle',
    en: 'Oracle Certified',
    es: 'Certificado Oracle',
    pt: 'Certificado Oracle',
    ar: 'معتمد من Oracle'
  },
  'hero.roi': {
    fr: 'ROI Garanti',
    en: 'Guaranteed ROI',
    es: 'ROI Garantizado',
    pt: 'ROI Garantido',
    ar: 'عائد الاستثمار مضمون'
  },
  'hero.maxSecurity': {
    fr: 'Sécurité Maximale',
    en: 'Maximum Security',
    es: 'Seguridad Máxima',
    pt: 'Segurança Máxima',
    ar: 'أقصى أمان'
  },
  // Services Section
  'services.title': {
    fr: 'Nos Services IT Complets',
    en: 'Our Complete IT Services',
    es: 'Nuestros Servicios IT Completos',
    pt: 'Nossos Serviços IT Completos',
    ar: 'خدماتنا الشاملة لتكنولوجيا المعلومات'
  },
  'services.subtitle': {
    fr: 'Une gamme complète de services IT pour accompagner votre transformation digitale de A à Z',
    en: 'A complete range of IT services to accompany your digital transformation from A to Z',
    es: 'Una gama completa de servicios IT para acompañar su transformación digital de A a Z',
    pt: 'Uma gama completa de serviços IT para acompanhar sua transformação digital de A a Z',
    ar: 'مجموعة كاملة من خدمات تكنولوجيا المعلومات لمرافقة التحول الرقمي من الألف إلى الياء'
  },
  'services.learnMore': {
    fr: 'En savoir plus',
    en: 'Learn more',
    es: 'Saber más',
    pt: 'Saiba mais',
    ar: 'معرفة المزيد'
  },
  // Services individuels
  'services.webmobile.title': {
    fr: 'Développement Web & Mobile',
    en: 'Web & Mobile Development',
    es: 'Desarrollo Web y Móvil',
    pt: 'Desenvolvimento Web e Móvel',
    ar: 'تطوير الويب والجوال'
  },
  'services.webmobile.description': {
    fr: 'Applications web progressives, sites e-commerce, applications mobiles cross-platform (iOS/Android), interfaces utilisateur modernes et responsives.',
    en: 'Progressive web applications, e-commerce sites, cross-platform mobile applications (iOS/Android), modern and responsive user interfaces.',
    es: 'Aplicaciones web progresivas, sitios de comercio electrónico, aplicaciones móviles multiplataforma (iOS/Android), interfaces de usuario modernas y responsivas.',
    pt: 'Aplicações web progressivas, sites de e-commerce, aplicações móveis multiplataforma (iOS/Android), interfaces de usuário modernas e responsivas.',
    ar: 'تطبيقات الويب التقدمية، مواقع التجارة الإلكترونية، تطبيقات الجوال متعددة المنصات (iOS/Android)، واجهات مستخدم حديثة ومتجاوبة.'
  },
  'services.webmobile.features': {
    fr: 'React, Vue, Angular|React Native, Flutter|Progressive Web Apps|UI/UX Design',
    en: 'React, Vue, Angular|React Native, Flutter|Progressive Web Apps|UI/UX Design',
    es: 'React, Vue, Angular|React Native, Flutter|Progressive Web Apps|UI/UX Design',
    pt: 'React, Vue, Angular|React Native, Flutter|Progressive Web Apps|UI/UX Design',
    ar: 'React, Vue, Angular|React Native, Flutter|Progressive Web Apps|UI/UX Design'
  },
  'services.webmobile.details': {
    fr: 'Nous développons des applications web et mobiles sur mesure qui offrent une expérience utilisateur exceptionnelle. Nos solutions sont optimisées pour la performance, la sécurité et l\'évolutivité.',
    en: 'We develop custom web and mobile applications that offer an exceptional user experience. Our solutions are optimized for performance, security, and scalability.',
    es: 'Desarrollamos aplicaciones web y móviles personalizadas que ofrecen una experiencia de usuario excepcional. Nuestras soluciones están optimizadas para rendimiento, seguridad y escalabilidad.',
    pt: 'Desenvolvemos aplicações web e móveis personalizadas que oferecem uma experiência excepcional ao usuário. Nossas soluções são otimizadas para desempenho, segurança e escalabilidade.',
    ar: 'نطور تطبيقات ويب ومحمولة مخصصة توفر تجربة مستخدم استثنائية. تم تحسين حلولنا للأداء والأمان والقابلية للتوسع.'
  },
  'services.webmobile.benefit1': {
    fr: 'Applications cross-platform performantes',
    en: 'High-performance cross-platform applications',
    es: 'Aplicaciones multiplataforma de alto rendimiento',
    pt: 'Aplicações multiplataforma de alto desempenho',
    ar: 'تطبيقات متعددة المنصات عالية الأداء'
  },
  'services.webmobile.benefit2': {
    fr: 'Design moderne et responsive',
    en: 'Modern and responsive design',
    es: 'Diseño moderno y responsivo',
    pt: 'Design moderno e responsivo',
    ar: 'تصميم حديث ومتجاوب'
  },
  'services.webmobile.benefit3': {
    fr: 'Optimisation SEO et performance',
    en: 'SEO and performance optimization',
    es: 'Optimización SEO y rendimiento',
    pt: 'Otimização de SEO e desempenho',
    ar: 'تحسين محركات البحث والأداء'
  },
  'services.webmobile.benefit4': {
    fr: 'Support et maintenance continue',
    en: 'Ongoing support and maintenance',
    es: 'Soporte y mantenimiento continuo',
    pt: 'Suporte e manutenção contínuos',
    ar: 'الدعم والصيانة المستمرة'
  },
  'services.dataengineering.title': {
    fr: 'Data Engineering & BI',
    en: 'Data Engineering & BI',
    es: 'Ingeniería de Datos y BI',
    pt: 'Engenharia de Dados e BI',
    ar: 'هندسة البيانات والذكاء التجاري'
  },
  'services.dataengineering.description': {
    fr: 'Conception et gestion de data warehouses, pipelines ETL/ELT, business intelligence, visualisation de données, analytics avancés.',
    en: 'Design and management of data warehouses, ETL/ELT pipelines, business intelligence, data visualization, advanced analytics.',
    es: 'Diseño y gestión de almacenes de datos, pipelines ETL/ELT, inteligencia empresarial, visualización de datos, análisis avanzados.',
    pt: 'Concepção e gestão de data warehouses, pipelines ETL/ELT, business intelligence, visualização de dados, analytics avançados.',
    ar: 'تصميم وإدارة مستودعات البيانات، خطوط أنابيب ETL/ELT، ذكاء الأعمال، تصور البيانات، التحليلات المتقدمة.'
  },
  'services.dataengineering.features': {
    fr: 'Data Warehouse|ETL/ELT Pipelines|Power BI, Tableau|Big Data Analytics',
    en: 'Data Warehouse|ETL/ELT Pipelines|Power BI, Tableau|Big Data Analytics',
    es: 'Data Warehouse|Pipelines ETL/ELT|Power BI, Tableau|Big Data Analytics',
    pt: 'Data Warehouse|Pipelines ETL/ELT|Power BI, Tableau|Big Data Analytics',
    ar: 'مستودع البيانات|خطوط أنابيب ETL/ELT|Power BI, Tableau|تحليلات البيانات الضخمة'
  },
  'services.dataengineering.details': {
    fr: 'Transformez vos données en insights actionnables avec nos solutions de data engineering et business intelligence. Nous construisons des architectures de données robustes et scalables.',
    en: 'Transform your data into actionable insights with our data engineering and business intelligence solutions. We build robust and scalable data architectures.',
    es: 'Transforme sus datos en conocimientos accionables con nuestras soluciones de ingeniería de datos e inteligencia empresarial. Construimos arquitecturas de datos robustas y escalables.',
    pt: 'Transforme seus dados em insights acionáveis com nossas soluções de engenharia de dados e business intelligence. Construímos arquiteturas de dados robustas e escaláveis.',
    ar: 'حول بياناتك إلى رؤى قابلة للتنفيذ مع حلول هندسة البيانات وذكاء الأعمال لدينا. نبني بنيات بيانات قوية وقابلة للتوسع.'
  },
  'services.dataengineering.benefit1': {
    fr: 'Data warehouses optimisés',
    en: 'Optimized data warehouses',
    es: 'Almacenes de datos optimizados',
    pt: 'Data warehouses otimizados',
    ar: 'مستودعات بيانات محسنة'
  },
  'services.dataengineering.benefit2': {
    fr: 'Dashboards interactifs en temps réel',
    en: 'Real-time interactive dashboards',
    es: 'Paneles interactivos en tiempo real',
    pt: 'Dashboards interativos em tempo real',
    ar: 'لوحات معلومات تفاعلية في الوقت الفعلي'
  },
  'services.dataengineering.benefit3': {
    fr: 'Analytics prédictifs et machine learning',
    en: 'Predictive analytics and machine learning',
    es: 'Análisis predictivos y machine learning',
    pt: 'Analytics preditivos e machine learning',
    ar: 'التحليلات التنبؤية والتعلم الآلي'
  },
  'services.dataengineering.benefit4': {
    fr: 'Conformité et gouvernance des données',
    en: 'Data compliance and governance',
    es: 'Cumplimiento y gobernanza de datos',
    pt: 'Conformidade e governança de dados',
    ar: 'الامتثال والحوكمة للبيانات'
  },
  'services.cloudinfrastructure.title': {
    fr: 'Cloud & Infrastructure',
    en: 'Cloud & Infrastructure',
    es: 'Cloud e Infraestructura',
    pt: 'Cloud e Infraestrutura',
    ar: 'السحابة والبنية التحتية'
  },
  'services.cloudinfrastructure.description': {
    fr: 'Déploiement Oracle Cloud, AWS, Azure. Architecture cloud-native, conteneurisation Docker/Kubernetes, solutions IaaS/PaaS.',
    en: 'Oracle Cloud, AWS, Azure deployment. Cloud-native architecture, Docker/Kubernetes containerization, IaaS/PaaS solutions.',
    es: 'Despliegue Oracle Cloud, AWS, Azure. Arquitectura cloud-native, contenedorización Docker/Kubernetes, soluciones IaaS/PaaS.',
    pt: 'Implantações Oracle Cloud, AWS, Azure. Arquitetura cloud-native, containerização Docker/Kubernetes, soluções IaaS/PaaS.',
    ar: 'نشر Oracle Cloud و AWS و Azure. بنية سحابية أصلية، حاويات Docker/Kubernetes، حلول IaaS/PaaS.'
  },
  'services.cloudinfrastructure.features': {
    fr: 'Oracle Cloud|AWS, Azure, GCP|Docker & Kubernetes|Infrastructure as Code',
    en: 'Oracle Cloud|AWS, Azure, GCP|Docker & Kubernetes|Infrastructure as Code',
    es: 'Oracle Cloud|AWS, Azure, GCP|Docker y Kubernetes|Infraestructura como Código',
    pt: 'Oracle Cloud|AWS, Azure, GCP|Docker e Kubernetes|Infraestrutura como Código',
    ar: 'Oracle Cloud|AWS, Azure, GCP|Docker و Kubernetes|البنية التحتية كرمز'
  },
  'services.cloudinfrastructure.details': {
    fr: 'Migrez vers le cloud et optimisez votre infrastructure avec nos solutions cloud-native. Nous garantissons haute disponibilité, sécurité et coûts optimisés.',
    en: 'Migrate to the cloud and optimize your infrastructure with our cloud-native solutions. We guarantee high availability, security, and optimized costs.',
    es: 'Migre a la nube y optimice su infraestructura con nuestras soluciones cloud-native. Garantizamos alta disponibilidad, seguridad y costos optimizados.',
    pt: 'Migre para a nuvem e otimize sua infraestrutura com nossas soluções cloud-native. Garantimos alta disponibilidade, segurança e custos otimizados.',
    ar: 'انتقل إلى السحابة وحدّث بنيتك التحتية مع حلولنا السحابية الأصلية. نضمن التوفر العالي والأمان والتكاليف المحسّنة.'
  },
  'services.cloudinfrastructure.benefit1': {
    fr: 'Migration cloud sans interruption',
    en: 'Seamless cloud migration',
    es: 'Migración a la nube sin interrupciones',
    pt: 'Migração para nuvem sem interrupções',
    ar: 'هجرة سحابية دون انقطاع'
  },
  'services.cloudinfrastructure.benefit2': {
    fr: 'Architecture hautement disponible',
    en: 'Highly available architecture',
    es: 'Arquitectura altamente disponible',
    pt: 'Arquitetura altamente disponível',
    ar: 'بنية عالية التوفر'
  },
  'services.cloudinfrastructure.benefit3': {
    fr: 'Optimisation des coûts cloud',
    en: 'Cloud cost optimization',
    es: 'Optimización de costos en la nube',
    pt: 'Otimização de custos na nuvem',
    ar: 'تحسين تكاليف السحابة'
  },
  'services.cloudinfrastructure.benefit4': {
    fr: 'Sécurité et conformité renforcées',
    en: 'Enhanced security and compliance',
    es: 'Seguridad y cumplimiento mejorados',
    pt: 'Segurança e conformidade aprimoradas',
    ar: 'الأمان والامتثال المحسّن'
  },
  'services.cybersecurity.title': {
    fr: 'Cybersécurité',
    en: 'Cybersecurity',
    es: 'Ciberseguridad',
    pt: 'Cibersegurança',
    ar: 'الأمن السيبراني'
  },
  'services.cybersecurity.description': {
    fr: 'Audits de sécurité, protection contre les menaces, conformité RGPD, sécurisation des infrastructures et applications.',
    en: 'Security audits, threat protection, GDPR compliance, securing infrastructures and applications.',
    es: 'Auditorías de seguridad, protección contra amenazas, cumplimiento RGPD, seguridad de infraestructuras y aplicaciones.',
    pt: 'Auditorias de segurança, proteção contra ameaças, conformidade RGPD, segurança de infraestruturas e aplicações.',
    ar: 'تدقيق الأمان، الحماية من التهديدات، الامتثال لـ RGPD، تأمين البنى التحتية والتطبيقات.'
  },
  'services.cybersecurity.features': {
    fr: 'Audit Sécurité|Protection DDoS|Conformité RGPD|Pentest & Monitoring',
    en: 'Security Audit|DDoS Protection|GDPR Compliance|Pentest & Monitoring',
    es: 'Auditoría de Seguridad|Protección DDoS|Cumplimiento RGPD|Pentest y Monitoreo',
    pt: 'Auditoria de Segurança|Proteção DDoS|Conformidade RGPD|Pentest e Monitoramento',
    ar: 'تدقيق الأمان|حماية DDoS|الامتثال لـ RGPD|اختبار الاختراق والمراقبة'
  },
  'services.cybersecurity.details': {
    fr: 'Protégez votre entreprise contre les cybermenaces avec nos solutions de cybersécurité complètes. Nous assurons la conformité et la protection de vos données sensibles.',
    en: 'Protect your business against cyber threats with our comprehensive cybersecurity solutions. We ensure compliance and protection of your sensitive data.',
    es: 'Proteja su empresa contra amenazas cibernéticas con nuestras soluciones integrales de ciberseguridad. Aseguramos el cumplimiento y la protección de sus datos sensibles.',
    pt: 'Proteja sua empresa contra ameaças cibernéticas com nossas soluções completas de cibersegurança. Garantimos conformidade e proteção de seus dados sensíveis.',
    ar: 'احمِ عملك من التهديدات الإلكترونية مع حلول الأمن السيبراني الشاملة لدينا. نضمن الامتثال وحماية بياناتك الحساسة.'
  },
  'services.cybersecurity.benefit1': {
    fr: 'Audits de sécurité approfondis',
    en: 'Comprehensive security audits',
    es: 'Auditorías de seguridad exhaustivas',
    pt: 'Auditorias de segurança abrangentes',
    ar: 'تدقيقات أمنية شاملة'
  },
  'services.cybersecurity.benefit2': {
    fr: 'Protection 24/7 contre les menaces',
    en: '24/7 threat protection',
    es: 'Protección 24/7 contra amenazas',
    pt: 'Proteção 24/7 contra ameaças',
    ar: 'حماية 24/7 من التهديدات'
  },
  'services.cybersecurity.benefit3': {
    fr: 'Conformité RGPD et ISO 27001',
    en: 'GDPR and ISO 27001 compliance',
    es: 'Cumplimiento RGPD e ISO 27001',
    pt: 'Conformidade RGPD e ISO 27001',
    ar: 'الامتثال لـ RGPD و ISO 27001'
  },
  'services.cybersecurity.benefit4': {
    fr: 'Formation et sensibilisation des équipes',
    en: 'Team training and awareness',
    es: 'Capacitación y concientización del equipo',
    pt: 'Treinamento e conscientização da equipe',
    ar: 'تدريب وتوعية الفريق'
  },
  'services.oracleapex.title': {
    fr: 'Développement Oracle Apex',
    en: 'Oracle Apex Development',
    es: 'Desarrollo Oracle Apex',
    pt: 'Desenvolvimento Oracle Apex',
    ar: 'تطوير Oracle Apex'
  },
  'services.oracleapex.description': {
    fr: 'Expertise Oracle Apex pour applications d\'entreprise rapides et sécurisées. Développement de solutions métier personnalisées.',
    en: 'Oracle Apex expertise for fast and secure enterprise applications. Development of customized business solutions.',
    es: 'Experiencia Oracle Apex para aplicaciones empresariales rápidas y seguras. Desarrollo de soluciones empresariales personalizadas.',
    pt: 'Expertise Oracle Apex para aplicações empresariais rápidas e seguras. Desenvolvimento de soluções de negócios personalizadas.',
    ar: 'خبرة Oracle Apex لتطبيقات المؤسسات السريعة والآمنة. تطوير حلول أعمال مخصصة.'
  },
  'services.oracleapex.features': {
    fr: 'Oracle Apex|PL/SQL Expert|Forms & Reports|Integration SOA',
    en: 'Oracle Apex|PL/SQL Expert|Forms & Reports|SOA Integration',
    es: 'Oracle Apex|Experto PL/SQL|Forms y Reports|Integración SOA',
    pt: 'Oracle Apex|Especialista PL/SQL|Forms e Reports|Integração SOA',
    ar: 'Oracle Apex|خبير PL/SQL|Forms و Reports|تكامل SOA'
  },
  'services.oracleapex.details': {
    fr: 'Développez rapidement des applications d\'entreprise robustes avec Oracle Apex. Nos experts créent des solutions métier personnalisées et performantes.',
    en: 'Quickly develop robust enterprise applications with Oracle Apex. Our experts create customized and high-performance business solutions.',
    es: 'Desarrolle rápidamente aplicaciones empresariales robustas con Oracle Apex. Nuestros expertos crean soluciones empresariales personalizadas y de alto rendimiento.',
    pt: 'Desenvolva rapidamente aplicações empresariais robustas com Oracle Apex. Nossos especialistas criam soluções de negócios personalizadas e de alto desempenho.',
    ar: 'طور بسرعة تطبيقات مؤسسات قوية مع Oracle Apex. خبراؤنا يخلقون حلول أعمال مخصصة وعالية الأداء.'
  },
  'services.oracleapex.benefit1': {
    fr: 'Développement rapide d\'applications',
    en: 'Rapid application development',
    es: 'Desarrollo rápido de aplicaciones',
    pt: 'Desenvolvimento rápido de aplicações',
    ar: 'تطوير سريع للتطبيقات'
  },
  'services.oracleapex.benefit2': {
    fr: 'Intégration native avec Oracle Database',
    en: 'Native integration with Oracle Database',
    es: 'Integración nativa con Oracle Database',
    pt: 'Integração nativa com Oracle Database',
    ar: 'تكامل أصلي مع Oracle Database'
  },
  'services.oracleapex.benefit3': {
    fr: 'Applications sécurisées et performantes',
    en: 'Secure and performant applications',
    es: 'Aplicaciones seguras y de alto rendimiento',
    pt: 'Aplicações seguras e de alto desempenho',
    ar: 'تطبيقات آمنة وعالية الأداء'
  },
  'services.oracleapex.benefit4': {
    fr: 'Support et formation Oracle',
    en: 'Oracle support and training',
    es: 'Soporte y capacitación Oracle',
    pt: 'Suporte e treinamento Oracle',
    ar: 'الدعم والتدريب Oracle'
  },
  'services.devops.title': {
    fr: 'DevOps & CI/CD',
    en: 'DevOps & CI/CD',
    es: 'DevOps y CI/CD',
    pt: 'DevOps e CI/CD',
    ar: 'DevOps و CI/CD'
  },
  'services.devops.description': {
    fr: 'Automatisation des déploiements, intégration continue, orchestration, monitoring et observabilité des systèmes.',
    en: 'Deployment automation, continuous integration, orchestration, monitoring and system observability.',
    es: 'Automatización de despliegues, integración continua, orquestación, monitoreo y observabilidad de sistemas.',
    pt: 'Automação de implantações, integração contínua, orquestração, monitoramento e observabilidade de sistemas.',
    ar: 'أتمتة النشر، التكامل المستمر، التنسيق، المراقبة ومراقبة الأنظمة.'
  },
  'services.devops.features': {
    fr: 'Jenkins, GitLab CI|Terraform, Ansible|Prometheus, Grafana|Automatisation',
    en: 'Jenkins, GitLab CI|Terraform, Ansible|Prometheus, Grafana|Automation',
    es: 'Jenkins, GitLab CI|Terraform, Ansible|Prometheus, Grafana|Automatización',
    pt: 'Jenkins, GitLab CI|Terraform, Ansible|Prometheus, Grafana|Automação',
    ar: 'Jenkins, GitLab CI|Terraform, Ansible|Prometheus, Grafana|الأتمتة'
  },
  'services.devops.details': {
    fr: 'Automatisez vos processus de développement et déploiement avec nos solutions DevOps. Réduisez les temps de livraison et améliorez la qualité.',
    en: 'Automate your development and deployment processes with our DevOps solutions. Reduce delivery times and improve quality.',
    es: 'Automatice sus procesos de desarrollo y despliegue con nuestras soluciones DevOps. Reduzca los tiempos de entrega y mejore la calidad.',
    pt: 'Automatize seus processos de desenvolvimento e implantação com nossas soluções DevOps. Reduza os tempos de entrega e melhore a qualidade.',
    ar: 'أتمت عمليات التطوير والنشر مع حلول DevOps لدينا. قلل أوقات التسليم وحسّن الجودة.'
  },
  'services.devops.benefit1': {
    fr: 'CI/CD automatisé',
    en: 'Automated CI/CD',
    es: 'CI/CD automatizado',
    pt: 'CI/CD automatizado',
    ar: 'CI/CD آلي'
  },
  'services.devops.benefit2': {
    fr: 'Infrastructure as Code',
    en: 'Infrastructure as Code',
    es: 'Infraestructura como Código',
    pt: 'Infraestrutura como Código',
    ar: 'البنية التحتية كرمز'
  },
  'services.devops.benefit3': {
    fr: 'Monitoring et observabilité',
    en: 'Monitoring and observability',
    es: 'Monitoreo y observabilidad',
    pt: 'Monitoramento e observabilidade',
    ar: 'المراقبة والمراقبة'
  },
  'services.devops.benefit4': {
    fr: 'Réduction des temps de déploiement',
    en: 'Reduced deployment times',
    es: 'Reducción de tiempos de despliegue',
    pt: 'Redução dos tempos de implantação',
    ar: 'تقليل أوقات النشر'
  },
  'services.databaseadmin.title': {
    fr: 'Administration Bases de Données',
    en: 'Database Administration',
    es: 'Administración de Bases de Datos',
    pt: 'Administração de Bancos de Dados',
    ar: 'إدارة قواعد البيانات'
  },
  'services.databaseadmin.description': {
    fr: 'Administration Oracle, PostgreSQL, MySQL, MongoDB. Optimisation, sauvegarde, haute disponibilité, migration.',
    en: 'Oracle, PostgreSQL, MySQL, MongoDB administration. Optimization, backup, high availability, migration.',
    es: 'Administración Oracle, PostgreSQL, MySQL, MongoDB. Optimización, respaldo, alta disponibilidad, migración.',
    pt: 'Administração Oracle, PostgreSQL, MySQL, MongoDB. Otimização, backup, alta disponibilidade, migração.',
    ar: 'إدارة Oracle و PostgreSQL و MySQL و MongoDB. التحسين، النسخ الاحتياطي، التوفر العالي، الهجرة.'
  },
  'services.databaseadmin.features': {
    fr: 'Oracle DBA|PostgreSQL, MySQL|Performance Tuning|Backup & Recovery',
    en: 'Oracle DBA|PostgreSQL, MySQL|Performance Tuning|Backup & Recovery',
    es: 'Oracle DBA|PostgreSQL, MySQL|Optimización de Rendimiento|Respaldo y Recuperación',
    pt: 'Oracle DBA|PostgreSQL, MySQL|Otimização de Desempenho|Backup e Recuperação',
    ar: 'Oracle DBA|PostgreSQL, MySQL|ضبط الأداء|النسخ الاحتياطي والاستعادة'
  },
  'services.databaseadmin.details': {
    fr: 'Optimisez et sécurisez vos bases de données avec nos services d\'administration. Nous garantissons performance, disponibilité et sécurité.',
    en: 'Optimize and secure your databases with our administration services. We guarantee performance, availability, and security.',
    es: 'Optimice y asegure sus bases de datos con nuestros servicios de administración. Garantizamos rendimiento, disponibilidad y seguridad.',
    pt: 'Otimize e proteja seus bancos de dados com nossos serviços de administração. Garantimos desempenho, disponibilidade e segurança.',
    ar: 'حسّن وأمّن قواعد بياناتك مع خدمات الإدارة لدينا. نضمن الأداء والتوفر والأمان.'
  },
  'services.databaseadmin.benefit1': {
    fr: 'Optimisation des performances',
    en: 'Performance optimization',
    es: 'Optimización de rendimiento',
    pt: 'Otimização de desempenho',
    ar: 'تحسين الأداء'
  },
  'services.databaseadmin.benefit2': {
    fr: 'Haute disponibilité et réplication',
    en: 'High availability and replication',
    es: 'Alta disponibilidad y replicación',
    pt: 'Alta disponibilidade e replicação',
    ar: 'التوفر العالي والنسخ المتماثل'
  },
  'services.databaseadmin.benefit3': {
    fr: 'Sauvegardes automatisées',
    en: 'Automated backups',
    es: 'Respaldos automatizados',
    pt: 'Backups automatizados',
    ar: 'النسخ الاحتياطي الآلي'
  },
  'services.databaseadmin.benefit4': {
    fr: 'Migration et modernisation',
    en: 'Migration and modernization',
    es: 'Migración y modernización',
    pt: 'Migração e modernização',
    ar: 'الهجرة والتحديث'
  },
  'services.support.title': {
    fr: 'Infogérance & Support',
    en: 'IT Management & Support',
    es: 'Gestión IT y Soporte',
    pt: 'Gestão IT e Suporte',
    ar: 'إدارة تكنولوجيا المعلومات والدعم'
  },
  'services.support.description': {
    fr: 'Maintenance applicative, support 24/7, supervision des systèmes, gestion de parc IT, helpdesk, SLA garantis.',
    en: 'Application maintenance, 24/7 support, system supervision, IT asset management, helpdesk, guaranteed SLA.',
    es: 'Mantenimiento de aplicaciones, soporte 24/7, supervisión de sistemas, gestión de parque IT, helpdesk, SLA garantizados.',
    pt: 'Manutenção de aplicações, suporte 24/7, supervisão de sistemas, gestão de parque IT, helpdesk, SLA garantidos.',
    ar: 'صيانة التطبيقات، الدعم 24/7، إشراف الأنظمة، إدارة أصول تكنولوجيا المعلومات، مكتب المساعدة، SLA مضمون.'
  },
  'services.support.features': {
    fr: 'Support 24/7|Monitoring Proactif|Maintenance Préventive|SLA Personnalisés',
    en: '24/7 Support|Proactive Monitoring|Preventive Maintenance|Customized SLA',
    es: 'Soporte 24/7|Monitoreo Proactivo|Mantenimiento Preventivo|SLA Personalizados',
    pt: 'Suporte 24/7|Monitoramento Proativo|Manutenção Preventiva|SLA Personalizados',
    ar: 'الدعم 24/7|المراقبة الاستباقية|الصيانة الوقائية|SLA مخصص'
  },
  'services.support.details': {
    fr: 'Concentrez-vous sur votre cœur de métier pendant que nous gérons votre infrastructure IT. Support réactif et proactif 24/7.',
    en: 'Focus on your core business while we manage your IT infrastructure. Reactive and proactive 24/7 support.',
    es: 'Concéntrese en su negocio principal mientras gestionamos su infraestructura IT. Soporte reactivo y proactivo 24/7.',
    pt: 'Concentre-se no seu negócio principal enquanto gerenciamos sua infraestrutura IT. Suporte reativo e proativo 24/7.',
    ar: 'ركز على عملك الأساسي بينما ندير بنيتك التحتية لتكنولوجيا المعلومات. دعم استباقي ورد الفعل 24/7.'
  },
  'services.support.benefit1': {
    fr: 'Support technique 24/7',
    en: '24/7 technical support',
    es: 'Soporte técnico 24/7',
    pt: 'Suporte técnico 24/7',
    ar: 'الدعم الفني 24/7'
  },
  'services.support.benefit2': {
    fr: 'Monitoring proactif des systèmes',
    en: 'Proactive system monitoring',
    es: 'Monitoreo proactivo de sistemas',
    pt: 'Monitoramento proativo de sistemas',
    ar: 'المراقبة الاستباقية للأنظمة'
  },
  'services.support.benefit3': {
    fr: 'Maintenance préventive',
    en: 'Preventive maintenance',
    es: 'Mantenimiento preventivo',
    pt: 'Manutenção preventiva',
    ar: 'الصيانة الوقائية'
  },
  'services.support.benefit4': {
    fr: 'SLA garantis et respectés',
    en: 'Guaranteed and met SLAs',
    es: 'SLA garantizados y cumplidos',
    pt: 'SLA garantidos e cumpridos',
    ar: 'SLA مضمونة ومحققة'
  },
  'services.consulting.title': {
    fr: 'Conseil & Transformation Digitale',
    en: 'Consulting & Digital Transformation',
    es: 'Consultoría y Transformación Digital',
    pt: 'Consultoria e Transformação Digital',
    ar: 'الاستشارات والتحول الرقمي'
  },
  'services.consulting.description': {
    fr: 'Accompagnement stratégique, audit IT, gouvernance, roadmap digitale, formation des équipes, transfert de compétences.',
    en: 'Strategic support, IT audit, governance, digital roadmap, team training, knowledge transfer.',
    es: 'Acompañamiento estratégico, auditoría IT, gobernanza, hoja de ruta digital, formación de equipos, transferencia de conocimientos.',
    pt: 'Acompanhamento estratégico, auditoria IT, governança, roteiro digital, treinamento de equipes, transferência de conhecimento.',
    ar: 'الدعم الاستراتيجي، تدقيق تكنولوجيا المعلومات، الحوكمة، خارطة الطريق الرقمية، تدريب الفرق، نقل المعرفة.'
  },
  'services.consulting.features': {
    fr: 'Audit & Conseil|Stratégie IT|Formation Équipes|Change Management',
    en: 'Audit & Consulting|IT Strategy|Team Training|Change Management',
    es: 'Auditoría y Consultoría|Estrategia IT|Formación de Equipos|Gestión del Cambio',
    pt: 'Auditoria e Consultoria|Estratégia IT|Treinamento de Equipes|Gestão de Mudanças',
    ar: 'التدقيق والاستشارات|استراتيجية تكنولوجيا المعلومات|تدريب الفرق|إدارة التغيير'
  },
  'services.consulting.details': {
    fr: 'Accompagnez votre transformation digitale avec nos experts en conseil. Nous définissons votre stratégie IT et formons vos équipes.',
    en: 'Accompany your digital transformation with our consulting experts. We define your IT strategy and train your teams.',
    es: 'Acompañe su transformación digital con nuestros expertos en consultoría. Definimos su estrategia IT y capacitamos a sus equipos.',
    pt: 'Acompanhe sua transformação digital com nossos especialistas em consultoria. Definimos sua estratégia IT e treinamos suas equipes.',
    ar: 'رافق تحولك الرقمي مع خبراء الاستشارات لدينا. نحدد استراتيجية تكنولوجيا المعلومات الخاصة بك وندرّب فرقك.'
  },
  'services.consulting.benefit1': {
    fr: 'Audit et diagnostic complet',
    en: 'Comprehensive audit and diagnosis',
    es: 'Auditoría y diagnóstico completo',
    pt: 'Auditoria e diagnóstico completo',
    ar: 'تدقيق وتشخيص شامل'
  },
  'services.consulting.benefit2': {
    fr: 'Roadmap de transformation',
    en: 'Transformation roadmap',
    es: 'Hoja de ruta de transformación',
    pt: 'Roteiro de transformação',
    ar: 'خارطة طريق التحول'
  },
  'services.consulting.benefit3': {
    fr: 'Formation et transfert de compétences',
    en: 'Training and knowledge transfer',
    es: 'Capacitación y transferencia de conocimientos',
    pt: 'Treinamento e transferência de conhecimento',
    ar: 'التدريب ونقل المعرفة'
  },
  'services.consulting.benefit4': {
    fr: 'Accompagnement au changement',
    en: 'Change management support',
    es: 'Acompañamiento del cambio',
    pt: 'Acompanhamento da mudança',
    ar: 'دعم إدارة التغيير'
  },
  'services.erpcrm.title': {
    fr: 'Solutions ERP/CRM Métier',
    en: 'ERP/CRM Business Solutions',
    es: 'Soluciones ERP/CRM Empresariales',
    pt: 'Soluções ERP/CRM Empresariais',
    ar: 'حلول ERP/CRM للأعمال'
  },
  'services.erpcrm.description': {
    fr: 'Développement et déploiement d\'ERP, CRM, solutions comptables, paie, microfinance, e-commerce personnalisés.',
    en: 'Development and deployment of customized ERP, CRM, accounting, payroll, microfinance, e-commerce solutions.',
    es: 'Desarrollo e implementación de soluciones ERP, CRM, contables, nómina, microfinanzas, comercio electrónico personalizadas.',
    pt: 'Desenvolvimento e implantação de soluções ERP, CRM, contábeis, folha de pagamento, microfinanças, e-commerce personalizadas.',
    ar: 'تطوير ونشر حلول ERP و CRM ومحاسبية وكشوف المرتبات والتمويل الأصغر والتجارة الإلكترونية المخصصة.'
  },
  'services.erpcrm.features': {
    fr: 'ERP Sur Mesure|CRM & Sales|Fintech Solutions|E-commerce',
    en: 'Custom ERP|CRM & Sales|Fintech Solutions|E-commerce',
    es: 'ERP Personalizado|CRM y Ventas|Soluciones Fintech|Comercio Electrónico',
    pt: 'ERP Personalizado|CRM e Vendas|Soluções Fintech|E-commerce',
    ar: 'ERP مخصص|CRM والمبيعات|حلول Fintech|التجارة الإلكترونية'
  },
  'services.erpcrm.details': {
    fr: 'Optimisez vos processus métier avec nos solutions ERP et CRM sur mesure. Intégration complète de vos systèmes d\'information.',
    en: 'Optimize your business processes with our custom ERP and CRM solutions. Complete integration of your information systems.',
    es: 'Optimice sus procesos empresariales con nuestras soluciones ERP y CRM personalizadas. Integración completa de sus sistemas de información.',
    pt: 'Otimize seus processos de negócios com nossas soluções ERP e CRM personalizadas. Integração completa de seus sistemas de informação.',
    ar: 'حسّن عمليات عملك مع حلول ERP و CRM المخصصة لدينا. تكامل كامل لأنظمة المعلومات الخاصة بك.'
  },
  'services.erpcrm.benefit1': {
    fr: 'Solutions ERP/CRM personnalisées',
    en: 'Customized ERP/CRM solutions',
    es: 'Soluciones ERP/CRM personalizadas',
    pt: 'Soluções ERP/CRM personalizadas',
    ar: 'حلول ERP/CRM مخصصة'
  },
  'services.erpcrm.benefit2': {
    fr: 'Intégration avec systèmes existants',
    en: 'Integration with existing systems',
    es: 'Integración con sistemas existentes',
    pt: 'Integração com sistemas existentes',
    ar: 'التكامل مع الأنظمة الموجودة'
  },
  'services.erpcrm.benefit3': {
    fr: 'Formation utilisateurs',
    en: 'User training',
    es: 'Capacitación de usuarios',
    pt: 'Treinamento de usuários',
    ar: 'تدريب المستخدمين'
  },
  'services.erpcrm.benefit4': {
    fr: 'Support et évolution continue',
    en: 'Ongoing support and evolution',
    es: 'Soporte y evolución continua',
    pt: 'Suporte e evolução contínuos',
    ar: 'الدعم والتطوير المستمر'
  },
  'services.compliance.title': {
    fr: 'Conformité & Gouvernance',
    en: 'Compliance & Governance',
    es: 'Cumplimiento y Gobernanza',
    pt: 'Conformidade e Governança',
    ar: 'الامتثال والحوكمة'
  },
  'services.compliance.description': {
    fr: 'Mise en conformité RGPD, ISO 27001, audits, politiques de sécurité, documentation, plan de continuité d\'activité.',
    en: 'GDPR compliance, ISO 27001, audits, security policies, documentation, business continuity plan.',
    es: 'Cumplimiento RGPD, ISO 27001, auditorías, políticas de seguridad, documentación, plan de continuidad empresarial.',
    pt: 'Conformidade RGPD, ISO 27001, auditorias, políticas de segurança, documentação, plano de continuidade de negócios.',
    ar: 'الامتثال لـ RGPD و ISO 27001، التدقيق، سياسات الأمان، التوثيق، خطة استمرارية الأعمال.'
  },
  'services.compliance.features': {
    fr: 'RGPD/ISO 27001|Audit Conformité|PCA/PRA|Documentation',
    en: 'GDPR/ISO 27001|Compliance Audit|BCP/DRP|Documentation',
    es: 'RGPD/ISO 27001|Auditoría de Cumplimiento|PCA/PRA|Documentación',
    pt: 'RGPD/ISO 27001|Auditoria de Conformidade|PCA/PRA|Documentação',
    ar: 'RGPD/ISO 27001|تدقيق الامتثال|PCA/PRA|التوثيق'
  },
  'services.compliance.details': {
    fr: 'Assurez la conformité de votre organisation avec les normes internationales. Nous vous accompagnons dans la mise en conformité et l\'audit.',
    en: 'Ensure your organization\'s compliance with international standards. We accompany you in compliance and auditing.',
    es: 'Asegure el cumplimiento de su organización con los estándares internacionales. Lo acompañamos en el cumplimiento y la auditoría.',
    pt: 'Garanta a conformidade da sua organização com os padrões internacionais. Acompanhamos você em conformidade e auditoria.',
    ar: 'تأكد من امتثال مؤسستك للمعايير الدولية. نرافقك في الامتثال والتدقيق.'
  },
  'services.compliance.benefit1': {
    fr: 'Conformité RGPD et ISO 27001',
    en: 'GDPR and ISO 27001 compliance',
    es: 'Cumplimiento RGPD e ISO 27001',
    pt: 'Conformidade RGPD e ISO 27001',
    ar: 'الامتثال لـ RGPD و ISO 27001'
  },
  'services.compliance.benefit2': {
    fr: 'Audits de conformité réguliers',
    en: 'Regular compliance audits',
    es: 'Auditorías de cumplimiento regulares',
    pt: 'Auditorias de conformidade regulares',
    ar: 'تدقيقات الامتثال المنتظمة'
  },
  'services.compliance.benefit3': {
    fr: 'Plans de continuité d\'activité',
    en: 'Business continuity plans',
    es: 'Planes de continuidad empresarial',
    pt: 'Planos de continuidade de negócios',
    ar: 'خطط استمرارية الأعمال'
  },
  'services.compliance.benefit4': {
    fr: 'Documentation complète',
    en: 'Complete documentation',
    es: 'Documentación completa',
    pt: 'Documentação completa',
    ar: 'توثيق كامل'
  },
  'services.migration.title': {
    fr: 'Migration & Modernisation',
    en: 'Migration & Modernization',
    es: 'Migración y Modernización',
    pt: 'Migração e Modernização',
    ar: 'الهجرة والتحديث'
  },
  'services.migration.description': {
    fr: 'Migration vers le cloud, modernisation d\'applications legacy, refonte architecturale, migration bases de données.',
    en: 'Cloud migration, legacy application modernization, architectural redesign, database migration.',
    es: 'Migración a la nube, modernización de aplicaciones legacy, rediseño arquitectónico, migración de bases de datos.',
    pt: 'Migração para a nuvem, modernização de aplicações legadas, redesenho arquitetônico, migração de bancos de dados.',
    ar: 'الهجرة إلى السحابة، تحديث التطبيقات القديمة، إعادة تصميم معماري، هجرة قواعد البيانات.'
  },
  'services.migration.features': {
    fr: 'Cloud Migration|Legacy Modernization|Re-architecture|Zero Downtime',
    en: 'Cloud Migration|Legacy Modernization|Re-architecture|Zero Downtime',
    es: 'Migración a la Nube|Modernización Legacy|Re-arquitectura|Tiempo de Inactividad Cero',
    pt: 'Migração para Nuvem|Modernização Legacy|Re-arquitetura|Tempo de Inatividade Zero',
    ar: 'الهجرة إلى السحابة|تحديث الأنظمة القديمة|إعادة البنية|صفر توقف'
  },
  'services.migration.details': {
    fr: 'Modernisez vos systèmes legacy et migrez vers le cloud en toute sécurité. Nous garantissons une migration sans interruption de service.',
    en: 'Modernize your legacy systems and migrate to the cloud safely. We guarantee a migration without service interruption.',
    es: 'Modernice sus sistemas legacy y migre a la nube de forma segura. Garantizamos una migración sin interrupción del servicio.',
    pt: 'Modernize seus sistemas legados e migre para a nuvem com segurança. Garantimos uma migração sem interrupção de serviço.',
    ar: 'حدّث أنظمتك القديمة وانتقل إلى السحابة بأمان. نضمن الهجرة دون انقطاع في الخدمة.'
  },
  'services.migration.benefit1': {
    fr: 'Migration cloud sécurisée',
    en: 'Secure cloud migration',
    es: 'Migración a la nube segura',
    pt: 'Migração para nuvem segura',
    ar: 'هجرة سحابية آمنة'
  },
  'services.migration.benefit2': {
    fr: 'Modernisation des applications legacy',
    en: 'Legacy application modernization',
    es: 'Modernización de aplicaciones legacy',
    pt: 'Modernização de aplicações legadas',
    ar: 'تحديث التطبيقات القديمة'
  },
  'services.migration.benefit3': {
    fr: 'Refonte architecturale',
    en: 'Architectural redesign',
    es: 'Rediseño arquitectónico',
    pt: 'Redesenho arquitetônico',
    ar: 'إعادة التصميم المعماري'
  },
  'services.migration.benefit4': {
    fr: 'Migration zéro downtime',
    en: 'Zero downtime migration',
    es: 'Migración sin tiempo de inactividad',
    pt: 'Migração sem tempo de inatividade',
    ar: 'هجرة بدون وقت توقف'
  },
  // Expertise Section
  'expertise.title': {
    fr: 'Notre Expertise Technique',
    en: 'Our Technical Expertise',
    es: 'Nuestra Experiencia Técnica',
    pt: 'Nossa Expertise Técnica',
    ar: 'خبرتنا التقنية'
  },
  'expertise.subtitle': {
    fr: 'Une équipe d\'experts certifiés avec une expérience approfondie dans les technologies les plus avancées',
    en: 'A team of certified experts with deep experience in the most advanced technologies',
    es: 'Un equipo de expertos certificados con experiencia profunda en las tecnologías más avanzadas',
    pt: 'Uma equipe de especialistas certificados com experiência profunda nas tecnologias mais avançadas',
    ar: 'فريق من الخبراء المعتمدين مع خبرة عميقة في أحدث التقنيات'
  },
  'expertise.experience': {
    fr: 'expérience',
    en: 'experience',
    es: 'experiencia',
    pt: 'experiência',
    ar: 'خبرة'
  },
  'expertise.projects': {
    fr: 'projets',
    en: 'projects',
    es: 'proyectos',
    pt: 'projetos',
    ar: 'مشاريع'
  },
  'expertise.delivered': {
    fr: 'Projets Livrés',
    en: 'Delivered Projects',
    es: 'Proyectos Entregados',
    pt: 'Projetos Entregues',
    ar: 'المشاريع المنجزة'
  },
  'expertise.countries': {
    fr: 'Pays Couverts',
    en: 'Countries Covered',
    es: 'Países Cubiertos',
    pt: 'Países Cobertos',
    ar: 'الدول المغطاة'
  },
  'expertise.satisfaction': {
    fr: 'Satisfaction Client',
    en: 'Client Satisfaction',
    es: 'Satisfacción del Cliente',
    pt: 'Satisfação do Cliente',
    ar: 'رضا العملاء'
  },
  'expertise.support': {
    fr: 'Support Disponible',
    en: 'Available Support',
    es: 'Soporte Disponible',
    pt: 'Suporte Disponível',
    ar: 'الدعم المتاح'
  },
  // Expertise individuelle
  'expertise.fullstack.title': {
    fr: 'Développement Full-Stack',
    en: 'Full-Stack Development',
    es: 'Desarrollo Full-Stack',
    pt: 'Desenvolvimento Full-Stack',
    ar: 'تطوير Full-Stack'
  },
  'expertise.fullstack.skills': {
    fr: 'React, Vue, Angular, Node.js|Python, Java, .NET|React Native, Flutter|TypeScript, JavaScript ES6+',
    en: 'React, Vue, Angular, Node.js|Python, Java, .NET|React Native, Flutter|TypeScript, JavaScript ES6+',
    es: 'React, Vue, Angular, Node.js|Python, Java, .NET|React Native, Flutter|TypeScript, JavaScript ES6+',
    pt: 'React, Vue, Angular, Node.js|Python, Java, .NET|React Native, Flutter|TypeScript, JavaScript ES6+',
    ar: 'React, Vue, Angular, Node.js|Python, Java, .NET|React Native, Flutter|TypeScript, JavaScript ES6+'
  },
  'expertise.database.title': {
    fr: 'Bases de Données & Data',
    en: 'Databases & Data',
    es: 'Bases de Datos y Datos',
    pt: 'Bancos de Dados e Dados',
    ar: 'قواعد البيانات والبيانات'
  },
  'expertise.database.skills': {
    fr: 'Oracle Database Expert|PostgreSQL, MySQL, MongoDB|Data Warehouse, ETL|Big Data, Spark, Hadoop',
    en: 'Oracle Database Expert|PostgreSQL, MySQL, MongoDB|Data Warehouse, ETL|Big Data, Spark, Hadoop',
    es: 'Experto Oracle Database|PostgreSQL, MySQL, MongoDB|Data Warehouse, ETL|Big Data, Spark, Hadoop',
    pt: 'Especialista Oracle Database|PostgreSQL, MySQL, MongoDB|Data Warehouse, ETL|Big Data, Spark, Hadoop',
    ar: 'خبير Oracle Database|PostgreSQL, MySQL, MongoDB|مستودع البيانات، ETL|البيانات الضخمة، Spark، Hadoop'
  },
  'expertise.cloud.title': {
    fr: 'Oracle Cloud & Cloud Computing',
    en: 'Oracle Cloud & Cloud Computing',
    es: 'Oracle Cloud y Computación en la Nube',
    pt: 'Oracle Cloud e Computação em Nuvem',
    ar: 'Oracle Cloud والحوسبة السحابية'
  },
  'expertise.cloud.skills': {
    fr: 'Oracle Cloud Infrastructure|AWS, Azure, Google Cloud|Kubernetes, Docker|Terraform, CloudFormation',
    en: 'Oracle Cloud Infrastructure|AWS, Azure, Google Cloud|Kubernetes, Docker|Terraform, CloudFormation',
    es: 'Oracle Cloud Infrastructure|AWS, Azure, Google Cloud|Kubernetes, Docker|Terraform, CloudFormation',
    pt: 'Oracle Cloud Infrastructure|AWS, Azure, Google Cloud|Kubernetes, Docker|Terraform, CloudFormation',
    ar: 'Oracle Cloud Infrastructure|AWS, Azure, Google Cloud|Kubernetes, Docker|Terraform, CloudFormation'
  },
  'expertise.infradevops.title': {
    fr: 'Infrastructure & DevOps',
    en: 'Infrastructure & DevOps',
    es: 'Infraestructura y DevOps',
    pt: 'Infraestrutura e DevOps',
    ar: 'البنية التحتية و DevOps'
  },
  'expertise.infradevops.skills': {
    fr: 'CI/CD Jenkins, GitLab|Linux Administration|Monitoring, Observability|Automatisation Ansible',
    en: 'CI/CD Jenkins, GitLab|Linux Administration|Monitoring, Observability|Ansible Automation',
    es: 'CI/CD Jenkins, GitLab|Administración Linux|Monitoreo, Observabilidad|Automatización Ansible',
    pt: 'CI/CD Jenkins, GitLab|Administração Linux|Monitoramento, Observabilidade|Automação Ansible',
    ar: 'CI/CD Jenkins, GitLab|إدارة Linux|المراقبة والمراقبة|أتمتة Ansible'
  },
  'expertise.cybersecurity.title': {
    fr: 'Cybersécurité',
    en: 'Cybersecurity',
    es: 'Ciberseguridad',
    pt: 'Cibersegurança',
    ar: 'الأمن السيبراني'
  },
  'expertise.cybersecurity.skills': {
    fr: 'Pentest & Audit Sécurité|SIEM, SOC|Conformité RGPD, ISO 27001|WAF, IDS/IPS',
    en: 'Pentest & Security Audit|SIEM, SOC|GDPR Compliance, ISO 27001|WAF, IDS/IPS',
    es: 'Pentest y Auditoría de Seguridad|SIEM, SOC|Cumplimiento RGPD, ISO 27001|WAF, IDS/IPS',
    pt: 'Pentest e Auditoria de Segurança|SIEM, SOC|Conformidade RGPD, ISO 27001|WAF, IDS/IPS',
    ar: 'اختبار الاختراق وتدقيق الأمان|SIEM, SOC|الامتثال لـ RGPD و ISO 27001|WAF, IDS/IPS'
  },
  'expertise.oracleapex.title': {
    fr: 'Oracle Apex Development',
    en: 'Oracle Apex Development',
    es: 'Desarrollo Oracle Apex',
    pt: 'Desenvolvimento Oracle Apex',
    ar: 'تطوير Oracle Apex'
  },
  'expertise.oracleapex.skills': {
    fr: 'Oracle Apex Expert|PL/SQL Advanced|Oracle Forms, Reports|Integration & APIs',
    en: 'Oracle Apex Expert|Advanced PL/SQL|Oracle Forms, Reports|Integration & APIs',
    es: 'Experto Oracle Apex|PL/SQL Avanzado|Oracle Forms, Reports|Integración y APIs',
    pt: 'Especialista Oracle Apex|PL/SQL Avançado|Oracle Forms, Reports|Integração e APIs',
    ar: 'خبير Oracle Apex|PL/SQL المتقدم|Oracle Forms, Reports|التكامل و APIs'
  },
  // Technologies Section
  'technologies.title': {
    fr: 'Technologies & Outils Maîtrisés',
    en: 'Mastered Technologies & Tools',
    es: 'Tecnologías y Herramientas Dominadas',
    pt: 'Tecnologias e Ferramentas Dominadas',
    ar: 'التقنيات والأدوات المتقنة'
  },
  'technologies.subtitle': {
    fr: 'Nous travaillons avec les technologies les plus modernes et éprouvées pour garantir performance et fiabilité',
    en: 'We work with the most modern and proven technologies to guarantee performance and reliability',
    es: 'Trabajamos con las tecnologías más modernas y probadas para garantizar rendimiento y fiabilidad',
    pt: 'Trabalhamos com as tecnologias mais modernas e comprovadas para garantir desempenho e confiabilidade',
    ar: 'نعمل مع أحدث التقنيات والمثبتة لضمان الأداء والموثوقية'
  },
  'technologies.seeAll': {
    fr: 'Voir toutes nos technologies',
    en: 'See all our technologies',
    es: 'Ver todas nuestras tecnologías',
    pt: 'Ver todas as nossas tecnologias',
    ar: 'رؤية جميع تقنياتنا'
  },
  'technologies.adapted': {
    fr: 'Technologies Adaptées à Vos Besoins',
    en: 'Technologies Adapted to Your Needs',
    es: 'Tecnologías Adaptadas a Sus Necesidades',
    pt: 'Tecnologias Adaptadas às Suas Necessidades',
    ar: 'تقنيات مكيفة لاحتياجاتك'
  },
  'technologies.adaptedDesc': {
    fr: 'Nous sélectionnons les meilleures technologies en fonction de votre contexte, vos contraintes et vos objectifs',
    en: 'We select the best technologies based on your context, constraints and objectives',
    es: 'Seleccionamos las mejores tecnologías según su contexto, restricciones y objetivos',
    pt: 'Selecionamos as melhores tecnologias com base no seu contexto, restrições e objetivos',
    ar: 'نختار أفضل التقنيات بناءً على سياقك وق constraints وأهدافك'
  },
  'technologies.discover': {
    fr: 'Découvrir toutes nos technologies',
    en: 'Discover all our technologies',
    es: 'Descubrir todas nuestras tecnologías',
    pt: 'Descobrir todas as nossas tecnologias',
    ar: 'اكتشف جميع تقنياتنا'
  },
  // Contact Section
  'contact.title': {
    fr: 'Contactez-Nous',
    en: 'Contact Us',
    es: 'Contáctenos',
    pt: 'Entre em Contato',
    ar: 'اتصل بنا'
  },
  'contact.subtitle': {
    fr: 'Discutons de votre projet et découvrons comment INOV TECHNOLOGY peut transformer votre vision en réalité',
    en: 'Let\'s discuss your project and discover how INOV TECHNOLOGY can transform your vision into reality',
    es: 'Hablemos de su proyecto y descubramos cómo INOV TECHNOLOGY puede transformar su visión en realidad',
    pt: 'Vamos discutir seu projeto e descobrir como INOV TECHNOLOGY pode transformar sua visão em realidade',
    ar: 'دعنا نناقش مشروعك ونكتشف كيف يمكن لـ INOV TECHNOLOGY تحويل رؤيتك إلى واقع'
  },
  'contact.info': {
    fr: 'Informations de Contact',
    en: 'Contact Information',
    es: 'Información de Contacto',
    pt: 'Informações de Contato',
    ar: 'معلومات الاتصال'
  },
  'contact.name': {
    fr: 'Nom complet',
    en: 'Full name',
    es: 'Nombre completo',
    pt: 'Nome completo',
    ar: 'الاسم الكامل'
  },
  'contact.email': {
    fr: 'Adresse email',
    en: 'Email address',
    es: 'Dirección de correo',
    pt: 'Endereço de email',
    ar: 'عنوان البريد الإلكتروني'
  },
  'contact.phone': {
    fr: 'Téléphone',
    en: 'Phone',
    es: 'Teléfono',
    pt: 'Telefone',
    ar: 'الهاتف'
  },
  'contact.company': {
    fr: 'Entreprise',
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa',
    ar: 'الشركة'
  },
  'contact.subject': {
    fr: 'Sujet',
    en: 'Subject',
    es: 'Asunto',
    pt: 'Assunto',
    ar: 'الموضوع'
  },
  'contact.message': {
    fr: 'Message',
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem',
    ar: 'الرسالة'
  },
  'contact.send': {
    fr: 'Envoyer le message',
    en: 'Send message',
    es: 'Enviar mensaje',
    pt: 'Enviar mensagem',
    ar: 'إرسال الرسالة'
  },
  'contact.sending': {
    fr: 'Envoi en cours...',
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...',
    ar: 'جاري الإرسال...'
  },
  'contact.success': {
    fr: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    en: 'Message sent successfully! We will respond as soon as possible.',
    es: '¡Mensaje enviado con éxito! Le responderemos lo antes posible.',
    pt: 'Mensagem enviada com sucesso! Responderemos o mais rápido possível.',
    ar: 'تم إرسال الرسالة بنجاح! سنرد عليك في أقرب وقت ممكن.'
  },
  'contact.error': {
    fr: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
    en: 'An error occurred. Please try again or contact us directly.',
    es: 'Ocurrió un error. Por favor, intente nuevamente o contáctenos directamente.',
    pt: 'Ocorreu um erro. Por favor, tente novamente ou entre em contato conosco diretamente.',
    ar: 'حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
  },
  // Footer
  'footer.description': {
    fr: 'Leader en solutions IT complètes : développement web & mobile, cloud, data engineering, cybersécurité. 15+ ans d\'expérience, 180+ pays.',
    en: 'Leader in complete IT solutions: web & mobile development, cloud, data engineering, cybersecurity. 15+ years of experience, 180+ countries.',
    es: 'Líder en soluciones IT completas: desarrollo web y móvil, cloud, ingeniería de datos, ciberseguridad. 15+ años de experiencia, 180+ países.',
    pt: 'Líder em soluções IT completas: desenvolvimento web e móvel, cloud, engenharia de dados, cibersegurança. 15+ anos de experiência, 180+ países.',
    ar: 'رائد في حلول تكنولوجيا المعلومات الشاملة: تطوير الويب والجوال، السحابة، هندسة البيانات، الأمن السيبراني. 15+ سنة من الخبرة، 180+ دولة.'
  },
  'footer.services': {
    fr: 'Services',
    en: 'Services',
    es: 'Servicios',
    pt: 'Serviços',
    ar: 'الخدمات'
  },
  'footer.allServices': {
    fr: 'Tous nos Services',
    en: 'All our Services',
    es: 'Todos nuestros Servicios',
    pt: 'Todos os nossos Serviços',
    ar: 'جميع خدماتنا'
  },
  'footer.webMobile': {
    fr: 'Développement Web & Mobile',
    en: 'Web & Mobile Development',
    es: 'Desarrollo Web y Móvil',
    pt: 'Desenvolvimento Web e Móvel',
    ar: 'تطوير الويب والجوال'
  },
  'footer.dataEngineering': {
    fr: 'Data Engineering & BI',
    en: 'Data Engineering & BI',
    es: 'Ingeniería de Datos y BI',
    pt: 'Engenharia de Dados e BI',
    ar: 'هندسة البيانات والذكاء التجاري'
  },
  'footer.cloud': {
    fr: 'Cloud & Infrastructure',
    en: 'Cloud & Infrastructure',
    es: 'Cloud e Infraestructura',
    pt: 'Cloud e Infraestrutura',
    ar: 'السحابة والبنية التحتية'
  },
  'footer.cybersecurity': {
    fr: 'Cybersécurité',
    en: 'Cybersecurity',
    es: 'Ciberseguridad',
    pt: 'Cibersegurança',
    ar: 'الأمن السيبراني'
  },
  'footer.oracle': {
    fr: 'Oracle Apex & Database',
    en: 'Oracle Apex & Database',
    es: 'Oracle Apex y Base de Datos',
    pt: 'Oracle Apex e Banco de Dados',
    ar: 'Oracle Apex وقاعدة البيانات'
  },
  'footer.company': {
    fr: 'Entreprise',
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa',
    ar: 'الشركة'
  },
  'footer.about': {
    fr: 'À Propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    ar: 'من نحن'
  },
  'footer.projects': {
    fr: 'Projets Réalisés',
    en: 'Completed Projects',
    es: 'Proyectos Realizados',
    pt: 'Projetos Realizados',
    ar: 'المشاريع المنجزة'
  },
  'footer.careers': {
    fr: 'Carrières',
    en: 'Careers',
    es: 'Carreras',
    pt: 'Carreiras',
    ar: 'الوظائف'
  },
  'footer.blog': {
    fr: 'Blog',
    en: 'Blog',
    es: 'Blog',
    pt: 'Blog',
    ar: 'المدونة'
  },
  'footer.contact': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    ar: 'اتصل بنا'
  },
  'footer.contactTitle': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto',
    pt: 'Contato',
    ar: 'اتصل بنا'
  },
  'footer.location': {
    fr: 'Lomé, Togo',
    en: 'Lomé, Togo',
    es: 'Lomé, Togo',
    pt: 'Lomé, Togo',
    ar: 'لومي، توغو'
  },
  'footer.region': {
    fr: 'Afrique de l\'Ouest',
    en: 'West Africa',
    es: 'África Occidental',
    pt: 'África Ocidental',
    ar: 'غرب أفريقيا'
  },
  'footer.presence': {
    fr: 'Présence: 180+ pays',
    en: 'Presence: 180+ countries',
    es: 'Presencia: 180+ países',
    pt: 'Presença: 180+ países',
    ar: 'الحضور: 180+ دولة'
  },
  'footer.privacy': {
    fr: 'Politique de Confidentialité',
    en: 'Privacy Policy',
    es: 'Política de Privacidad',
    pt: 'Política de Privacidade',
    ar: 'سياسة الخصوصية'
  },
  'footer.terms': {
    fr: 'Conditions d\'Utilisation',
    en: 'Terms of Use',
    es: 'Términos de Uso',
    pt: 'Termos de Uso',
    ar: 'شروط الاستخدام'
  },
  'footer.legal': {
    fr: 'Mentions Légales',
    en: 'Legal Notice',
    es: 'Aviso Legal',
    pt: 'Aviso Legal',
    ar: 'الإشعار القانوني'
  },
  'footer.gdpr': {
    fr: 'RGPD',
    en: 'GDPR',
    es: 'RGPD',
    pt: 'LGPD',
    ar: 'GDPR'
  },
  'footer.certifications': {
    fr: 'Certifications: Oracle, AWS, Azure, ISO 27001, CISSP, CKA',
    en: 'Certifications: Oracle, AWS, Azure, ISO 27001, CISSP, CKA',
    es: 'Certificaciones: Oracle, AWS, Azure, ISO 27001, CISSP, CKA',
    pt: 'Certificações: Oracle, AWS, Azure, ISO 27001, CISSP, CKA',
    ar: 'الشهادات: Oracle, AWS, Azure, ISO 27001, CISSP, CKA'
  },
  'footer.copyright': {
    fr: '© 2025 INOV TECHNOLOGY. Tous droits réservés. | 15+ ans d\'excellence IT en Afrique et dans le monde',
    en: '© 2025 INOV TECHNOLOGY. All rights reserved. | 15+ years of IT excellence in Africa and worldwide',
    es: '© 2025 INOV TECHNOLOGY. Todos los derechos reservados. | 15+ años de excelencia IT en África y en el mundo',
    pt: '© 2025 INOV TECHNOLOGY. Todos os direitos reservados. | 15+ anos de excelência IT na África e no mundo',
    ar: '© 2025 INOV TECHNOLOGY. جميع الحقوق محفوظة. | 15+ سنة من التميز في تكنولوجيا المعلومات في أفريقيا والعالم'
  },
  'footer.selectLanguage': {
    fr: 'Choisir la langue',
    en: 'Select language',
    es: 'Seleccionar idioma',
    pt: 'Selecionar idioma',
    ar: 'اختر اللغة'
  },
  'footer.followUs': {
    fr: 'Suivez-nous',
    en: 'Follow us',
    es: 'Síguenos',
    pt: 'Siga-nos',
    ar: 'تابعنا'
  },
  'footer.lightMode': {
    fr: 'Mode Clair',
    en: 'Light Mode',
    es: 'Modo Claro',
    pt: 'Modo Claro',
    ar: 'الوضع الفاتح'
  },
  'footer.darkMode': {
    fr: 'Mode Sombre',
    en: 'Dark Mode',
    es: 'Modo Oscuro',
    pt: 'Modo Escuro',
    ar: 'الوضع الداكن'
  },
  // Global Presence
  'presence.badge': {
    fr: 'Présence Mondiale',
    en: 'Global Presence',
    es: 'Presencia Global',
    pt: 'Presença Global',
    ar: 'الحضور العالمي'
  },
  'presence.title': {
    fr: 'INOV TECHNOLOGY dans Plus de 180 Pays',
    en: 'INOV TECHNOLOGY in More than 180 Countries',
    es: 'INOV TECHNOLOGY en Más de 180 Países',
    pt: 'INOV TECHNOLOGY em Mais de 180 Países',
    ar: 'INOV TECHNOLOGY في أكثر من 180 دولة'
  },
  'presence.subtitle': {
    fr: 'Une expertise reconnue internationalement avec des projets déployés sur tous les continents',
    en: 'Internationally recognized expertise with projects deployed across all continents',
    es: 'Experiencia reconocida internacionalmente con proyectos desplegados en todos los continentes',
    pt: 'Expertise reconhecida internacionalmente com projetos implantados em todos os continentes',
    ar: 'خبرة معترف بها دوليًا مع مشاريع تم نشرها عبر جميع القارات'
  },
  'presence.westAfrica': {
    fr: 'Afrique de l\'Ouest',
    en: 'West Africa',
    es: 'África Occidental',
    pt: 'África Ocidental',
    ar: 'غرب أفريقيا'
  },
  'presence.westAfricaDesc': {
    fr: 'Présence forte au Togo, Bénin, Ghana, Côte d\'Ivoire, Sénégal, Mali, Burkina Faso. Expertise UEMOA.',
    en: 'Strong presence in Togo, Benin, Ghana, Côte d\'Ivoire, Senegal, Mali, Burkina Faso. UEMOA expertise.',
    es: 'Fuerte presencia en Togo, Benín, Ghana, Costa de Marfil, Senegal, Mali, Burkina Faso. Experiencia UEMOA.',
    pt: 'Forte presença no Togo, Benim, Gana, Costa do Marfim, Senegal, Mali, Burkina Faso. Expertise UEMOA.',
    ar: 'وجود قوي في توغو، بنين، غانا، ساحل العاج، السنغال، مالي، بوركينا فاسو. خبرة UEMOA.'
  },
  'presence.international': {
    fr: 'Projets Internationaux',
    en: 'International Projects',
    es: 'Proyectos Internacionales',
    pt: 'Projetos Internacionais',
    ar: 'المشاريع الدولية'
  },
  'presence.internationalDesc': {
    fr: 'États, administrations, ONG internationales, institutions financières, banques, assurances, microfinance.',
    en: 'States, administrations, international NGOs, financial institutions, banks, insurance, microfinance.',
    es: 'Estados, administraciones, ONG internacionales, instituciones financieras, bancos, seguros, microfinanzas.',
    pt: 'Estados, administrações, ONGs internacionais, instituições financeiras, bancos, seguros, microfinanças.',
    ar: 'الدول، الإدارات، المنظمات غير الحكومية الدولية، المؤسسات المالية، البنوك، التأمين، التمويل الأصغر.'
  },
  'presence.partners': {
    fr: 'Partenaires Stratégiques',
    en: 'Strategic Partners',
    es: 'Socios Estratégicos',
    pt: 'Parceiros Estratégicos',
    ar: 'الشركاء الاستراتيجيون'
  },
  'presence.partnersDesc': {
    fr: 'Collaborations avec les plus grandes institutions africaines et organisations internationales.',
    en: 'Collaborations with the largest African institutions and international organizations.',
    es: 'Colaboraciones con las mayores instituciones africanas y organizaciones internacionales.',
    pt: 'Colaborações com as maiores instituições africanas e organizações internacionais.',
    ar: 'تعاون مع أكبر المؤسسات الأفريقية والمنظمات الدولية.'
  },
  'presence.activeCountries': {
    fr: 'Pays Actifs',
    en: 'Active Countries',
    es: 'Países Activos',
    pt: 'Países Ativos',
    ar: 'الدول النشطة'
  },
  'presence.certifications': {
    fr: 'Certifications',
    en: 'Certifications',
    es: 'Certificaciones',
    pt: 'Certificações',
    ar: 'الشهادات'
  },
  'presence.sectors': {
    fr: 'Secteurs d\'Activité Couverts',
    en: 'Covered Business Sectors',
    es: 'Sectores de Actividad Cubiertos',
    pt: 'Setores de Atividade Cobertos',
    ar: 'القطاعات المشمولة'
  },
  // Certifications
  'certifications.badge': {
    fr: 'Certifications Professionnelles',
    en: 'Professional Certifications',
    es: 'Certificaciones Profesionales',
    pt: 'Certificações Profissionais',
    ar: 'الشهادات المهنية'
  },
  'certifications.title': {
    fr: 'Expertise Certifiée & Reconnue',
    en: 'Certified & Recognized Expertise',
    es: 'Experiencia Certificada y Reconocida',
    pt: 'Expertise Certificada e Reconhecida',
    ar: 'خبرة معتمدة ومعترف بها'
  },
  'certifications.subtitle': {
    fr: 'Notre équipe d\'experts certifiés garantit la qualité et la fiabilité de nos solutions',
    en: 'Our team of certified experts guarantees the quality and reliability of our solutions',
    es: 'Nuestro equipo de expertos certificados garantiza la calidad y fiabilidad de nuestras soluciones',
    pt: 'Nossa equipe de especialistas certificados garante a qualidade e confiabilidade de nossas soluções',
    ar: 'يضمن فريق الخبراء المعتمدين لدينا جودة وموثوقية حلولنا'
  },
  'certifications.moreThan50': {
    fr: 'Plus de 50 Certifications',
    en: 'More than 50 Certifications',
    es: 'Más de 50 Certificaciones',
    pt: 'Mais de 50 Certificações',
    ar: 'أكثر من 50 شهادة'
  },
  'certifications.moreThan50Desc': {
    fr: 'Notre équipe détient plus de 50 certifications professionnelles reconnues internationalement',
    en: 'Our team holds more than 50 internationally recognized professional certifications',
    es: 'Nuestro equipo posee más de 50 certificaciones profesionales reconocidas internacionalmente',
    pt: 'Nossa equipe possui mais de 50 certificações profissionais reconhecidas internacionalmente',
    ar: 'يحتفظ فريقنا بأكثر من 50 شهادة مهنية معترف بها دوليًا'
  },
  'certifications.excellence': {
    fr: 'Excellence Technique',
    en: 'Technical Excellence',
    es: 'Excelencia Técnica',
    pt: 'Excelência Técnica',
    ar: 'التميز التقني'
  },
  'certifications.excellenceDesc': {
    fr: 'Experts certifiés Oracle, AWS, Azure, Kubernetes, et technologies de pointe',
    en: 'Certified experts in Oracle, AWS, Azure, Kubernetes, and cutting-edge technologies',
    es: 'Expertos certificados en Oracle, AWS, Azure, Kubernetes y tecnologías de vanguardia',
    pt: 'Especialistas certificados em Oracle, AWS, Azure, Kubernetes e tecnologias de ponta',
    ar: 'خبراء معتمدون في Oracle و AWS و Azure و Kubernetes والتقنيات المتقدمة'
  },
  'certifications.security': {
    fr: 'Sécurité Garantie',
    en: 'Guaranteed Security',
    es: 'Seguridad Garantizada',
    pt: 'Segurança Garantida',
    ar: 'الأمان مضمون'
  },
  'certifications.securityDesc': {
    fr: 'Certifications ISO 27001, CISSP, et conformité aux normes internationales',
    en: 'ISO 27001, CISSP certifications, and compliance with international standards',
    es: 'Certificaciones ISO 27001, CISSP y cumplimiento de estándares internacionales',
    pt: 'Certificações ISO 27001, CISSP e conformidade com padrões internacionais',
    ar: 'شهادات ISO 27001 و CISSP والامتثال للمعايير الدولية'
  },
  'certifications.training': {
    fr: 'Formation Continue',
    en: 'Continuous Training',
    es: 'Formación Continua',
    pt: 'Treinamento Contínuo',
    ar: 'التدريب المستمر'
  },
  'certifications.trainingDesc': {
    fr: 'Mise à jour permanente des compétences et veille technologique active',
    en: 'Continuous skills updates and active technology watch',
    es: 'Actualización permanente de habilidades y vigilancia tecnológica activa',
    pt: 'Atualização contínua de habilidades e monitoramento tecnológico ativo',
    ar: 'تحديث مستمر للمهارات ومراقبة تكنولوجية نشطة'
  },
  'certifications.main': {
    fr: 'Nos Certifications Principales',
    en: 'Our Main Certifications',
    es: 'Nuestras Certificaciones Principales',
    pt: 'Nossas Principais Certificações',
    ar: 'شهاداتنا الرئيسية'
  },
  'certifications.excellenceTitle': {
    fr: 'Votre Projet Mérite l\'Excellence',
    en: 'Your Project Deserves Excellence',
    es: 'Su Proyecto Merece la Excelencia',
    pt: 'Seu Projeto Merece Excelência',
    ar: 'مشروعك يستحق التميز'
  },
  'certifications.excellenceDesc2': {
    fr: 'Confiez votre transformation digitale à une équipe d\'experts certifiés et expérimentés',
    en: 'Entrust your digital transformation to a team of certified and experienced experts',
    es: 'Confíe su transformación digital a un equipo de expertos certificados y experimentados',
    pt: 'Confie sua transformação digital a uma equipe de especialistas certificados e experientes',
    ar: 'أعتمد تحولك الرقمي لفريق من الخبراء المعتمدين وذوي الخبرة'
  },
  'certifications.discuss': {
    fr: 'Discutons de Votre Projet',
    en: 'Let\'s Discuss Your Project',
    es: 'Hablemos de Su Proyecto',
    pt: 'Vamos Discutir Seu Projeto',
    ar: 'دعنا نناقش مشروعك'
  },
  // Projects
  'projects.title': {
    fr: 'Projets Réalisés avec Succès',
    en: 'Successfully Completed Projects',
    es: 'Proyectos Completados con Éxito',
    pt: 'Projetos Concluídos com Sucesso',
    ar: 'المشاريع المنجزة بنجاح'
  },
  'projects.subtitle': {
    fr: 'Plus de 500 projets déployés avec succès à travers le monde, des solutions qui transforment les organisations',
    en: 'More than 500 projects successfully deployed worldwide, solutions that transform organizations',
    es: 'Más de 500 proyectos desplegados con éxito en todo el mundo, soluciones que transforman organizaciones',
    pt: 'Mais de 500 projetos implantados com sucesso em todo o mundo, soluções que transformam organizações',
    ar: 'أكثر من 500 مشروع تم نشره بنجاح في جميع أنحاء العالم، حلول تحول المنظمات'
  },
  'projects.duration': {
    fr: 'Durée',
    en: 'Duration',
    es: 'Duración',
    pt: 'Duração',
    ar: 'المدة'
  },
  'projects.team': {
    fr: 'Équipe',
    en: 'Team',
    es: 'Equipo',
    pt: 'Equipe',
    ar: 'الفريق'
  },
  'projects.impact': {
    fr: 'Impact',
    en: 'Impact',
    es: 'Impacto',
    pt: 'Impacto',
    ar: 'التأثير'
  },
  'projects.technologies': {
    fr: 'Technologies',
    en: 'Technologies',
    es: 'Tecnologías',
    pt: 'Tecnologias',
    ar: 'التقنيات'
  },
  'projects.viewDetails': {
    fr: 'Voir les détails',
    en: 'View details',
    es: 'Ver detalles',
    pt: 'Ver detalhes',
    ar: 'عرض التفاصيل'
  },
  'projects.viewAll': {
    fr: 'Voir Tous Nos Projets',
    en: 'View All Our Projects',
    es: 'Ver Todos Nuestros Proyectos',
    pt: 'Ver Todos os Nossos Projetos',
    ar: 'عرض جميع مشاريعنا'
  },
  // Common
  'common.duration': {
    fr: 'Durée',
    en: 'Duration',
    es: 'Duración',
    pt: 'Duração',
    ar: 'المدة'
  },
  'common.team': {
    fr: 'Équipe',
    en: 'Team',
    es: 'Equipo',
    pt: 'Equipe',
    ar: 'الفريق'
  },
  'common.impact': {
    fr: 'Impact',
    en: 'Impact',
    es: 'Impacto',
    pt: 'Impacto',
    ar: 'التأثير'
  },
  'common.technologies': {
    fr: 'Technologies',
    en: 'Technologies',
    es: 'Tecnologías',
    pt: 'Tecnologias',
    ar: 'التقنيات'
  },
  'common.client': {
    fr: 'Client',
    en: 'Client',
    es: 'Cliente',
    pt: 'Cliente',
    ar: 'العميل'
  },
  'common.results': {
    fr: 'Résultats Obtenus',
    en: 'Results Obtained',
    es: 'Resultados Obtenidos',
    pt: 'Resultados Obtidos',
    ar: 'النتائج المحققة'
  },
  'common.details': {
    fr: 'Détails',
    en: 'Details',
    es: 'Detalles',
    pt: 'Detalhes',
    ar: 'التفاصيل'
  },
  'common.ready': {
    fr: 'Prêt à Commencer ?',
    en: 'Ready to Start?',
    es: '¿Listo para Empezar?',
    pt: 'Pronto para Começar?',
    ar: 'هل أنت مستعد للبدء؟'
  },
  'common.contactToday': {
    fr: 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé',
    en: 'Contact us today to discuss your needs and get a personalized quote',
    es: 'Contáctenos hoy para discutir sus necesidades y obtener un presupuesto personalizado',
    pt: 'Entre em contato hoje para discutir suas necessidades e obter um orçamento personalizado',
    ar: 'اتصل بنا اليوم لمناقشة احتياجاتك والحصول على عرض أسعار مخصص'
  },
  'common.sendMessage': {
    fr: 'Envoyer un Message',
    en: 'Send a Message',
    es: 'Enviar un Mensaje',
    pt: 'Enviar uma Mensagem',
    ar: 'إرسال رسالة'
  },
  'common.callNow': {
    fr: 'Appeler Maintenant',
    en: 'Call Now',
    es: 'Llamar Ahora',
    pt: 'Ligar Agora',
    ar: 'اتصل الآن'
  },
  'common.discussProject': {
    fr: 'Discuter d\'un Projet Similaire',
    en: 'Discuss a Similar Project',
    es: 'Discutir un Proyecto Similar',
    pt: 'Discutir um Projeto Similar',
    ar: 'مناقشة مشروع مماثل'
  },
  'common.startNow': {
    fr: 'Démarrer Maintenant',
    en: 'Start Now',
    es: 'Comenzar Ahora',
    pt: 'Começar Agora',
    ar: 'ابدأ الآن'
  },
  'common.filterBy': {
    fr: 'Filtrer par catégorie:',
    en: 'Filter by category:',
    es: 'Filtrar por categoría:',
    pt: 'Filtrar por categoria:',
    ar: 'تصفية حسب الفئة:'
  },
  'common.all': {
    fr: 'Tous',
    en: 'All',
    es: 'Todos',
    pt: 'Todos',
    ar: 'الكل'
  },
  'common.projectGallery': {
    fr: 'Galerie du Projet',
    en: 'Project Gallery',
    es: 'Galería del Proyecto',
    pt: 'Galeria do Projeto',
    ar: 'معرض المشروع'
  },
  'common.features': {
    fr: 'Fonctionnalités',
    en: 'Features',
    es: 'Características',
    pt: 'Recursos',
    ar: 'المميزات'
  },
  'common.backHome': {
    fr: 'Retour à l\'accueil',
    en: 'Back to Home',
    es: 'Volver al Inicio',
    pt: 'Voltar ao Início',
    ar: 'العودة إلى الصفحة الرئيسية'
  },
  // NotFound
  'notFound.title': {
    fr: 'Page Non Trouvée',
    en: 'Page Not Found',
    es: 'Página No Encontrada',
    pt: 'Página Não Encontrada',
    ar: 'الصفحة غير موجودة'
  },
  'notFound.description': {
    fr: 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.',
    en: 'Sorry, the page you are looking for does not exist or has been moved.',
    es: 'Lo sentimos, la página que busca no existe o ha sido movida.',
    pt: 'Desculpe, a página que você procura não existe ou foi movida.',
    ar: 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
  },
  'notFound.backHome': {
    fr: 'Retour à l\'Accueil',
    en: 'Back to Home',
    es: 'Volver al Inicio',
    pt: 'Voltar ao Início',
    ar: 'العودة إلى الصفحة الرئيسية'
  },
  'notFound.goBack': {
    fr: 'Retour',
    en: 'Go Back',
    es: 'Volver',
    pt: 'Voltar',
    ar: 'رجوع'
  },
  'notFound.serviceNotFound': {
    fr: 'Service non trouvé',
    en: 'Service not found',
    es: 'Servicio no encontrado',
    pt: 'Serviço não encontrado',
    ar: 'الخدمة غير موجودة'
  },
  'notFound.backToServices': {
    fr: 'Retour aux services',
    en: 'Back to services',
    es: 'Volver a servicios',
    pt: 'Voltar aos serviços',
    ar: 'العودة إلى الخدمات'
  },
  'notFound.projectNotFound': {
    fr: 'Projet non trouvé',
    en: 'Project not found',
    es: 'Proyecto no encontrado',
    pt: 'Projeto não encontrado',
    ar: 'المشروع غير موجود'
  },
  'notFound.backToProjects': {
    fr: 'Retour aux projets',
    en: 'Back to projects',
    es: 'Volver a proyectos',
    pt: 'Voltar aos projetos',
    ar: 'العودة إلى المشاريع'
  },
  // Sectors
  'sectors.public': {
    fr: 'Administrations Publiques',
    en: 'Public Administrations',
    es: 'Administraciones Públicas',
    pt: 'Administrações Públicas',
    ar: 'الإدارات العامة'
  },
  'sectors.banking': {
    fr: 'Banques & Finance',
    en: 'Banking & Finance',
    es: 'Banca y Finanzas',
    pt: 'Banco e Finanças',
    ar: 'البنوك والتمويل'
  },
  'sectors.fintech': {
    fr: 'Microfinance & Fintech',
    en: 'Microfinance & Fintech',
    es: 'Microfinanzas y Fintech',
    pt: 'Microfinanças e Fintech',
    ar: 'التمويل الأصغر والتمويل التكنولوجي'
  },
  'sectors.ngo': {
    fr: 'ONG & Organisations',
    en: 'NGOs & Organizations',
    es: 'ONG y Organizaciones',
    pt: 'ONGs e Organizações',
    ar: 'المنظمات غير الحكومية والمنظمات'
  },
  'sectors.ecommerce': {
    fr: 'E-commerce & Retail',
    en: 'E-commerce & Retail',
    es: 'E-commerce y Retail',
    pt: 'E-commerce e Varejo',
    ar: 'التجارة الإلكترونية والتجزئة'
  },
  'sectors.health': {
    fr: 'Santé & Éducation',
    en: 'Health & Education',
    es: 'Salud y Educación',
    pt: 'Saúde e Educação',
    ar: 'الصحة والتعليم'
  },
  'sectors.telecom': {
    fr: 'Télécommunications',
    en: 'Telecommunications',
    es: 'Telecomunicaciones',
    pt: 'Telecomunicações',
    ar: 'الاتصالات'
  },
  'sectors.insurance': {
    fr: 'Assurances',
    en: 'Insurance',
    es: 'Seguros',
    pt: 'Seguros',
    ar: 'التأمين'
  },
  // Contact Page
  'contact.phoneLabel': {
    fr: 'Téléphone',
    en: 'Phone',
    es: 'Teléfono',
    pt: 'Telefone',
    ar: 'الهاتف'
  },
  'contact.emailLabel': {
    fr: 'Email',
    en: 'Email',
    es: 'Correo',
    pt: 'Email',
    ar: 'البريد الإلكتروني'
  },
  'contact.addressLabel': {
    fr: 'Adresse',
    en: 'Address',
    es: 'Dirección',
    pt: 'Endereço',
    ar: 'العنوان'
  },
  'contact.globalPresence': {
    fr: 'Présence Mondiale',
    en: 'Global Presence',
    es: 'Presencia Global',
    pt: 'Presença Global',
    ar: 'الحضور العالمي'
  },
  'contact.hours': {
    fr: 'Horaires',
    en: 'Hours',
    es: 'Horarios',
    pt: 'Horários',
    ar: 'ساعات العمل'
  },
  'contact.whyChoose': {
    fr: 'Pourquoi Choisir INOV TECHNOLOGY ?',
    en: 'Why Choose INOV TECHNOLOGY?',
    es: '¿Por Qué Elegir INOV TECHNOLOGY?',
    pt: 'Por Que Escolher INOV TECHNOLOGY?',
    ar: 'لماذا تختار INOV TECHNOLOGY؟'
  },
  'contact.selectSubject': {
    fr: 'Sélectionnez un sujet',
    en: 'Select a subject',
    es: 'Seleccione un asunto',
    pt: 'Selecione um assunto',
    ar: 'اختر موضوعًا'
  },
  'contact.formAcceptance': {
    fr: 'En soumettant ce formulaire, vous acceptez d\'être contacté par INOV TECHNOLOGY concernant votre demande.',
    en: 'By submitting this form, you agree to be contacted by INOV TECHNOLOGY regarding your request.',
    es: 'Al enviar este formulario, acepta ser contactado por INOV TECHNOLOGY con respecto a su solicitud.',
    pt: 'Ao enviar este formulario, você concorda em ser contatado pela INOV TECHNOLOGY sobre sua solicitação.',
    ar: 'بإرسال هذا النموذج، توافق على أن يتم الاتصال بك من قبل INOV TECHNOLOGY فيما يتعلق بطلبك.'
  },
  'contact.phonePlaceholder': {
    fr: '+228 XX XX XX XX',
    en: '+228 XX XX XX XX',
    es: '+228 XX XX XX XX',
    pt: '+228 XX XX XX XX',
    ar: '+228 XX XX XX XX'
  },
  'contact.companyPlaceholder': {
    fr: 'Nom de votre entreprise',
    en: 'Your company name',
    es: 'Nombre de su empresa',
    pt: 'Nome da sua empresa',
    ar: 'اسم شركتك'
  },
  'contact.messagePlaceholder': {
    fr: 'Décrivez votre projet ou vos besoins...',
    en: 'Describe your project or needs...',
    es: 'Describa su proyecto o necesidades...',
    pt: 'Descreva seu projeto ou necessidades...',
    ar: 'اوصف مشروعك أو احتياجاتك...'
  },
  'contact.namePlaceholder': {
    fr: 'Votre nom',
    en: 'Your name',
    es: 'Su nombre',
    pt: 'Seu nome',
    ar: 'اسمك'
  },
  // Technologies Component
  'technologies.development': {
    fr: 'Développement',
    en: 'Development',
    es: 'Desarrollo',
    pt: 'Desenvolvimento',
    ar: 'التطوير'
  },
  'technologies.developmentDesc': {
    fr: 'Frameworks et langages de programmation modernes',
    en: 'Modern programming frameworks and languages',
    es: 'Frameworks y lenguajes de programación modernos',
    pt: 'Frameworks e linguagens de programação modernas',
    ar: 'أطر عمل ولغات البرمجة الحديثة'
  },
  'technologies.database': {
    fr: 'Bases de Données',
    en: 'Databases',
    es: 'Bases de Datos',
    pt: 'Bancos de Dados',
    ar: 'قواعد البيانات'
  },
  'technologies.databaseDesc': {
    fr: 'Solutions de stockage et gestion de données',
    en: 'Data storage and management solutions',
    es: 'Soluciones de almacenamiento y gestión de datos',
    pt: 'Soluções de armazenamento e gestão de dados',
    ar: 'حلول تخزين وإدارة البيانات'
  },
  'technologies.cloud': {
    fr: 'Cloud & Infrastructure',
    en: 'Cloud & Infrastructure',
    es: 'Cloud e Infraestructura',
    pt: 'Cloud e Infraestrutura',
    ar: 'السحابة والبنية التحتية'
  },
  'technologies.cloudDesc': {
    fr: 'Plateformes cloud et infrastructure scalable',
    en: 'Cloud platforms and scalable infrastructure',
    es: 'Plataformas cloud e infraestructura escalable',
    pt: 'Plataformas cloud e infraestrutura escalável',
    ar: 'منصات السحابة والبنية التحتية القابلة للتوسع'
  },
  'technologies.devops': {
    fr: 'DevOps & Outils',
    en: 'DevOps & Tools',
    es: 'DevOps y Herramientas',
    pt: 'DevOps e Ferramentas',
    ar: 'DevOps والأدوات'
  },
  'technologies.devopsDesc': {
    fr: 'Outils d\'automatisation et de déploiement',
    en: 'Automation and deployment tools',
    es: 'Herramientas de automatización y despliegue',
    pt: 'Ferramentas de automação e implantação',
    ar: 'أدوات الأتمتة والنشر'
  },
  'technologies.seeTech': {
    fr: 'Voir les technologies',
    en: 'See technologies',
    es: 'Ver tecnologías',
    pt: 'Ver tecnologias',
    ar: 'رؤية التقنيات'
  },
  'technologies.performance': {
    fr: 'Performance Optimale',
    en: 'Optimal Performance',
    es: 'Rendimiento Óptimo',
    pt: 'Desempenho Ótimo',
    ar: 'أداء مثالي'
  },
  'technologies.scalability': {
    fr: 'Évolutivité Garantie',
    en: 'Guaranteed Scalability',
    es: 'Escalabilidad Garantizada',
    pt: 'Escalabilidade Garantida',
    ar: 'قابلية التوسع مضمونة'
  },
  'technologies.securityTech': {
    fr: 'Sécurité Renforcée',
    en: 'Enhanced Security',
    es: 'Seguridad Mejorada',
    pt: 'Segurança Aprimorada',
    ar: 'أمان محسن'
  },
  'technologies.cost': {
    fr: 'Coûts Optimisés',
    en: 'Optimized Costs',
    es: 'Costos Optimizados',
    pt: 'Custos Otimizados',
    ar: 'تكاليف محسنة'
  },
  // Blog
  'blog.title': {
    fr: 'Blog & Actualités',
    en: 'Blog & News',
    es: 'Blog y Noticias',
    pt: 'Blog e Notícias',
    ar: 'المدونة والأخبار'
  },
  'blog.subtitle': {
    fr: 'Restez informé des dernières tendances IT, conseils pratiques et actualités de INOV TECHNOLOGY',
    en: 'Stay informed about the latest IT trends, practical tips and news from INOV TECHNOLOGY',
    es: 'Manténgase informado sobre las últimas tendencias IT, consejos prácticos y noticias de INOV TECHNOLOGY',
    pt: 'Mantenha-se informado sobre as últimas tendências de TI, dicas práticas e notícias da INOV TECHNOLOGY',
    ar: 'ابق على اطلاع بآخر اتجاهات تكنولوجيا المعلومات والنصائح العملية وأخبار INOV TECHNOLOGY'
  },
  'blog.readArticle': {
    fr: 'Lire l\'article',
    en: 'Read article',
    es: 'Leer artículo',
    pt: 'Ler artigo',
    ar: 'قراءة المقال'
  },
  'blog.recentArticles': {
    fr: 'Articles Récents',
    en: 'Recent Articles',
    es: 'Artículos Recientes',
    pt: 'Artigos Recentes',
    ar: 'المقالات الأخيرة'
  },
  'blog.stayInformed': {
    fr: 'Restez Informé',
    en: 'Stay Informed',
    es: 'Manténgase Informado',
    pt: 'Mantenha-se Informado',
    ar: 'ابق على اطلاع'
  },
  'blog.newsletter': {
    fr: 'Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités directement dans votre boîte mail',
    en: 'Subscribe to our newsletter to receive the latest articles and news directly in your inbox',
    es: 'Suscríbase a nuestro boletín para recibir los últimos artículos y noticias directamente en su bandeja de entrada',
    pt: 'Inscreva-se em nossa newsletter para receber os últimos artigos e notícias diretamente em sua caixa de entrada',
    ar: 'اشترك في نشرتنا الإخبارية لتلقي آخر المقالات والأخبار مباشرة في بريدك الوارد'
  },
  'blog.emailPlaceholder': {
    fr: 'Votre adresse email',
    en: 'Your email address',
    es: 'Su dirección de correo',
    pt: 'Seu endereço de email',
    ar: 'عنوان بريدك الإلكتروني'
  },
  'blog.subscribe': {
    fr: 'S\'abonner',
    en: 'Subscribe',
    es: 'Suscribirse',
    pt: 'Inscrever-se',
    ar: 'اشترك'
  },
  // Careers
  'careers.title': {
    fr: 'Rejoignez Notre Équipe',
    en: 'Join Our Team',
    es: 'Únase a Nuestro Equipo',
    pt: 'Junte-se à Nossa Equipe',
    ar: 'انضم إلى فريقنا'
  },
  'careers.subtitle': {
    fr: 'Faites partie d\'une équipe passionnée qui transforme le paysage IT en Afrique et dans le monde',
    en: 'Be part of a passionate team that transforms the IT landscape in Africa and worldwide',
    es: 'Sea parte de un equipo apasionado que transforma el panorama IT en África y en el mundo',
    pt: 'Faça parte de uma equipe apaixonada que transforma o cenário de TI na África e no mundo',
    ar: 'كن جزءًا من فريق متحمس يحول المشهد التكنولوجي في أفريقيا والعالم'
  },
  'careers.whyJoin': {
    fr: 'Pourquoi Nous Rejoindre ?',
    en: 'Why Join Us?',
    es: '¿Por Qué Unirse?',
    pt: 'Por Que Se Juntar?',
    ar: 'لماذا تنضم إلينا؟'
  },
  'careers.whyJoinDesc': {
    fr: 'Des avantages compétitifs et un environnement de travail stimulant',
    en: 'Competitive benefits and a stimulating work environment',
    es: 'Beneficios competitivos y un entorno de trabajo estimulante',
    pt: 'Benefícios competitivos e um ambiente de trabalho estimulante',
    ar: 'مزايا تنافسية وبيئة عمل محفزة'
  },
  'careers.continuousTraining': {
    fr: 'Formation Continue',
    en: 'Continuous Training',
    es: 'Formación Continua',
    pt: 'Treinamento Contínuo',
    ar: 'التدريب المستمر'
  },
  'careers.continuousTrainingDesc': {
    fr: 'Accès à des formations certifiantes et développement de compétences',
    en: 'Access to certifying training and skills development',
    es: 'Acceso a formación certificada y desarrollo de habilidades',
    pt: 'Acesso a treinamento certificado e desenvolvimento de habilidades',
    ar: 'الوصول إلى التدريب المعتمد وتطوير المهارات'
  },
  'careers.careerGrowth': {
    fr: 'Évolution de Carrière',
    en: 'Career Growth',
    es: 'Crecimiento Profesional',
    pt: 'Crescimento Profissional',
    ar: 'النمو المهني'
  },
  'careers.careerGrowthDesc': {
    fr: 'Opportunités de croissance et d\'évolution professionnelle',
    en: 'Growth opportunities and professional development',
    es: 'Oportunidades de crecimiento y desarrollo profesional',
    pt: 'Oportunidades de crescimento e desenvolvimento profissional',
    ar: 'فرص النمو والتطوير المهني'
  },
  'careers.dynamicTeam': {
    fr: 'Équipe Dynamique',
    en: 'Dynamic Team',
    es: 'Equipo Dinámico',
    pt: 'Equipe Dinâmica',
    ar: 'فريق ديناميكي'
  },
  'careers.dynamicTeamDesc': {
    fr: 'Travaillez avec des experts passionnés et collaboratifs',
    en: 'Work with passionate and collaborative experts',
    es: 'Trabaje con expertos apasionados y colaborativos',
    pt: 'Trabalhe com especialistas apaixonados e colaborativos',
    ar: 'اعمل مع خبراء متحمسين وتعاونيين'
  },
  'careers.flexibility': {
    fr: 'Flexibilité',
    en: 'Flexibility',
    es: 'Flexibilidad',
    pt: 'Flexibilidade',
    ar: 'المرونة'
  },
  'careers.flexibilityDesc': {
    fr: 'Télétravail et horaires flexibles pour un meilleur équilibre vie pro/perso',
    en: 'Remote work and flexible hours for better work-life balance',
    es: 'Teletrabajo y horarios flexibles para un mejor equilibrio vida profesional/personal',
    pt: 'Trabalho remoto e horários flexíveis para melhor equilíbrio vida profissional/pessoal',
    ar: 'العمل عن بُعد وساعات مرنة لتحقيق توازن أفضل بين العمل والحياة'
  },
  'careers.openPositions': {
    fr: 'Postes Ouverts',
    en: 'Open Positions',
    es: 'Puestos Abiertos',
    pt: 'Vagas Abertas',
    ar: 'الوظائف المفتوحة'
  },
  'careers.openPositionsDesc': {
    fr: 'Découvrez les opportunités de carrière disponibles chez INOV TECHNOLOGY',
    en: 'Discover career opportunities available at INOV TECHNOLOGY',
    es: 'Descubra las oportunidades de carrera disponibles en INOV TECHNOLOGY',
    pt: 'Descubra as oportunidades de carreira disponíveis na INOV TECHNOLOGY',
    ar: 'اكتشف فرص العمل المتاحة في INOV TECHNOLOGY'
  },
  'careers.mainRequirements': {
    fr: 'Exigences principales:',
    en: 'Main requirements:',
    es: 'Requisitos principales:',
    pt: 'Requisitos principais:',
    ar: 'المتطلبات الرئيسية:'
  },
  'careers.apply': {
    fr: 'Postuler',
    en: 'Apply',
    es: 'Aplicar',
    pt: 'Candidatar-se',
    ar: 'تقدم'
  },
  'careers.notFindPosition': {
    fr: 'Vous Ne Trouvez Pas Votre Poste ?',
    en: 'Don\'t Find Your Position?',
    es: '¿No Encuentra Su Puesto?',
    pt: 'Não Encontrou Sua Vaga?',
    ar: 'لم تجد وظيفتك؟'
  },
  'careers.spontaneous': {
    fr: 'Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents passionnés',
    en: 'Send us your spontaneous application. We are always looking for passionate talents',
    es: 'Envíenos su candidatura espontánea. Siempre estamos buscando talentos apasionados',
    pt: 'Envie-nos sua candidatura espontânea. Estamos sempre procurando talentos apaixonados',
    ar: 'أرسل لنا طلبك التلقائي. نحن نبحث دائمًا عن المواهب المتحمسة'
  },
  'careers.spontaneousApplication': {
    fr: 'Candidature Spontanée',
    en: 'Spontaneous Application',
    es: 'Candidatura Espontánea',
    pt: 'Candidatura Espontânea',
    ar: 'طلب تلقائي'
  },
  // About Page - History
  'about.historyText1': {
    fr: 'Fondée en 2009, INOV TECHNOLOGY est née de la vision de transformer le paysage IT en Afrique. Nous avons commencé avec une petite équipe passionnée et sommes devenus un leader reconnu dans le développement de solutions IT complètes.',
    en: 'Founded in 2009, INOV TECHNOLOGY was born from the vision of transforming the IT landscape in Africa. We started with a small passionate team and became a recognized leader in developing complete IT solutions.',
    es: 'Fundada en 2009, INOV TECHNOLOGY nació de la visión de transformar el panorama IT en África. Comenzamos con un pequeño equipo apasionado y nos convertimos en un líder reconocido en el desarrollo de soluciones IT completas.',
    pt: 'Fundada em 2009, INOV TECHNOLOGY nasceu da visão de transformar o cenário de TI na África. Começamos com uma pequena equipe apaixonada e nos tornamos um líder reconhecido no desenvolvimento de soluções de TI completas.',
    ar: 'تأسست INOV TECHNOLOGY في عام 2009 من رؤية تحويل المشهد التكنولوجي في أفريقيا. بدأنا بفريق صغير متحمس وأصبحنا رائدًا معترفًا به في تطوير حلول تكنولوجيا المعلومات الشاملة.'
  },
  'about.historyText2': {
    fr: 'Aujourd\'hui, nous opérons dans plus de 180 pays, avec une équipe de plus de 200 experts certifiés. Nous avons livré plus de 500 projets avec succès, transformant les organisations et améliorant la vie de millions de personnes.',
    en: 'Today, we operate in more than 180 countries, with a team of over 200 certified experts. We have successfully delivered more than 500 projects, transforming organizations and improving the lives of millions of people.',
    es: 'Hoy, operamos en más de 180 países, con un equipo de más de 200 expertos certificados. Hemos entregado con éxito más de 500 proyectos, transformando organizaciones y mejorando la vida de millones de personas.',
    pt: 'Hoje, operamos em mais de 180 países, com uma equipe de mais de 200 especialistas certificados. Entregamos com sucesso mais de 500 projetos, transformando organizações e melhorando a vida de milhões de pessoas.',
    ar: 'اليوم، نعمل في أكثر من 180 دولة، مع فريق من أكثر من 200 خبير معتمد. لقد أنجزنا بنجاح أكثر من 500 مشروع، محولين المنظمات وتحسين حياة الملايين من الناس.'
  },
  'about.historyText3': {
    fr: 'Notre mission est de démocratiser l\'accès aux technologies de pointe en Afrique et de permettre aux organisations de réaliser leur plein potentiel grâce à des solutions IT innovantes.',
    en: 'Our mission is to democratize access to cutting-edge technologies in Africa and enable organizations to realize their full potential through innovative IT solutions.',
    es: 'Nuestra misión es democratizar el acceso a tecnologías de vanguardia en África y permitir que las organizaciones alcancen su máximo potencial a través de soluciones IT innovadoras.',
    pt: 'Nossa missão é democratizar o acesso a tecnologias de ponta na África e permitir que as organizações realizem seu pleno potencial através de soluções de TI inovadoras.',
    ar: 'مهمتنا هي ديمقراطية الوصول إلى التقنيات المتقدمة في أفريقيا وتمكين المنظمات من تحقيق إمكاناتها الكاملة من خلال حلول تكنولوجيا المعلومات المبتكرة.'
  },
  'contact.reason1': {
    fr: '15+ ans d\'expérience en solutions IT',
    en: '15+ years of experience in IT solutions',
    es: '15+ años de experiencia en soluciones IT',
    pt: '15+ anos de experiência em soluções de TI',
    ar: '15+ سنة من الخبرة في حلول تكنولوجيا المعلومات'
  },
  'contact.reason2': {
    fr: '500+ projets réalisés avec succès',
    en: '500+ successfully completed projects',
    es: '500+ proyectos completados con éxito',
    pt: '500+ projetos concluídos com sucesso',
    ar: '500+ مشروع مكتمل بنجاح'
  },
  'contact.reason3': {
    fr: 'Expertise Oracle, Cloud & Cybersécurité',
    en: 'Oracle, Cloud & Cybersecurity expertise',
    es: 'Experiencia en Oracle, Cloud y Ciberseguridad',
    pt: 'Expertise em Oracle, Cloud e Cibersegurança',
    ar: 'خبرة في Oracle والسحابة والأمن السيبراني'
  },
  'contact.reason4': {
    fr: 'Équipe d\'experts certifiés',
    en: 'Team of certified experts',
    es: 'Equipo de expertos certificados',
    pt: 'Equipe de especialistas certificados',
    ar: 'فريق من الخبراء المعتمدين'
  },
  'contact.reason5': {
    fr: 'Support 24/7 et SLA garantis',
    en: '24/7 support and guaranteed SLA',
    es: 'Soporte 24/7 y SLA garantizado',
    pt: 'Suporte 24/7 e SLA garantido',
    ar: 'دعم 24/7 و SLA مضمون'
  },
  'contact.reason6': {
    fr: 'Présence dans 180+ pays',
    en: 'Presence in 180+ countries',
    es: 'Presencia en 180+ países',
    pt: 'Presença em 180+ países',
    ar: 'الحضور في 180+ دولة'
  },
  'contact.hoursWeek': {
    fr: 'Lun - Ven: 8h - 18h',
    en: 'Mon - Fri: 8am - 6pm',
    es: 'Lun - Vie: 8h - 18h',
    pt: 'Seg - Sex: 8h - 18h',
    ar: 'الإثنين - الجمعة: 8 صباحًا - 6 مساءً'
  },
  'contact.response24h': {
    fr: 'Réponse sous 24h',
    en: 'Response within 24h',
    es: 'Respuesta en 24h',
    pt: 'Resposta em 24h',
    ar: 'الرد خلال 24 ساعة'
  },
  'contact.internationalServices': {
    fr: 'Services internationaux',
    en: 'International services',
    es: 'Servicios internacionales',
    pt: 'Serviços internacionais',
    ar: 'خدمات دولية'
  },
  'contact.support24': {
    fr: 'Support 24/7 disponible',
    en: '24/7 support available',
    es: 'Soporte 24/7 disponible',
    pt: 'Suporte 24/7 disponível',
    ar: 'دعم 24/7 متاح'
  },
  'contact.saturday': {
    fr: 'Samedi: 9h - 13h',
    en: 'Saturday: 9am - 1pm',
    es: 'Sábado: 9h - 13h',
    pt: 'Sábado: 9h - 13h',
    ar: 'السبت: 9 صباحًا - 1 مساءً'
  },
  'contact.countriesWorld': {
    fr: '180+ pays à travers le monde',
    en: '180+ countries worldwide',
    es: '180+ países en todo el mundo',
    pt: '180+ países em todo o mundo',
    ar: '180+ دولة في جميع أنحاء العالم'
  },
  'contact.mondayFriday': {
    fr: 'Lundi - Vendredi: 8h - 18h',
    en: 'Monday - Friday: 8am - 6pm',
    es: 'Lunes - Viernes: 8h - 18h',
    pt: 'Segunda - Sexta: 8h - 18h',
    ar: 'الإثنين - الجمعة: 8 صباحًا - 6 مساءً'
  },
  // Project Categories
  'projects.categories.admin': {
    fr: 'Administration Publique',
    en: 'Public Administration',
    es: 'Administración Pública',
    pt: 'Administração Pública',
    ar: 'الإدارة العامة'
  },
  'projects.categories.finance': {
    fr: 'Finance & Banque',
    en: 'Finance & Banking',
    es: 'Finanzas y Banca',
    pt: 'Finanças e Banco',
    ar: 'المالية والبنوك'
  },
  'projects.categories.erp': {
    fr: 'ERP & Gestion',
    en: 'ERP & Management',
    es: 'ERP y Gestión',
    pt: 'ERP e Gestão',
    ar: 'ERP والإدارة'
  },
  'projects.categories.data': {
    fr: 'Data & Analytics',
    en: 'Data & Analytics',
    es: 'Datos y Análisis',
    pt: 'Dados e Análise',
    ar: 'البيانات والتحليلات'
  },
  'projects.categories.mobile': {
    fr: 'Mobile & E-commerce',
    en: 'Mobile & E-commerce',
    es: 'Móvil y Comercio Electrónico',
    pt: 'Móvel e E-commerce',
    ar: 'الجوال والتجارة الإلكترونية'
  },
  'projects.categories.cloud': {
    fr: 'Cloud & Infrastructure',
    en: 'Cloud & Infrastructure',
    es: 'Nube e Infraestructura',
    pt: 'Nuvem e Infraestrutura',
    ar: 'السحابة والبنية التحتية'
  },
  'projects.categories.education': {
    fr: 'Éducation',
    en: 'Education',
    es: 'Educación',
    pt: 'Educação',
    ar: 'التعليم'
  },
  'projects.categories.health': {
    fr: 'Santé',
    en: 'Health',
    es: 'Salud',
    pt: 'Saúde',
    ar: 'الصحة'
  },
  'projects.categories.transport': {
    fr: 'Mobile & Transport',
    en: 'Mobile & Transport',
    es: 'Móvil y Transporte',
    pt: 'Móvel e Transporte',
    ar: 'الجوال والنقل'
  },
  // Project Clients
  'projects.clients.government': {
    fr: 'Gouvernement - Afrique de l\'Ouest',
    en: 'Government - West Africa',
    es: 'Gobierno - África Occidental',
    pt: 'Governo - África Ocidental',
    ar: 'الحكومة - غرب أفريقيا'
  },
  'projects.clients.financial': {
    fr: 'Institution Financière - UEMOA',
    en: 'Financial Institution - UEMOA',
    es: 'Institución Financiera - UEMOA',
    pt: 'Instituição Financeira - UEMOA',
    ar: 'مؤسسة مالية - UEMOA'
  },
  'projects.clients.international': {
    fr: 'Groupe International - 8 Pays',
    en: 'International Group - 8 Countries',
    es: 'Grupo Internacional - 8 Países',
    pt: 'Grupo Internacional - 8 Países',
    ar: 'مجموعة دولية - 8 دول'
  },
  'projects.clients.ngo': {
    fr: 'ONG Internationale',
    en: 'International NGO',
    es: 'ONG Internacional',
    pt: 'ONG Internacional',
    ar: 'منظمة غير حكومية دولية'
  },
  'projects.clients.retailer': {
    fr: 'Retailer - Afrique de l\'Ouest',
    en: 'Retailer - West Africa',
    es: 'Minorista - África Occidental',
    pt: 'Varejista - África Ocidental',
    ar: 'بائع تجزئة - غرب أفريقيا'
  },
  'projects.clients.bank': {
    fr: 'Banque Régionale',
    en: 'Regional Bank',
    es: 'Banco Regional',
    pt: 'Banco Regional',
    ar: 'بنك إقليمي'
  },
  'projects.clients.education': {
    fr: 'Ministère de l\'Éducation',
    en: 'Ministry of Education',
    es: 'Ministerio de Educación',
    pt: 'Ministério da Educação',
    ar: 'وزارة التربية'
  },
  'projects.clients.health': {
    fr: 'Réseau Hospitalier',
    en: 'Hospital Network',
    es: 'Red Hospitalaria',
    pt: 'Rede Hospitalar',
    ar: 'شبكة المستشفيات'
  },
  'projects.clients.guyane': {
    fr: 'Guyane Française',
    en: 'French Guiana',
    es: 'Guayana Francesa',
    pt: 'Guiana Francesa',
    ar: 'غويانا الفرنسية'
  },
  // Projects - Plateforme Nationale
  'projects.plateforme.title': {
    fr: 'Plateforme Nationale de Gestion Administrative',
    en: 'National Administrative Management Platform',
    es: 'Plataforma Nacional de Gestión Administrativa',
    pt: 'Plataforma Nacional de Gestão Administrativa',
    ar: 'منصة الإدارة الوطنية'
  },
  'projects.plateforme.description': {
    fr: 'Système intégré de gestion administrative pour 15 ministères avec Oracle Database, Oracle Apex et infrastructure cloud complète.',
    en: 'Integrated administrative management system for 15 ministries with Oracle Database, Oracle Apex and complete cloud infrastructure.',
    es: 'Sistema integrado de gestión administrativa para 15 ministerios con Oracle Database, Oracle Apex e infraestructura cloud completa.',
    pt: 'Sistema integrado de gestão administrativa para 15 ministérios com Oracle Database, Oracle Apex e infraestrutura cloud completa.',
    ar: 'نظام إدارة إدارية متكامل لـ 15 وزارة مع Oracle Database و Oracle Apex والبنية التحتية السحابية الكاملة.'
  },
  'projects.plateforme.details': {
    fr: 'Développement d\'une plateforme complète de gestion administrative pour 15 ministères, avec intégration de tous les processus administratifs, gestion documentaire, workflow et reporting avancé.',
    en: 'Development of a complete administrative management platform for 15 ministries, with integration of all administrative processes, document management, workflow and advanced reporting.',
    es: 'Desarrollo de una plataforma completa de gestión administrativa para 15 ministerios, con integración de todos los procesos administrativos, gestión documental, flujo de trabajo e informes avanzados.',
    pt: 'Desenvolvimento de uma plataforma completa de gestão administrativa para 15 ministérios, com integração de todos os processos administrativos, gestão documental, fluxo de trabalho e relatórios avançados.',
    ar: 'تطوير منصة إدارة إدارية كاملة لـ 15 وزارة، مع دمج جميع العمليات الإدارية وإدارة الوثائق وسير العمل والتقارير المتقدمة.'
  },
  'projects.plateforme.result1': {
    fr: 'Réduction de 60% du temps de traitement des dossiers',
    en: '60% reduction in file processing time',
    es: 'Reducción del 60% en el tiempo de procesamiento de archivos',
    pt: 'Redução de 60% no tempo de processamento de arquivos',
    ar: 'خفض 60% في وقت معالجة الملفات'
  },
  'projects.plateforme.result2': {
    fr: '500K+ utilisateurs actifs',
    en: '500K+ active users',
    es: '500K+ usuarios activos',
    pt: '500K+ usuários ativos',
    ar: '500K+ مستخدم نشط'
  },
  'projects.plateforme.result3': {
    fr: '15 ministères interconnectés',
    en: '15 interconnected ministries',
    es: '15 ministerios interconectados',
    pt: '15 ministérios interconectados',
    ar: '15 وزارة مترابطة'
  },
  'projects.plateforme.result4': {
    fr: '99.9% de disponibilité',
    en: '99.9% availability',
    es: '99.9% de disponibilidad',
    pt: '99.9% de disponibilidade',
    ar: '99.9% من التوفر'
  },
  // Projects - Microfinance
  'projects.microfinance.title': {
    fr: 'Solution de Microfinance Bancaire',
    en: 'Banking Microfinance Solution',
    es: 'Solución de Microfinanzas Bancarias',
    pt: 'Solução de Microfinanças Bancárias',
    ar: 'حل التمويل الأصغر المصرفي'
  },
  'projects.microfinance.description': {
    fr: 'Plateforme complète de gestion de microfinance avec intégration mobile money, reporting BI et conformité bancaire.',
    en: 'Complete microfinance management platform with mobile money integration, BI reporting and banking compliance.',
    es: 'Plataforma completa de gestión de microfinanzas con integración de dinero móvil, informes BI y cumplimiento bancario.',
    pt: 'Plataforma completa de gestão de microfinanças com integração de dinheiro móvel, relatórios BI e conformidade bancária.',
    ar: 'منصة إدارة التمويل الأصغر الكاملة مع تكامل الأموال المحمولة والتقارير التحليلية والامتثال المصرفي.'
  },
  'projects.microfinance.details': {
    fr: 'Développement d\'une solution complète de microfinance avec intégration mobile money, gestion des prêts, épargne, reporting réglementaire et dashboards BI en temps réel.',
    en: 'Development of a complete microfinance solution with mobile money integration, loan management, savings, regulatory reporting and real-time BI dashboards.',
    es: 'Desarrollo de una solución completa de microfinanzas con integración de dinero móvil, gestión de préstamos, ahorros, informes regulatorios y paneles BI en tiempo real.',
    pt: 'Desenvolvimento de uma solução completa de microfinanças com integração de dinheiro móvel, gestão de empréstimos, poupanças, relatórios regulatórios e dashboards BI em tempo real.',
    ar: 'تطوير حل تمويل أصغر كامل مع تكامل الأموال المحمولة وإدارة القروض والادخار والتقارير التنظيمية ولوحات المعلومات التحليلية في الوقت الفعلي.'
  },
  'projects.microfinance.result1': {
    fr: '200K+ clients actifs',
    en: '200K+ active clients',
    es: '200K+ clientes activos',
    pt: '200K+ clientes ativos',
    ar: '200K+ عميل نشط'
  },
  'projects.microfinance.result2': {
    fr: 'Intégration mobile money réussie',
    en: 'Successful mobile money integration',
    es: 'Integración exitosa de dinero móvil',
    pt: 'Integração bem-sucedida de dinheiro móvel',
    ar: 'تكامل ناجح للأموال المحمولة'
  },
  'projects.microfinance.result3': {
    fr: 'Conformité bancaire 100%',
    en: '100% banking compliance',
    es: '100% de cumplimiento bancario',
    pt: '100% de conformidade bancária',
    ar: 'امتثال مصرفي 100%'
  },
  'projects.microfinance.result4': {
    fr: 'ROI de 300% en 2 ans',
    en: '300% ROI in 2 years',
    es: 'ROI del 300% en 2 años',
    pt: 'ROI de 300% em 2 anos',
    ar: 'عائد استثمار 300% في عامين'
  },
  // Projects - ERP Multinational
  'projects.erp.title': {
    fr: 'ERP Multinational Cloud',
    en: 'Multinational Cloud ERP',
    es: 'ERP Cloud Multinacional',
    pt: 'ERP Cloud Multinacional',
    ar: 'ERP السحابي متعدد الجنسيات'
  },
  'projects.erp.description': {
    fr: 'Déploiement d\'un ERP sur mesure avec modules comptabilité, RH, paie, inventaire sur Oracle Cloud Infrastructure.',
    en: 'Custom ERP deployment with accounting, HR, payroll, inventory modules on Oracle Cloud Infrastructure.',
    es: 'Despliegue de ERP personalizado con módulos de contabilidad, RRHH, nómina, inventario en Oracle Cloud Infrastructure.',
    pt: 'Implantações de ERP personalizado com módulos de contabilidade, RH, folha de pagamento, inventário na Oracle Cloud Infrastructure.',
    ar: 'نشر ERP مخصص مع وحدات المحاسبة والموارد البشرية وكشوف المرتبات والمخزون على Oracle Cloud Infrastructure.'
  },
  'projects.erp.details': {
    fr: 'Déploiement d\'un ERP cloud pour un groupe multinational opérant dans 8 pays, avec modules comptabilité, RH, paie, inventaire et reporting consolidé multi-pays.',
    en: 'Cloud ERP deployment for a multinational group operating in 8 countries, with accounting, HR, payroll, inventory modules and multi-country consolidated reporting.',
    es: 'Despliegue de ERP cloud para un grupo multinacional que opera en 8 países, con módulos de contabilidad, RRHH, nómina, inventario e informes consolidados multi-país.',
    pt: 'Implantações de ERP cloud para um grupo multinacional operando em 8 países, com módulos de contabilidade, RH, folha de pagamento, inventário e relatórios consolidados multi-país.',
    ar: 'نشر ERP سحابي لمجموعة متعددة الجنسيات تعمل في 8 دول، مع وحدات المحاسبة والموارد البشرية وكشوف المرتبات والمخزون والتقارير الموحدة متعددة البلدان.'
  },
  'projects.erp.result1': {
    fr: 'Déploiement dans 8 pays',
    en: 'Deployment in 8 countries',
    es: 'Despliegue en 8 países',
    pt: 'Implantações em 8 países',
    ar: 'النشر في 8 دول'
  },
  'projects.erp.result2': {
    fr: '2000+ utilisateurs simultanés',
    en: '2000+ simultaneous users',
    es: '2000+ usuarios simultáneos',
    pt: '2000+ usuários simultâneos',
    ar: '2000+ مستخدم متزامن'
  },
  'projects.erp.result3': {
    fr: 'Réduction de 40% des coûts opérationnels',
    en: '40% reduction in operational costs',
    es: 'Reducción del 40% en costos operativos',
    pt: 'Redução de 40% nos custos operacionais',
    ar: 'خفض 40% في التكاليف التشغيلية'
  },
  'projects.erp.result4': {
    fr: 'Unification des processus',
    en: 'Process unification',
    es: 'Unificación de procesos',
    pt: 'Unificação de processos',
    ar: 'توحيد العمليات'
  },
  // Projects - Data Warehouse
  'projects.datawarehouse.title': {
    fr: 'Data Warehouse & Analytics BI',
    en: 'Data Warehouse & BI Analytics',
    es: 'Data Warehouse y Análisis BI',
    pt: 'Data Warehouse e Analytics BI',
    ar: 'مستودع البيانات وتحليلات BI'
  },
  'projects.datawarehouse.description': {
    fr: 'Construction d\'un data warehouse centralisé avec pipelines ETL, dashboards interactifs et analyses prédictives.',
    en: 'Construction of a centralized data warehouse with ETL pipelines, interactive dashboards and predictive analytics.',
    es: 'Construcción de un data warehouse centralizado con pipelines ETL, paneles interactivos y análisis predictivos.',
    pt: 'Construção de um data warehouse centralizado com pipelines ETL, dashboards interativos e análises preditivas.',
    ar: 'بناء مستودع بيانات مركزي مع خطوط أنابيب ETL ولوحات معلومات تفاعلية وتحليلات تنبؤية.'
  },
  'projects.datawarehouse.details': {
    fr: 'Construction d\'un data warehouse centralisé pour une ONG internationale, avec pipelines ETL automatisés, dashboards interactifs et analyses prédictives pour optimiser les programmes.',
    en: 'Construction of a centralized data warehouse for an international NGO, with automated ETL pipelines, interactive dashboards and predictive analytics to optimize programs.',
    es: 'Construcción de un data warehouse centralizado para una ONG internacional, con pipelines ETL automatizados, paneles interactivos y análisis predictivos para optimizar programas.',
    pt: 'Construção de um data warehouse centralizado para uma ONG internacional, com pipelines ETL automatizados, dashboards interativos e análises preditivas para otimizar programas.',
    ar: 'بناء مستودع بيانات مركزي لمنظمة غير حكومية دولية، مع خطوط أنابيب ETL آلية ولوحات معلومات تفاعلية وتحليلات تنبؤية لتحسين البرامج.'
  },
  'projects.datawarehouse.result1': {
    fr: '50M+ données traitées',
    en: '50M+ data processed',
    es: '50M+ datos procesados',
    pt: '50M+ dados processados',
    ar: '50M+ بيانات معالجة'
  },
  'projects.datawarehouse.result2': {
    fr: 'Dashboards en temps réel',
    en: 'Real-time dashboards',
    es: 'Paneles en tiempo real',
    pt: 'Dashboards em tempo real',
    ar: 'لوحات معلومات في الوقت الفعلي'
  },
  'projects.datawarehouse.result3': {
    fr: 'Amélioration de 35% de l\'efficacité',
    en: '35% efficiency improvement',
    es: 'Mejora del 35% en la eficiencia',
    pt: 'Melhoria de 35% na eficiência',
    ar: 'تحسين 35% في الكفاءة'
  },
  'projects.datawarehouse.result4': {
    fr: 'Analyses prédictives opérationnelles',
    en: 'Operational predictive analytics',
    es: 'Análisis predictivos operacionales',
    pt: 'Analytics preditivos operacionais',
    ar: 'تحليلات تنبؤية تشغيلية'
  },
  // Projects - E-commerce Mobile
  'projects.ecommerce.title': {
    fr: 'Application Mobile E-commerce',
    en: 'Mobile E-commerce Application',
    es: 'Aplicación Móvil de Comercio Electrónico',
    pt: 'Aplicação Móvel E-commerce',
    ar: 'تطبيق التجارة الإلكترونية المحمول'
  },
  'projects.ecommerce.description': {
    fr: 'Application mobile e-commerce cross-platform avec paiement mobile money, livraison tracking et gestion stocks.',
    en: 'Cross-platform mobile e-commerce application with mobile money payment, delivery tracking and inventory management.',
    es: 'Aplicación móvil de comercio electrónico multiplataforma con pago de dinero móvil, seguimiento de entrega y gestión de inventario.',
    pt: 'Aplicação móvel de e-commerce multiplataforma com pagamento de dinheiro móvel, rastreamento de entrega e gestão de estoque.',
    ar: 'تطبيق تجارة إلكترونية محمول متعدد المنصات مع دفع الأموال المحمولة وتتبع التسليم وإدارة المخزون.'
  },
  'projects.ecommerce.details': {
    fr: 'Développement d\'une application mobile e-commerce cross-platform avec intégration mobile money, système de tracking de livraison en temps réel et gestion automatisée des stocks.',
    en: 'Development of a cross-platform mobile e-commerce application with mobile money integration, real-time delivery tracking system and automated inventory management.',
    es: 'Desarrollo de una aplicación móvil de comercio electrónico multiplataforma con integración de dinero móvil, sistema de seguimiento de entrega en tiempo real y gestión automatizada de inventario.',
    pt: 'Desenvolvimento de uma aplicação móvel de e-commerce multiplataforma com integração de dinheiro móvel, sistema de rastreamento de entrega em tempo real e gestão automatizada de estoque.',
    ar: 'تطوير تطبيق تجارة إلكترونية محمول متعدد المنصات مع تكامل الأموال المحمولة ونظام تتبع التسليم في الوقت الفعلي وإدارة المخزون الآلية.'
  },
  'projects.ecommerce.result1': {
    fr: '100K+ téléchargements',
    en: '100K+ downloads',
    es: '100K+ descargas',
    pt: '100K+ downloads',
    ar: '100K+ تنزيل'
  },
  'projects.ecommerce.result2': {
    fr: 'Intégration mobile money réussie',
    en: 'Successful mobile money integration',
    es: 'Integración exitosa de dinero móvil',
    pt: 'Integração bem-sucedida de dinheiro móvel',
    ar: 'تكامل ناجح للأموال المحمولة'
  },
  'projects.ecommerce.result3': {
    fr: 'Croissance de 250% des ventes',
    en: '250% sales growth',
    es: 'Crecimiento del 250% en ventas',
    pt: 'Crescimento de 250% nas vendas',
    ar: 'نمو 250% في المبيعات'
  },
  'projects.ecommerce.result4': {
    fr: 'Satisfaction client 4.8/5',
    en: 'Customer satisfaction 4.8/5',
    es: 'Satisfacción del cliente 4.8/5',
    pt: 'Satisfação do cliente 4.8/5',
    ar: 'رضا العملاء 4.8/5'
  },
  // Projects - Cloud Infrastructure
  'projects.cloud.title': {
    fr: 'Infrastructure Cloud Sécurisée',
    en: 'Secure Cloud Infrastructure',
    es: 'Infraestructura Cloud Segura',
    pt: 'Infraestrutura Cloud Segura',
    ar: 'البنية التحتية السحابية الآمنة'
  },
  'projects.cloud.description': {
    fr: 'Migration complète vers cloud avec architecture hautement disponible, sécurité renforcée et conformité bancaire.',
    en: 'Complete migration to cloud with highly available architecture, enhanced security and banking compliance.',
    es: 'Migración completa a la nube con arquitectura altamente disponible, seguridad mejorada y cumplimiento bancario.',
    pt: 'Migração completa para nuvem com arquitetura altamente disponível, segurança aprimorada e conformidade bancária.',
    ar: 'هجرة كاملة إلى السحابة مع بنية عالية التوفر وأمان محسّن والامتثال المصرفي.'
  },
  'projects.cloud.details': {
    fr: 'Migration complète de l\'infrastructure d\'une banque régionale vers le cloud avec architecture hautement disponible, sécurité renforcée et conformité bancaire totale.',
    en: 'Complete migration of a regional bank\'s infrastructure to the cloud with highly available architecture, enhanced security and total banking compliance.',
    es: 'Migración completa de la infraestructura de un banco regional a la nube con arquitectura altamente disponible, seguridad mejorada y cumplimiento bancario total.',
    pt: 'Migração completa da infraestrutura de um banco regional para a nuvem com arquitetura altamente disponível, segurança aprimorada e conformidade bancária total.',
    ar: 'هجرة كاملة لبنية تحتية مصرف إقليمي إلى السحابة مع بنية عالية التوفر وأمان محسّن والامتثال المصرفي الكامل.'
  },
  'projects.cloud.result1': {
    fr: '99.99% de disponibilité',
    en: '99.99% availability',
    es: '99.99% de disponibilidad',
    pt: '99.99% de disponibilidade',
    ar: '99.99% من التوفر'
  },
  'projects.cloud.result2': {
    fr: 'Réduction de 50% des coûts infrastructure',
    en: '50% infrastructure cost reduction',
    es: 'Reducción del 50% en costos de infraestructura',
    pt: 'Redução de 50% nos custos de infraestrutura',
    ar: 'خفض 50% في تكاليف البنية التحتية'
  },
  'projects.cloud.result3': {
    fr: 'Conformité bancaire 100%',
    en: '100% banking compliance',
    es: '100% de cumplimiento bancario',
    pt: '100% de conformidade bancária',
    ar: 'امتثال مصرفي 100%'
  },
  'projects.cloud.result4': {
    fr: 'Sécurité renforcée',
    en: 'Enhanced security',
    es: 'Seguridad mejorada',
    pt: 'Segurança aprimorada',
    ar: 'أمان محسّن'
  },
  // Projects - Education Portal
  'projects.education.title': {
    fr: 'Portail Éducatif National',
    en: 'National Education Portal',
    es: 'Portal Educativo Nacional',
    pt: 'Portal Educacional Nacional',
    ar: 'البوابة التعليمية الوطنية'
  },
  'projects.education.description': {
    fr: 'Plateforme d\'e-learning nationale avec gestion des cours, évaluations en ligne, suivi pédagogique et analytics.',
    en: 'National e-learning platform with course management, online assessments, educational tracking and analytics.',
    es: 'Plataforma nacional de e-learning con gestión de cursos, evaluaciones en línea, seguimiento pedagógico y análisis.',
    pt: 'Plataforma nacional de e-learning com gestão de cursos, avaliações online, acompanhamento pedagógico e analytics.',
    ar: 'منصة التعلم الإلكتروني الوطنية مع إدارة الدورات والتقييمات عبر الإنترنت والمتابعة التربوية والتحليلات.'
  },
  'projects.education.details': {
    fr: 'Développement d\'une plateforme d\'e-learning nationale avec gestion complète des cours, évaluations en ligne, suivi pédagogique détaillé et analytics pour optimiser l\'enseignement.',
    en: 'Development of a national e-learning platform with complete course management, online assessments, detailed educational tracking and analytics to optimize teaching.',
    es: 'Desarrollo de una plataforma nacional de e-learning con gestión completa de cursos, evaluaciones en línea, seguimiento pedagógico detallado y análisis para optimizar la enseñanza.',
    pt: 'Desenvolvimento de uma plataforma nacional de e-learning com gestão completa de cursos, avaliações online, acompanhamento pedagógico detalhado e analytics para otimizar o ensino.',
    ar: 'تطوير منصة تعلم إلكتروني وطنية مع إدارة كاملة للدورات والتقييمات عبر الإنترنت ومتابعة تربوية مفصلة والتحليلات لتحسين التدريس.'
  },
  'projects.education.result1': {
    fr: '1M+ étudiants inscrits',
    en: '1M+ enrolled students',
    es: '1M+ estudiantes inscritos',
    pt: '1M+ estudantes inscritos',
    ar: '1M+ طالب مسجل'
  },
  'projects.education.result2': {
    fr: 'Amélioration de 30% des résultats',
    en: '30% results improvement',
    es: 'Mejora del 30% en los resultados',
    pt: 'Melhoria de 30% nos resultados',
    ar: 'تحسين 30% في النتائج'
  },
  'projects.education.result3': {
    fr: 'Accessibilité 24/7',
    en: '24/7 accessibility',
    es: 'Accesibilidad 24/7',
    pt: 'Acessibilidade 24/7',
    ar: 'إمكانية الوصول 24/7'
  },
  'projects.education.result4': {
    fr: 'Plateforme multilingue',
    en: 'Multilingual platform',
    es: 'Plataforma multilingüe',
    pt: 'Plataforma multilíngue',
    ar: 'منصة متعددة اللغات'
  },
  // Projects - Health System
  'projects.health.title': {
    fr: 'Système de Santé Digitalisé',
    en: 'Digitized Health System',
    es: 'Sistema de Salud Digitalizado',
    pt: 'Sistema de Saúde Digitalizado',
    ar: 'نظام الصحة الرقمية'
  },
  'projects.health.description': {
    fr: 'Dossier médical électronique, gestion hospitalière, télémédecine et analyse de données de santé.',
    en: 'Electronic medical record, hospital management, telemedicine and health data analysis.',
    es: 'Expediente médico electrónico, gestión hospitalaria, telemedicina y análisis de datos de salud.',
    pt: 'Prontuário médico eletrônico, gestão hospitalar, telemedicina e análise de dados de saúde.',
    ar: 'السجل الطبي الإلكتروني وإدارة المستشفى والطب عن بُعد وتحليل بيانات الصحة.'
  },
  'projects.health.details': {
    fr: 'Développement d\'un système complet de santé digitalisé avec dossier médical électronique, gestion hospitalière intégrée, télémédecine et analyse de données de santé pour 50+ hôpitaux.',
    en: 'Development of a complete digitized health system with electronic medical record, integrated hospital management, telemedicine and health data analysis for 50+ hospitals.',
    es: 'Desarrollo de un sistema completo de salud digitalizado con expediente médico electrónico, gestión hospitalaria integrada, telemedicina y análisis de datos de salud para 50+ hospitales.',
    pt: 'Desenvolvimento de um sistema completo de saúde digitalizado com prontuário médico eletrônico, gestão hospitalar integrada, telemedicina e análise de dados de saúde para 50+ hospitais.',
    ar: 'تطوير نظام صحة رقمي كامل مع السجل الطبي الإلكتروني وإدارة المستشفيات المتكاملة والطب عن بُعد وتحليل بيانات الصحة لـ 50+ مستشفى.'
  },
  'projects.health.result1': {
    fr: '50+ hôpitaux connectés',
    en: '50+ connected hospitals',
    es: '50+ hospitales conectados',
    pt: '50+ hospitais conectados',
    ar: '50+ مستشفى متصل'
  },
  'projects.health.result2': {
    fr: 'Réduction de 45% du temps administratif',
    en: '45% reduction in administrative time',
    es: 'Reducción del 45% en tiempo administrativo',
    pt: 'Redução de 45% no tempo administrativo',
    ar: 'خفض 45% في الوقت الإداري'
  },
  'projects.health.result3': {
    fr: 'Amélioration des soins',
    en: 'Improved care',
    es: 'Mejora en la atención',
    pt: 'Melhoria nos cuidados',
    ar: 'تحسين الرعاية'
  },
  'projects.health.result4': {
    fr: 'Conformité santé 100%',
    en: '100% health compliance',
    es: '100% de cumplimiento de salud',
    pt: '100% de conformidade de saúde',
    ar: 'امتثال صحي 100%'
  },
  // Projects - KOOGWE
  'projects.koogwe.title': {
    fr: 'KOOGWE - Plateforme de Mobilité Intelligente',
    en: 'KOOGWE - Smart Mobility Platform',
    es: 'KOOGWE - Plataforma de Movilidad Inteligente',
    pt: 'KOOGWE - Plataforma de Mobilidade Inteligente',
    ar: 'KOOGWE - منصة التنقل الذكي'
  },
  'projects.koogwe.description': {
    fr: 'Application mobile complète de transport et mobilité urbaine pour la Guyane française. Connecte les passagers, les chauffeurs et les entreprises avec une expérience utilisateur moderne, fonctionnalités avancées de réservation, suivi en temps réel, et gestion intelligente des trajets.',
    en: 'Complete mobile application for transport and urban mobility in French Guiana. Connects passengers, drivers and companies with modern user experience, advanced booking features, real-time tracking, and intelligent route management.',
    es: 'Aplicación móvil completa de transporte y movilidad urbana para la Guayana Francesa. Conecta pasajeros, conductores y empresas con experiencia de usuario moderna, funciones avanzadas de reserva, seguimiento en tiempo real y gestión inteligente de rutas.',
    pt: 'Aplicação móvel completa de transporte e mobilidade urbana para a Guiana Francesa. Conecta passageiros, motoristas e empresas com experiência de usuário moderna, recursos avançados de reserva, rastreamento em tempo real e gestão inteligente de rotas.',
    ar: 'تطبيق محمول كامل للنقل والتنقل الحضري لغويانا الفرنسية. يربط الركاب والسائقين والشركات مع تجربة مستخدم حديثة وميزات حجز متقدمة وتتبع في الوقت الفعلي وإدارة ذكية للطرق.'
  },
  'projects.koogwe.details': {
    fr: 'Développement d\'une application mobile complète de transport et mobilité urbaine pour la Guyane française. Application Flutter cross-platform connectant passagers, chauffeurs et entreprises. Backend Laravel robuste, base de données Supabase pour la scalabilité, déploiement AWS. Fonctionnalités avancées : réservation en temps réel, suivi GPS, gestion intelligente des trajets, système de paiement intégré, et analytics pour optimiser les performances.',
    en: 'Development of a complete mobile application for transport and urban mobility in French Guiana. Cross-platform Flutter application connecting passengers, drivers and companies. Robust Laravel backend, Supabase database for scalability, AWS deployment. Advanced features: real-time booking, GPS tracking, intelligent route management, integrated payment system, and analytics to optimize performance.',
    es: 'Desarrollo de una aplicación móvil completa de transporte y movilidad urbana para la Guayana Francesa. Aplicación Flutter multiplataforma que conecta pasajeros, conductores y empresas. Backend Laravel robusto, base de datos Supabase para escalabilidad, despliegue AWS. Funciones avanzadas: reserva en tiempo real, seguimiento GPS, gestión inteligente de rutas, sistema de pago integrado y análisis para optimizar el rendimiento.',
    pt: 'Desenvolvimento de uma aplicação móvel completa de transporte e mobilidade urbana para a Guiana Francesa. Aplicação Flutter multiplataforma conectando passageiros, motoristas e empresas. Backend Laravel robusto, banco de dados Supabase para escalabilidade, implantação AWS. Recursos avançados: reserva em tempo real, rastreamento GPS, gestão inteligente de rotas, sistema de pagamento integrado e analytics para otimizar o desempenho.',
    ar: 'تطوير تطبيق محمول كامل للنقل والتنقل الحضري لغويانا الفرنسية. تطبيق Flutter متعدد المنصات يربط الركاب والسائقين والشركات. Backend Laravel قوي، قاعدة بيانات Supabase للتوسع، نشر AWS. ميزات متقدمة: الحجز في الوقت الفعلي وتتبع GPS وإدارة ذكية للطرق ونظام دفع متكامل والتحليلات لتحسين الأداء.'
  },
  'projects.koogwe.result1': {
    fr: '50K+ utilisateurs actifs en Guyane française',
    en: '50K+ active users in French Guiana',
    es: '50K+ usuarios activos en la Guayana Francesa',
    pt: '50K+ usuários ativos na Guiana Francesa',
    ar: '50K+ مستخدم نشط في غويانا الفرنسية'
  },
  'projects.koogwe.result2': {
    fr: 'Expérience utilisateur moderne et intuitive avec Flutter',
    en: 'Modern and intuitive user experience with Flutter',
    es: 'Experiencia de usuario moderna e intuitiva con Flutter',
    pt: 'Experiência de usuário moderna e intuitiva com Flutter',
    ar: 'تجربة مستخدم حديثة وبديهية مع Flutter'
  },
  'projects.koogwe.result3': {
    fr: 'Backend Laravel performant et scalable',
    en: 'Performant and scalable Laravel backend',
    es: 'Backend Laravel de alto rendimiento y escalable',
    pt: 'Backend Laravel de alto desempenho e escalável',
    ar: 'Backend Laravel عالي الأداء وقابل للتوسع'
  },
  'projects.koogwe.result4': {
    fr: 'Suivi en temps réel opérationnel avec Supabase',
    en: 'Operational real-time tracking with Supabase',
    es: 'Seguimiento en tiempo real operacional con Supabase',
    pt: 'Rastreamento em tempo real operacional com Supabase',
    ar: 'تتبع في الوقت الفعلي تشغيلي مع Supabase'
  },
  // Projects - Oracle Audit
  'projects.oracleaudit.title': {
    fr: 'Intelligent Oracle Database Audit & Analysis System',
    en: 'Intelligent Oracle Database Audit & Analysis System',
    es: 'Sistema Inteligente de Auditoría y Análisis de Base de Datos Oracle',
    pt: 'Sistema Inteligente de Auditoria e Análise de Banco de Dados Oracle',
    ar: 'نظام تدقيق وتحليل قاعدة بيانات Oracle الذكي'
  },
  'projects.oracleaudit.description': {
    fr: 'Système intelligent d\'audit et d\'analyse de base de données Oracle utilisant l\'IA. Backend Python convertissant le langage naturel en SQL via LLMs, pipelines ETL automatisés Oracle vers MongoDB avec indexation et audit, services FastAPI dockerisés, et interface conversationnelle React pour analyses SQL.',
    en: 'Intelligent Oracle database audit and analysis system using AI. Python backend converting natural language to SQL via LLMs, automated ETL pipelines Oracle to MongoDB with indexing and audit, dockerized FastAPI services, and conversational React interface for SQL analysis.',
    es: 'Sistema inteligente de auditoría y análisis de base de datos Oracle que utiliza IA. Backend Python que convierte lenguaje natural a SQL mediante LLMs, pipelines ETL automatizados Oracle a MongoDB con indexación y auditoría, servicios FastAPI dockerizados e interfaz conversacional React para análisis SQL.',
    pt: 'Sistema inteligente de auditoria e análise de banco de dados Oracle usando IA. Backend Python convertendo linguagem natural em SQL via LLMs, pipelines ETL automatizados Oracle para MongoDB com indexação e auditoria, serviços FastAPI dockerizados e interface conversacional React para análise SQL.',
    ar: 'نظام تدقيق وتحليل قاعدة بيانات Oracle ذكي يستخدم الذكاء الاصطناعي. Backend Python يحول اللغة الطبيعية إلى SQL عبر LLMs وخطوط أنابيب ETL آلية من Oracle إلى MongoDB مع الفهرسة والتدقيق وخدمات FastAPI المحتوية في Docker وواجهة React محادثة لتحليل SQL.'
  },
  'projects.oracleaudit.details': {
    fr: 'Développement d\'un système intelligent d\'audit et d\'analyse de base de données Oracle. Backend Python convertissant le langage naturel en SQL via LLMs, pipelines ETL automatisés Oracle vers MongoDB avec indexation et audit, implémentation CI/CD, microservices dockerisés, services FastAPI, et interface conversationnelle React pour analyses SQL.',
    en: 'Development of an intelligent Oracle database audit and analysis system. Python backend converting natural language to SQL via LLMs, automated ETL pipelines Oracle to MongoDB with indexing and audit, CI/CD implementation, dockerized microservices, FastAPI services, and conversational React interface for SQL analysis.',
    es: 'Desarrollo de un sistema inteligente de auditoría y análisis de base de datos Oracle. Backend Python que convierte lenguaje natural a SQL mediante LLMs, pipelines ETL automatizados Oracle a MongoDB con indexación y auditoría, implementación CI/CD, microservicios dockerizados, servicios FastAPI e interfaz conversacional React para análisis SQL.',
    pt: 'Desenvolvimento de um sistema inteligente de auditoria e análise de banco de dados Oracle. Backend Python convertendo linguagem natural em SQL via LLMs, pipelines ETL automatizados Oracle para MongoDB com indexação e auditoria, implementação CI/CD, microserviços dockerizados, serviços FastAPI e interface conversacional React para análise SQL.',
    ar: 'تطوير نظام ذكي لتدقيق وتحليل قاعدة بيانات Oracle. Backend Python يحول اللغة الطبيعية إلى SQL عبر LLMs وخطوط أنابيب ETL آلية من Oracle إلى MongoDB مع الفهرسة والتدقيق وتنفيذ CI/CD وmicroservices محتوية في Docker وخدمات FastAPI وواجهة React محادثة لتحليل SQL.'
  },
  'projects.oracleaudit.result1': {
    fr: 'Automatisation complète de l\'audit Oracle',
    en: 'Complete Oracle audit automation',
    es: 'Automatización completa de la auditoría Oracle',
    pt: 'Automação completa da auditoria Oracle',
    ar: 'أتمتة تدقيق Oracle الكاملة'
  },
  'projects.oracleaudit.result2': {
    fr: 'Réduction de 70% de la charge de travail manuelle',
    en: '70% reduction in manual workload',
    es: 'Reducción del 70% en la carga de trabajo manual',
    pt: 'Redução de 70% na carga de trabalho manual',
    ar: 'خفض 70% في عبء العمل اليدوي'
  },
  'projects.oracleaudit.result3': {
    fr: 'Analyse de données automatisée',
    en: 'Automated data analysis',
    es: 'Análisis de datos automatizado',
    pt: 'Análise de dados automatizada',
    ar: 'تحليل البيانات الآلي'
  },
  'projects.oracleaudit.result4': {
    fr: 'Interface conversationnelle pour insights SQL',
    en: 'Conversational interface for SQL insights',
    es: 'Interfaz conversacional para insights SQL',
    pt: 'Interface conversacional para insights SQL',
    ar: 'واجهة محادثة لرؤى SQL'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved && ['fr', 'en', 'es', 'pt', 'ar', 'cr'].includes(saved) ? saved : 'fr';
  });

  const t = (key: string): string => {
    // Si la traduction existe pour la langue actuelle, la retourner
    if (translations[key]?.[language]) {
      return translations[key][language];
    }
    // Si créole et pas de traduction, utiliser le français comme fallback
    if (language === 'cr' && translations[key]?.['fr']) {
      return translations[key]['fr'];
    }
    // Sinon retourner la clé
    return key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
