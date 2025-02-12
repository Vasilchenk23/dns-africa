import { Client } from 'pg';
import Link from 'next/link';

async function fetchServices() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();

  try {
    const res = await client.query('SELECT * FROM projects');
    return res.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  } finally {
    await client.end();
  }
}

export default async function ServicesPage() {
  // Получаем список услуг (проектов) через асинхронную функцию
  const services = await fetchServices();

  if (!services || services.length === 0) {
    return <h1>Услуги не найдены</h1>;
  }

  return (
    <section className="bg-white py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1B4B]">OUR PROJECTS</h1>
      </header>
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-8 px-4">
        <div className="relative w-full max-w-[785px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[48px] px-4 py-2 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none outline-none"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5 5m-5-5a7 7 0 1 0-10-10 7 7 0 0 0 10 10z" />
          </svg>
        </div>
        <div className="relative">
          <select className="appearance-none ml-4 w-[200px] h-[48px] pl-[5px] border border-gray-300 rounded-[50px] focus:outline-none outline-none">
            <option className='pl-[5px]'>Filter</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <Link key={service.id} href={`/projects/${service.id}`} className="w-[296px] h-[424px] flex flex-col cursor-pointer">
            <article className="w-full h-full flex flex-col transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-[296px] h-[245px] object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold text-[#1A1B4B] mt-3">{service.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{service.short_description}</p>
              <span className="text-blue-500 text-sm w-full text-right mt-auto self-start">Learn more</span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
