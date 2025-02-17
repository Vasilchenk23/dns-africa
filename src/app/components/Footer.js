"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
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
          <p className="text-blue-900 font-medium">Address</p>
          <p className="text-blue-900 font-medium">Phone Number</p>
          <p className="text-blue-900 font-medium">dnsafrica5@gmail.com</p>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a onClick={() => navigateAndScroll("aboutUs")} className="text-blue-900 font-medium cursor-pointer">About Us</a>
            <Link href='/services' className="text-blue-900 font-medium">Our Services</Link>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          <Link href='/projects' className="text-blue-900 font-medium">Projects</Link>
          <Link href='/blog' className="text-blue-900 font-medium">Blog</Link>
          <a className="text-blue-900 font-medium cursor-pointer" onClick={() => navigateAndScroll("news")}>News</a>
          </div>
          <a onClick={() => navigateAndScroll("contact")} className="text-blue-900 font-medium cursor-pointer">Contact Us</a>
        </div>
      </div>

      <div className="border-t border-blue-900 my-6"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-700">2024 Lorem Ipsum Dolor SiteIt. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <Image src="/img/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <Image src="/img/icons/youtube.svg" alt="YouTube" width={24} height={24} />
          <Image src="/img/icons/instagram.svg" alt="Instagram" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
