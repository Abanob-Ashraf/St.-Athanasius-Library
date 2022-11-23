import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import * as dotenv from 'dotenv'

import routes from './routes/main'

dotenv.config()

const PORT = process.env.PORT || 3000

// create an instance server
const app: Application = express()

// HTTP request logger middleware
app.use(morgan('common'))

// HTTP Security middleware
app.use(helmet())

// middeewane to parse incoming requests
app.use(express.json())

// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too many requests, please try again after 15 minutes'
  })
)

// add routing for / path
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Hello To my library 🌍'
  })
})

app.use('/library', routes)

app.use((_: Request, res: Response) => {
  res.status(404).end('Ohh you are lost, read the API documentation to find your way back home 😂')
})

// start express server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
