'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import uk from './locales/uk/common.json';

// Ініціалізація i18next
i18n
  .use(initReactI18next) // використовуємо react-i18next
  .init({
    resources: {
      en: { common: en },
      uk: { common: uk },
    },
    lng: 'uk', // мова за замовчуванням
    fallbackLng: 'en', // мова, до якої переходить, якщо переклад для поточної мови відсутній
    interpolation: {
      escapeValue: false, // не потрібно екранувати значення
    },
  });

export default i18n;
