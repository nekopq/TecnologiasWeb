document.getElementById("menu").innerHTML =
'<link href="themes/prism.css" rel="stylesheet" />'+
'<link rel="stylesheet" href="style.css">'+
'<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css">'+
'<script src="script.js"></script>'+
'<div class="pure-menu pure-menu-horizontal">'+
'<ul class="pure-menu-list">'+
'<li class="pure-menu-item pure-menu-selected"><a href="index.html" class="pure-menu-link">ECMASCRIPT</a></li>'+
'<li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">'+
'<a href="#" id="menuLink1" class="pure-menu-link">Temas</a>'+
'<ul class="pure-menu-children">'+
'<li class="pure-menu-item"><a href="index.html" class="pure-menu-link">Inicio (aqui uno elije a donde ir)</a></li>'+
'<li class="pure-menu-item"><a href="var.html" class="pure-menu-link">var vs let vs const</a></li>'+
'<li class="pure-menu-item"><a href="iifes.html" class="pure-menu-link">IIFEs ahora Blocks</a></li>'+
'<li class="pure-menu-item"><a href="funcionesFlecha.html" class="pure-menu-link">Arrow Functions</a></li>'+
'<li class="pure-menu-item"><a href="strings.html" class="pure-menu-link">Strings .includes() .repeat()</a></li>'+
'<li class="pure-menu-item"><a href="Template" class="pure-menu-link">Template literals</a></li>'+
'<li class="pure-menu-item"><a href="Destructuring" class="pure-menu-link">Destructuring arrays</a></li>'+
'<li class="pure-menu-item"><a href="Destructuring" class="pure-menu-link">Destructuring objects</a></li>'+
'<li class="pure-menu-item"><a href="Modules" class="pure-menu-link">Modules export and import</a></li>'+
'<li class="pure-menu-item"><a href="Default" class="pure-menu-link">Default Parameters, Rest Parameters, Named Parameters</a></li>'+
'<li class="pure-menu-item"><a href="Spread" class="pure-menu-link">Spread Operator</a></li>'+
'<li class="pure-menu-item"><a href="ClassesPromises" class="pure-menu-link">Classes Promises (goodbye callback hell)</a></li>'+
'<li class="pure-menu-item"><a href="Getter" class="pure-menu-link">Getter and Setter in Classes</a></li>'+
'</ul>'+
'</li>'+
'</ul>'+
'</div>';