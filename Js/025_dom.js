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

*/

console.log(document.getElementsByTagName("li"))