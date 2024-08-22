/*
IF Y ELSE IF
------------------------------------------------------------------------------------------------

let hugo = 20
let gerardo = 19
let luis = 20


if (hugo < gerardo) {
    console.log("hugo es el mayor")
} if (luis == hugo) {
    console.log("luis tiene la misma edad que hugo")
} else {
    console.log("gerardo es menor")
}
-----------------------------------------------------------------------------
let climas = ["soleado", "templado", "lluvioso", "nevado"];

let seleccionarclima = climas[3]

if (seleccionarclima === "soleado") {
    console.log("El dia de hoy esta soleado")

}else if(seleccionarclima === "templado") {

     console.log("El dia de hoy esta templado")

}else if (seleccionarclima === "lluvioso"){

    console.log("El dia de hoy esta lloviendo")

}else if (seleccionarclima === "nevado"){

    console.log("El dia de hoy esta nevando")
}
-----------------------------------------------------------------

/*let numero = 11;
let num = "11";
if (numero === num) {
    console.log("los datos son iguales")
}else{
    console.log("Son diferentes")
}
----------------------------------------------------------------
            APUNTES DEL ARCHIVO PASADO
---------------------------------------------------------------

let edad = 17;
if edad < 17{
    console.log(`hola eres menor de ${edad}`)
}

let edad = 15;
if (edad >= 18) {
    console.log(`ya eres un hombre adulto, porque tienes ${edad} años`);
}else{
    console.log(`Aun eres menor de edad porque tienes ${edad} años`);
}
-------------------------------------------------------------

imprima de 5am a 11am es buenos dias
 De 12pm a 18pm buenas tardes,
 19pm hasta 24pm son buenas noches,
 si es un numero no valido esa hora no es valida


let hora = 4;
if(hora>=0 && hora<=4){
console.log("Es de madrugada");
}else if(hora>= 5 && hora<=11){
console.log("Buenos dias");
}else if(hora>=12 && hora<=18){
console.log("Buenas tardes");
}else if(hora>=19 && hora<=24){
console.log("Buenas noches");
}else{
    console.log("La hora no es valida");
}
--------------------------------------------------------------

Programa todos puedan entrar a un bar excepto las personas de 20 años
let edad = 19;
if(edad!=20){
    console.log("no puedes entrar");
}
------------------------------------------------------------

EJERCICIO DE IF ELSE
let efectivo = 300;
let carritodecompras = 400;
if(efectivo>=carritodecompras){
    console.log("Gracias por su compra");
}else{
    console.log("Compra no realizada");
}
IF ELSE SIN LLAVES
let efectivo = 300;
let carritodecompras = 400;
if(efectivo>=carritodecompras)
    console.log("Gracias por su compra");
else
    console.log("Compra no realizada");
--------------------------------------------------------------------------------------------------
    Scope local y Scope Global 

    El Scope local solo va a tomar lo que este dentro de la condicional en este caso el IF
    El Scope Global esta tomando en cuenta las variables declaradas


    let a ="a";
    let b = "b";
    let c = "c";

if(true){
    let a = "AA";
    let b = "BB";
    let c = "CC";
    console.log(a);
}

console.log(a);

---------------------------------------------------------------------
 TAREA : HACER ESTE EJERCICIO EN FUNCION 
    
 let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    
    let diaseleccionado = 4;

    if(diaseleccionado == "lunes"){
     console.log("hoy es lunes")
    }else if(diaseleccionado == "martes"){
        console.log("hoy es martes")
    }else if(diaseleccionado == "miercoles"){
        console.log("miercoles")
    }else if(diaseleccionado == "jueves"){
        console.log("jueves")
    }else if(diaseleccionado == "viernes"){
        console.log("viernes")
    }else if(diaseleccionado == "sabado"){
        console.log("sabado")
    }else if(diaseleccionado == "domingo"){
        console.log("domingo")
    }else (diaseleccionado == Number){
        console.log("Los números no son válidos para este ejercicio")
    }
-----------------------------------------------------------------------------------------

let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    
    let diaseleccionado = 1;

    if(diaseleccionado === "lunes"){
     console.log("hoy es lunes")
    }else if(diaseleccionado === "martes"){
        console.log("hoy es martes")
    }else if(diaseleccionado === "miercoles"){
        console.log("hoy es miercoles")
    }else if(diaseleccionado === "jueves"){
        console.log("hoy es jueves")
    }else if(diaseleccionado === "viernes"){
        console.log("hoy es viernes")
    }else if(diaseleccionado === "sabado"){
        console.log("hoy es sabado")
    }else if(diaseleccionado === "domingo"){
        console.log("hoy es domingo")
    }else if (diaseleccionado != Number){
        console.log("Los números no son válidos para este ejercicio")
    }   
------------------------------------------------------------------------------------------------
   Instrucciones: De 5 de la mañana a las 11 de la mañana Imprimir buenos dias
                    De 12 de el medio dia a 6 de la tarde buenas tardes
                    De 7 de la noche a 4 de la madrugada buenas noches
                    Si es otra hora esa imprimir esa hora no es valida 

    let horadeldia = 4;

    if(horadeldia >= 5 && horadeldia <= 11 ){
       console.log("Buenos dias")
    }else if(horadeldia >=12 && horadeldia <= 18){
        console.log("buenas tardes")
    }else if(horadeldia >=19 && horadeldia <=24){
        console.log("buenas noches")
    }else if(horadeldia >=1 && horadeldia <=4 ){
        console.log("es de madrugada")
    }else{
        console.log("la hora no es valida")
    }
----------------------------------------------------------------------------------------------

    Instrucciones: Crear un programa que ponga calificaciones
                Si saca 100 es igual a 10
                Si es de 91 a 99 es igual a 9
                Si es de 81 al 89 es igual a 8
                Si es de 71 al 79 es igual a 7
                Si es de 61 al 69 es igual a 6
                si es de menor a 51 es igual a reprobado
                si es otro dato imprimir dato no valido        
    let calificaciones = 100;

    if(calificaciones === 100){
    console.log("Sacaste 10 Felicidades")
    }else if( calificaciones >=90 && calificaciones <=99){
    console.log("Sacaste 9 felicidades")
    }else if(calificaciones >=80 && calificaciones <=89){
    console.log("Sacaste 8 Bien echo")
    }else if(calificaciones >=70 && calificaciones <=79){
    console.log("Sacaste 7 Echale ganas")
    }else if(calificaciones >=60 && calificaciones <=69){
    console.log("Sacaste 6 Echale ganas")
    }else if(calificaciones <=59 && calificaciones >=0){
    console.log(" ESTAS REPROBADO :( ")
    }else{
    console.log("Dato invalido")
    }
        
---------------------------------------------------------------------------------------------------

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

    if( efectivo >= pago){
        cambio = efectivo - pago
            console.log(`Su pago fue de ${pago} y su cambio es de ${cambio}`); 
    }else{
        console.log("Su pago no se pudo concluir");
    }
--------------------------------------------------------------------------------

EJERCICIO QUE IMPRIMA SI PUEDE ENTRAR A UN BAR DEPENDIENDO LA EDAD 
    SI ES MENOR DE EDAD NO PUEDE ENTRAR SI ES MAYOR DE EDAD  PUEDE ENTRAR
    
    let edad = 18;
    
    if(edad >=18){
        console.log("puedes entrar eres mayor")
    }else{
        console.log("no puedes entrar eres menor")
    }

    
*/
/*
imprima de 5am a 11am es buenos dias
 De 12pm a 18pm buenas tardes,
 19pm hasta 24pm son buenas noches,
 si es un numero no valido esa hora no es valida
----------------------------------------------------------
Ejercicios que me encontre en internet

Escribe un programa que muestre por consola (con un console log) los
números de 1 a 100 (ambos incluidos), sustituyendo los siguientes:
Múltiplos de 3 por la palabra "fizz".
Múltiplos de 5 por la palabra "buzz".
Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 
for(i=0; i<=100; i++){
    if(i%3 == 0 && i%5 ==0){
        console.log(i +" "+ "fizzbuzz")
    }else if(i%3 == 0){
        console.log(i + " "+ "fizz")
    }else if(i%5 == 0 ){
        console.log(i+ " "+ "buzz")
    }else{
        console.log(i)
    }
}
*/

