export const metadata = {
  title: "About DNS Africa | Leading Solar Energy Solutions",
  description:
    "Learn more about DNS Africa, our mission, vision, and expertise in solar energy solutions across Tunisia and Africa.",
  openGraph: {
    title: "About DNS Africa | Solar Energy Experts",
    description:
      "Discover how DNS Africa provides top-tier photovoltaic solutions for sustainable energy in Africa.",
    url: "https://dns-africa-879w.vercel.app/",
    images: [
      {
        url: "/img/slogan.png",
        width: 1200,
        height: 630,
        alt: "DNS Africa - About Us",
      },
    ],
    type: "article",
  },
};

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 text-center" id="aboutUs">
      <div className="container text-center px-6 md:px-12 max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1000px] mx-auto gap-8">
          <div className="w-full md:w-1/2 mt-[140px] flex justify-center">
            <Image
              src="/img/about.png"
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-left leading-loose">
            <p className="text-gray-600 text-[20px] leading-relaxed">
              DNS AFRICA, basé à Tunis, est un bureau d’étude agréé pour l’analyse des installations photovoltaïques sous régime auto-producteur (BT/HTA) ou autorisation (1-10 MWc).
              <br />
              Filiale de Green Energy Solutions (Lyon, France), fondée en 2022, nous développons nos activités en Tunisie et en Afrique.
              Nos experts qualifiés offrent des solutions solaires durables, couvrant études de faisabilité, gestion administrative et supervision des installations.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <Link 
            href="/contact" 
            className="bg-[#00509E] text-white px-6 py-3 rounded-full w-[181px] h-[52px] flex items-center justify-center"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
