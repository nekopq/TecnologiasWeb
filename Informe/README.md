<a href="Inicio"></a>
Tema: Introducción a la Web
--
#### Fecha: 2016-10-21
#### Estudiante: Stalin Aguirre Iza
#### Profesor: Tania Calle - Adrian Eguez
#### Número de informe: 1

## Índice de Contenidos
* <a href="Tema">Tema</a>
* <a href="Objetivos">Objetivos</a>
* <a href="MarcoTeorico">Marco Teórico</a>
* <a href="Desarrollo">Desarrollo de la Práctica</a>
* <a href="Conclusiones">Conlusiones y Recomendaciones</a>

<a name="Tema"></a>
## Tema
El tema de la práctica es: **Introduccion a la Web**

<a name="Objetivos"></a>
## Objetivos

- Entender los conceptos de la web y su desarrollo
- Aprender el funcionamiento de las herramientas para desarrolladores web como: Postman, inspector web, etc
- Conocer los lenguajes HTML y CSS y su uso</a>

<a name="MarcoTeorico"></a>
## Marco Teórico

### Internet
Es una red de redes que permite la interconexión descentralizada de computadoras a través de un conjunto de protocolos denominado TCP/IP.

<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/internet.jpeg?raw=true" alt="Computadores conectados a internet">
</p>

### Web (World Wide Web)
Es el sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet.

<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/www.png?raw=true" alt="Dirección web">
</p>

### Aplicaciones Web
Son programas informáticos ejecutados en un navegador y son accedidos vía web por una red internet o intranet.

### HTTP (Hypertext Transfer Protocol)
Es un protocolo diseñado para permitir la comunicación entre clientes y servidores.
Funciona como un protocolo de solicitud-respuesta entre clientes y servidores

### Métodos HTTP
Para lograr el proceso de solicitud-respuesta, existen métodos que el cliente usa para comunicarse con el servidor, entre estos están:

* **GET**: Solicita datos desde un recurso
* **POST**: Envía datos a un recurso para que sean procesados
* **DELETE**: Elimina un recurso

### Mensajes HTTP
Son mensajes que se envian al usuario cuando este solicita un servicio desde un navegador web u otro software. Generalmente estos mensajes se envían para informar de un error.

Los mensajes que mayormente se presentan son:

* **200 OK**: Respuesta a una solicitud HTTP exitosa
* **400 Bad Request**: La solicitud no pudo ser completada debido a una sintaxis inválida
* **403 Forbidden**: No se tiene el permiso o autorización necesario para acceder al servicio solicitado
* **404 Not Found**: El recurso o servicio solicitado no fue ser encontrado
* **500 Internal Server Error**: Mensaje de error genérico que se presenta cuando ningún otro mensaje es el indicado
* **502 Bad Gateway**: El servidor estaba actuando como un proxy o puerta de enlace y recibió una respuesta no válida desde el servidor principal.

### Navegador
Es un software que permite la presentación de contenido web que se encuentra ubicado localmente o en el internet.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/navegadores.png?raw=true" alt="Navegadores web">
</p>

### W3C (World Wide Web Consortium)
Es una comunidad internacional de organizaciones, empleados a tiempo completo y el público, trabajan en conjunto para desarrollar estándares para la Web. Está dirigida por el "Padre de la Web", Tim Berners Lee.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/w3c.gif?raw=true" alt="Logo del W3C">
</p>

### W3Schools
Es un sitio web en donde expertos en el ámbito web comparten sus conocimientos sobre varios temas; las explican con definiciones, teoría y ejemplos. Además ofrecen la posibilidad de obtener certificaciones.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/w3schools.jpg?raw=true" alt="Logo de W3Schools">
</p>

### Doctype
El <!DOCTYPE> es la primera declaración que se encuentra dentro de un html, no es un tag sino una instrucción para que el navegador sepa qué versión de HTML fue usada en la creación de la página.

### HTML (Hypertext Markup Language)
HTML es un lenguaje de marcado, esto quiere decir que utiliza etiquetas para encapsular información. Los navegadores no presentan las etiquetas simplemente las utilizan para renderizar correctamente el contenido de la página.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/html.jpg?raw=true" alt="Ejemplo de HTML">
</p>

### CSS (Cascading Style Sheets)
Es un lenguaje que describe el estilo de un documento HTML, describe como los elementos deben ser mostrados.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/css.png?raw=true" alt="CSS">
</p>

### Herramienta Inspeccionar
Es una herramienta que se encuentra disponible dentro de la mayoría de navegadores web y presenta varias opciones con información sobre el sitio web visitado. Las opciones disponibles dependen de cada navegador, en el navegador Firefox tenemos:

* **Inspector**: Muestra el código HTML de un objeto dentro de la página.
* **Console**: Permite ejecutar código javascript
* **Debugger**: Permite probar y depurar código javascript
* **Style Editor**: Permite editar los estilos dentro de la página
* **Performance**: Permite obtener información sobre el rendimiento dentro de una página
* **Network**: Muestra información sobre cada petición realizada al servidor, el contenido de las cabeceras de los paquetes y los archivos recibidos.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/InspectorFirefox.PNG?raw=true" alt="Opciones del Inspector Web">
</p>

### Postman
Es una herramienta que sirve para realizar una petición HTTP a un servidor.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/postman0.jpg?raw=true" alt="Logo de Postman">
</p>
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/postman1.png?raw=true" alt="Interfaz de Postman">
</p>

### NPM
Es un administrador de paquetes para el ambiente javascript Node.js
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/npm.png?raw=true" alt="Logo de Node.js">
</p>

### XML (Extensible Markup Language)
Es un lenguaje diseñado para almacenar y transportar datos, fue diseñando de tal forma que sea comprensible tanto para el humano como para la máquina. Está compuesta de etiquetas que encapsulan los datos. Las etiquetas son nombradas generalmente por el dato que llevan dentro.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/xml.png?raw=true" alt="XML">
</p>

<a name="Desarrollo"></a>
## Desarrollo del informe
### Postman
Para instalar postman es necesario ir a la tienda de complementos de Chrome y añadirlo al navegador.
<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/postman3.PNG?raw=true" alt="Instalación de Postman">
</p>

Una vez instalado abrimos el complemento y se nos muestra una ventana con todas las opciones disponibles, esto es la selección del método HTTP a usar y el contenido que vamos a enviar junto con el método.

<p align="center">   
    <img src="https://github.com/nekopq/TecnologiasWeb/blob/01-HTML/Gr%C3%A1ficos/postman2.jpeg?raw=true" alt="Interfaz de Postman">
</p>

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

#### Títulos

Las etiquetas que permiten presentar texto como títulos en diferentes tamaños son `<h*>` donde * es un número entre el 1 y el 6 siendo el de mayor tamaño el 1 y el menor el 6.

```<h1> Título 1 </h1>```
<h1> Título 1 </h1>

```<h2> Título 2 </h2>```
<h2> Título 2 </h2>

```<h3> Título 3 </h3>```
<h3> Título 3 </h3>

```<h4> Título 4 </h4>```
<h4> Título 4 </h4>

```<h5> Título 5 </h5>```
<h5> Título 5 </h5>

```<h6> Título 6 </h6>```
<h6> Título 6 </h6>

### Párrafos
Para separar un texto de otro se utiliza una etiqueta de párrafo, esta es ```<p>```

```<p> Párrafo 1 </p><p> Párrafo 2 </p>```
<p> Párrafo 1 </p><p> Párrafo 2 </p>

### Listas
Podemos representar dos tipos de listas:

Listas ordenadas: Usando la etiqueta ```<ol>``` y para cada elemento de la lista, la etiqueta ```<li>```
```HTML
<ol>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ol>
```

<ol>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ol>

Listas no ordenadas: Usando la etiqueta ```<ul>``` y para cada elemento de la lista, la etiqueta ```<li>```
```HTML
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>

### CSS
Para implementar estilos dentro de un archivo html podemos añadir atributos dentro de los tags a los cuales queramos aplicar dichos estilos.

```<body style="background-color:#c59d4b;">```

Este atributo ```background.color``` con valor ```#c59d4b``` se aplica a todo el contenido dentro del tag de body.

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#Inicio">Ir al inicio</a>

Author: [Stalin Aguirre](https://github.com/nekopq)