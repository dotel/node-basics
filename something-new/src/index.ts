import express from 'express'
import todoRouter from './routes/todo.route'
const PORT = 3000
const app = express()

app.use(express.json())

app.use('/todos', todoRouter)
app.listen(PORT, () => {
  console.log('Running on port', PORT)
})

export default app;
