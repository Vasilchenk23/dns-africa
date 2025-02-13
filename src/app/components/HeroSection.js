import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
