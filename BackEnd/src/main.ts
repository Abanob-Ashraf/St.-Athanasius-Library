// import path from 'path'
import fs from 'fs'
import express, { Application, Request, Response } from 'express'
// import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import https from 'https'
// import rateLimit from 'express-rate-limit'
import * as dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/main'

dotenv.config()

// create an instance server
const app: Application = express()

const privateKey = fs.readFileSync('server.key')
const certificate = fs.readFileSync('server.cert')

// HTTP request logger middleware
// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// app.use(morgan('combined', { stream: accessLogStream }))

// HTTP Security middleware
app.use(helmet())
app.use(compression())

// middeewane to parse incoming requests
app.use(express.json())
app.use(cors())

// Apply the rate limiting middleware to all requests
// app.use(
//   rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 500, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//     statusCode: 429, // StatusCode = 429 Too Many Requests
//     message: 'Too many requests, please try again later'
//   })
// )

app.use('/library', routes)

app.use((_: Request, res: Response) => {
  res.status(404).end('Ohh you are lost, read the API documentation to find your way back home 😂')
})

// start express server
const PORT = 3000
https.createServer({ key: privateKey, cert: certificate }, app)
app.listen(process.env.PORT || PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server is starting at prot:${PORT}`)
)

export default app
