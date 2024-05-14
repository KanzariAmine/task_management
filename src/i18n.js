import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from './locales/en.json';
import esJSON from './locales/es.json';
import frJSON from './locales/fr.json';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: { ...enJSON },
    fr: { ...frJSON },
    es: { ...esJSON },
  }, // Where we're gonna put translations' files
  lng: 'en', // Set the initial language of the App
});

export default i18n;
