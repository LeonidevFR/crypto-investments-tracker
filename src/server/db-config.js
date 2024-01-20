import dotenv from 'dotenv'
dotenv.config()

export default {
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
}
