const Express = require('express')
const router = Express.Router()
const app = Express()
const port = 80
const subD = require('express-subdomain')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(subD('bugs', router))
app.set('trust proxy', true)

app.use('/', Express.static('./build/static'))
router.get('/', Express.static('./src/bugs'))

//api specific routes
router.post('/submit', function(req, res) {
  console.log(req.body)
  res.send('oh hello there')
})

app.get('*', function (request, response) {
  response.sendFile(`${__dirname}/build/static/index.html`)
})

app.listen(port)
