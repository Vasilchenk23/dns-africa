import { Client } from 'pg';
import Link from 'next/link';

async function fetchServices() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();

  try {
    const res = await client.query('SELECT * FROM services');
    return res.rows;
  } catch (error) {
    console.error('Error:', error);
    return [];
  } finally {
    await client.end();
  }
}

export default async function ServicesPage() {
  const services = await fetchServices();

  if (!services || services.length === 0) {
    return <h1>Error</h1>;
  }

  return (
    <section className="bg-white py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1B4B] mt-[100px]">OUR SERVICES</h1>
      </header>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service) => {
          return (
            <article
              key={service.id}
              className="bg-[#F2F9FF] p-5 rounded-xl shadow-lg h-[380px] flex flex-col justify-between border-black border-[1px]"
            >
                <img
                  src={`http://localhost:3001/${service.svg_image}`}
                  alt={service.title}
                  className="mb-4 w-10 h-10"
                />
              <h2 className="text-xl font-semibold text-[#1A1B4B]">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4 mt-[100px]">
        <Link 
          href="/contact" 
          className="bg-[#00509E] text-white px-4 py-2 rounded-[50px] w-[181px] h-[52px] flex items-center justify-center text-center"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
