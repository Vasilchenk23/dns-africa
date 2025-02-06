import { Client } from 'pg';

// Підключення до бази даних
const client = new Client({
  user: 'postgres', // ваш користувач
  host: 'localhost',
  database: 'company_services', // ваша база даних
  password: 'vas2325', // ваш пароль
  port: 5432, // порт
});

client.connect();

export default client;
