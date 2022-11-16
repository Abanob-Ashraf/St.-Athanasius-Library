import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

import usersRoutes from './routers/users'
import blocksRoutes from './routers/blocks'
import shelfsRoutes from './routers/shelfs'
import booksRoutes from './routers/books'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

app.use(express.json())

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello To my library 🌍'
  })
})

app.use(usersRoutes)
app.use(blocksRoutes)
app.use(shelfsRoutes)
app.use(booksRoutes)

// start express server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
