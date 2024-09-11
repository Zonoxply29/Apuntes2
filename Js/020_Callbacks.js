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

let saludar =(nombre,callback) =>{
    console.log(`Hola ${nombre}`)
    callback()
}

let despedir = () =>{
    console.log("adios")
}

saludar("hugo",despedir)


























