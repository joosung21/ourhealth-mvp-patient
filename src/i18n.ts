import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import koTranslation from './locales/ko/translation.json';
import zhCNTranslation from './locales/zh-CN/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ko: { translation: koTranslation },
    fr: { translation: frTranslation },
    'zh-CN': { translation: zhCNTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
