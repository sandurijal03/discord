import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import User from '../../models/User'

export const loginController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    // check if user exists
    const userExists = await User.exists({ email })

    if (userExists) {
      return res.status(409).json({
        success: false,
        message: 'Email is already in use. Please try again with another email',
      })
    }
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    })

    // create jwt token
    const token = 'jwt token'

    return res.status(201).json({
      success: true,
      message: 'User Registered Successfully',
      userDetails: {
        email: user.email,
        token,
        username: user.username,
      },
    })
  } catch (err) {
    console.log('err', err)
    return res
      .status(500)
      .json({ success: false, message: 'Error occured. Please try again' })
  }
  res.json({ message: 'login' })
}

export const registerController = async (req: Request, res: Response) => {
  res.json({ message: 'register' })
}
