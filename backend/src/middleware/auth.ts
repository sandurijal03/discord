import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const config = process.env

type CustomRequest = Request & { user: any }

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  let token = req.body.token || req.query.token || req.headers['authorization']

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'Token is required for authentication.',
    })
  }

  try {
    token = token.replace(/^Bearer\s+/, '')
    const decoded = jwt.verify(token, config.JWT_SECRET as string)
    req.user = decoded
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid token.' })
  } finally {
    return next()
  }
}
