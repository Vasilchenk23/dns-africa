import { Client } from 'pg';
import Link from 'next/link';

async function fetchServices() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  try {
    const res = await client.query('SELECT * FROM services');
    return res.rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  } finally {
    await client.end();
  }
}

const toBase64 = (uint8Array) => {
  const buffer = Buffer.from(uint8Array);
  return buffer.toString('base64');
};

export default async function ServicesPage() {
  const services = await fetchServices();

  if (!services || services.length === 0) {
    return <h1>Услуги не найдены</h1>;
  }

  return (
    <section className="bg-white py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1B4B]">OUR SERVICES</h1>
      </header>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service) => {
          const svgBase64 = service.svg_image ? toBase64(service.svg_image) : null;
          const svgDataUri = svgBase64 ? `data:image/svg+xml;base64,${svgBase64}` : '';
          return (
            <article
              key={service.id}
              className="bg-[#F2F9FF] p-5 rounded-xl shadow-lg h-[380px] flex flex-col justify-between border-black border-[1px]"
            >
              {svgDataUri ? (
                <img
                  src={svgDataUri}
                  alt={service.title}
                  className="mb-4 w-10 h-10"
                />
              ) : null}
              <h2 className="text-xl font-semibold text-[#1A1B4B]">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center space-x-4">
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

