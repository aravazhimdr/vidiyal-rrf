const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./src/queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Vidiyal-RRF is working!' })
})

app.get('/issue', db.getIssue)
app.post('/issue', db.createIssue)

app.listen(port, () => {
  console.log(`Vidiyal-RRF is running on port ${port}.`)
})
