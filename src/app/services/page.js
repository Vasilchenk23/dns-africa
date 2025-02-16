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
    return <h1 className="text-center text-red-600 text-2xl">Error: No Services Found</h1>;
  }

  return (
    <section className="bg-white py-12">
      <header className="text-center mt-[100px] mb-12 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1A1B4B]">OUR SERVICES</h1>
        <p className="text-gray-600 mt-4 text-[24px]">
        L’étude de faisabilité photovoltaïque est primordiale pour permettre au porteur du projet d’évaluer le potentiel et l’ensemble des contraintes d’un site, et prendre ainsi les décisions sur le scénario optimal à poursuivre. <br/>
        En s’appuyant sur des méthodes et des outils développés en interne, nos équipes d’ingénieurs se chargent de la conception de votre projet photovoltaïque. Que ce soit pour une installation au sol, sur ombrière de parking ou sur toiture, en autoconsommation ou revente totale.
        </p>
      </header>
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-[#1A1B4B]">
          DE FAÇON GÉNÉRALE, NOTRE ÉTUDE DE FAISABILITÉ COMPREND 5 ÉTAPES
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4 max-w-5xl mx-auto">
          {[
            { step: 1, text: "Visite de site, instrumentation, récolte de donnée" },
            { step: 2, text: "Étude de productibilité" },
            { step: 3, text: "Estimation des coûts d’investissement, d’exploitation, taxes et fiscalité" },
            { step: 4, text: "Implantations 2D et 3D et évaluation du gisement" },
            { step: 5, text: "Présentation et comparaison des différents scénarios" }
          ].map(({ step, text }) => (
            <div key={step} className="text-center">
              <span className="text-3xl font-bold text-[#1A1B4B]">{step}</span>
              <p className="text-gray-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-[150px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service) => (
          <article
            key={service.id}
            className="bg-[#F2F9FF] p-5 rounded-xl shadow-lg h-[380px] flex flex-col justify-between border border-black"
          >
            <img
              src={`https://admin-dns.vercel.app/${service.svg_image}`}
              alt={service.title}
              className="mb-4 w-10 h-10"
            />
            <h2 className="text-xl font-semibold text-[#1A1B4B]">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 mt-16">
        <Link
          href="/contact"
          className="bg-[#00509E] text-white px-4 py-2 rounded-full w-[181px] h-[52px] flex items-center justify-center text-center"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
