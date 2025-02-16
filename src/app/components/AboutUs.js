import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16" id="aboutUs">
      <div className="container w-[100vw] px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 flex flex-col mt-[100px] justify-center align-center text-center">
            <Image
              src="/img/about.png"
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center align-center text-left leading-loose">
            <p className="text-gray-600 text-[20px] leading-relaxed">
              DNS AFRICA, basé à Tunis, est un bureau d’étude agréé pour l’analyse des installations photovoltaïques sous régime auto-producteur (BT/HTA) ou autorisation (1-10 MWc).
              <br/>
              Filiale de Green Energy Solutions (Lyon, France), fondée en 2022, nous développons nos activités en Tunisie et en Afrique.
              Nos experts qualifiés offrent des solutions solaires durables, couvrant études de faisabilité, gestion administrative et supervision des installations.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-[100px]">
          <Link 
            href="/contact" 
            className="bg-[#00509E] text-white px-4 py-2 rounded-[50px] w-[181px] h-[52px] flex items-center justify-center text-center"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
