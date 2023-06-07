import app from './libs/create-server'

app.listen(process.env.PORT || 3000, () =>
    console.log(`
🚀 Server ready at: http://localhost:3000`)
)
console.log(process.env.DATABASE_URL)
