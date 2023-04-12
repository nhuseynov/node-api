const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World From Windows Machine!')
})

app.listen(port, () => {
  console.log(`This app listening on port ${port}`)
})