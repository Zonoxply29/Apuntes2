/*
EJERCICIO CON OBJETOS Y AGREGANDOLE DATOS FUERA DEL OBJETO

let persona ={
    nombre:"hugo",
    apellido:"gomez",
    edad:19
}

persona.correo = "hugo@gmail.com";

console.log(persona);
console.log(persona.correo);

------------------------------------------------------------------------

OBJETOS DENTRO DE ARRAY DENTRO DE UN OBJETO
let persona ={
    nombre:"hugo",
    apellido:"gomez",
    edad:19,
    amigos:["antonio","carlos","pedro"],
    otrosamigos:{
        amigosecundaria:["braulio","juan","oscar"],
        amigosprepa:["bryan","gustavo","karim"]
    }
}
console.log(persona.otrosamigos.amigosprepa[1]);

--------------------------------------------------------------------------

EJERCICIO BORRANDO UN DATO DE UN OBJETO
let persona ={
    nombre:"hugo",
    apellido:"gomez",
    edad:19,
    amigos:["antonio","carlos","pedro"],
    otrosamigos:{
        amigosecundaria:["braulio","juan","oscar"],
        amigosprepa:["bryan","gustavo","karim"]
        }
    }

delete persona.otrosamigos.amigosprepa[2];
console.log(persona)

---------------------------------------------------------------------------------------------------

IMPRIMIR LA FUNCION QUE ESTE EN EL ARRAY
    let persona1 = [1,"hugo",true,function apellido(){
    return "gomez";
    }]
    console.log(persona1[3]())

-----------------------------------------------------------------

    EJERCICIO: IMPRIMIENDO UN ARRAY QUE CONTIENE UNA FUNCION QUE DEVUELVE UN ARRAY
    Y IMPRIMO UN SOLO VALOR DEL ARRAY
    
    let datos = [1,"dato",false,null,function paises(){
    return ["Canada","Mexico","USA"];
    }]
    console.log(datos[4]()[1])

-------------------------------------------------------------------

    EJERCICIO: IMPRIMIENDO UNA FUNCION QUE ESTA DENTRO DE UN OBJETO

    let persona = {
    nombre:"Hugo",
    edad:19,
    frase:function(){
        console.log("hola mundo");
        return 1;
        }
    }

    console.log(persona.frase())
    
    ---------------------------------------------------------------------------
    
    EJERCICIO: MOSTRAR UN DATO DE UN ARRAY QUE ESTA DENTRO DE UNA FUNCION QUE VOY A EJECUTAR Y ESA FUNCION ESTA DENTRO DE UN ARRAY
    Y ESE ARRAY ESTA DENTRO DE UN OBJETO

    let datos ={
    nombre:"Juan",
    edad:23,
    amigos:["chucho","pedro",function otrosamigos(){
        return {
             amigosecundaria:["antonio","karim","oscar"]
        }
    }]
        }
        console.log(datos.amigos[2]().amigosecundaria[1])
  
--------------------------------------------------------------------------

        EJERCICIO: IMPRIMIENDO VARIOS METODOS Y ATRIBUTOS EN UN OBJETO

        let persona ={
        nombre:"Hugo",
        edad:19,
        redesociales:["facebook","instagram","twitter"],
    amigos:{
        primaria:"braulio",
        secundaria:"antonio",
        prepa:"bryan"
    },
    accion: function (){
        console.log("hola mundo")
    },
    accion2: function (parametro){
        console.log("mi nombre es"+ " "+ parametro);
    },
    accion3: function (a,b){
          console.log(a+b)
    }
        }

    console.log(persona.amigos.prepa)
    console.log(persona.accion())
    console.log(persona.accion2("hugo"))    
    console.log(persona.accion3(4,5))
---------------------------------------------------------------------------------------------------------------------------------

let persona = {
   nombre:"hugo",
   edad: 19,
   redesociales:["tiktok","twitter","facebook"],
   amigos:{ 
    secundaria:"antonio",
    prepa:"bryan",
    universidad:"gerardo",
   },
   saludar:function(){
        console.log(this.amigos.prepa)
   }
}

persona.saludar()
--------------------------------------------------------------------------------------------------------------------------------

Agregando una Nueva propiedad al Objeto y Modificando ya una propiedad existente 

let persona = {
    nombre:"hugo",
    edad: 19
}

persona.correo = "hugo@gmail.com";

persona.nombre = "Hugo Gomez"

console.log(persona.nombre)  

-----------------------------------------------------------------------------------------------
Ejemplo Agregando un metodo a un Objeto desde fuera del Objeto

let persona = {
    nombre:"hugo",
    edad: 19
}

persona.saludar = function (){
console.log("hola mundo")
}

persona.saludar()

----------------------------------------------------------------------------------------------

Ejemplo borrando un metodo y propiedad

let persona = {
    nombre:"hugo",
    edad: 19,
    saludar: function(){
        console.log("hola mundo")
    }
}

persona.saludar()
delete persona.saludar
delete persona.edad
*/
