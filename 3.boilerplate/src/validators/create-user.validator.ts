/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'

export const createUserDto = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
        }),
        email: z
            .string({
                required_error: 'Email is required',
            })
            .email('It is an email'),
        password: z.string({
            required_error: 'Password is required',
        }),
    }),
})
