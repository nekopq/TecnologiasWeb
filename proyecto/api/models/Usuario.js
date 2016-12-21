/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	atributes:{
        nombres:{
            type:'string',
            minLength:5
        },
        apellidos:{
            type:'string',
            minLength:5
        },
        correo:{
            type:'string',
            email:true,
            defaultsTo:'sugar@sprinkles.com'        }
        }
};

