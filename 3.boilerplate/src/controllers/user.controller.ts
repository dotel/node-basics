import { NextFunction, Request, Response } from 'express'
import prisma from '../libs/prisma'
import bcrypt from 'bcrypt'

import * as UserService from '../services/user.service'
export const find = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const { email, password }: { email: string; password: string } =
          req.body
      const { token } = await UserService.login(email, password)
      res.json(token)
  } catch (error) {
      next(error)
  }
}

export const signup = async (req: Request, res: Response) => {
  const {name, email, password, address} = req.body
  const result = await prisma.user.create({
      data: {
          name,
          email,
          address,
          password: await bcrypt.hash(password as string, 10),
      },
  })
  res.json(result)
}
