import Image from "next/image";

const expertiseAreas = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ",
    icon: "/img/icon.svg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ",
    icon: "/img/icon.svg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ",
    icon: "/img/icon.svg",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 bg-white w-full min-w-[1000px]">
      <div className="container w-full min-w-[1000px] border px-6 md:px-12 text-center">
        <h2 className="text-[24px] md:text-4xl font-bold text-gray-800 mb-[104px] mt-[152px]">
         EXPERTISE AREAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-2 sm:px-4 md:px-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#F2F9FF] p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[360px]"
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
              <p className="text-gray-600 mt-2">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
