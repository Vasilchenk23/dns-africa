import { Client } from 'pg';
import Link from 'next/link';

async function fetchServices() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'company_services',
    password: 'vas2325',
    port: 5432,
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
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-[300px] px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select className="ml-4 px-4 py-2 border border-gray-300 rounded shadow-sm">
          <option>Filter</option>
        </select>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <article key={service.id} className="w-[296px] h-[424px] bg-[#F2F9FF] p-4 rounded-lg shadow-lg flex flex-col border border-gray-300">
            <img
              src={service.image}
              alt={service.title}
              className="w-[296px] h-[245px] object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold text-[#1A1B4B] mt-3">{service.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{service.short_description}</p>
            <a href="#" className="text-blue-500 text-sm mt-auto self-start">Learn more</a>
          </article>
        ))}
      </div>
    </section>
  );
}

