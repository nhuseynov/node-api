const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World From Windows Machine!')
})
//everytime we make change in our application server.js, we have to stop and start application again

app.get('/blog', (req, res) => {
    res.send('First of all, Welcome to my blog! My name is Nazim :)')
  })

//connect our app with database, for this we need to use package called mongos
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://root:123456789@nhuseynov-api.foo8gqn.mongodb.net/node-api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongodb')
    app.listen(port, () => {
        console.log(`This app listening on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})