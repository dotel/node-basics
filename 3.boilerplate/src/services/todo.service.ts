/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import Boom from '@hapi/boom'
import prisma from '../libs/prisma'

export const createTodo = async (body: any, userId: number) => {
    const { title } = body
    return await prisma.todo.create({
        data: {
            title,
            userId
        },
    })
}

export const getAll = async (userId: number) => {
        return await prisma.todo.findMany({
            where: {userId: userId}
        })
}

export const findTodoById = async (id: Number) => {
    try {
        return await prisma.todo.findUniqueOrThrow({
            where: { id: Number(id) },
        })
    } catch (err: any) {
        if (err.code === 'P2025') {
            throw Boom.notFound('Todo not found')
        } else {
            throw err
        }
    }
}

export const updateTodoById = async (id: Number, todo: any) => {
    return await prisma.todo.update({
        where: { id: Number(id) },
        data: {
            title: todo.title
        },
    })
}

export const deleteById = async (id: Number, loggedInUserId: number) => {
    const todo = await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    })
    if(todo.userId !== loggedInUserId){
        throw Boom.forbidden("This ain't your todo")
    }
    return await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    })
}
