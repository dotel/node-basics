import { NextFunction, Request, Response } from 'express'
import prisma from '../libs/prisma'
import bcrypt from 'bcrypt'

import * as UserService from '../services/user.service'
export const find = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
}

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.userId
    const { accessToken } = await UserService.refresh(userId)

    res.json(accessToken)
  } catch (error) {
    next(error)
  }
}



export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken } = await UserService.login(req.body)
    res.cookie('refreshToken', refreshToken,
      { httpOnly: true });

    res.json(accessToken)
  } catch (error) {
    next(error)
  }
}

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, address, isAdmin } = req.body
  const result = await prisma.user.create({
    data: {
      name,
      email,
      isAdmin: isAdmin,
      password: await bcrypt.hash(password as string, 10),
    },
  })
  res.json(result)
}


// CRUD /profile/todos
// CRUD /todos
