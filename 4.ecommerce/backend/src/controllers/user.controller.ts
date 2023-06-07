import { NextFunction, Request, Response } from 'express'
import * as UserService from '../services/user.service'
import HttpStatusCode from 'http-status-codes'
import { User } from '@prisma/client'
import { logger } from '../utils/logger'
export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await UserService.get()

        logger.error('Sentry properly setup')
        res.json(users)
    } catch (e) {
        next(e)
    }
}

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await UserService.create(req.body as User)
        res.status(HttpStatusCode.CREATED).json(user)
    } catch (e) {
        next(e)
    }
}

export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await UserService.remove(Number(req.params.id))
        res.status(HttpStatusCode.NO_CONTENT).send()
    } catch (e) {
        next(e)
    }
}

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await UserService.getById(Number(req.params.id))
        res.status(HttpStatusCode.CREATED).json(user)
    } catch (e) {
        next(e)
    }
}

export const updateUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await UserService.updateById(
            Number(req.params.id),
            req.body
        )
        res.status(HttpStatusCode.CREATED).json(user)
    } catch (e) {
        next(e)
    }
}
