import { projects as projectsData } from '../data/projects';

export const getTranslatedProjects = (t: (key: string) => string) => {
  const projectTranslationMap: Record<string, {
    titleKey: string;
    descriptionKey: string;
    detailsKey: string;
    categoryKey: string;
    clientKey: string;
    resultsKeys: string[];
  }> = {
    'plateforme-nationale': {
      titleKey: 'projects.plateforme.title',
      descriptionKey: 'projects.plateforme.description',
      detailsKey: 'projects.plateforme.details',
      categoryKey: 'projects.categories.admin',
      clientKey: 'projects.clients.government',
      resultsKeys: [
        'projects.plateforme.result1',
        'projects.plateforme.result2',
        'projects.plateforme.result3',
        'projects.plateforme.result4'
      ]
    },
    'microfinance-bancaire': {
      titleKey: 'projects.microfinance.title',
      descriptionKey: 'projects.microfinance.description',
      detailsKey: 'projects.microfinance.details',
      categoryKey: 'projects.categories.finance',
      clientKey: 'projects.clients.financial',
      resultsKeys: [
        'projects.microfinance.result1',
        'projects.microfinance.result2',
        'projects.microfinance.result3',
        'projects.microfinance.result4'
      ]
    },
    'erp-multinational': {
      titleKey: 'projects.erp.title',
      descriptionKey: 'projects.erp.description',
      detailsKey: 'projects.erp.details',
      categoryKey: 'projects.categories.erp',
      clientKey: 'projects.clients.international',
      resultsKeys: [
        'projects.erp.result1',
        'projects.erp.result2',
        'projects.erp.result3',
        'projects.erp.result4'
      ]
    },
    'data-warehouse-bi': {
      titleKey: 'projects.datawarehouse.title',
      descriptionKey: 'projects.datawarehouse.description',
      detailsKey: 'projects.datawarehouse.details',
      categoryKey: 'projects.categories.data',
      clientKey: 'projects.clients.ngo',
      resultsKeys: [
        'projects.datawarehouse.result1',
        'projects.datawarehouse.result2',
        'projects.datawarehouse.result3',
        'projects.datawarehouse.result4'
      ]
    },
    'app-mobile-ecommerce': {
      titleKey: 'projects.ecommerce.title',
      descriptionKey: 'projects.ecommerce.description',
      detailsKey: 'projects.ecommerce.details',
      categoryKey: 'projects.categories.mobile',
      clientKey: 'projects.clients.retailer',
      resultsKeys: [
        'projects.ecommerce.result1',
        'projects.ecommerce.result2',
        'projects.ecommerce.result3',
        'projects.ecommerce.result4'
      ]
    },
    'infrastructure-cloud': {
      titleKey: 'projects.cloud.title',
      descriptionKey: 'projects.cloud.description',
      detailsKey: 'projects.cloud.details',
      categoryKey: 'projects.categories.cloud',
      clientKey: 'projects.clients.bank',
      resultsKeys: [
        'projects.cloud.result1',
        'projects.cloud.result2',
        'projects.cloud.result3',
        'projects.cloud.result4'
      ]
    },
    'portail-educatif': {
      titleKey: 'projects.education.title',
      descriptionKey: 'projects.education.description',
      detailsKey: 'projects.education.details',
      categoryKey: 'projects.categories.education',
      clientKey: 'projects.clients.education',
      resultsKeys: [
        'projects.education.result1',
        'projects.education.result2',
        'projects.education.result3',
        'projects.education.result4'
      ]
    },
    'systeme-sante': {
      titleKey: 'projects.health.title',
      descriptionKey: 'projects.health.description',
      detailsKey: 'projects.health.details',
      categoryKey: 'projects.categories.health',
      clientKey: 'projects.clients.health',
      resultsKeys: [
        'projects.health.result1',
        'projects.health.result2',
        'projects.health.result3',
        'projects.health.result4'
      ]
    },
    'koogwe-mobilite': {
      titleKey: 'projects.koogwe.title',
      descriptionKey: 'projects.koogwe.description',
      detailsKey: 'projects.koogwe.details',
      categoryKey: 'projects.categories.transport',
      clientKey: 'projects.clients.guyane',
      resultsKeys: [
        'projects.koogwe.result1',
        'projects.koogwe.result2',
        'projects.koogwe.result3',
        'projects.koogwe.result4'
      ]
    },
    'oracle-audit-llm': {
      titleKey: 'projects.oracleaudit.title',
      descriptionKey: 'projects.oracleaudit.description',
      detailsKey: 'projects.oracleaudit.details',
      categoryKey: 'projects.categories.data',
      clientKey: 'projects.clients.international',
      resultsKeys: [
        'projects.oracleaudit.result1',
        'projects.oracleaudit.result2',
        'projects.oracleaudit.result3',
        'projects.oracleaudit.result4'
      ]
    }
  };

  return projectsData.map(project => {
    const translation = projectTranslationMap[project.id];
    if (!translation) return project;

    return {
      ...project,
      title: t(translation.titleKey),
      description: t(translation.descriptionKey),
      details: t(translation.detailsKey),
      category: t(translation.categoryKey),
      client: t(translation.clientKey),
      results: translation.resultsKeys.map(key => t(key))
    };
  });
};

