/*

NUNCA OCUPAR UNA FUNCION FLECHA DENTRO DE UN OBJETO PORQUE VA APUNTAR A WINDOW EL PADRE DE TODAS LAS FUNCIONES

console.log(window.document)*/

// Una funcion declarada va aparecer en el objeto Window que es donde se encuentran todas las Funciones de JS//

/*FUNCION DECLARADA
function saludar(){
    return "hola mundo";
}


let nuevaventana = window.open("https://www.google.com/","nuevaventana","width = 600, heigth = 300");
nuevaventana.open()

-----------------------------------------------------------------
FUNCION EXPRESADA:
 Son utiles para utilizarlas con callbacks, funciones anonimas, clausuras(closures), asignacion dinamica
    No se pueden llamar antes de su declaracion

    let saludar = function (){
    console.log("hola mundo");
}
 saludar()
--------------------------------------------------------------------

 Ejemplo de funcion expresada con callback ocupando seTimeout:
    
    setTimeout(function(){
        console.log("Este texto aparecera despues de 5 segundos");
     },3000)
-------------------------------------------------------------------     

    Ejemplo de funcion expresada con funciones anonimas:
    
    let saludar = function(perro,gato){
    console.log(`hola mi nombre es ${perro +' '+ gato} y mi apellido es ${gato}`);// Ocupando templete string
    }
        saludar("Hugo","Gomez")
--------------------------------------------------------------------

    Ejemplo de funcion expresada con closures: 
    Son funciones que "capturan" variables en su entorno circundante.
    Esto puede ser util para crear funciones que mantienen un estado interno 
    
    function contador(){
    let count = 0;
     return function(){
        return ++count;
        }
    }
        let incrementar = contador();

    console.log(incrementar());
    console.log(incrementar());
 -----------------------------------------------------------------------   

    Ejemplo de funcion expresada con asignacion dinamica:

    let operacion;
    if(true){
     operacion = function(a,b){
        return a+b;
    }
    }else{
     operacion = function(a,b){
        return a*b;
    }
}
    console.log(operacion(5,6));

---------------------------------------------------------------------------------------------------
1-Ejercicio de una Funcion:

    function operacion(a,b){
    let suma = a+b;
    let resta = a-b;
    let multiplicacion = a*b;
    console.log(suma,resta,multiplicacion)
    return "hola";
        }

        operacion(4,5)

    MODIFICACION DE LA FUNCION PARA QUE SEA ENTENDIBLE
    function operacion(a,b){
    let suma = a+b;
    let resta = a-b;
    let multiplicacion = a*b;
    console.log("Esta es la suma:"+ suma, "\n Esta es la resta:" + resta, "\nEsta es la multiplicacion: " + multiplicacion)
    }

    operacion(4,5)
 ---------------------------------------------------------------------------------------------------
     2-EJERCICIO DE FUNCION FLECHA:                     
      let nombre = () => {
    console.log("hola soy hugo");
    }
        nombre();   
 ------------------------------------------------------------------------------------------------  

    3-FUNCION ANONIMA AUTOEJECUTABLE 
    (() =>{
    console.log("hugo");
    })

    ();

    4-Valor Predefinido:
    function saludar(nombre){
    nombre = nombre || true;
    console.log(nombre);
                        }

    saludar();
-------------------------------------------------------------------------------------------------

    5-EJEMPLOS DE VALORES PREDEFINIDOS Y SUS RESULTADOS

    function saludar(nombre){
    nombre = nombre || true;
    console.log(nombre);
    }

    saludar("hugo" || "otro valor");
    saludar(true || "otro valor");
    saludar([] || "otro valor");
    saludar({} || "otro valor");
    saludar(false || "otro valor");
    saludar(null || "otro valor");
    saludar(undefined || "otro valor");
    saludar("" || "otro valor");
    saludar(2 || "otro valor");
    saludar(-2 || "otro valor");
    saludar(0 || "otro valor");
 -------------------------------------------------------------------------------------------  
   6-EJERCICIO DE SUMAR CON FUNCION FLECHA
   
    let suma =(a,b) => {
   
    console.log(a+b);
    }

    suma(5,6);
--------------------------------------------------------------------------------------------
    7-LA MISMA SUMA PERO CON UN PASO EXTRA:
    let suma =(a,b) => {
    let operacion = a+b;
    console.log(operacion);
    }

    suma(5,6);
--------------------------------------------------------------------------------------------
    8-IMPRIMIENDO MI NOMBRE CON UNA FUNCION FLECHA DE MANERA RESUMIDA
     
    let saludar =(nombre) => console.log(nombre)
 
    saludar("hugo");
-------------------------------------------------------------------------------------------

    9-IMPRIMIENDO MI NOMBRE CON UNA FUNCION FLECHA DE MANERA  MAS RESUMIDA
    
    let saludar = nombre => console.log(nombre)
 
    saludar("hugo");
------------------------------------------------------------------------------------------
    10-UNA SUMA CON FUNCIONES FLECHA Y RESUMIDO
    
    let sumar = (a,b) => console.log(a+b);

    sumar(10,9);

 ---------------------------------------------------------------------------------------- 
   11-EJERCICIO DE SUMA CON FUNCION FLECHA RESUMIDO
   
    let sumar =(a,b) => a+b;

    console.log(sumar(5,6));
----------------------------------------------------------------------------------------
    EJERCICIO IMPRIMIR MI NOMBRE EN UNA FUNCION FLECHA
    let saludar =(nombre) =>{
    console.log(nombre)
            }

    saludar("mi nombre es Hugo");

    TIPS:
    1.- PARA MOSTRAR INFORMACION QUE ESTA DENTRO DE UNA FUNCION DEBO ESCRIBIR RETURN O CONSOLE.LOG
    2.- SI QUIERO ESCRIBIR VARIABLES DENTRO DE LAS FUNCIONES PONERLE UN NOMBRE DISTINTO A LAS VARIABLES.



-------------------------------------------------------------------------------------------------------------------
EJERCICIOS CON FUNCIONES

/*Forma correcta de mostrar dos valores

let saludar =(nombre) =>{
    console.log(nombre)
    return [2,3,4,5,6]
}
let almacenar = saludar("mi nombre es hugo")
console.log(almacenar[3]+ " " +almacenar[4]);

-------------------------------------------------------------------------------------------------------------------

Forma INCORRECTA de mostrar dos valores
let saludar =(nombre) =>{
    console.log(nombre)
    return 2,3
}
saludar("hugo"); 
------------------------------------------------------------------------------------------------------------------
Funcion flecha que retorna un objeto
    let persona=(nombre,apellido) =>{
    return {
        nombre: nombre,
        apellido: apellido
    }
}
console.log(persona("hugo","gomez"));
--------------------------------------------------------------------------------------------------------------
    PRIMER MANERA DE RESUMIR EL EJERCICIO ANTERIOR
       let persona=(nombre,apellido) =>{
    return {
         nombre, apellido
        }
    }
    console.log(persona("hugo","gomez"));

    OTRA MANERA DE RESUMIR "AUN MAS" EL EJERCICIO
    
    let persona=(nombre,apellido) =>({nombre, apellido})
    
    console.log(persona("hugo","gomez"));

 ---------------------------------------------------------------------------------------------
FUNCIONES ANONIMAS AUTOINVOCADAS

    MANERA 1
    (()=>{
    console.log("hola mundo")
    }) ()

    MANERA 2
    (function () {
    console.log("hola mundo")
    }) ()

    MANERA 3(Crocford)
    ((function () {
    console.log("hola mundo")
    }) ())

    MANERA 4(facebook)
     !function (){
    console.log("hola mundo")
     } ()
--------------------------------------------------------------------------------------------
MANERA COMUN DE DECLARAR UNA FUNCION DENTRO DE UN OBJETO
let persona ={
    Nombre: "Hugo",
    Edad : 20,
    saludar(){
            console.log(`Hola mi Nombre es ${this.Nombre} y mi edad es ${this.Edad}`)
    }
}

persona.saludar()

*/
//esta mal mi codigo - Pasando datos por referencia(todos los objetos se pasan por referencia)
//EN este ejercicio vamos a crear una funcion que modifique el objeto
/*

let actualizarusuario = (nombre,edad) =>{
    return nombre = "Gustavo" , edad = 21
}

let usuarioriginal={
    nombre:"Hugo",
    edad: 20
}

console.log("antes de actualizar",usuarioriginal)
actualizarusuario(usuarioriginal.nombre,edad)
console.log("despues de actualizar",usuarioriginal)

*/

let actualizarusuario =(a)=>{
    a.nombre = "Gustavo";  
    a.edad = 21;
}

let usuarioriginal ={
    nombre:"HUGO",
    edad: 20
}

console.log("antes de actualizar",usuarioriginal)

actualizarusuario(usuarioriginal)
console.log("despues de actualizar",usuarioriginal)
