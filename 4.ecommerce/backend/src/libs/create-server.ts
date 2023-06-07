import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import routes from '../routes'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import * as ErrorMiddlewares from '../middlewares/errors.middleware'
import pino from 'pino-http'
import helmet from 'helmet'

const app = express()
app.use(compression())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())
app.use(pino())
app.use(helmet())

app.use('/api', routes)

const options: swaggerJsdoc.Options = {
    definition: {
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                },
            },
        },
        openapi: '3.0.0',
        info: {
            title: 'Express starter',
            version: '1.0.0',
        },

        servers: [
            {
                url: 'http://localhost:8080/api',
            },
        ],
        security: [{ BearerAuth: [] }], // Add security definition here
    },
    apis: ['./src/routes/*.ts'],
}

const specs = swaggerJsdoc(options)
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true,
    })
)

app.use(ErrorMiddlewares.methodNotAllowed)
app.use(ErrorMiddlewares.genericErrorHandler)

export default app
