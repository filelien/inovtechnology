import { Language } from '../contexts/LanguageContext';
import { services as servicesData } from '../data/services';

export const getTranslatedServices = (t: (key: string) => string) => {
  const serviceTranslationMap: Record<string, {
    titleKey: string;
    descriptionKey: string;
    detailsKey: string;
    benefitsKeys: string[];
    featuresKey: string;
  }> = {
    'web-mobile': {
      titleKey: 'services.webmobile.title',
      descriptionKey: 'services.webmobile.description',
      detailsKey: 'services.webmobile.details',
      benefitsKeys: [
        'services.webmobile.benefit1',
        'services.webmobile.benefit2',
        'services.webmobile.benefit3',
        'services.webmobile.benefit4'
      ],
      featuresKey: 'services.webmobile.features'
    },
    'data-engineering': {
      titleKey: 'services.dataengineering.title',
      descriptionKey: 'services.dataengineering.description',
      detailsKey: 'services.dataengineering.details',
      benefitsKeys: [
        'services.dataengineering.benefit1',
        'services.dataengineering.benefit2',
        'services.dataengineering.benefit3',
        'services.dataengineering.benefit4'
      ],
      featuresKey: 'services.dataengineering.features'
    },
    'cloud-infrastructure': {
      titleKey: 'services.cloudinfrastructure.title',
      descriptionKey: 'services.cloudinfrastructure.description',
      detailsKey: 'services.cloudinfrastructure.details',
      benefitsKeys: [
        'services.cloudinfrastructure.benefit1',
        'services.cloudinfrastructure.benefit2',
        'services.cloudinfrastructure.benefit3',
        'services.cloudinfrastructure.benefit4'
      ],
      featuresKey: 'services.cloudinfrastructure.features'
    },
    'cybersecurity': {
      titleKey: 'services.cybersecurity.title',
      descriptionKey: 'services.cybersecurity.description',
      detailsKey: 'services.cybersecurity.details',
      benefitsKeys: [
        'services.cybersecurity.benefit1',
        'services.cybersecurity.benefit2',
        'services.cybersecurity.benefit3',
        'services.cybersecurity.benefit4'
      ],
      featuresKey: 'services.cybersecurity.features'
    },
    'oracle-apex': {
      titleKey: 'services.oracleapex.title',
      descriptionKey: 'services.oracleapex.description',
      detailsKey: 'services.oracleapex.details',
      benefitsKeys: [
        'services.oracleapex.benefit1',
        'services.oracleapex.benefit2',
        'services.oracleapex.benefit3',
        'services.oracleapex.benefit4'
      ],
      featuresKey: 'services.oracleapex.features'
    },
    'devops': {
      titleKey: 'services.devops.title',
      descriptionKey: 'services.devops.description',
      detailsKey: 'services.devops.details',
      benefitsKeys: [
        'services.devops.benefit1',
        'services.devops.benefit2',
        'services.devops.benefit3',
        'services.devops.benefit4'
      ],
      featuresKey: 'services.devops.features'
    },
    'database-admin': {
      titleKey: 'services.databaseadmin.title',
      descriptionKey: 'services.databaseadmin.description',
      detailsKey: 'services.databaseadmin.details',
      benefitsKeys: [
        'services.databaseadmin.benefit1',
        'services.databaseadmin.benefit2',
        'services.databaseadmin.benefit3',
        'services.databaseadmin.benefit4'
      ],
      featuresKey: 'services.databaseadmin.features'
    },
    'support': {
      titleKey: 'services.support.title',
      descriptionKey: 'services.support.description',
      detailsKey: 'services.support.details',
      benefitsKeys: [
        'services.support.benefit1',
        'services.support.benefit2',
        'services.support.benefit3',
        'services.support.benefit4'
      ],
      featuresKey: 'services.support.features'
    },
    'consulting': {
      titleKey: 'services.consulting.title',
      descriptionKey: 'services.consulting.description',
      detailsKey: 'services.consulting.details',
      benefitsKeys: [
        'services.consulting.benefit1',
        'services.consulting.benefit2',
        'services.consulting.benefit3',
        'services.consulting.benefit4'
      ],
      featuresKey: 'services.consulting.features'
    },
    'erp-crm': {
      titleKey: 'services.erpcrm.title',
      descriptionKey: 'services.erpcrm.description',
      detailsKey: 'services.erpcrm.details',
      benefitsKeys: [
        'services.erpcrm.benefit1',
        'services.erpcrm.benefit2',
        'services.erpcrm.benefit3',
        'services.erpcrm.benefit4'
      ],
      featuresKey: 'services.erpcrm.features'
    },
    'compliance': {
      titleKey: 'services.compliance.title',
      descriptionKey: 'services.compliance.description',
      detailsKey: 'services.compliance.details',
      benefitsKeys: [
        'services.compliance.benefit1',
        'services.compliance.benefit2',
        'services.compliance.benefit3',
        'services.compliance.benefit4'
      ],
      featuresKey: 'services.compliance.features'
    },
    'migration': {
      titleKey: 'services.migration.title',
      descriptionKey: 'services.migration.description',
      detailsKey: 'services.migration.details',
      benefitsKeys: [
        'services.migration.benefit1',
        'services.migration.benefit2',
        'services.migration.benefit3',
        'services.migration.benefit4'
      ],
      featuresKey: 'services.migration.features'
    }
  };

  return servicesData.map(service => {
    const translation = serviceTranslationMap[service.id];
    if (!translation) return service;

    const getTranslatedFeatures = (featuresKey: string): string[] => {
      const features = t(featuresKey);
      return features.split('|').map(f => f.trim());
    };

    return {
      ...service,
      title: t(translation.titleKey),
      description: t(translation.descriptionKey),
      details: t(translation.detailsKey),
      benefits: translation.benefitsKeys.map(key => t(key)),
      features: getTranslatedFeatures(translation.featuresKey)
    };
  });
};

