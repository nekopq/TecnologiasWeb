### Crear proyecto en SailsJS
´´´
> sails new NombreProyecto
´´´

Sails pide opciones que si no son definidas, son:
1. Safe mode: No se altera la base de datos
2. Alter mode: Se va a alterar la base de datos; por ejemplo: si cambiamos los modelos
3. Delete mode: Borra todos los datos de la base

### El servidor web de sailsjs
Se encuentra localizado

### Generar controladores Sailsjs

Para generar controladores se utiliza:
´´´
> sails generate controller NombreControlador

´´´

### Generar APIs en SailsJS

´´´
> sails generate api NombreControlador

´´´

### Generar APIs en SailsJS

´´´
> sails generate api NombreControlador

´´´

### API REST

## Modelo Usuario
Crear
URL:
'http://localhost:1337/Usuario'

Metodo HTTP:

'POST'

Datos:
´´´javascript
{
    nombre:'Sugar',
    apelido:'Sprinkles',
    correo:'bestpet@lps.com'
}

REST blueprint

    http://localhost:1337/Usuario/create?nombres=Sugar&apellidos=Sprinkles
    http://localhost:1337/Usuario/destroy?id=3
    http://localhost:1337/Usuario/update/2?nombres=Twilight&apellidos=Barkle