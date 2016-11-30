var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('con Javascript')
})

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con Javascript URL')
})

app.listen(5050, function () {
  console.log('Example app listening on port 3000!')
})
