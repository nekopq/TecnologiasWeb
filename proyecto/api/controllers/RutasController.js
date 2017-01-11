module.exports = {
    home:function(req, res){
        return res.view('vistas/home',{
            titulo:'Inicio',
            numero:1,
            pet: {
                nombre: 'Sugar',
                apellido: 'Sprinkles'
            }
        });
    }
}