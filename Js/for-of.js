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
for (const element of paises.entries()) {
    console.log(element)
}
