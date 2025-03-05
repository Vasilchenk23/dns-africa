"use client";
import { Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; 

const missionTexts = {
  EN: {
    title: "OUR MISSION",
    description:
      "Our mission is to assist you in your energy transition by offering tailored, environmentally friendly, and economically viable solutions.",
    points: [
      "Complete technical expertise",
      "Solutions tailored to your needs",
      "Rigorous support at every step",
    ],
  },
  FR: {
    title: "NOTRE MISSION",
    description:
      "Notre mission est de vous accompagner dans votre transition énergétique en vous offrant des solutions sur mesure, respectueuses de l'environnement et économiquement viables.",
    points: [
      "D’une expertise technique complète",
      "Et de solutions adaptées à vos besoins",
      "D’un accompagnement rigoureux à chaque étape",
    ],
  },
};

export default function Mission() {
  const { language } = useLanguage(); 
  const texts = missionTexts[language]; 

  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {texts.title}
        </h2>
        <p className="text-black font-bold text-lg mt-4">
          {texts.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        {texts.points.map((point, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <Check className="text-black w-6 h-6" />
            <p className="font-semibold mt-2">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
