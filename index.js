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

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Vidiyal-RRF is working!' })
})

app.get('/issue', db.getIssue)
app.post('/issue', db.createIssue)

app.listen(port, () => {
  console.log(`Vidiyal-RRF is running on port ${port}.`)
})
