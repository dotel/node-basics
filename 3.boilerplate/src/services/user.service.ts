/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import prisma from '../libs/prisma'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function login(email: string, password: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { email } })

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        throw Error('Password not correct')
    }

    // Generate a token
    const token = jwt.sign(
        { userId: user.id, isAdmin: true },
        'random-secret',
        {
            expiresIn: '1h',
        }
    )

    // Return the token to the client
    return { success: true, token }
}

// Refresh token - long lived token
// Access token - short lived token expires in 5 minutes
