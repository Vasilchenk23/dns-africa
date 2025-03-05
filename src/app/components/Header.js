"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../Header.module.css";

const translations = {
  EN: {
    aboutUs: "About Us",
    services: "Our Services",
    projects: "Projects",
    blog: "Blog",
    news: "News",
    contact: "CONTACT US",
  },
  FR: {
    aboutUs: "À propos",
    services: "Nos services",
    projects: "Projets",
    blog: "Blog",
    news: "Actualités",
    contact: "CONTACTEZ-NOUS",
  },
};

export default function Header() {
  const { language, toggleLanguage } = useLanguage(); 
  
  const router = useRouter();
  const currentPath = usePathname();

  const navigateAndScroll = (sectionId) => {
    if (currentPath === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.svg" alt="Company Logo" width={50} height={50} priority />
        </Link>

        <nav className={styles.nav}>
          <a onClick={() => navigateAndScroll("aboutUs")}>{translations[language].aboutUs}</a>
          <Link href="/services">{translations[language].services}</Link>
          <Link href="/projects">{translations[language].projects}</Link>
          <Link href="/blog">{translations[language].blog}</Link>
          <a onClick={() => navigateAndScroll("news")}>{translations[language].news}</a>

          {/* Кнопка смены языка */}
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
        </nav>

        <Link href="/contact" className={styles.contactBtn}>{translations[language].contact}</Link>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}
