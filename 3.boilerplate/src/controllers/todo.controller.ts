/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { NextFunction, Request, Response } from 'express'
import * as todoService from '../services/todo.service'
import HttpStatus from 'http-status-codes'

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await todoService.createTodo(req.body, (req as any).user.userId)
        res.json(data)
    } catch (err) {
        next(err)
    }
}

export const findByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = await todoService.findTodoById(Number(req.params.id))
        res.json(data)
    } catch (err) {
        next(err)
    }
}

export const findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log((req as any).user)
        const userId = (req as any).user.userId;
        const data = await todoService.getAll(userId)
        res.json(data)
    } catch (err) {
        next(err)
    }
}
export const updateByID = async (req: Request, res: Response) => {
    const { id } = req.params

    // @TODO: Handle errors
    const post = await todoService.updateTodoById(Number(id), req.body)

    res.status(HttpStatus.CREATED).json(post)
}

export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    // @TODO: Handle errors
    const post = await todoService.deleteById(Number(id), (req as any).user.userId)
    res.status(HttpStatus.NO_CONTENT).json(post)
}
