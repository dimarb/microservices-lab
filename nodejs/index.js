const express = require('express')
const app = express()
const port = 3000

app.get('/my-node-backend/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
