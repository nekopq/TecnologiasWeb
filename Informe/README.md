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
<p>**install**: Indica la a acci</p>
<p>**-g**: Establece que la instalación será global (para todos los usuarios del sistema).</p>

<p>**http-server**: Es el nonmbre del paquete que deseamos instalar.</p>

Una vez instalado el paquete, podemos ejecutarlo con el comando:

<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/02-CSS/Informe/Gr%C3%A1ficos/InstalacionNodejs2.PNG?raw=true" alt="Pantalla Final del instalador de npm">
</p>

```
http-server -c10 
```

**http-server**: Es el nonmbre del paquete que se encuentra instalado.

**-c10**: Se establece un tiempo de caché




### HTML

Un archivo HTML es cualquier archivo con extensión .html y puede ser modificado en cualquier editor de texto.

Un archivo HTML debe iniciar siempre con el <!DOCTYPE>

```HTML
<!DOCTYPE html>
```
Un archivo HTML consta de 3 etiquetas principales; la etiqueta **html** engloba a todo el documento, la etiqueta **head** contiene metadatos sobre el documento HTML y en la etiqueta **body** se encuentra todo el contenido que se va a mostrar en la página.

```HTML
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

### CSS
Para implementar estilos dentro de un archivo html podemos añadir atributos dentro de los tags a los cuales queramos aplicar dichos estilos.

```<body style="background-color:#c59d4b;">```

Este atributo ```background.color``` con valor ```#c59d4b``` se aplica a todo el contenido dentro del tag de body.

<a href="#Conclusiones">Ir al inicio</a>
## Conclusiones y Recomendaciones

- HTML es un lenguaje muy similar a XML por lo que lo vuelve sencillo de aprender.
- El lenguaje HTML es tan sencillo que no se necesita de un IDE especializado pues se pueden crear estos archivos sin problema incluso en un bloc de notas.
- Los estilos nos permiten personalizar todos los objetos HTML dentro del documento para mejorar su apariencia y ser atractivos para el usuario.

<br>
<a href="#Inicio">Ir al inicio</a>

Author: [Stalin Aguirre](https://github.com/nekopq)