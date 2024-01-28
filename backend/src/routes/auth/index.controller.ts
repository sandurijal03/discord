import { Request, Response } from 'express'

export const loginController = async (req: Request, res: Response) => {
  res.json({ message: 'login' })
}

export const registerController = async (req: Request, res: Response) => {
  res.json({ message: 'register' })
}
