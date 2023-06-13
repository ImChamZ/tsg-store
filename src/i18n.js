import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocal from '../locales/en/translations.json';
import esLocal from '../locales/es/translations.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: enLocal,
    },
    es: {
      translations: esLocal,
    },
  },
  react: {
    wait: false,
    nsMode: 'fallback',
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'es'];
export default i18n;
