const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const token = require('./routes/token')
const users = require('./routes/users')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const staticRoot = 'src'

app.disable('x-powered-by')

const port = process.env.PORT || 8000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(morgan('dev'))

app.use(express.static(staticRoot))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(token)
app.use(users)

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).send(err)
  }

  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message)
  }

  console.error(err.stack)
  res.sendStatus(500)
})

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port)
  }
})

module.exports = app
