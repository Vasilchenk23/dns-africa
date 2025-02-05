"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <header className="bg-[#F2F9FF] shadow-md text-[16px] flex jutify-evenly">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center">
          <Image src="/img/logo.svg" alt="Company Logo" width={120} height={40} priority />
        </Link>
        <nav className="hidden justify-center flex-grow md:flex space-x-20">
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/services" className="hover:text-blue-600">Our Services</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/blog" className="hover:text-blue-600 font-custom">Blog</Link>
          <Link href="/news" className="hover:text-blue-600">News</Link>
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={toggleLanguage}
          >
            {language}
          </button>
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <Link 
            href="/contact" 
            className="bg-[#00509E] text-white px-4 py-2 rounded-[50px] w-[181px] h-[52px] flex items-center justify-center text-center"
          >
            CONTACT US
          </Link>
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/news" onClick={() => setMenuOpen(false)}>News</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
