/*
Set : es una estructura de tipo array pero de datos unicos, de datos "primitivos", porque en la memoria de JS cada objeto es una referencia
unica, porque si tu le pasas objetos cada objeto, aunque el objeto este vacio en la memoria de JS cada objeto es una referencia unica.

Se usa para guardar datos pero el programador no quiere que se repitan , ejemplo: una base de datos de correos electronicos


const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLA"])
console.log(set)
console.log(typeof set)
console.log(set.length) //no funciona el length
console.log(set.size)

/// agregando a set nuevos datos
const set2 = new Set([])
set2.add("hola")
set2.add(2)
set2.add(false)
console.log(set2)

/// recoriendo con for of 
for (const element of set) {
    console.log(element)
}
/// for each puede recorrer el elemento set
set2.forEach(element => { 
    console.log(element)
});


console.log(set[2])
/// para acceder a la posicion de el objeto Set se necesita setear (cambiar el tipo de dato) para cambiar el tipo de dato
let cambiando = Array.from(set)
console.log(cambiando[2])

set.delete(1)
console.log(set)
/// el has se ocupa para buscar y te regresa un true si se encontro o false en su defecto
console.log(set.has("hola"))

/// borra todos los datos 
set.clear()
console.log(set)

Symbol
Es un tipo de dato primitivo , cuando se crea , su valor se va a mantener privado y de uso interno.
Generalmente los Symbol suelen agregarse como caracteristicas de objeto(como una propiedad).

También nos permite crear identificadores unicos.

Normalmente se usan para mantener datos que no quieres que se cambien porque internamente los necesitas

const id1 = "hola"
const id2 = Symbol("hola")
const id3 = "hola"
const id4 = Symbol("mundo")
console.log(id1 === id3) // true
console.log(typeof id2) // symbol
console.log(id1 === id2) // false

const nombre = Symbol()
const saludar = Symbol()
let persona = {
    [nombre] : "Hugo",
    apellido: "Gomez",
    edad: 21
}
persona.apellido = "Vazquez"
persona.nombre = "Gustavo" // se agrego la propiedad pero no cambio
console.log(persona)
/// este for esta recorriendo el objeto persona y se puede notar que no imprime el nombre ya que es de tipo Symbol y es privado
for (const key in persona) {
    console.log(persona[key])
}

console.log(persona[nombre])// se puede acceder al elemento que tiene como valor Symbol que seria el Nombre y lo muestra

persona[saludar] = function (){
    console.log("Hola mundo")
} // método privado dentro de el objeto

persona[saludar]() // la ejecución de el método privado que esta dentro de el objeto

console.log(Object.getOwnPropertySymbols(persona)) // trae una array de todos los elementos que sean Symbols 


Map

Los maps son objetos que nos sirven para almacenar valores asociados el map es como un objeto "primitivo"
realmente tiene caracteristicas poco usables 

Una coleccion de datos que esta relacionado como por ejemplo un catalogo, o algo que tengas que tener "prestablecido" en tu aplicación
este tipo de dato se puede recorrer

*/
let mapa = new Map()
mapa.set("nombre","Hugo")
mapa.set("edad",21)
console.log(mapa)
console.log(mapa.has("correo")) // para buscarlo
console.log(mapa.get("edad")) // obtener un valor
mapa.set("edad",22) //modificar una propiedad
console.log(mapa)
//mapa.delete("nombre") // para eliminar un atributo
console.log(mapa)
for (const element of mapa) {
    console.log(element)
}

// recorriendo un map usando destructuración
for (const [llave,valor] of mapa) {
    console.log(`la propiedad es ${llave} y el valor es ${valor}`)
}

const llaves = [...mapa.keys()]
const valores = [...mapa.values()]

console.log(llaves)
console.log(valores)