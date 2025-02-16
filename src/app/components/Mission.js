import { Check } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          NOTRE MISSION
        </h2>
        <p className="text-gray-500 text-lg mt-4">
          Notre mission est de vous accompagner dans votre transition énergétique en 
          vous offrant des solutions sur mesure, respectueuses de l'environnement 
          et économiquement viables.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-60">
        <div className="text-center flex flex-col items-center">
          <Check className="text-black w-6 h-6" />
          <p className="font-semibold mt-2">D’une expertise <br /> technique complète</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <Check className="text-black w-6 h-6" />
          <p className="font-semibold mt-2">Et de solutions <br /> adaptées à vos besoins</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <Check className="text-black w-6 h-6" />
          <p className="font-semibold mt-2">D’un accompagnement <br /> rigoureux à chaque étape</p>
        </div>
      </div>
    </section>
  );
}
