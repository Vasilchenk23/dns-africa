import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16" id="aboutUs">
      <div className="container w-[100vw] px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <Image
              src="/img/about.png"
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <Image
              src="/img/team.png"
              alt="Collaboration"
              width={600}
              height={100}
              className="rounded-lg"
            />
            <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, 
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. 
            Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
            Pellentesque commodo lacus at sodales 
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
