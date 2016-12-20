/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    hola:function(req, res){
        res.json({
            nombre:'Sugar',
            apellido:'Sprinkles'
        });
    },
    adios:function(req, res){
        res.send('Adios');
    },
    hora:function(req, res){
        res.send('Hora');
    },
    
};

