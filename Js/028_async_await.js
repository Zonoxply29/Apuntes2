/*
///* Funciones asincronas
Las "promesas asincronas" no vienen a sustituir a las promesas, trabajan en conjunto.

///? Las funciones asincronas van a esperar a que algo se cumpla para poder ejecutando el proceso que estamos trabajando.
 Una funcion "async" siempre va a devolver una "promesa".
 Async await se puede usar en conjunto con las promesas
 El asymc await nos evita usar muchos .then() y no tener problemas con las llaves.
 Si se te olvida declarar una funcion como async no podras usar el await

 Las promesas si vieneron a remplazar a los callback pero las funciones asincronas no vinieron a remplazar a las promesas si no que trabajan en conjunto
 con la palabra reservada "async" ya decimos que esa funcion es asincrona y que puedo empezar a trabajar las peticiones asincronas
 que generalmente van a ser dadas de una promesa.

 Para el manejo de errores lo que nos conviene es trabajar un bloque "try catch" 

 Async: Crea una funcion que retorna una promesa
 Await: Crea una funcion "asincrona" que espera una promesa

 /// !Permite que tu escribas codigo "asincrono" de una "manera sincrona"

 Todo lo que sigue a await se coloca en una cola de eventos

 Para el manejo de Errores lo que nos conviene es trabajar con un trycatch
*/
/*
function getTheAnswer () {
    return 1
}

let answer = getTheAnswer()
console.log(answer)
answer.then(x => console.log(x))

/// Sincrono 
async function getTheAnswer() {
    return 1
}
async function logAnswer() {
    let answer = await getTheAnswer()
    console.log(answer)
}
logAnswer()

*/
/*
/// Asincrono 
let getUsers = (usuario) =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${usuario}`) // aqui se pasa el valor del parametro 
        .then((response)=>{
            if(response.ok){
              return response.json()  
            }
            throw("ocurrio un error") //! maneja el error 
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    getUsers(10)

    ///! codigo restructurado utilizando async await y comprobando que recibimos una promesa 
async function getUsers(usuario) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${usuario}`)
        .then((response)=>{
            if(response.ok){
               return response.json() 
            }
            throw("ocurrio un error")
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    getUsers(1)

///! Restructuracion utilizando unicamente async await
async function getArticleById(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(!response.ok){
            console.log("Algo Salio Mal")
        }
        let data = await response.json()
        console.log(data)
}
getArticleById(5)

async function getArticleById(id) {
       try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            ///.then(response => response.json())
            .then(response => console.log(response))
            console.log(response)
       } catch (error) {
         console.log(error)
       } 
}

getArticleById(100)

*/
///! Restructurar el codigo a asyncawait ejecutarlo con asyncawait

let cuadradopromise = (value) =>{
    if(typeof value !== "number"){
      return Promise.reject(`Error , el valor "${value}" ingresado no es un numero`) // verifica que se cumpla que sea un numero
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value * value,
        })  
      }, 3000);
    })
  }
/*
async function ejecutar(valor) {
    resultado = await cuadradopromise(valor)
    console.log(resultado)
}

ejecutar(4)
ejecutar(5)
ejecutar(6)
ejecutar(7)
*/

async function ejecutar() {
  try {
    console.log("Iniciando")

    let resultado = await cuadradopromise(2)
    console.log(`Funcion asincrona: ${resultado.value}, ${resultado.result}`)
    
    resultado = await cuadradopromise(3) 
    console.log(`Funcion asincrona: ${resultado.value}, ${resultado.result}`)
    
    resultado = await cuadradopromise(4) // se esta sobrescribiendo el resultado 
    console.log(`Funcion asincrona: ${resultado.value}, ${resultado.result}`)
    console.log("Fin de la Funcion Asincrona")

  } catch (error) {
    console.log(error)
  }
}

ejecutar()