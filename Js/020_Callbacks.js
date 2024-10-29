/*
    UNA FUNCION QUE SE PASA A OTRA COMO ARGUMENTO Y SE EJECUTA CUANDO SE COMPLETA UNA COSA

    Callback -> Es una funcion que recibe otra funcion como parametro y luego se ejecuta

    Un callback puede usarse tanto para un codigo sincrono como asincrono

    La mayoria del tiempo no vas a hacer esto lo van a hacer librerias al comunicarte con una API 

    Casi todo en JS recibe un callback

    Los callback se usan mucho en NODE JS (backend)

    Los callback sirven para que esperes el resultado por si necesitas algo del proceso anterior en el siguiente proceso

    Los callback son ciudadanos de (PRIMER ORDEN), porque podemos hacer casi todo por ejemplo:

    1-. Simular la orientacion de objetos atraves de funciones constructoras
    2.- Retornar una funcion como el valor de retorno de otra (en el return regresar una funcion)
    3.- Pasar como parametros las funciones
    4.- Crear funciones anonimas Autoinvocadas

    EL CALLBACK es el mecansimo que tiene JS para poder trabajar con la sincronia.

    ¿Porque necesitamos los callback?
    
    Porque cuando interactuamos con otros dispositivos (Computadoras) no siempre tendremos de inmediato la respuesta si no que la vamos
    a tener despues de una cantidad de tiempo.

   - Un ejemplo son los Loaders en los sitios webs
    - O los productos terminandose de mostrar en los e-commerce
    
    Callback-Hell
    Un callback hell son muchos callback anidados , el problema es que si yo quiero manipular el error lo tengo que hacer en c/u de las funciones

    EJEMPLOS

    Callback sincrono - No vamos a esperar tiempo

    function texto(){
        console.log("Soy un callback")
        }   

        function otrafuncion(perro){
    perro()
        }

    otrafuncion(texto) //Aqu van los valores

-----------------------------------------------------------------------------------------------------
Este ejercicio lo hizo HUGO

let fun1 = (Callback) =>{ //Aqu van los "parametros"
        console.log("Inicio")
        Callback(fun2)//EL FUN2 no debe de ir dentro del parentesis , //Aqui se ejecutan las funciones que pase por valor por parametro
        console.log("Fin")
    }

    let fun2 = () =>{
        console.log("Proceso intermedio")
    }

    fun1(fun2) //Aqu van los valores

<------ UN CALLBACK NECESITA UN PARAMETRO ---------> 

Este ejercicio lo hizoEL PROFE
    let fun1 = (fun2) =>{ //Aqu van los "parametros"
        console.log("Inicio")
        fun2() //Aqui se ejecutan las funciones que pase por valor por parametro
        console.log("Fin")
    }

    let fun2 = () =>{
        console.log("Proceso intermedio")
    }

    fun1(fun2) //Aqu van los valores


    Codigo sincrono

let comprar = (articulo1, articulo2 , funcion) =>{ //Aqu van los "parametros"
    let gastado = articulo1 + articulo2;
    funcion(gastado) //Aqui se ejecutan las funciones que pase por valor por parametro       
}

let imprimir = (mensaje) =>{
    console.log(`el monto gastado es de ${mensaje}`)
}

comprar(2,3,imprimir) //Aqu van los valores

Ejercicio callback con set time out agregar los valores faltantes

let firstaction = () =>{
    console.log("Im the first action")
    setTimeout(() => {
        Secondaction()
    }, 5000);
}

let Secondaction = () =>{
    console.log("Im the second action")
}

setTimeout(() => {
    firstaction()    
}, 3000);


 Manera correcta
function firstAction(callback) {
    console.log("I'm the first action")
    setTimeout(callback,4000)
  }
  
  function secondAction() {
    console.log("I'm the second action")
  }
  
  setTimeout(()=>firstAction(secondAction),3000);

-------------------------------------------------------------------------------------------------------------

Set time out osea una funcion asincrona que invoca la accion despues de cierto tiempo

let esperar = (tiempo,callback) =>{
    setTimeout(callback,tiempo)
}

let mostrarmensaje = () =>{
    console.log("Han pasado 3 segundos")
}


esperar(3000,mostrarmensaje)

---------------------------------------------------------------------------------------------------------------

let saludar = (perro) =>{
    console.log(`Hola mundo tengo ${perro} pesos`)
}

    //Puedo manipular la funcion con el nombre de el "PARAMETRO"
let otrafuncion = (mexico,numero) =>{
    mexico(numero)
}

otrafuncion(saludar,100)
  
----------------------------------------------------------------------------------------------------------------

let comprar = (articulo1, articulo2 , funcion) =>{ //Aqu van los "parametros"
    let gastado = articulo1 + articulo2;
    funcion(gastado) //Aqui se ejecutan las funciones que pase por valor por parametro       
}

let imprimir = (mensaje) =>{
    console.log(`el monto gastado es de ${mensaje}`)
}

comprar(2,3,imprimir) //Aqui van los valores

*/




// callback clasico que esta tomando el nombre y imprime posteriormente un adios
/*
let saludar =(nombre,callback) =>{
    console.log(`Hola ${nombre}`)
    callback()
}

let despedir = () =>{
    console.log("adios")
}

saludar("hugo",despedir)



let saludar = (mexico) =>{
    console.log(mexico)
}

let imprimir = (canada) =>{
    return canada("hola estoy escribiendo desde la funcion imprimir")
}

imprimir(saludar)


let fun1 = (fun2) =>{ //Aqu van los "parametros"
    console.log("Inicio")
    fun2() //Aqui se ejecutan las funciones que pase por valor por parametro
    console.log("Fin")
}

let fun2 = () =>{
    console.log("Proceso intermedio")
}

fun1(fun2) //Aqu van los valores


let perrera = (perro) =>{
    console.log(`Hola mundo tengo ${perro} pesos`)
}
    //Puedo manipular la funcion con el nombre de el "PARAMETRO"
let otrafuncion = (mexico,numero) =>{
    mexico(numero)
}

otrafuncion(perrera,100)

let dinero = (saldo) =>{
    console.log(`Tu saldo es ${saldo}`)
}

let imprimirdinero = (callback,dinero)  =>{
    callback(dinero)
}
imprimirdinero(dinero,200) 

////////////////////////////////////////////////////////////////

// callback que imprimia la suma de dos digitos y imprima el resultado es y la suma de los dos digitos
let comprar =(num1,num2,total) =>{
    let caja1 = num1+num2;
    total(caja1);
}

let imprimir = (resultado) => {
    console.log(`la suma de los digitos es de ${resultado}`)
}

comprar(2,5,imprimir)


/// se ejecuta dentro de una funcion anonima fisrt action para posteriormente dentro de la funcion se ejecute second action
function firstAction(callback) {
    console.log("I'm the first action")
    setTimeout(callback,5000)
  }
  
  function secondAction() {
    console.log("I'm the second action")
    
  }

  setTimeout(()=>firstAction(secondAction),3000)


function primero (callback) {
    setTimeout(() => {
        console.log("primero")
        callback()
    }, 3000);
}

function segundo () {
    console.log("segundo")
}

primero(segundo)


// suma de digitos por callbacks

let suma = (num1,callback) =>{
    console.log(num1 + callback())
}

let resta = () =>{
    return 2-3
}
suma(4,resta)


// suma de digitos por callbacks codigo feo

let suma = (num1,callback) =>{
    console.log(num1 + callback)
}

let resta = () =>{
    return 2-3
}
suma(4,resta()) // se esta resolviendo desde la ejecucion cuando debe de ser desde la funcion

AMBOS FUNCIONAN PERO EL PRIMER CODIGO ES SUCIO Y EL SEGUNDO ES LIMPIO

let inicio = function (valor,callback) {
    callback(valor);
  }

inicio("fulanito",function(valor){
    console.log(`Bienvenido ${valor}`)
  
})


let inicio =(valor,callback) =>{
    callback(valor)
}

let bienvenida =(usuario) =>{
    console.log(`Bienvenido ${usuario}`)
}

inicio("Juan",bienvenida)

/// HACIENDO UN EJERCICIO CON CODIGO SUCIO

let suma = (num1,num2,callback) => {
    resultado = num1 + num2;
    callback(resultado)
}

suma(1,2,function (valor){
    console.log(valor)
})



*/

//un callback que tarde 5 segundos en inicializarse e imprima primero y despues de 3 segundos imprima segundo
//meti una funcion anonima dentro de un valor 

let temporizador =(callback) =>{
    setTimeout(() => {
        console.log("primero")
        callback()
    }, 5000);
}

setTimeout(()=>temporizador(()=>console.log("segundo")),3000)


    






