import Image from "next/image";

const expertiseAreas = [
  {
    id: 1,
    title: "Études de Faisabilité",
    description:
      "Évaluation solaire : Analyse du site et collecte de données. Faisabilité technique : Vérification de l'orientation, de l'ombrage et de la connexion réseau. Analyse économique : Étude des coûts, flux financiers et impacts fiscaux.",
    icon: "/img/icon.svg",
  },
  {
    id: 2,
    title: "Supervision & Mise en Service",
    description:
      "Tests de conformité : Vérification selon CEI 62446. Conformité réseau : Gestion de la puissance réactive et active.",
    icon: "/img/icon.svg",
  },
  {
    id: 3,
    title: "Conception & Ingénierie",
    description:
      "Solutions adaptées : Installations au sol, en toiture ou sur ombrière. Outils avancés : Modélisation 2D/3D et schémas électriques avec AutoCAD, PVsyst, Archelios Pro. Normes & conformité : Respect des standards UTE C15-712, NFC 15-100.",
    icon: "/img/icon.svg",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-[24px] md:text-4xl font-bold text-gray-800 mb-16 mt-24">
          NOS DOMAINES D’EXPERTISE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#F2F9FF] p-8 rounded-lg shadow-lg flex flex-col items-center text-center max-w-sm mx-auto"
            >
              <Image
                src={area.icon}
                alt={area.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {area.title}
              </h3>
              <p className="text-gray-600 mt-2 text-left">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
