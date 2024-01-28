import http from 'http'

import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './db/connectDB'

const mountServer = async () => {
  const app = express()
  dotenv.config()
  await connectDB()

  // middleware
  app.use(express.json())
  app.use(cors())

  const server = http.createServer(app)

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'started' })
  })

  const port = process.env.PORT || 5000
  server.listen(port, () => {
    console.log('server: mounted at port ', port)
  })
}

mountServer()
