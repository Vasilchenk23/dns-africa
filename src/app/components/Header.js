"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Header.module.css";

const translations = {
  EN: {
    aboutUs: "About Us",
    home: "Home",
    services: "Our Services",
    projects: "Projects",
    blog: "Blog",
    news: "News",
    contact: "CONTACT US",
  },
  FR: {
    aboutUs: "À propos",
    home: "Maison",
    services: "Nos services",
    projects: "Projets",
    blog: "Blog",
    news: "Actualités",
    contact: "CONTACTEZ-NOUS",
  },
};

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.svg" alt="Company Logo" width={50} height={50} priority />
        </Link>

        <nav className={styles.nav}>
          <Link href="/about">{translations[language].aboutUs}</Link>
          <Link href="/services">{translations[language].services}</Link>
          <Link href="/projects">{translations[language].projects}</Link>
          <Link href="/blog">{translations[language].blog}</Link>
          <Link href="/news">{translations[language].news}</Link>
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
        </nav>

        <Link href="/contact" className={styles.contactBtn}>
          {translations[language].contact}
        </Link>

        {/* Кнопка бургер-меню */}
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={() => setMenuOpen(false)}>{translations[language].aboutUs}</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>{translations[language].home}</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>{translations[language].services}</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>{translations[language].projects}</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>{translations[language].blog}</Link>
          <Link href="/news" onClick={() => setMenuOpen(false)}>{translations[language].news}</Link>
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
          <Link href="/contact" className={styles.contactBtn} onClick={() => setMenuOpen(false)}>
            {translations[language].contact}
          </Link>
        </nav>
      </div>
    </header>
  );
}
