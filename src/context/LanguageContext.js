"use client";
import { createContext, useContext, useState } from "react";

// Создаем контекст
const LanguageContext = createContext();

// Провайдер для обертывания компонентов
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "EN" ? "FR" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста
export const useLanguage = () => useContext(LanguageContext);
