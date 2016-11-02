<a name="Inicio"></a>
Tema: Estilos CSS
--
#### Fecha: 2016-10-25
#### Estudiante: Stalin Aguirre Iza
#### Profesor: Tania Calle - Adrian Eguez
#### Número de informe: 2

## Índice de Contenidos
* <a href="#Tema">Tema</a>
* <a href="#Objetivos">Objetivos</a>
* <a href="#MarcoTeorico">Marco Teórico</a>
* <a href="#Desarrollo">Desarrollo de la Práctica</a>
* <a href="#Conclusiones">Conlusiones y Recomendaciones</a>

<a name="Tema"></a>
## Tema
El tema de la práctica es: **Estilos CSS**

<a name="Objetivos"></a>
## Objetivos

- Comprender las herramientas y los pasos necesarios para levantar un servidor web
- Aprender las diferentes formas de aplicar estilos a un documento HTML
- Conocer varios atributos y sus valores que pueden ser aplicados para modificar el estilo de los objetos dentro del documento HTML
- Entender el framework Bootstrap y como simplifica el trabajo de aplicar estilos a un documento HTML

<a name="MarcoTeorico"></a>
## Marco Teórico

### CSS (Cascading Style Sheets)

Es un lenguaje que describe el estilo o aspecto visual de cada objeto dentro de un documento HTML, describe como los elementos deben ser mostrados.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Informe/Gr%C3%A1ficos/css.png?raw=true" alt="CSS">
</p>

El formato en el que se escribe código CSS es:
```CSS
selector {
    propiedad: valor;   //Declaración
    propiedad1: valor1;
} //Bloque de declaraciones
```

<p>**Selector**: El selector apunta al elemento HTML al cual se va a aplicar un estilo</p>
<p>**Bloque de declaraciones**: Contiene una o más declaraciones separadas por punto y coma</p>
<p>**Declaración**: Contiene una propiedad y un valor, deparado por dos puntos</p>

Ejemplo: Aplica el estilo centrado y de color rojo a todos los elementos dentro de tags ```<p>```
```CSS
p {
    color: red;
    text-align: center;
}
```

Los estilos pueden encontrarse dentro del html o en un archivo aparte. Si se ubica en un archivo aparte, el documento HTML debe poder referenciar a la hoja de estilos para que esta pueda ser aplicada. Para esto, se ingresa el tag ```<link>``` dentro del tag ```<head>``` del HTML de la siguiente forma:

```HTML
<head>
    <meta charset="UTF-8">
    <title>Tutorial HTML</title>
    <link rel="stylesheet" href="estilos/estilos.css">
</head>
```

En el atributo ```href``` ingresamos la ruta de la hoja de estilos que queramos aplicar.
### Node.js

Es un entorno en tiempo de ejecución multiplataforma basado en el lenguaje de programación ECMAScript y en el motor V8 de Google (motor JavaScript). Esto permite que el código JavaScript no se ejecute en el navegador sino en el servidor. Además permite la creación de servidores web y otras herramientas usando JavaScript y un conjunto de "módulos" que se ocupen de varias funcionalidades.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Informe/Gr%C3%A1ficos/node.png?raw=true" alt="Logo de Node.js y npm">
</p>

### NPM

Es el administrador de paquetes por defecto de JavaScript, permite a los desarrolladores de código JavaScript poder compartir su código para que este sea reutilizado por otros desarrolladores. A estos fragmentos compartidos de código se los denomina "paquetes" o "módulos". Un paquete es simplemente un directorio que contiene uno o más archivos dentro, tambien contiene un archivo llamado "package.json" el cual contiene metadatos sobre el paquete.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Informe/Gr%C3%A1ficos/npm.png?raw=true" alt="Logo de npm">
</p>

<a name="Desarrollo"></a>
## Desarrollo del informe

### Instalación de Node.js

Nos dirigimos a la página principal de [Node.js](https://nodejs.org/en/) y seleccionamos la versión a descargar.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Informe/Gr%C3%A1ficos/nodejs.PNG?raw=true" alt="Sitio web de node.js">
</p>

Abrimos el instalador y seguimos los pasos necesarios hasta finalizar.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/02-CSS/Informe/Gr%C3%A1ficos/InstalacionNodejs.PNG?raw=true" alt="Pantalla inicial del instalador de npm">
</p>
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/02-CSS/Informe/Gr%C3%A1ficos/InstalacionNodejs2.PNG?raw=true" alt="Pantalla Final del instalador de npm">
</p>

### Instalación de un Servidor Web

Para instalar un Servidor Web haremos uso de npm. Abrimos una terminal (preferentemente dentro de la carpeta en la que estemos trabajando) y ejecutamos la instrucción:

<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/02-CSS/Informe/Gr%C3%A1ficos/CMDnpm.PNG?raw=true" alt="Pantalla Final del instalador de npm">
</p>


```
npm install -g http-server
```
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/02-CSS/Informe/Gr%C3%A1ficos/CMDnpm1.PNG?raw=true" alt="Pantalla Final del instalador de npm">
</p>

<p>**npm**: Es el gestor de paquetes que vamos a usar parar obtener el servidor web y otras herramientas.</p>
<p>**install**: Indica la acción a realizar con el paquete</p>
<p>**-g**: Establece que la instalación será global (para todos los usuarios del sistema).</p>
<p>**http-server**: Es el nombre del paquete que deseamos instalar.</p>

-------

Una vez instalado el paquete, podemos ejecutarlo con el comando:

```
http-server -c10 
```

**http-server**: Es el nombre del paquete que se encuentra instalado.

**-c10**: Se establece un tiempo de caché
<p align="center">   
    <img src="https://raw.githubusercontent.com/nekopq/TecnologiasWeb/5c45fe619ed16883a0d5cda36bba6554006ebdf2/Informe/Gr%C3%A1ficos/ServidorWeb.PNG" alt="Consola al levantar el servidor">
</p>

Si entramos a un navegador e ingresamos ```localhost:8080``` se nos mostrará el index.html de nuestro servidor (local).
<p align="center">   
    <img src="https://raw.githubusercontent.com/nekopq/TecnologiasWeb/5c45fe619ed16883a0d5cda36bba6554006ebdf2/Informe/Gr%C3%A1ficos/ServidorWeb1.PNG" alt="index.html del servidor">
</p>

### HTML
Dentro de un HTML la etiqueta en la que nos enfocamos para aplicar estilos es **body**, todos los elementos en su interior se verán afectados por los estilos que añadamos.

```HTML
<html>
    <head>
    </head>
    <body>
        <h1>Título</h1>
        <p>Este es un contenido dentro de un archivo html</p>
        <ol>
            <li>Primer item</li>
            <li>Segundo item</li>
        </ol>
    </body>
</html>
```

### CSS
Tenemos tres formas de implementar estilos dentro de un html según su selector.
* **Por Etiqueta o Elemento**: Un estilo se aplica para el contenido de un tag específico.
```CSS
p {
    color: red;
    text-align: center;
}
```
* **Por Clase**: Se crea una "clase" específica con un estilo y se vinculan los elementos que deban tener este estilo con esta clase.
Hoja de estilos CSS
```CSS
.clase1 {
    text-align: center;
    color: red;
}
```
Archivo HTML
```HTML
<p class="clase1">Texto con estilos de la clase1</p>
```
* **Por Id**: Se aplica un estilo para un elemento con un identificador específico.
Hoja de estilos CSS
```CSS
#elemento1 {
    text-align: center;
    color: red;
}
```
Archivo HTML
```HTML
<p id="elemento1">Texto con estilos para el elemento1</p>
```

### Bootstrap
Bootstrap es una hoja de estilos ya definida y que cubre casi la totalidad de elementos HTML.

Para establecer Bootstrap como la hoja de estilos a aplicar, realizamos el mismo proceso de cualquier hoja de estilos. Esto es, añadir una etiqueta ```<link>``` con la ruta de Bootstrap.

```HTML
 <head>
     <meta charset="UTF-8">
     <title>Tutorial HTML</title>
+    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 </head>
```

<a href="#Conclusiones">Ir al inicio</a>
## Conclusiones y Recomendaciones

- Los estilos nos permiten personalizar todos los elementos dentro del documento HTML para mejorar su apariencia y ser atractivos para el usuario.
- Bootstrap es un framework que incluye un sin número de estilos para muchos elementos del HTML facilitando la aplicación de estilos o la creación de estilos manuales.
- Los estilos pueden ser aplicados de varias formas, queda a criterio del desarrollador escoger correctamente la mejor forma de hacerlo.

<br>
<a href="#Inicio">Ir al inicio</a>

Author: [Stalin Aguirre](https://github.com/nekopq)