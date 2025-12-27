/**
 * let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
console.log(elemento)
 
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



//* Esta es otra forma de cambiar un atributo de el HTML
const $apuntes = document.querySelector(".apuntes")

console.log($apuntes.style)
console.log($apuntes.getAttribute("style"))
console.log($apuntes.style.backgroundColor) //obteniendo la propiedad css
console.log(window.getComputedStyle($apuntes))
console.log(getComputedStyle($apuntes))

console.log((getComputedStyle($apuntes).getPropertyValue("background-color"))) // obtener un valor especifico del css

$apuntes.style.setProperty("text-decoration","none")

/// MODIFICANDO ATRIBUTOS STYLE DESDE JS
const $google = document.querySelector(".google")
//$google.style.setProperty("text-decoration","none")

$google.style.setProperty("display","block")

$google.style.width = "50%";


/// ESTILOS DESDE DOM
const $google = document.querySelector(".google")
//$google.style.setProperty("text-decoration","none")


$google.style.setProperty("display","block")

$google.style.width = "50%";

$google.style.textAlign = "center";

$google.style.marginLeft = "auto";

$google.style.marginRight = "auto";

$google.style.padding = "1rem";

$google.style.borderRadius = ".5rem";

console.log($google.getAttribute("style"))



// AGREGANDO Y QUITANDO CLASES DE CSS con los metodos del classList

const $estilos_card = document.querySelector(".card")
console.log($estilos_card) // muestra la etiqueta figure con la clase card 

console.log($estilos_card.className)

console.log($estilos_card.classList) // obtiene otros metodos

console.log($estilos_card.classList.contains("rotate-45")) //busca y dice si existe la clase y regresa un boleano

$estilos_card.classList.add("rotate-45")

console.log($estilos_card.className)

console.log($estilos_card.classList.contains("rotate-45")) 

$estilos_card.classList.remove("rotate-45")

console.log($estilos_card.className)

// TOOGLE ES UN SWITCH
$estilos_card.classList.toggle("rotate-45")
console.log($estilos_card.classList.contains("rotate-45")) 
/*
$estilos_card.classList.toggle("rotate-45")
console.log($estilos_card.classList.contains("rotate-45")) 


/// Remplazando la clase
$estilos_card.classList.replace("rotate-45","rotate-135")

/// Agregar varias clases de golpe
$estilos_card.classList.add("opacity-80","sepia")


/// LOS 4 METODOS Y QUE HACE QUE COSA - ENTREVISTA TECNICA

//* innerText ----> Esta en desuso todavia funciona pero fue creada para el navegador Internet Explorer

 ///! $contenedor.innerText = text // Te detecta hasta los enters que des y no detecta las etiquetas HTM

//* textContent ----> Fue creada para insertar solo texto 
///! $contenedor.textContent = text // detecta el texto y lo muestra plano y sigue sin detectar las etiquetas HTML

//* innerHTML ---> Inserta Texto y codigo HTML
///! $contenedor.innerHTML = text // ya detecta las etiquetas HTML 

//* outerHTML ---> Remplaza lo que tu hayas seleccionado por el contenido nuevo que se va a agregar "Remplaza" 
//* se llega ocupar en Frontend Moderno mas de React 


const $contenedor = document.querySelector("#texto")

let text = `
<p>
El modelo de Objetos del Documento (<b><i>Document Object Model </i> </b>) Es una API para documentos HTML Y XML
</p>
<p>
Este provee una representación estructural del Documento, Permitiendo Modificar su contenido y Presentación visual mediante su Codigo JS
</p> 
<p> 
<mark> El DOM no es parte de la especificacion de JS, es una API para los navegadores
</mark>
</p>
`
$contenedor.innerHTML = text 

///NODOS Y ELEMENTOS

const $cards = document.querySelector(".cards")
console.log($cards)
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.childNodes)
console.log($cards.firstChild)
console.log($cards.firstElementChild) // el primer elemento 
console.log($cards.lastElementChild) // el ulitmo elemento
console.log($cards.previousElementSibling) // muestra la etiqueta al mismo nivel
console.log($cards.nextElementSibling) // muestra la siguiente etiqueta al mismo nivel 
console.log($cards.closest("main")) // ayuda a identificar los elementos que existan en el html


///* EJEMPLO CORRECTO PARA CREAR UNE ELEMENTO EN HTML DESDE EL DOM
const $figure = document.createElement("figure")
const $img = document.createElement("img")
const $figcaption = document.createElement("figcaption")
const $figcaptiontext = document.createTextNode("Hola Mundo!")
const $cards = document.querySelector(".cards")

//* CREANDO HTML 
$cards.appendChild($figure)
$figure.classList.add("card")
$figure.appendChild($img)
$img.setAttribute("src","../img/cristiano.jpg")
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptiontext)

///* CREANDO 2 CARDS CON DOM
const $figure = document.createElement("figure")
const $figure2 = document.createElement("figure")
const $img = document.createElement("img")
const $figcaption = document.createElement("figcaption")
const $figcaptiontext = document.createTextNode("Hola Mundo!")
const $cards = document.querySelector(".cards")

///? CREANDO HTML 
$cards.appendChild($figure)
$figure.classList.add("card")
$figure.appendChild($img)
$img.setAttribute("src","../img/cristiano.jpg")
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptiontext)

$figure2.innerHTML = `
    <img src="../img/logo-javascript.png" alt="Logo de JS"> 
    <figcaption> Segunda Card Creada </figcaption>

`;

$figure2.classList.add("card")

$cards.appendChild($figure2)

///* un bucle que imprima las 4 estaciones del año para imprimirlo en la lista

const estaciones = ["primavera","verano","otoño","invierno"]

const $ul = document.createElement("ul")

document.writeln("<h3>Estaciones del año</h3>")

document.body.appendChild($ul) // esto lo imprime en el front

estaciones.forEach(estacion => {
      const $li = document.createElement("li")
      $li.textContent = estacion
      $ul.appendChild($li) 
});


///! Imprimir igual con un bulce y con la propiedad INNER HTML

const continentes = ["Africa","America","Europa","Asia","Oceania"]

const $ul = document.createElement("ul")

document.writeln("CONTINENTES DEL MUNDO")

continentes.forEach(continente => {
     $ul.innerHTML += `<li>${continente}</li>`   
});

document.body.appendChild($ul)

///! Iterando un bucle ocupando Document Fragment
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"] 

const $ul = document.createElement(`ul`)

const $fragment = document.createDocumentFragment()

meses.forEach(mes =>{
    const $li = document.createElement(`li`)
    $li.textContent = mes
    $fragment.appendChild($li)
})

$ul.appendChild($fragment)

document.body.appendChild($ul)


//!

const $cards = document.querySelector("cards")
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment()
const $card_content = [
    {
        title:"Perro_1",
        img:"https://placedog.net/500/g"
    },
    {
        title:"Perro_2",
        img:"https://placedog.net/500/g"
    },
    {
        title:"Perro_3",
        img:"https://placedog.net/500/g"
    },
    {
        title:"Perro_4",
        img:"https://placedog.net/500/g"
    },
    {
        title:"Perro_5",
        img:"https://placedog.net/500/g"
    }
]
$card_content.foreach(card=>{
    $template.querySelector("img")
    //agregar los atributos src y alt a la etiqueta img con .set atribute
    // 
})

///! EJERCICIOS DOM
//* Imprimir un hola mundo dando click en el boton desde el html
const $button = document.getElementById("hola-mundo")

$button.addEventListener("click",()=>{
    console.log("Hola mundo")
})

//* modificar el texto de el html desde js 
const $text = document.getElementById("texto2")
$text.textContent = "Hola soy Hugo"

//* Cambiando la primera imagen de las cards
///! VERSION HUGO

const $card = document.getElementById("primera-card")
$card.setAttribute("src","/img/logo-javascript.png")

///? VERSION RICK
const $card = document.getElementById("primera-card")
$card.src = "/img/logo-javascript.png"

//* agregar una clase a una etiqueta html de texto y cambiar su background

///!VERSION HUGO

const $texto = document.getElementById("texto2")
$texto.classList.add("background-text")
$texto.querySelector(".background-text")
$texto.style.backgroundColor = "blue"

///? VERSION RICK
const $texto = document.querySelector("div p")
$texto.classList.add("clase-nueva")


//* Agregar dos clases de css a un texto que existen en el HTML
const $texto = document.querySelector("div p")
$texto.classList.add("clase-nueva","otra-clase-nueva")

//* El boton de Hola mundo del Dom imprima en el HTML la frase hola mundo n veces

const $button = document.getElementById("hola-mundo")
const $contenedor = document.getElementById("texto-desde-dom")
const $texto = document.createElement("p")

$button.addEventListener("click",()=>{
    $contenedor.appendChild($texto)
    $texto.textContent += "HOLA MUNDO"
})

//* Refactorizacion de el codigo

const $button = document.getElementById("hola-mundo")
const $frase = document.getElementById("texto-desde-dom")


$button.addEventListener("click",()=>{
    $frase.innerHTML += `<h1>HOLA MUNDO</h1>` 
})

//* crear una imagen desde el dom
const $button = document.getElementById("hola-mundo")
const $contenedor = document.getElementById("imagen-dom")
const $imagen = document.createElement("img")

$button.addEventListener("click",()=>{
    $contenedor.appendChild($imagen)
    $imagen.setAttribute("src","/img/cristiano.jpg")
})

//* AHora debe de mostrar dos imagenes distintas al volver a dar click 
///! ESTA INCOMPLETO EL EJERCICIO
/*
const $button = document.getElementById("hola-mundo")
const $contenedor = document.getElementById("imagen-dom")
const $imagen = document.createElement("img")

$button.addEventListener("click",()=>{
    $contenedor.appendChild($imagen)
    $imagen.setAttribute("src","/img/cristiano.jpg")
})
*/

//* un div desde mi html debe de tener un ancho y un alto predeterminado con un 
//* background color que cambie desde un boton al dar click

const $button = document.getElementById("boton-cambiador")
const $contenedor = document.getElementById("contenedor-color")

$button.addEventListener("click",()=>{
    //$contenedor.querySelector(".contenedor-estilos")
    $contenedor.classList.toggle("contenedor-nuevos-estilos")
})
