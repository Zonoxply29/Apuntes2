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

//?callback clasico que esta tomando el nombre y imprime posteriormente un adios
/*
let saludar =(nombre,callback) =>{
    console.log(`Hola ${nombre}`)
    callback()
}

let despedir = () =>{
    console.log("adios")
}

saludar("hugo",despedir)

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let saludar = (mexico) =>{
    console.log(mexico)
}

let imprimir = (canada) =>{
    return canada("hola estoy escribiendo desde la funcion imprimir")
}

imprimir(saludar)

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
    
?Puedo manipular la funcion con el nombre de el "PARAMETRO"
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

? callback que imprimia la suma de dos digitos y imprima el resultado es y la suma de los dos digitos
let comprar =(num1,num2,total) =>{
    let caja1 = num1+num2;
    total(caja1);
}

let imprimir = (resultado) => {
    console.log(`la suma de los digitos es de ${resultado}`)
}

comprar(2,5,imprimir)


///? se ejecuta dentro de una funcion anonima fisrt action para posteriormente dentro de la funcion se ejecute second action
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


//? suma de digitos por callbacks

let suma = (num1,callback) =>{
    console.log(num1 + callback())
}

let resta = () =>{
    return 2-3
}
suma(4,resta)


//? suma de digitos por callbacks codigo feo

let suma = (num1,callback) =>{
    console.log(num1 + callback)
}

let resta = () =>{
    return 2-3
}
suma(4,resta()) // se esta resolviendo desde la ejecucion cuando debe de ser desde la funcion

//?AMBOS FUNCIONAN PERO EL PRIMER CODIGO ES SUCIO Y EL SEGUNDO ES LIMPIO

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

///? HACIENDO UN EJERCICIO CON CODIGO SUCIO

let suma = (num1,num2,callback) => {
    resultado = num1 + num2;
    callback(resultado)
}

suma(1,2,function (valor){
    console.log(valor)
})


//?un callback que tarde 5 segundos en inicializarse e imprima primero y despues de 3 segundos imprima segundo
//!meti una funcion anonima dentro de un valor 

let temporizador =(callback) =>{
    setTimeout(() => {
        console.log("primero")
        callback()
    }, 5000);
}

setTimeout(()=>temporizador(()=>console.log("segundo")),3000)

////////////////////////////////
let saludar =(nombre,callback) =>{
    console.log(`Hola ${nombre}`)
    callback()
}

//?la funcion debe de recibir dos parametros la funcion y el texto , y utilizar el setTimeout con retraso de 5000 no este dentro 
//?de ninguna funcion
//////////? ESTE ES MI CODIGO ////////

let temporizador =(callback,texto) =>{
    callback()
    console.log(texto)
   
}

setTimeout(()=>temporizador(()=>console.log("primero"),"segundo"),5000)

////? FORMA 1

let firstaction = (callback,message) => {
    console.log(message)
    callback()
}

let secondaction = (mensaje) =>{
    console.log(mensaje)
}

setTimeout(()=>firstaction(()=>secondaction("im the second action"),"im the first action"),5000)


////? FORMA2

let firstaction = (callback,message) => {
    console.log(message)
    callback()
}

let secondaction = (mensaje) =>{
    console.log(mensaje)
}

setTimeout(() => {
    firstaction(()=>{
        secondaction("soy el segundo dato")
    },"soy el primer dato")
}, 3000);


//////? FORMA3

let firstaction = (callback,message) => {
    console.log(message)
    callback()
}

let secondaction = (mensaje) =>{
    console.log(mensaje)
}

setTimeout(() => {
   firstaction(()=>secondaction("soy el segundo dato"),"soy el primer dato") 
}, 4000);


////////? FORMA 4

let firstaction = (callback,message) => {
    console.log(message)
    callback()
}

let secondaction = (mensaje) =>{
    console.log(mensaje)
}

setTimeout(firstaction(()=>secondaction("texto dos"),"texto uno"),5000)
 
//!esta ejecutando inmediatamente soy el segundo dato en la consola incluso se imprime sin necesidad de que este dentro
 //!de la funcion first action

 //////?FORMA 5
////?hacer el ejercicio anterior pero la funcion callback debe recibir tres parametros y se debe utilizar un Set time out para ejecutar

let firstaction = (callback1,callback2,message) => {
    console.log(message)
    callback1()
    callback2()
}

let secondaction = (mensaje) =>{
    console.log(mensaje)
}

let thirdaction = (mensaje2) =>{
    console.log(mensaje2)
}

setTimeout(()=>firstaction(()=>secondaction("soy segundo"),()=>thirdaction("soy tercero"),"soy primero"),3000)


//////? EL MISMO EJERCICIO DE ARRIBA SOLO QUE ESTA BIEN IDENTADO Y ORDENADO

function firstaction (callback,mensaje,callback2) {
    console.log(mensaje)
    callback()
    setTimeout(() => {
       callback2() 
    }, 3000);
}

function secondaction (message){
    console.log(message)
}

function thirdaction (message){
    console.log(message)
}

setTimeout(() => {
   firstaction(()=>{
    secondaction("soy segundo")
   },"soy primero",
   ()=>{
    thirdaction("soy tercero")
   })

}, 3000);


///? Crear funcion callback que multiplique dos valores y que se use una funcion flecha resumida(cuando no tiene llaves) 

let multiplicar = (num1,num2,callback) => {
    return callback(num1,num2)
} 

console.log(multiplicar(2,4,(a,b)=>a*b))

 */

// hacer una funcion que reciba dos parametros un numero y una funcion esta funcion que se recibe debe elevar al cuadrado 
//el valor que se le paso como parametro despues de 3 segundos
/*
////? ESTE ES MI CODIGO QUE NO SE TERMINO Y ESTABA MAL
let elevar = (num1,callback) =>{
   let elevando = num1 * num1;
   callback(elevando)
}


setTimeout(()=>elevar(4),3000)

///? EL CODIGO QUE SE HIZO EN CLASE

let cuadrado = (num1,callback) =>{
    setTimeout(() => {
    callback(num1,num1 * num1)
    }, 3000);
}

cuadrado(5,(valor,resultado)=>{
    console.log(`valor : ${resultado}`)
 })

////? PROBANDO COMO "NO" SIEMPRE LAS FUNCIONES CALLBACK TARDAN LO MISMO

////? DEMOSTRACION DE PORQUE ES IMPORTANTE LA ASINCRONIA 
console.time("prueba")
setTimeout(() => {
   console.timeEnd("prueba") 
}, 2000);

////? PROGRAMA SINCRONO Y DESPUES ASINCRONO

let animales = ["perro","gato","ajolote"];

let modificar = (array,callback) =>{
    animales.push("pez")
    callback(array)
}
//!SE TIENEN QUE CORREGIR 
console.log(animales)
modificar(animales,()=>{
    console.log(`He modificado el array y ahora tiene ${animales.lenght} animales`,animales)
})


let animales = ["perro","gato","ajolote"];

let modificar = (array,callback) =>{
    animales.push("pez")
    setTimeout(() => {
       callback(array) 
    }, 3000);
}

console.log(animales)
modificar(animales,(array)=>{
    console.log(`He modificado el array y ahora tiene ${array.lenght} animales`)
})

////////////////////////////////////////

let firstoperation = (callback) =>{
    setTimeout(() => {
       console.log("primera operacion completada")
       callback() 
    }, 1000);
}

let secondoperation = (callback) =>{
    setTimeout(() => {
       console.log("segunda operacion completada")
       callback() 
    }, 1000);
}

let thirdoperation = (callback) =>{
    setTimeout(() => {
       console.log("tercera operacion completada")
       callback() 
    }, 1000);
}

//! USO DE CALLBACKS ANIDADOS "CALLBACK HELL"
firstoperation(()=>{
    secondoperation(()=>{
        thirdoperation(()=>{
            console.log("Se ejecutaron todas las operaciones")
        })
    })
})
//////////////////////?
////? imprimir el cuadrado de 4 , 5 , 6, 7 ocasionando un callback hell retraso de tres segundos 

let cuadrado4 = (callback) =>{
    setTimeout(()=>{
        let elevado = 4 * 4
        console.log(`cuatro elevado al cuadrado es ${elevado}`)
        callback()
    },3000)
}

let cuadrado5 = (callback) =>{
    setTimeout(()=>{
        let elevado = 5 * 5
        console.log(`cinco elevado al cuadrado es ${elevado}`)
        callback()
    },3000)
}

let cuadrado6 = (callback) =>{
    setTimeout(()=>{
        let elevado = 6 * 6
        console.log(`seis elevado al cuadrado es ${elevado}`)
        callback()
    },3000)
}

let cuadrado7 = (callback) =>{
    setTimeout(()=>{
        let elevado = 7 * 7
        console.log(`siete elevado al cuadrado es ${elevado}`)
        callback()
    },3000)
}

cuadrado4(()=>{
    cuadrado5(()=>{
        cuadrado6(()=>{
            cuadrado7(()=>{
                console.log("Se hizo un callback hell")
            })
        })
    })
})

*/

let cuadrado =(valor,callback) =>{
    setTimeout(() => {
        callback(valor,valor * valor)
    }, 3000);
}

cuadrado(4,(valor,resultado)=>{
    console.log(resultado)
    cuadrado(5,(valor,resultado)=>{
        console.log(resultado)
        cuadrado(6,(valor,resultado)=>{
            console.log(resultado)
            cuadrado(7,(valor,resultado)=>{
                console.log(resultado)
            })
        })
    })
})
