import { Client } from 'pg';

async function getProject(id) {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  await client.connect();

  try {
    const res = await client.query('SELECT * FROM projects WHERE id = $1', [id]);
    return res.rows[0];
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return null;
  } finally {
    await client.end();
  }
}

export default async function ProjectPage({ params }) {
  const { id } = params;  // Получаем параметр id из URL
  const project = await getProject(id);

  if (!project) {
    return <h1 className="text-center text-2xl font-bold">Проект не найден</h1>;
  }

  return (
    <>
      <h4>Projects / {project.title}</h4>
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="w-1/2 h-auto">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-lg" 
          />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-bold text-[#1A1B4B]">{project.title}</h1>
          <p className="text-lg text-gray-700 mt-4">{project.short_description}</p>
          
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

