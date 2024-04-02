import { NextFunction, Request, Response } from "express"
import * as TodoService from '../services/todo.service'
export const getAll = (req: Request, res: Response, next: NextFunction) => {
  const activeStatus = req.query.active
  const todos = TodoService.getTodos(Boolean(activeStatus))
  res.send(todos)
}

export const create = (req: Request, res: Response, next: NextFunction) => {
  const todo: any = req.body
  console.log(req.body, ' is request body')
  const todos = TodoService.create(todo)
  res.send(todos)
}


export const update = (req: Request, res: Response, next: NextFunction) => {
  const todo: any = req.body
  const id = req.params.id
  const todos = TodoService.update(id, todo)
  res.send(todos)
}
export const remove = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  console.log(id, ' request params ko id yo ho hai')
  const todos = TodoService.create(id)
  res.send(todos)
}






// homework
// learn typescript, finish CRUD in boilerplate
// codeacademy finish
