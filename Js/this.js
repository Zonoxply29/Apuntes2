function saludar(){
    console.log(this)
}
saludar()

let saludar1 =() =>{
    console.log(this)
}
saludar1()

let objeto ={
    nombre:"Hugo",
    saludar2: function (){
        console.log(this)
    }
}
objeto.saludar2()

let objeto1 ={
    nombre:"Juan",
    saludar3: () =>{
        console.log(this)
    }
}
objeto1.saludar3()



/*
TEORIA DEL THIS

/////////FORMA CORRECTA DE OCUPAR UNA FUNCION DENTRO DE UN OBJETO/////////////
let objeto2 ={
    nombre:"Hugo",
    saludar4(){
        console.log("Hola mundo")      
    }
} 
objeto2.saludar4()


THIS
La palabra clave this se refiere al objeto al que pertenece la funcion que la esta utilizando.
El valor de this se determina en tiempo de ejecucion y depende de como se llama a la funcion.


let persona = {
    nombre:"hugo",
    apellido:"Gomez",
    edad: 19,
    redesociales:["tiktok","twitter","facebook"],
    amigos:{ 
     secundaria:"antonio",
     prepa:"bryan",
     universidad:"gerardo",
    },
    nombreyApellido:function(){
         return this.nombre + " gomez" 
    },
    nombreCompleto:function(){
        console.log(this.nombreyApellido() + " Vazquez")
       
    }
 }
 
persona.nombreCompleto()
-------------------------------------------------------------------------------------

EJERCICIO: ACCEDIENDO AL DATO DE UN ARRAY DENTRO DE UN OBJETO, UTILIZANDO LA PALABRA RESERVADA THIS EN UN METODO

let objeto = {
    nombre:"hugo",
    amigos:["bryan","antonio","Gerardo"],
    redesociales:{
        trabajo:["GitHub","Linked In"],
        ocio:["Facebook","Twitter","Instagram"]
    },
    persona: function(){
            console.log(this.redesociales.ocio[1])
    }
}

objeto.persona()

// 

Ejecutar el metodo que se encuentra dentro de un objeto y este metodo debe acceder a una propiedad que tenga un array de "amigos".Nosotros 
al ejecutar el metodo debemos pasarle dentro del objeto un valor por parametro para que acceda al valor del array que se encuentra fuera del metodo
pero dentro del objeto de no encontrarse el valor que ingresamos me debe de imprimir amigo no encontrado y si se encuentra me debe de imprimir el nombre
de mi amigo 

let objeto = {
    nombre:"Hugo",
    amigos:["Gerardo","Juan","Pablo"],
    nombre_completo: function (nombre_amigo){
        if(nombre_amigo >=0 && nombre_amigo < this.amigos.length){
            console.log(this.amigos.length)
            return this.amigos[nombre_amigo] + "Perez"
        }else{
            console.log("Amigo no encontrado")
            }
        }
    }

    console.log(objeto.nombre_completo(5))
*/

