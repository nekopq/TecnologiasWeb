var express = require('express')
var app = express()

var puerto = "6060";

var usuario = {
    nombre: 'Sugar',
    apellido: 'Sprinkles'
}

app.get('/', function (req, res) {
  res.send('con Javascript')
})

app.post('/TecnologiasWeb', function (req, res) {
    //request y response
    console.log("Lo que tengo en el request es:"+req);
    console.log("Lo que tengo en el response es:"+res);
    res.send('con Javascript URL')

//    console.log('Cabeceras Req');
//    console.log(req.headers);
//    console.log('Cabeceras Req');
//    console.log(res.headers);
    
    res.json(usuario);
    
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})
