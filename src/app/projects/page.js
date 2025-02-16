import { Client } from "pg";
import Link from "next/link";
import Search from "../components/Search";

async function fetchServices() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();

  try {
    const res = await client.query("SELECT * FROM projects");
    return res.rows;
  } catch (error) {
    console.error("Error:", error);
    return [];
  } finally {
    await client.end();
  }
}

export default async function ProjectPage() {
  const services = await fetchServices();

  if (!services || services.length === 0) {
    return <h1 className="text-center text-2xl">Услуги не найдены</h1>;
  }

  return (
    <section className="bg-white py-12 w-full">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1B4B] mt-[00px]">OUR PROJECTS</h1>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto mb-8 px-4 gap-4">
        <div className="relative w-full sm:w-[60%]">
          <Search/>
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l5 5m-5-5a7 7 0 1 0-10-10 7 7 0 0 0 10 10z"
            />
          </svg>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-screen-xl">
        {services.map((service) => (
          <Link key={service.id} href={`/projects/${service.id}`} className="w-full">
            <article className="w-full flex flex-col transition-shadow duration-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
              <img
                src={`https://admin-dns.vercel.app/${service.image_url}`}
                alt={service.title}
                className="w-full h-[245px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#1A1B4B]">{service.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{service.short_description}</p>
                <span className="text-blue-500 text-sm w-full text-right mt-2 block">Learn more</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
