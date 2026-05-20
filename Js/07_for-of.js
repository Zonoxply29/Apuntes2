/*
/// * Nos permite iterar sobre los valores de un objeto iterable
/// *como : ARRAYS, MAP , SETS

///!Para que un objeto sea iterable debe de implementar el protocolo de iteración

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

/// OBTENIENDO VALORES DE UN OBJETO-Ejercicio que yo busque
let perro ={
    nombre:"Solovino",
    edad:2
}

for(let valores of Object.values(perro)){//values solo obtiene los valores de las propiedades
    console.log(valores)
}
/// Solovino
//2

for(let [key,value] of Object.entries(perro)){ //en este caso obtiene tanto el nombre de la propiedad y sus valores
    console.log(key,value)
}
///nombre Solovino
///edad 2



const paises = ["Mexico","Canada","Colombia","España"]
for( let element of paises){
    console.log(element)
}

///! OBTENIENDO VALORES DE UN OBJETO
let perro ={
    nombre:"Solovino",
    edad:2
}

for(let valores of Object.values(perro)){//values solo obtiene los valores de las propiedades
    console.log(valores)
}
//*Solovino
//* 2

for(let [key,value] of Object.entries(perro)){//en este caso obtiene tanto el nombre de la propuedad y sus valores
    console.log(key,value)
}
//*nombre Solovino
//*edad 2
----------------------------------------------------------
Mejorando el apunte con apunte de Codigo Facilito

//* Podemos iterar los arrays como en este ejemplo

let numeros = [1,2,3]
for(let numero of numeros){
  console.log(numero)
}

//* Podemos iterar un string

let mensaje = "Hola mundo"
for(let caracter of mensaje){
  console.log(caracter)
}


*/
