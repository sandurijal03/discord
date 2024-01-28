import { Router, Request, Response } from 'express'
import { loginController, registerController } from './index.controller'

const router = Router()

router.post('/login', (req: Request, res: Response) =>
  loginController(req, res),
)
router.post('/register', (req: Request, res: Response) =>
  registerController(req, res),
)

export default router
