/*
Ajax -> Significa en ingles (Asincronos Javascript and XML).

En pocas palabras es el uso del objeto XMLHttpRequest para comunicarse con los servidores.

Tanto fech como Ajax son tecnicas que permiten hacer peticiones HTTP asincronicas a un servidor, lo que significa que puedes obtener
o enviar datos sin tener que recargar la pagina.

////? XML -> Era un lenguaje de marcado y fue relagado por JSON se utilizaba para el intercambio de informacion casi cualquier lenguaje
////?backend puede leer archivos JSON Y XML


AJAX comenzo a trabar con XML para la carga de nuevo contenido , AJAX fue creado por microsoft.
XMLHttpRequest ya es un objeto obsoleto se utilizaba en internet Explorer 8 hacia abajo 
https://code.jquery.com/jquery-1.12.4.js -> Link de Jquery 1.12 creado por microsoft donde se incluye el XMLHttpRequest


///? AJAX no es una tecnologia en si mismo si no de varias tecnologias independientes que se unen: 
///? HTML Y CSS -> Para crear una presentacion 
////? DOOM -> Interaccion y manipulacion dinamica de la Web
////? XML Y JSON -> Para el intercambio y la manipulacion de informacion
////? XMLHttpRequest o Fetch -> para el intercambio asincrono de informacion
////? JavaScript -> para unir las demas tecnologias


//////! ESTADOS DE UNA PETICION Asincrona 

////*READY_STATE_UNINITIALIZED = > (Estado de no inizializacion) = valor 0
////* READY_STATE_LOADING =< (Donde envia los datos al servidor) = valor 1
////* READY_STATE_LOADED => (Este es cuando ya es cargado) = ya el servidor respondio al cliente pero aun no tiene la informacion lista 
////* para que empiece a interactuar = valor 2

////* READY_STATE_INTERACTIVE => (El motor de JS ya empieza interactuar porque tiene los datos de esta peticion) = valor 3

////*READY_STATE_COMPLETE => (Cuando ya ha terminado todo el proceso de AJAX (osea el objeto XMLHttpRequest) hace la peticion,
////*el servidor responde que ya tiene los datos listos para que los manipulemos y mostremos la informacion = valor 4

Los codigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP especifica , las respuestas
se agrupam en 5 clases : 

////? Respuestas informativas -> del 100 al 199
////? Respuestas satisfactorias -> 200 a la 299
////? Redirecciones -> 300 a la 399
////? Errores de los clientes -> 400 a la 499 (401 => no autorizado , 403 => forbidden , 404 => not found )
////? Errores de los servidores -> 500 a la 599 (500 => Internal Server , 502 => Superado el ancho de banda )

https://www.json.org/json-en.html -> link de JSON 
https://api.github.com/users/Zonoxply29 -> link de api mi perfil de github

////? INSTALAR JSON FORMATTER 

////! JSON -> Es un formato ligero de intercambio de datos
////! SAT OCUPA TODAVIA XML

El archivo JSON dentro contine un formato que es como un objeto de JS y acepta muchos tipos de Datos como:
////* String, Number, Object, Array , Boleanos, Null (pero todo lo pones en cadena de texto)

Todas las propiedades JSON llevan " " comillas dobles 

EL objeto JSON tiene dos metodos : 

JSON.parse() -> Analiza una notacion JSON osea (texto) y lo convierte a un tipo de dato que JS entienda como 

console.log("{}")
console.log(JSON.parse("{}"))
console.log(JSON.parse("true"))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("123"))

let dato = JSON.parse('{"nombre" : "hugo","edad" : "20","amigos" : ["tona","gerardo","luis"],"escuelas" : {"primaria" : "COTHAMI","secundaria" : "COTHAMI","prepa" : "CEDVA"}   }')
console.log(dato)

JSON.stringify() -> Convierte los tipos de dato a texto lo contrario a .parse()

let dato = JSON.stringify({ nombre : "Hugo"})

console.log(dato)
////! Este es un objeto normal
let dato2 = { 
    nombre : "Hugo", 
    edad:20,
    amigos: {
        secundaria : ["tona","rafa","marco"],
        prepa : ["bryan","gustavo","hector"]
    }
}
////! es un objeto con formato JSON y que lo transforma en texto
let datoJson = JSON.stringify({
    "nombre" : "Rick",
    "edad": "38",
    "estado_civil" : "true",
    "amigos":{
        "secu":["daniel","adrian","carlos"],
        "prepa":["jessica","nacho","ruben"]
    }
})

console.log(typeof dato2)
console.log(typeof datoJson)

Ajax se ejecuta en un servidor web porque trabaja del lado del cliente 
como del lado del servidor osea debe de usar el protocolo HTTP

//////? QUe significa API -> APLICATION PROGRAM INTERFACE


*/


( ()=>{
  const xhr = new XMLHttpRequest();
  $xhr = document.getElementById("xhr");
  $fragment = document.createDocumentFragment(); //
  //console.log(xhr)
  xhr.addEventListener('readystatechange', e =>{
  //console.log(xhr)
   if(xhr.readyState !== 4) return; // este if ocupa el readystate para que solo se imprima una vez 
  //console.log(xhr)
  if(xhr.status >=200 && xhr.status < 300){ //este if crea dos condiciones para que solo se ejecute si los status son del 200 al 299(satisfactorios)
    //console.log("Exito") // comprobando con exito la conexion 
    //console.log(xhr.responseText) // accede al objeto xhr y resposeText muestra en texto la informacion que se almacena en el objeto xhr
    //$xhr.innerHTML = xhr.responseText; // el .innerHTML permite imprimir la informacion que esta en responseText
    let json = JSON.parse(xhr.responseText) // JSON.parse transforma el texto a datos que pueda comprender JS y se almacena en la variable json
    //console.log(json) muestra en consola el array con los 10 objetos , ya NO ES TEXTO
    json.forEach(el => {
        const $li = document.createElement("section"); // esta creando un elemento li que se guarda en la variable $li
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li) // al ser una lista se esta ocupando el appendChild
    });

    $xhr.appendChild($fragment)
  }else{
    console.log("error")
    }
})
  
  
  xhr.open("GET","https://jsonplaceholder.typicode.com/users")

  xhr.send();


} )()

