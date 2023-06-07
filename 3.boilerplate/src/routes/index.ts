/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Prisma } from '@prisma/client'
import prisma from '../libs/prisma'
import userRoutes from './user.route'
import postRouter from './post.route'
import { Router } from 'express'
import {
    authenticateToken,
    isAdmin,
} from '../middlewares/authentication.middleware'

const router = Router()

router.use('/users', userRoutes)
router.use('/posts', postRouter)

router.put('/publish/:id', async (req, res) => {
    const { id } = req.params

    try {
        const postData = await prisma.post.findUnique({
            where: { id: Number(id) },
            select: {
                published: true,
            },
        })

        const updatedPost = await prisma.post.update({
            where: { id: Number(id) || undefined },
            data: { published: !postData?.published },
        })
        res.json(updatedPost)
    } catch (error) {
        res.json({ error: `Post with ID ${id} does not exist in the database` })
    }
})
router.get('/feed', authenticateToken, isAdmin, async (req, res) => {
    const { searchString, skip, take, orderBy } = req.query

    const or: Prisma.PostWhereInput = searchString
        ? {
              OR: [
                  { title: { contains: searchString as string } },
                  { content: { contains: searchString as string } },
              ],
          }
        : {}

    const posts = await prisma.post.findMany({
        where: {
            published: true,
            ...or,
        },
        include: { author: true },
        take: Number(take) || undefined,
        skip: Number(skip) || undefined,
        orderBy: {
            updatedAt: orderBy as Prisma.SortOrder,
        },
    })

    res.json(posts)
})

export default router
