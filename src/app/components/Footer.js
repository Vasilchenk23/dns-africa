"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext"; 

export default function Footer() {
  const router = useRouter();
  const currentPath = usePathname();
  const { language } = useLanguage(); 

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

  const footerData = {
    address: {
      EN: "123 Solar Street, Africa",
      FR: "123 Rue Solaire, Afrique",
    },
    phone: {
      EN: "+123 456 789",
      FR: "+123 456 789",
    },
    email: "contact@dnsgroup-africa.com",
    aboutUs: {
      EN: "About Us",
      FR: "À propos de nous",
    },
    ourServices: {
      EN: "Our Services",
      FR: "Nos Services",
    },
    projects: {
      EN: "Projects",
      FR: "Projets",
    },
    blog: {
      EN: "Blog",
      FR: "Blog",
    },
    news: {
      EN: "News",
      FR: "Actualités",
    },
    contactUs: {
      EN: "Contact Us",
      FR: "Contactez-nous",
    },
    copyright: {
      EN: "2024 Lorem Ipsum Dolor SiteIt. All Rights Reserved.",
      FR: "2024 Lorem Ipsum Dolor SiteIt. Tous droits réservés.",
    },
  };

  return (
    <footer className="bg-[#F2F9FF] w-full border px-6 md:px-12 pt-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 pb-6">
        <div className="text-center lg:text-left">
          <Image
            src="/img/logo.svg"
            alt="DNS Africa Logo"
            width={100}
            height={100}
            className="w-32 mx-auto lg:mx-0"
          />
          <p className="mt-2 text-sm text-gray-700 font-medium">
            CONNECTING AFRICA, LIGHTING THE FUTURE
          </p>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <p className="text-blue-900 font-medium">{footerData.address[language]}</p>
          <p className="text-blue-900 font-medium">{footerData.phone[language]}</p>
          <p className="text-blue-900 font-medium">{footerData.email}</p>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a
              onClick={() => navigateAndScroll("aboutUs")}
              className="text-blue-900 font-medium cursor-pointer"
            >
              {footerData.aboutUs[language]}
            </a>
            <Link href="/services" className="text-blue-900 font-medium">
              {footerData.ourServices[language]}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <Link href="/projects" className="text-blue-900 font-medium">
              {footerData.projects[language]}
            </Link>
            <Link href="/blog" className="text-blue-900 font-medium">
              {footerData.blog[language]}
            </Link>
            <a
              className="text-blue-900 font-medium cursor-pointer"
              onClick={() => navigateAndScroll("news")}
            >
              {footerData.news[language]}
            </a>
          </div>
          <a
            onClick={() => navigateAndScroll("contact")}
            className="text-blue-900 font-medium cursor-pointer"
          >
            {footerData.contactUs[language]}
          </a>
        </div>
      </div>

      <div className="border-t border-blue-900 my-6"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-700">{footerData.copyright[language]}</p>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <Image
            src="/img/icons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <Image
            src="/img/icons/youtube.svg"
            alt="YouTube"
            width={24}
            height={24}
          />
          <Image
            src="/img/icons/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
