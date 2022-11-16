/* eslint-disable no-console */
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

// eslint-disable-next-line prettier/prettier
const { 
  DB_HOST, 
  DB_PORT, 
  DB_NAME, 
  DB_NAME_TEST, 
  DB_USER, 
  DB_PASSWORD, 
  ENV 
} = process.env

console.log(ENV)
console.log(`Database is connected at prot:${DB_PORT}`)

const Client = new Pool({
  host: DB_HOST,
  database: ENV === 'dev' ? DB_NAME : DB_NAME_TEST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT as string)
})

export default Client
