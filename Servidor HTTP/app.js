var express = require('express')
var app = express()

var puerto = "6060";

var usuarios = [
    {
        id: 1,
        nombre: 'Sugar',
        apellido: 'Sprinkles'
    },
    {
        id: 2,
        nombre: 'Minka',
        apellido: 'Mark'
    },
    {
        id: 3,
        nombre: 'Pepper',
        apellido: 'Clark'
    }
]


app.get('/', function (req, res) {
  res.send('con Javascript')
})

app.get('/Usuario', function (req, res) {
  res.json(usuarios);
})

app.get('/Usuario/:idUsuario', function (req, res) {
    var id = req.params.idUsuario;
    for(var i=0; i<usuarios.length;i++){
        //console.log("El id del arreglo: "+id+" id del usuario: "+usuar)
        if(id == usuarios[i].id){
            res.json(usuarios[i]);  
        }
    }
    res.send('No se encontró el usuario.');
})

app.post('/TecnologiasWeb', function (req, res) {
    res.append('token', '1234');
    res.json(usuario);
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})
