import { Router, Request, Response } from 'express'
import Joi from 'joi'
import Validator from 'express-joi-validation'

const validator = Validator.createValidator({})

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
})

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
})

import { loginController, registerController } from './index.controller'

const router = Router()

router.post(
  '/login',
  validator.body(loginSchema),
  (req: Request, res: Response) => loginController(req, res),
)
router.post(
  '/register',
  validator.body(registerSchema),
  (req: Request, res: Response) => registerController(req, res),
)

export default router
