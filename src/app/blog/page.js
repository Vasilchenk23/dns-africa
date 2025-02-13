import { Client } from "pg";
import Link from "next/link";

async function fetchServices() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();

  try {
    const res = await client.query("SELECT * FROM articles");
    return res.rows;
  } catch (error) {
    console.error("Error:", error);
    return [];
  } finally {
    await client.end();
  }
}

export default async function Blog() {
  const articles = await fetchServices();

  if (!articles || articles.length === 0) {
    return <h1 className="text-center text-2xl">error</h1>;
  }

  return (
    <section className="bg-white py-12 w-full">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1A1B4B] mt-[00px]">BLOG</h1>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto mb-8 px-4 gap-4"></div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-screen-xl">
        {articles.map((articles) => (
          <Link key={articles.id} href={`/blog/${articles.id}`} className="w-full">
            <article className="w-full flex flex-col transition-shadow duration-300 overflow-hidden  cursor-pointer">
              <img
                src={articles.image_url}
                alt={articles.title}
                className="w-full h-[245px] object-cover"
              />
              <p className="text-gray-600 text-sm mt-6 ml-7">{articles.month} {articles.day}, {articles.year}</p>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#1A1B4B]">{articles.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{articles.short_description}</p>
                <span className="text-blue-500 text-sm w-full text-right mt-2 block">Learn more</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
