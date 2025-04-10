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

/// CALLBACK A PROMESA
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

////! EJERCICIO 13 - CUADRADO DE UN NUMERO QUE SE ASIGNE

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

cuadradopromise(0)
.then((miobjeto)=>{
  console.log("Inicio Promise");
  console.log(`Promise: Valor:${miobjeto.value}, valor al cuadrado:${miobjeto.result}`)
  return cuadradopromise(4)
})
.then((miobjeto)=>{
  console.log("Inicio Promise");
  console.log(`Promise: Valor:${miobjeto.value}, valor al cuadrado:${miobjeto.result}`)
  return cuadradopromise(5)
})
.then((miobjeto)=>{
  console.log("Inicio Promise");
  console.log(`Promise: Valor:${miobjeto.value}, valor al cuadrado:${miobjeto.result}`)
  return cuadradopromise(6)
})
.then((miobjeto)=>{
  console.log("Inicio Promise");
  console.log(`Promise: Valor:${miobjeto.value}, valor al cuadrado:${miobjeto.result}`)
  return cuadradopromise(7)
})
.catch("Error")

////! EJERCICIO 14! Crea dos funciones que retornen promesas c/u con un retraso de 2 segundos una promesa debe de ejecutar a la otra 
////! Y una de esas funciones debe de devolver un texto que diga hola mundo

let mipromesa = new Promise((resolve, reject) => {
    console.log("Estas haciendo algo")
    setTimeout(() => {
      resolve(mipromesa2())
    }, 2000);
  }) 

  let mipromesa2 = () =>{
    return new Promise((resolve, reject) => {
      console.log("Estoy haciendo algo mas")
      setTimeout(() => {
        resolve("Se ha terminado todo")
      }, 2000);
    })
  }
mipromesa()
  .then( resultado => console.log(resultado))
  .catch( message => console.log(message))

////! EJERCICIO 15 //Crea dos funciones que retornen promesas la primera funcion al ejecutarse debe de retornar un objeto con dos parametros con texto
////! c/U. Al ejecutarse ese objeto que retorno, debe de usarse como valor en la ejecucion de la segunda funcion, y esa segunda funcion
////! debe de escribir texto y concatenar algun parametro de el objeto de la primera funcion 

// MI CODIGO
let promesa1 = () =>{
  return new Promise((resolve, reject) => {
    resolve(
      persona = {
        nombre:"Hugo",
        edad:"20"
      }
    )
  })
}
let promesa2 = (parametro) =>{
  return new Promise((resolve, reject) => {
    resolve(console.log(`hola mi nombre es ${parametro}`))
  })
}

promesa1()
.then((parametro)=>{
  promesa2(parametro.nombre)
})


///OTRA ALTERNATIVA
let mostrarphone = (mensaje) =>{
  return new Promise((resolve, reject) => {
    if(mensaje){
      resolve("Obtuviste un " + mensaje.brand)
    }else{
      reject("error")
    }
  })
}

let mipromesa = () =>{
  return new Promise((resolve, reject) => {
    let tarea = true
    if(tarea === true){
      let phone = {
        color: "negro",
        brand: "iphone"
      }
      resolve(phone)
    }else{
      reject("No obtuviste un iphone")
    }
  })
}
mipromesa()
.then((mensaje)=>{
  return mostrarphone(mensaje)
})
.then((respuesta)=>{
  console.log(respuesta)
})
.catch((error)=>{
  console.log(error)
})

///! EJERCICIO 16 -> Crea una promesa que despues de 2 segundos cuente una palabra que tu le hayas ingresado y te diga si tiene mas de 20
///! caracteres o no 

///* MI CODIGO
let promesa = (palabra) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (palabra.length >= 20) {
        resolve(`la palabra ${palabra} tiene mas de 20 caracteres`)
      } else {
        reject(`la palabra ${palabra} faltan caracteres`)
      }
    },2000);
  })
}
promesa("hola")
.then((parametro)=>{
  console.log(parametro)
})

/// ALTERNATIVA
 let contar = (palabra) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let nletras = String(palabra).length
      if(nletras <20 ){
        resolve("okay")
      }else{
        reject("error")
      }
    }, 2000);
  })
 }
///!ejemplo de como guardan en una variable la ejecucion del .then  
let respuesta = contar("hola buenos dias como estan")
respuesta.then((parametro)=>{
  console.log(parametro)
})

///! EJERCICIO 17 -> Ahora del ejercicio anterior la promesa debe procesar un objeto y convertirlo en JSON, y cuando se ejecute la promesa
///! debes hacer que el objeto JSON se convierta de nuevo a un objeto 
let promesa = (objeto) =>{
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(objeto))
  })
}
promesa(
  persona = {
    nombre: "Juan",
    edad: "22"
  }
)
.then((parametro)=>{
  console.log(JSON.parse(parametro))
})

///! EJERCICIO 18 -> Pasando un numero desde una ejecucion de una linea de una promesa y usando encadenamiento
const p1 = Promise.resolve(1)
/// la promesa ya esta "fullfield" console.log(p1)
.then(x => x + 5)
.then(x => console.log(x))
///encadenamiento de promesas el dato se pueda pasar de una ejecucion a otra

///! EJERCICIO 19 -> Crea una promesa que reciba un numero y que cuando se ejecute la promesa se le sume otro numero
///! Despues de sumar el numero se va a ejecutar otra vez y en la segunda ejecucion se le va a sumar otro numero y el resultado mostrarlo en consola

let p1 = Promise.resolve(2)
.then(
  x => x + 2
)
.then(
  x => x + 5
)
.then(
  x => console.log(x)
)

///! EJERCICIO 20 -> Esto es un ejemplo de como no se ejecuta nada despues de el catch y que puedes ejecutar una promesa con un catch dentro de un then
///! esto es sumamente util cuando manejas efectos, como llamar a una API o escribir en Base de Datos de manera que podeos optimizar todo lo que queremos que haga 
///! nuestra aplicacion

const p1 = Promise.resolve(5)
console.log(p1)
p1.then( x => x + 2)
  .then(x => Promise.resolve(x+5))
  .then(x => Promise.reject("Error algo sucedio"))
  .then(x => console.log("Esto no se va a ejecutar"))
  .catch( e => console.log(e))

///! EJERCICIO 21 -> Crea una funcion que retorne una promesa y que tenga un retraso de 2 segundos ejecuta esa promesa dandole un valor al que se le sumara 7
///! primero deben de pasar 2 segundos y se ejecutara el primer valor pasaran otros 2 segundos y se sumara el valor mas 7
let promesa1 = (valor) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor)
    }, 2000);
  })
}
promesa1(5)
/// CODIGO CON ERROR 
.then(x => console.log(x))
.then(promesa1())
.then(x=> x+7)
.then(x=> console.log(x))

/// EJECUCION CORRECTA
.then(x=>{
  console.log(x)
  return promesa1(x+7)
})
.then(x => console.log(x))    


///! EJERCICIO 22 -> Crear una funcion que genere una promesa que de como resultado un numero, cuando se ejecute por primera vez la promesa
///! multiplicar el numero * 2 y que se muestre el resultado en la consola 

let promesa1 = (numero) =>{
  return new Promise((resolve, reject) => {
    resolve(numero)
  })
}
promesa1(2)
  .then( x => {
    console.log(x)
    return promesa1(x*2)
  })
  .then(x => console.log(x))
  
*/

