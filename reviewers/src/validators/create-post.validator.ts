/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'

export const createPostDtoBody = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
})

export const createPostDto = z.object({
    body: createPostDtoBody
})



