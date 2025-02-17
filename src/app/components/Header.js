"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "../Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const router = useRouter();
  const currentPath = usePathname();
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "auto", includedLanguages: "en,fr,ru,uk" },
        "google_translate_element"
      );

      const translateElement = document.querySelector(".goog-te-banner-frame");
      if (translateElement) {
        translateElement.style.display = "none"; 
      }
    };
  }, []);

  const toggleLanguage = () => {
    const googleTranslate = document.querySelector(".goog-te-combo");
    if (googleTranslate) {
      googleTranslate.value = language === "EN" ? "en" : "fr";
      googleTranslate.dispatchEvent(new Event("change"));
      setLanguage(language === "EN" ? "FR" : "EN");
    }
  };

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
          <a className="cursor-pointer" onClick={() => navigateAndScroll("aboutUs")}>
            About Us
          </a>
          <Link href="/services">Our Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <a className="cursor-pointer" onClick={() => navigateAndScroll("news")}>
            News
          </a>
          <button className={styles.langButton} onClick={toggleLanguage}>
            {language}
          </button>
        </nav>
        <Link href="/contact" className={styles.contactBtn}>
          CONTACT US
        </Link>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "☰" : "☰"}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <button className="absolute right-4 top-4 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ✖
          </button>
          <br />
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
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
      <div id="google_translate_element" style={{ display: "none", border: '1px solid red' }}></div>
    </header>
  );
}
