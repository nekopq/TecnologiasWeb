/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre) {
        Raza.create({
          nombre: parametros.nombre
        }).exec(function (error, razaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la raza, intentalo de nuevo: '+error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontrados) {
            if (error) return res.serverError();
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
            })
          });
        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearRaza'
        }
      });
    }
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    sails.log.info(parametros);
    if (req.method == 'POST') {
      if (parametros.nombre) {

        Raza.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
        }).exec(function (error, razaCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error creando la raza: ' + error,
                url: '/crearRaza'
              }
            });
          }


          Raza.find().exec(function (error, razasEncontrados) {
            if (error) return res.serverError();
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
            })
          });

        });

      } else {
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No ingresó el nombre',
            url: '/editarRaza'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/editarRaza'
        }
      });
    }

  },
  eliminarRaza: function(req, res){
    var parametros = req.allParams();
    if(parametros.id){
      Raza.destroy({
        id: parametros.id
      }).exec(function(error, RazaBorrada){
        if(error){
          return res.view('error', {
            error: {
              descripcion: "Error al borrar la raza.",
              rawError: error,
              url: "/listarRazas"
            }
          });
        }
        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.serverError();
          return res.view('vistas/Raza/listarRazas', {
            title: 'Lista de Razas',
            razas: razasEncontrados
            });
        })
      })
    }
  }
};
