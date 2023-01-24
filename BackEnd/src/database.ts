/* eslint-disable no-console */
import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, ENV } = process.env
const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env

console.log(ENV)

const Client = new Pool({
  host: ENV === 'dev' ? DB_HOST : PGHOST,
  database: ENV === 'dev' ? DB_NAME : PGDATABASE,
  user: ENV === 'dev' ? DB_USER : PGUSER,
  password: ENV === 'dev' ? DB_PASSWORD : PGPASSWORD,
  port: ENV === 'dev' ? parseInt(DB_PORT as string) : parseInt(PGPORT as string),
  ssl: ENV === 'dev' ? false : true
})

Client.on('error', (error: Error) => {
  console.error(`Error: ${error.message}`)
})

export default Client
