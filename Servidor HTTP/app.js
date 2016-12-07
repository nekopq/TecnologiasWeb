var express = require('express');
var app = express();
var fs = require('fs');


var puerto = "6060";
app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})


//function(path,codificacion,funcion)
console.log('1 antes de leer el archivo');

app.get('/', function (req, res) {
    var todo = '';
    console.log('antes de leer');

    fs.readFile('./paginas/pagina.html','utf8',function(error, archivoLeido){
        todo+=archivoLeido;

        fs.readFile('./paginas/usuario.html','utf8',function(error, archivoLeido){
            todo+=archivoLeido;

            fs.readFile('./paginas/footer.html','utf8',function(error, archivoLeido){
                todo+=archivoLeido;
                res.send(todo);
            });
        });
    });
    console.log('2 Después de leer el archivo');
})


/**

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

app.post('/Usuario', function (req, res) {
    console.log(req.query.nombre);
    console.log(req.query.apellido);
    //Si no se envia parametro, Undefined
    
    if(!req.query.nombre){
        res.send("No se envió el nombre");
    }
    if(!req.query.apellido){
        res.send("No se envió el apellido");
    }
})

var nuevoUsuario = {
    id: usuarios.lengh+1;
    nombre:req.query.nombre,
    apellido:req.query.apellido
}
usuarios.push(nuevoUsuario);
res.json(nuevoUsuario);


**/