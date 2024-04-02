/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as TodoController from '../controllers/todo.controller'
const route = express.Router()



route.get('/', TodoController.getAll)

route.post('/', TodoController.create)

route.delete('/:id', TodoController.remove)

route.patch('/:id', TodoController.update)


export default route;
