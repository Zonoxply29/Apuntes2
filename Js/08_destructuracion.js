/*
DESTRUCTURACION EN JS
Es una sintaxis que permite extraer valores de arreglos y objetos para asignarlos a variables distintas de forma sencilla y elegante

DESTRUCTURACION DE ARREGLOS:
Permite tomar uno o varios elementos de un arreglo y asignarlos a variables distintas de una manera mas concisa y legible

DESTRUCTURACION DE OBJETOS:
Permite extraer propiedades especificas de un objeto y asignarlas a variables distintas

CONCLUSION 
La destructuracion en JS es una forma conveniente de extraer valores de arreglos y objetos de manera mas legible y eficiente

-La destructuracion de objetos y arreglos se usan mucho en frameworks y librerias de JS
-Definicion mas sencilla de DESTRUCTURACION:
Permite desempacar valores de arreglos y propiedades de objetos en distintas variables
-------------------------------------------------------------------------------------------------------------------
let mascotas = ["Perro","Gato","Pez","Ajolote","Loro"]

let [a,b,c,d,e] = mascotas

console.log(d)
------------------------------------------------------------------------------------------------------------------------

//Aqui yo elijo que datos quiero destructurar , tengo que dejar los espacios de memoria sin variable y con comas

let paises =["Mexico","Japon","España","Rusia","China"]
 let [a,,,,e] = paises
 console.log(e)

---------------------------------------------------------------------------------------------------------------------
    let objeto = {
    a:2,
    b:"hola"
    }
        let {a,b} = objeto;
        console.log(typeof objeto);
---------------------------------------------------------------------------------------------------------------------
    Destructuracion estableciendo un VALOR predeterminado (El objeto no tiene ningun valor dentro)
 
    let {a = "hola", b = {}, c = undefined} = objeto;
    console.log (a)
    console.log(b)
    console.log(c)
---------------------------------------------------------------------------------------------------------------------
    ESTABLECIENDO VARIOS VALORES PREDETERMINADOS

    let objeto ={
    a:"hola mundo",
    b:
    }

    let { a, b=false  , c=["uno",2], d= true } = objeto;

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
----------------------------------------------------------------------------------------------------------------------

    CREAR UNA FUNCION QUE RECIBE UN OBJETO Y ESTABLECE VALORES PREDETERMINADOS EN CASO DE QUE NO TENGA VALORES

    Si espero un objeto, pasame un objeto
    function imprimir({a = true , b = false, c=50 , d = []}){
        return[a,b,c,d]  
    }
    console.log(imprimir({a:10 , b:20 }))
---------------------------------------------------------------------------------------------------------------------

    UNA FUNCION QUE ESTA TOMANDO LOS VALORES DEL CONSOLE LOG Y LOS MUESTRA INDEPENDIENTEMENTE QUE EN EL OBJETO DE LA FUNCION 
    SE HAYAN DECLARADO

    function imprimir({a = true , b = false, c=50 , d = []}){
        return[a,b,c,d]  
    }

    console.log(imprimir({a:10 , b:20 }))
--------------------------------------------------------------------------------------------------------------------
DESTRUCTURACION QUE YO HICE - Funcion Flecha

let cachorros = ({a = "Crispin", b = "Solovino" , c = "Railey"} = {} ) =>{
    return[a,b,c]
}
console.log(cachorros()) // Crispin , Solovino , Railey
console.log(cachorros({a:"Firulais"})) // Firulais, Solovino , Railey

A diferencia de los anteriores estoy haciendo una destructuracion con una funcion flecha en la que me di cuenta que tengo que 
retornar un objeto {} despues de declarar los valores del objeto para que al momento que se mande a imprimir y si los muestra 
independientemente que en el objeto se haya declarado

Sin Argumentos: Al llamar a la función sin argumentos, se utiliza el objeto vacío por defecto {}, 
lo que hace que los valores por defecto de a, b y c se apliquen.

*/

let cachorros = ({a = "Crispin", b = "Solovino" , c = "Railey"} = {} ) =>{
    return[a,b,c]
}
console.log(cachorros()) // Crispin , Solovino , Railey
console.log(cachorros({a:"Firulais"})) // Firulais, Solovino , Railey