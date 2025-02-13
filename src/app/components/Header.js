"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.svg" alt="Company Logo" width={50} height={50} priority />
        </Link>

        <nav className={styles.nav}>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/news">News</Link>
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
        </nav>

        {/* Кнопка "Contact Us" */}
        <Link href="/contact" className={styles.contactBtn}>
          CONTACT US
        </Link>

        {/* КНОПКА БУРГЕР-МЕНЮ (Мобильная версия) */}
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/news" onClick={() => setMenuOpen(false)}>News</Link>
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
          <Link href="/contact" className={styles.contactBtn} onClick={() => setMenuOpen(false)}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
