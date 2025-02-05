import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[696px] flex items-center justify-center text-white">
      <Image 
        src="/img/slogan.png" 
        alt="Connecting Africa, Lighting the Future"
        width={1440}
        height={696}
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
    </section>
  );
}
