const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World From Windows Machine!')
})
//everytime we make change in our application server.js, we have to stop and start application again

app.get('/blog', (req, res) => {
    res.send('First of all, Welcome to my blog! My name is Nazim :)')
  })

app.get('/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.post('/products', async(req, res) => {
  try {
      const product = await Product.create(req.body)
      res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//connect our app with database, for this we need to use package called mongos
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://nhuseynov:TestTestovTestik@nhuseynov-api.foo8gqn.mongodb.net/node-api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongodb')
    app.listen(port, () => {
        console.log(`This app listening on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})