import express, { Request, Response } from 'express'

const mountServer = () => {
  const app = express()

  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'started' })
  })

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log('server: mounted at port ', port)
  })
}

mountServer()
