/*
NUEVA SINTAXIS PARA ITERAR ARRAYS/Objetos   

for of = itera el array/objeto para obtener el valor del mismo

const paises = ["Mexico","Canada","Colombia","España"]
for (const element of paises) {
    console.log(element)
}

.keys() = el numero de indices de sus valores

const paises = ["Mexico","Canada","Colombia","España"]
for (const element of paises.keys()) {
    console.log(element)
}

.entries() = imprime un array con el numero de indice de espacio y que contiene

const paises = ["Mexico","Canada","Colombia","España"]
for (const element of paises.entries()) {
    console.log(element)
}
    
*/

const paises = ["Mexico","Canada","Colombia","España"]
for( let element of paises){
    console.log(element)
}
let municipios = ["Ecatepec","Neza","Chalco","Tecamac"]
for(element of municipios){
    console.log(element)
}
let palabra = "Hola mundo"
for(const letras of palabra){
    console.log(letras)
}

//OBTENIENDO VALORES DE UN OBJETO
let perro ={
    nombre:"Solovino",
    edad:2
}

for(let valores of Object.values(perro)){//values solo obtiene los valores de las propiedades
    console.log(valores)
}
// Solovino
//2

for(let [key,value] of Object.entries(perro)){
    console.log(key,value)
}
//nombre Solovino
//edad