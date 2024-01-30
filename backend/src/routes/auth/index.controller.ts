import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../../models/User'

export const registerController = async (req: Request, res: Response) => {
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
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      },
    )

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
}

export const loginController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user && (await bcrypt.compare(password, user.password))) {
      // create jwt token
      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: '1d',
        },
      )
      return res.status(200).json({
        success: true,
        message: 'Login Successful',
        userDetails: {
          email: user.email,
          token,
          username: user.username,
        },
      })
    }

    return res.status(400).json({
      success: false,
      message: 'Invalid credentials.Please try again.',
    })
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Error occured. Please try again' })
  }
}
