// Primitivo - number , boleano , [] , objeto , string  
// Complejos Funciones  , Clases
// Bigint tipos de dato primitivos (Nuevos)

/*
Tipos de datos 

Primitivos y No Primitivos
PRIMITIVOS
Numericos
Boleanos 
Cadenas de Texto
Undefined

NUEVOS TIPOS DE DATOS PRIMITIVOS
Bigint
Symbol
TIPOS DE DATOS NO PRIMITIVOS
Functions
Objects

/*TEMPLATE STRINGS*/ 
let edad = 20;
let apellidopaterno ="GOMEZ";
let nombre = "HUGO";
console.log(`hola mi nombre es ${nombre + " " + apellidopaterno} mi edad es ${edad}`);

//IMPRIMIENDO DEL 1 AL 10 DETENIENDO EL BUCLE EN EL 5 UTILIZANDO LA PALABRA RESERVADA BREAK
for(i=0; i<=10; i++){
    if( i == 5){
        break
    }
    console.log(i)
}
//IMPRIMIENDO DEL 1 AL 10 SALTANDO EL 6 UTILIZANDO LA PALABRA RESERVADA CONTINUE
for(i=0; i<=10; i++){
    if(i == 7){
        continue
    }
    console.log(i)
}
//EJEMPLO FOR ANIDADO IMPRIMIENDO DEL 1 AL 10 CON DECIMALES
for(i=1; i<=10; i++){
    for(j=0; j<=9; j++){
        console.log(i + "."+ j)
    }
}
//EJEMPLO FOR ANIDADO IMPRIMIENDO DEL 1 AL 10 CON DECIMALES SALTANDO EL 3 CON BREAK
/*
for(i=1; i<=10; i++){
    for(j=0; j<=9; j++){
        if(i == 3){
           break
        }
        console.log(i+"."+j)
    }
}
/*
la condicional debe de indicar que el efectivo que yo tengo es mayor al pago que voy a hacer
    imprimir su pago se a echo y su cambio es de y imprimir el cambio 
    si no te alcanza el dinero debe de imprimir el pago no se pudo concluir 
    TIP = para este ejercicio puedo crear variables     

    TAREA: RESTAR EL EFECTIVO MENOS EL PAGO Y IMPRIMIR EL CAMBIO
    IMPRIMIR QUE SU PAGO SE A ECHO Y EL MONTO DEL CAMBIO CON TEMPLETE STRINGS
    REPETIR EL PROGRAMA 
    
    
    let efectivo = 300;
    let pago = 200;
    let credito = 300;

   

*/
let efectivo = 400
let pago = 200
if(efectivo >= pago){
    let cambio = efectivo - pago
    console.log(`Tu pago es de ${pago} y tu cambio va a ser de ${cambio}`);
}else{
    console.log("no te alcanza")
}

/*
Agregando un atributo fuera del objeto
let persona ={
    nombre: "Hugo",
    edad: 20
}
persona.correo = "hugo@gmail.com"
console.log(persona);
console.log(persona.correo);


let arreglo = ["perro", "gato", "pajaro"]
arreglo = "perro" , "gato", "pajaro"

//Funcion Expresada
let saludar = function (){
    console.log("hola mundo");
}
 saludar()

/*FUNCION DECLARADA
function saludar(){
    return "hola mundo";
}

Ejemplo de funcion expresada con callback ocupando seTimeout:
    
    setTimeout(function(){
        console.log("Este texto aparecera despues de 5 segundos");
     },3000)

     let saludar = function(perro,gato){
    console.log(`hola mi nombre es ${perro +' '+ gato} y mi apellido es ${gato}`);// Ocupando templete string
    }
        saludar("Hugo","Gomez")
*/

//
/*
let animales = ["pajaro","pez","tiburon",["gato","caballo","tortuga"]]
console.log(animales[3][1])

let persona ={
    nombre: "Hugo Gustavo",
    edad : 20,
    correo : "hugo@gmail.com",
    saludar:function(){
        return "hola mundo"
    },
    mama:{
        nombre:"adriana",
        edad: 51,
        regañar:function(){
            return "limpia tu cuarto"
        }

    }
}

console.log(persona.correo)
persona.amigos = ["tona","rafa","luis"]
console.log(persona.amigos[2])
delete persona.edad
console.log(persona)
console.log(persona.saludar())
console.log(persona.mama.regañar())


//HOISTING

let declarada = function(){
    console.log("DECLARADA")   
}

function expresada(){
    console.log("EXPRESADA")
}

for(i=10; i>=0; i--){
    console.log(i)
}
*/

/* de las 5am a las 11am imprimir buenos dias
de las 12 a las 6pm buenas tardes
de las 7pm a las 4am buenas noches
otro dato debe de decir dato no valido


let hora = undefined

if(hora >=5 && hora <= 11 ){
    console.log("buenos dias")
}
else if(hora >=12 && hora <=18){
    console.log("buenas tardes")

}else if(hora >=19 && hora <=24){
    console.log("buenas noches")

}else if(hora >=1 && hora <=4){
    console.log("Bonita Madrugada")
}else{
    console.log("dato invalido")
}
*/


//IF SHORTS
/*
let calificacion = 20;
let examen = calificacion >= 60 ? "Aprobado" : "Reprobado";
let variable = calificacion >=60 ? "Aprobaste" : "Reprobaste";
console.log(variable)
*/

/*EJERICIO TRES:
Imprimir la calificacion cuando el alumno saque 95 o mas poner A+ 
si el alumno saca 90 o mas poner solo A 
si el alumno saca un 85 o mas B+
si el alumno saca 80 o mas solo B
si el alumno saca 75 o mas solo C+
si el alumno saca 70 o mas solo C
si el alumno saca 65 o mas D+
si el alumno saca 60 o mas D
si solo saca de 59 o menos F

let calificacion = 61;
let examen = calificacion >=95 ? "A+" :
    calificacion >= 90 ? "A" :
    calificacion >=85 ? "B+":
    calificacion >=80 ? "B":
    calificacion >=75 ? "C+":
    calificacion >=70 ? "C":
    calificacion >=65 ? "D+":
    calificacion >=60 ? "D" : 
    calificacion <=59 ? "F": console.log("Dato no valido");
    console.log(examen)

  let calificacion = 1;

let examen = calificacion >=95 ? "+A" :
    calificacion >=90 ? "A":
    calificacion >=85 ? "B+":
    calificacion >=80 ? "B":
    calificacion >=75 ? "C+":
    calificacion >=70 ? "C":
    calificacion >=65 ? "D+":
    calificacion >=60 ? "D":
    calificacion <=59 ? "D" : console.log("Dato no valido");
    
    console.log(examen)
    
    let login = true;
    console.log(login === true ? "Pude iniciar sesion" : "No pude entrar")

    let inciar = "1";
    console.log(inciar === 1 ? "Bienvenido" : "No entraste")


    let saludar = a => console.log(a)

    saludar("hola mundo")

EJEMPLO DE CALLBACK

let sumar = (a,b) =>{

return (a+b)

}

let resta = (a,b) =>{
    return(a-b)
}

console.log(sumar(5,resta(5,2)))

*/

