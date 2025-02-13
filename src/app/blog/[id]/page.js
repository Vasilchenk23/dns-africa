import { Client } from 'pg';
import Image from 'next/image';

async function getProject(id) {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();

  try {
    const res = await client.query('SELECT * FROM articles WHERE id = $1', [id]);
    return res.rows[0];
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return null;
  } finally {
    await client.end();
  }
}

export default async function ProjectPage({ params }) {
  const { id } = params; 
  const articles = await getProject(id);

  if (!articles) {
    return <h1 className="text-center text-2xl font-bold">Ошибка: статья не найдена</h1>;
  }

  return (
    <>
      <h4 className="mt-[100px] text-left text-xl pl-[100px]">{`Blog / ${articles.title}`}</h4>
      <div className="w-full h-[100vh] md:h-[60vh] flex justify-center items-center relative mb-6 md:mb-0">
        <Image
          src={articles.image_url}
          alt={articles.title}
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col md:flex-row flex justify-center items-center">
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
        <p className="text-lg text-gray-700 mt-4">{articles.month} {articles.day}, {articles.year}</p>
          <h1 className="text-3xl font-bold text-[#1A1B4B]">{articles.title}</h1>
          <p className="text-lg text-gray-700 mt-4">{articles.long_description}</p>
          
          <div className="mt-6 flex items-center justify-center">
            <a 
              href="/"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
