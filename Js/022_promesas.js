/* Una promesa en JS es un objeto que presenta la finalizacion o fracaso de una operacion asincorna 

 Las promesas son una manera de manejar operaciones asincronas en JS de manera mas (legible y manejable) que el uso tradicional de callbacks
 evitando problemas como el callback hell 

    Una promesa solo puede tener exito o fracasar "UNA UNICA VEZ". No puede tener exito o fallar por segunda vez, ni cambiar de exito a fallo 
    posteriormente.
    
    Una promesa la podemos ver como un if else, 
    ///?el resolve es como un return positivo 
    ///!y el reject es como un return negativos

    Tanto el metodo resolve como el metodo reject son metodos estaticos, significa que no necesito crear una instancia para poder utilizarlos

    Las promesas ya nos convinene cuando tenemos una concatenacion de varios procesos asincronos.
    
    Hoy en dia muchas APIS trabajan retornando promesas. 
    ///? Fetch -> es la forma moderna de hacer AJAX todo lo trabaja internamente en un objeto de promesa de tal manera que para ir trabajando
    ///? todos los datos que te devulven una peticion AJAX mediante fetch vas a tener que utilizar estos metodos(.then  y .catch)
    
    .then -> recibe una funcion que recibe la parte positva de la promesa aqui los .then se encuentran al mismo nivel 
    no como los callback que tienen su callback hell al anidarlos 
    Si solo me quedo un nivel conviene el callback

    ///!LAS PROMESAS SOLO CONVIENEN CUANDO TENEMOS UNA CONCATENACION DE VARIOS PROCESOS
    
    .catch -> Es el metodo que va a capturar el error resultante del reject 


    ////* La "Evolucion" de las Promesas
    Es un codigo mejor ordenado y sobre todo tiene una "mejor manipulacion de errores" y no tienes que estar repitiendo la validacion
    del error.
    
    
    En los "callbacks" en cada ejecucion tienes que estar validando el error. Las promesas ya tienen su propio mecanismo para rechazar 
    en cualquier parte de el flujo donde se de un error, mandarlo y trabajarlo

    ///? Caracteristicas de las promesas
    1.- Echas especificamente para "operaciones asincronas"
    2.- Puedes encadenar operaciones usando el metodo .then
    3.- Las devoluciones siempre se llaman en orden estricto en el que se colocan en una cola de eventos
    4.- El manejo de errores es mucho mas facil al usar .catch

    La ventaja de las promesas sobre asyncawait es que se puede reutilizar mas y vamos a avanzar mas rapido.
    Las promesas se pueden ir encadenando osea promesas que devuleven otras promesas para hacer mas sencillo el manejo de errores
    
    El metodo SetTiemeOut , lo usamos para simular "llamadas al servidor o escribir en base de datos" porque tardan un poco en respondernos 
    
    ///?Caracteristicas claves de una promesa

    ///!Estados de la promesa: 
    //*Pending(pendiente): Estado inicial , la operacion aun no se a completado

    //*Fulfilled(Cumplida): La operacion se completo con exito

    //*Reject(Rechazada): La operacion fallo
    
    Metodos Principales:
    
    then(onFulfilled, onRejected) -> Registra callbacks para manejar los casos en que la promesa se cumple o se rechaza 
    
    catch -> Registra un callback para manejar el caso en el que la promesa se rechaza 

    finally -> Rejistra un callback para manejar la limpieza despues de que la promesa se haya cumplido o rechazado sin importar el resultado


    ////*La promesa se puede comportar como una clase


    ///EJERCICIO 1
    ///! hacer una promesa y que dentro de la promesa tenga un if else y en el if se ejecute el resolve y en el else el reject y se ejecute la promesa
 
        let promesa = new Promise((resolve, reject) => {
            if (true) {
                resolve("se ejecuto la promesa")
            }else{
                reject("no se a ejecutado")
            }
        });

        promesa
            .then((respuesta)=>{
                console.log('respuesta',respuesta)
            })
            .catch((error)=>{
                console.log('Error',error)
            })

     ///EJERCICIO 2
        const estudiantes = [
            {
            name: "fulano",
            age: 25
            },
            {
            name: "mengana",
            age: 28
            }
        ]

        let datos2 = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(estudiantes)
            },50)
                return estudiantes
            });
        
        datos2
        .then((respuesta)=>{
                console.log(respuesta)
        })

        //calback a promesa
        function miOperacionConCallback(callback) {
            setTimeout(() => {
            callback(42); 
            }, 1000); 
        }
        miOperacionConCallback((resultado) => {
            console.log("Resultado:", resultado); 
        });


        let operacionconpromesa = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(23)
            },1000)
        });
        
        operacionconpromesa
        .then((resultado)=>{
            console.log("Resultado:",resultado)
        })


////?crear una funcion que devuelva una promesa y la ejecute 

let devuelvepromesas = () =>{
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(false){
            resolve("Se ejecuto la promesa")
          }else{
            reject("No se ejecuto la promesa")
          }  
        },1000);
    })
}

devuelvepromesas()
    .then((resultado)=>{
        console.log(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
 */

////? Pasar este callback a promesa
/*
const asincroniaConCallBack =(num1,num2,callback) => {
    const resultado = num1 + num2;
    return setTimeout( () =>{
      callback(resultado);
    },500)
  }
  asincroniaConCallBack(1,2,(parametro)=>{
    console.log(parametro)
  })


    let sumapromesa =(num1,num2)=>{
    let resultado = num1+num2;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(resultado)  
        },500);
     })
  }

sumapromesa(2,3) //los valores se pasan mediante la ejecucion de la promesa
    
.then((parametro)=>{
        console.log(parametro)
    })

*/
/*
////? Pasando un Callback Hell a Promesa
    function firstOperation(callback) {
        setTimeout(() => {
          console.log("Primera operación completada");
          callback();
        }, 1000);
      }
      
      function secondOperation(callback) {
        setTimeout(() => {
          console.log("Segunda operación completada");
          callback();
        }, 1000);
      }
      
      function thirdOperation(callback) {
        setTimeout(() => {
          console.log("Tercera operación completada");
          callback();
        }, 1000);
      }
  
      /// Uso de callbacks anidados (callback hell)
      firstOperation(() => {
        secondOperation(() => {
          thirdOperation(() => {
            console.log("Todas las operaciones completadas");
          });
        });
      });

////? Pasando un Callback Hell a Promesa
  let primeraoperacion = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve()
           console.log("Primera Operacion Completada") 
        },1000);
    })
  }
  let segundaoperacion = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve()
           console.log("Segunda Operacion Completada") 
        },2000);
    })
  }
  let terceraoperacion = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve() 
           console.log("Tercera Operacion Completada")
        },3000);
    })
  }


primeraoperacion()
    .then(()=>segundaoperacion())
    .then(()=>terceraoperacion())
    .then(()=>console.log("Todas Las Operaciones Completadas"))

////!Esto NO se debe de hacer para ejecutar

    segundaoperacion()
    .then((op2)=>{
        console.log(op2)
    })

    terceraoperacion()
    .then((op3)=>{
        console.log(op3)
        console.log("Todas las Operaciones Completadas")
    })

///? Se puede omitir el uso de catch de la siguiente manera ocupando solo .then y una coma y una funcion anonima en el caso de resolve daria como resultado
///* el primer parametro y en el de reject el segundo parametro 
        let getweather = () =>{
      return new Promise((resolve, reject) => {
        reject("Nublado")
      })
    }

    const promesa = getweather()

    promesa
    .then((data)=>{
      console.log(`Primer Parametro ${data}`)
    },
        (data)=>{
          console.log(`Segundo Parametro ${data}`)
        })

  ///Estilisando la funcion restructurada
      let getweather = () =>{
        return new Promise((resolve, reject) => {
          reject("Nublado")
        })
      }

      let exito = (dato) =>{
        console.log(`Primer Parametro ${dato}`)
      }

      let fallo = (dato) =>{
        console.log(`Segundo Parametro ${dato}`)
      }

      getweather().then(exito,fallo)

      ///Promesas utilizando switch 
///* Crear 4 funciones , La primer funcion debe de retornar una promesa con un set time out de un segundo de retraso la cual recibira el clima
///* (lluvioso,soleado,etc), la segunda funcion tendra un parametro retornara una promesa con un retraso de 1 segundo , y usaras switch para las opciones
///* cada caso devolvera un icono (https://emojipedia.org/) , la funcion 3 y 4 la 3 imprimira si fue exitoso y la 4 que fallo 
//*ejecutaras unicamente .then 2 veces si encuentra el clima debe de imprimir exito y mostrar el icono del clima si falla imprimira no se encontro
///*el icono

////! Se puede mandar un error desde un reject sin ocupar como tal un catch y ademas ejecutarlo con un.then y manejarlo como error 
    function clima  (){
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("soleado")
        }, 1000);
      })
    }

    function opcionesclima (clima){
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          switch (clima) {

              case "soleado":
                resolve("🌞")
                break;
          
              case "nublado":
                resolve("☁️")
                break;

              case "lluvioso":
                resolve("🌧️")
                break;

              default:
                reject("No se encontro el icono")
          }
        }, 1000);
      })
  }

  function exito (estado){
    console.log(`exito ${estado}`)
  }
  function fallo (estado){
    console.log(`No se encontro el clima ${estado}`)
  }

  clima()
    .then(opcionesclima)  
    .then(exito,fallo)


    // Demostrando como no es bueno utilizar .then para manejar errores 
let fun1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('404')
    }, 1000);
  })
}

let fun2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resuelto")
    },1000);
  })
}

let onSuccess = (data) =>{
  console.log(`Success: ${data}`)
}

let onError = (data) =>{
  console.log(`Error: ${data}`)
}
fun1()
  .then(fun2)
  .then(onSuccess)
  //.then(onSuccess,onError) // NO se debe de hacer esto
  //.then(onError) // No se debe de manejar el error con .then

  .catch(onError) // La manera correcta es con .catch para eso existe

/// Asincronia con Callback

const asincroniaConCallBack =(num1,num2,callback) => {
  const resultado = num1 + num2;
  return setTimeout( () =>{
    callback(resultado);
  },500)
}
asincroniaConCallBack(1,2,(parametro)=>{
  console.log(parametro)
})
/// Pasando a Promesa el Callback 
let suma = (num1,num2) =>{
  return new Promise((resolve, reject) => {
      let resultado = num1+ num2;
      setTimeout(() => {
        resolve(resultado)
      },500);
  })
}
suma(2,3)
  .then(parametro => console.log(`Tu resultado es ${parametro}`))
*/
/*
(()=>{
  function getUsers (){
    setTimeout(() => {
      console.log("Users are ready")
    },3000);
  }
  function getProjects(){
    setTimeout(() => {
      console.log("Project are ready")  
    }, 1000);
  }
  function getIssues(){
    setTimeout(() => {
       console.log("Issues are ready") 
    }, 2000);
  }

  getUsers()
  getProjects()
  getIssues()
})
()
*/

let getUsers = ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Users are ready")  
      resolve()
    }, 3000);
  })
}
let getProjects = ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Project are ready")
      resolve()
    }, 1000);
  })
}

let getIssues = ()=>{
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Issues are ready")
      resolve()
    }, 2000);
  })
}

getUsers()
  .then(getProjects)
  .then(getIssues)