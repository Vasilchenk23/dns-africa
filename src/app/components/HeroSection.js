"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Hero() {
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
    <section className="relative w-[100vw] h-[696px] flex items-center justify-left text-white">
      <Image 
        src="/img/mobile.png" 
        alt="Connecting Africa, Lighting the Future"
        width={1440}
        height={696}
        priority
        className="absolute inset-0 -z-10 w-[100vw] h-full object-cover"
      />
      <div className="absolute text-center z-10 sm:ml-[100px]">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Connecting Africa,
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 uppercase">
          Lighting the Future
        </h2>
        <div className="flex items-center justify-center mt-[100px]">
          <a
            onClick={() => navigateAndScroll("contact")} 
            className="bg-[#00509E] text-white px-4 py-2 rounded-[50px] w-[181px] h-[52px] cursor-pointer flex items-center justify-center text-center"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
