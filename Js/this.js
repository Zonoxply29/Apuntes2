/*
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





*/