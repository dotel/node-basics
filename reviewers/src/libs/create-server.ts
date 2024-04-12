import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser, { JSONCookies } from 'cookie-parser'
import routes from '../routes'
import * as ErrorMiddlewares from '../middlewares/errors.middleware'

const app = express()

// app.use(cookieParser());

// app.use()
app.use(compression())
// Allow all methods on all origin
app.use(cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

app.use(express.json())
app.use('/api', routes)



app.use(ErrorMiddlewares.methodNotAllowed)
app.use(ErrorMiddlewares.genericErrorHandler)

export default app
