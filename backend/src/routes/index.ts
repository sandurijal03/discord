import { Router, Request, Response } from 'express'

import authRouter from './auth/index.routes'

const router = Router()

router.use('/auth', authRouter)

export default router
