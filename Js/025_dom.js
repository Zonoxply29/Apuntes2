let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
console.log(elemento)

/** 
 * DOM  
 Las etiquetas en el DOM se refieren como elementos podemos seleccionar elementos eliminarlos y modificarlos el DOM es todo mi codigo HTML
 tambien puede seleccionar atributos, clases, ids 
 
 Metodos mas Utilizados del DOM

 Muestra todos los elementos del HTML

 console.log(document.documentElement)

 Muestra el documento en el que se esta trabajando
 console.log(document.doctype)

 Muestra el juego de caracteres que puede escribir "UTF-8"
 console.log(document.characterSet)

 Muestra el contenido de la etiqueta title
 console.log(document.title)

 Muestra una coleccion de nodos (es como un arreglo pero de elementos HTML y NO COMPARTEN TODOS LOS METODOS DE LOS ARREGLOS)
 por ejemplo no se puede usar .map porque no es un arreglo
 console.log(document.links)

 Muestra el numero de imagenes que tienes en tu ventana
 console.log(document.images)

 Muestra el numero de formularios que tengo
 console.log(document.forms)

 document.stylesheets es una propiedad que te permite acceder a todas las hojas de estilos ASOCIADAS al documento HTML actual
 esta propiedad devuelve una lista(colección de objetos CSS stylesheet que representa c/U de las hojas de estilo cargadas en la pagina)
 
 PARA QUE SIRVE:
 1.- acceder a las hojas de estilo
 2.- te permite interactuar y modificar las hojas de estilo de la pagina directamente desde JS
 3.- modificar reglas css puedes agregar, eliminar o modificar las reglas css de las hojas de estilo cargadas
 4.- manipular las reglas de estilos dinamicamente: puedes modidificar propiedades de estilo a nivel de codigo sin necesidad de cambiar el archivo .css de manera estatica


 console.log(document.styleSheets)

Muestra el numero de archivos JS que tiene conectado la ventana
console.log(document.scripts)

EJERCICIO CON GETSELECTION

selecciona el texto en el HTML y lo detecta JS 
getselection -> detecta que elementos esta seleccionando con el mouse y lo transformamos a un string para mostrar el texto

setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000);

document.writeln("<h2> Estoy escribiendo en el DOM </h2>")

UN elemento es distinto a un NODO hay diferentes tipos de nodos, los comentarios de HTML pueden ser un nodo, las etiquetas de HTML pueden ser otro,
los textos tambien son nodos

RECUERDA QUE EL DOM es una api que tienen los navegadores que tienen para intepretar documentos HTML y XML

Lo que nos va a importar son los "NODOS DE TIPO ELEMENTO" y "NODOS DE TIPO TEXTO".

Un nodo de texto es un texto que viene dentro de una etiqueta <H1> o etiqueta <p> y "NODO DE TIPO ELEMENTO" es "la etiqueta HTML en si"

Muestra el numero de nodos que existen en el documento HTML
console.log(document.getElementsByTagName("li"))

Muestra el numero de clases que existen en el documento HTML
console.log(document.getElementsByClassName("fa-brands"))

Selecciona el contenido del atributo name que se encuentra en el HTML
console.log(document.getElementsByName("nombre"))

Selecciona elementos con el atributo menu
console.log(document.getElementById("menu"))

Selecciona elementos con el id que se encuentra en el HTML
console.log(document.getElementById("menu"))

Selecciona lo que sea pero se debe de poner reconce clases, ids y etiquetas
console.log(document.querySelector("nombre"))

Selecciona varios elementos que contengan la clase id o etiqueta HTML
console.log(document.querySelectorAll(".fa-brands"))

Se puede recorrer con forEach otros tipos de dato aunque no sea un array en este caso una coleccion de nodos con
la etiqueta a y lo imprimimos para saber su contenido es util si quieres saber que datos se estan guardando en tus elementos o clases

document.querySelectorAll("a").forEach(Element => console.log(Element))

/// Seleccionar un elemento en especifico cuando tienes la misma clase repetida
console.log(document.querySelectorAll(".fa-brands")[2])

/// Seleccionar un elemento dentro de un id que en este caso es del div con id feed
console.log(document.querySelector("#feed li"))


// el tipo de dato que arroja un tipo de nodo de HTMLCollection que a su vez es un tipo de objeto
const caja = document.getElementsByClassName("logo")
console.log(caja)

///* El estandar es6 te permite crear tus propios atributos se le conoce como los data-atributes, puedes escribirlo asi:
//!data-NombreDeMiAtributo
///* despues del guion medio le puedes poner el nombre que tu quieras.
///*tambien puedes interactuar con los data atributes y ponerle valores

/// te da el atributo de idioma de el sitio 
console.log(document.documentElement.lang)

/// obtiene de la misma manera el atributo 
console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".inicio").href) // da el link de el archivo href
console.log(document.querySelector(".inicio").getAttribute("href")) // da solo el valor de href

//* se cambio el valor del atributo lang

document.documentElement.lang = "es"
console.log(document.documentElement.lang)

//* otra forma de modificar una atributo

document.documentElement.setAttribute("lang","es-mx")
console.log(document.documentElement.lang)

//* otra forma de modificar una atributo

document.documentElement.setAttribute("lang","es-mx")
console.log(document.documentElement.lang)

//* el colocar el signo de $ indica que se va a manipular una clase del doom y en este caso se manipula para que abra una ventana nueva en la etiqueta "a"

const $claseInicio = document.querySelector(".inicio")
    $claseInicio.setAttribute("target","_blank") // hace que al dar clic sobre el logo abra otra ventana 

//* Agregando el atributo noopener desde el dom
const $claseInicio = document.querySelector(".inicio")
    $claseInicio.setAttribute("target","_blank")
    $claseInicio.setAttribute("rel","noopener") // es de seguridad y evita que se acceda a el atributo window.opener

//* Eliminando un atributo de el HTML    
const $claseInicio = document.querySelector(".inicio") 
$claseInicio.removeAttribute("href") // elimina un atributo que le indiques
console.log($claseInicio.hasAttribute("target"))// regresa un valor booleano de el atributo que buscas 

//* data set
const $claseInicio = document.querySelector(".inicio") 
console.log($claseInicio.dataset) //guarda los atributos en un objeto de tipo mapa

//* muestra el contenido del atributo con data-perro
const $claseInicio = document.querySelector(".inicio") 
console.log($claseInicio.dataset.perro)

//* .SetAtrbute se ocupa para cambiar el elementos de el HTML
const $claseInicio = document.querySelector(".inicio") 
$claseInicio.setAttribute("data-description","Hello World!")

//* Esta es otra forma de cambiar un atributo de el HTML
const $claseInicio = document.querySelector(".inicio") 
$claseInicio.dataset.description = "Sayonara!"


*/
//* Esta es otra forma de cambiar un atributo de el HTML
const $apuntes = document.querySelector(".apuntes")

console.log($apuntes.style)
console.log($apuntes.getAttribute("style"))
console.log($apuntes.style.backgroundColor) //obteniendo la propiedad css
console.log(window.getComputedStyle($apuntes))
console.log(getComputedStyle($apuntes))

console.log((getComputedStyle($apuntes).getPropertyValue("background-color"))) // obtener un valor especifico del css

$apuntes.style.setProperty("text-decoration","none")