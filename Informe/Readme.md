<a name="Inicio"></a>
Tema: Bootstrap
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
El tema de la práctica es: **Bootstrap**

<a name="Objetivos"></a>
## Objetivos

- Aprender los diferentes componentes que pueden ser usados con Bootstrap
- Entender los conceptos de 

<a name="MarcoTeorico"></a>
## Marco Teórico

### Bootstrap

<p align="center">   
    <img src="https://pkp.sfu.ca/wp-content/uploads/2016/09/bootstrap-logo.png" alt="Sitio web de node.js">
</p>

Bootstrap es el framework HTML, CSS y Javascript más popular para desarrollar interfacecs responsive y sitios web enfocados en los disposivos móviles.
Bootstrap es simple de usar y es gratuito. Contiene su propio código CSS que modifica cada uno de los diferentes componentes del documento html.


## Desarrollo del informe

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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
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