import express, { Request, Response } from 'express'
import connectDB from './db/connectDB'
import dotenv from "dotenv"



const mountServer = async () => {
  const app = express()
  dotenv.config()
  await connectDB()

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'started' })
  })

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log('server: mounted at port ', port)
  })
}

mountServer()
