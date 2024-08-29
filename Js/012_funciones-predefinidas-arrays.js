/*
.lenght = establece el tamaño del array 

let array = [1,2,3,4,5]
array.length = 2
console.log(array)

let mascotas = ["Perro","Gato","Ajolote"]
console.log(mascotas.length)

.push = agrega valores al array 

let paises = ["Mexico","Canada","USA"]
paises.push("Costa Rica");
console.log(paises)

------Agregando un valor con constante-----

const paises = ["Mexico","Canada","USA"]
paises.push("Costa Rica");
console.log(paises)

OTRA MANERA DE CREAR UN ARRAY
Array() = Es un constructor que se utiliza para crear un nuevo Objeto de Tipo Array con una longitud especifica y se inicializa 

Constuctores Nativos
Object()
String()
Number()
Boolean()
Date()

Array.of = indica el tamaño de tu array

let cadena = Array.of("Mexico","Canada","USA")
console.log(cadena)

New array si se desea Inicializar de cierta longitud con elementos vacios y llenarlos mas tarde con elementos 

const ejemplo = new Array()
console.log(ejemplo)

unshift - agrega datos al inicio del Array

let mascotas =["Perro","Gato","Ajolote"]
mascotas.unshift("Pajaro")
console.log(mascotas)

.pop = Borra el ultimo elemento de un Array

let mascotas =["Perro","Gato","Ajolote"]
mascotas.pop()
console.log(mascotas)

.splice = sirve para borrar un rango de datos de un arreglo

let mascotas =["Perro","Gato","Ajolote","Pajaro","Ornitorinco","Tucan"]
let elementos_borrados = mascotas.splice(1,4)
console.log(mascotas) // los que no se borraron
console.log(elementos_borrados) // los que se borraron

.indexOf = muestra la posicion en que se encuentra el valor que buscas

let mascotas =["Perro","Gato","Ajolote","Pajaro","Ornitorinco","Tucan"]
let indice = mascotas.indexOf("Ajolote")
console.log(indice)
*/
let autos = [
    {modelo:"Mazda",año:2020},
    {modelo:"Toyota",año:2017},
    {modelo:"Nissan",año:2021},
]
autos.push({modelo:"MG",año:2024})
autos.push({modelo:"Audi",año:2029})

for(i=0; i< autos.length; i++){
    console.log(autos[i])
}