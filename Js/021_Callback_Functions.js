/*
FUNCIONES CALLBACK MAS UTILIZADAS

let nombres2 = ["Hugo","Juan","Pedro","Ricardo","Luis"]

nombres2.forEach((nombre)=>{
    console.log(nombre)
})

// crear un programa que haga lo mismo que el foreach crear el programa que recorra el array pero que ocupe un callback

// crear un programa que haga lo mismo que el foreach crear el programa que recorra el array pero que ocupe un callback
let nombres = ["hugo","gerardo","luis","marco","osvaldo"]
for(i=0; i < nombres.length; i++){
    console.log(nombres[i])
}


//funcion que reciba dos parametros el nombre del array y el callback 

let nombres = ["hugo","gerardo","luis","marco","osvaldo"]

let miforeach = (array,callback) =>{
    for(i=0; i< array.length; i++){
        // mi codigo ==> callback(console.log(array[i])) 

        // resolucion de ejercicio de manera correcta
        let caja = array[i]
        callback(caja)
    } 
}
//mi codigo ==> miforeach(nombres,(nombre)=>{nombre})

///resolucion de ejercicio de manera correcta 
miforeach(nombres,(nombre)=>{
    console.log(nombre)
 })
*/

 // Encontrar el error en el codigo se necesita un callback para ejecutarlo
/* 
/// CODIGO ERRONEO

const getUsers = ()=>{
  setTimeout(() => {
    const users = [
      {id:1, name: 'pepe'},
      {id:2, name: 'pedro'}
    ];
    return users;
  }, 500);
}
const users = getUsers();
console.log("Users:", users);

/// CODIGO CORRECTO
const getUsers = (callback)=>{
    setTimeout(() => {
      const users = [
        {id:1, name: 'pepe'},
        {id:2, name: 'pedro'}
      ];
      callback(users)
      
    }, 500);
  }
getUsers((user)=>{
    console.log(user)
}) 

*/
/// Crea una funcion callback que reciba objetos y que los recorra , 
//debes de asegurarte que los datos que se reciban sean objetos y funciones de lo contrario te muestre un error

///INCOMLETOO

let recorrerobjeto = (objeto) =>{
    for(i=0; i < objeto.length; i++){
        console.log(objeto[i])
    }
}


let recibirobjetos = (dato,callback) =>{
    if("function" == typeof callback){
     callback(dato)    
    }else{
        console.log("El dato no es una funcion")
    }
}

recibirobjetos({nombre: "hugo",edad:20})
