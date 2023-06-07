/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Router } from 'express'
import prisma from '../libs/prisma'
import { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'
import { validate } from '../utils/validate'
import { createUserDto } from '../validators/create-user.validator'
import { login } from '../services/user.service'

const router = Router()

router.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

router.post('/login', async (req, res, next) => {
    try {
        const { email, password }: { email: string; password: string } =
            req.body
        const { token } = await login(email, password)
        res.json(token)
    } catch (error) {
        next(error)
    }
})

router.get('/user/:id/drafts', async (req, res) => {
    const { id } = req.params

    const drafts = await prisma.user
        .findUnique({
            where: {
                id: Number(id),
            },
        })
        .posts({
            where: { published: false },
        })

    res.json(drafts)
})

router.post(`/signup`, validate(createUserDto), async (req, res) => {
    const { name, email, posts, password } = req.body

    const postData = posts?.map((post: Prisma.PostCreateInput) => {
        return { title: post?.title, content: post?.content }
    })
    const result = await prisma.user.create({
        data: {
            name,
            email,
            posts: {
                create: postData,
            },
            address: 'Kapan',
            password: await bcrypt.hash(password as string, 10),
        },
    })
    res.json(result)
})

export default router
