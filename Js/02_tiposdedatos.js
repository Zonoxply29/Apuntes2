/*
TIPOS DE DATOS EN JS
-----------------------------------------------------------------------------------------------------------------
el signo de "+" indica suma ó concatenación
* indica multiplicación
- indica resta
NaN = indica que no es un número , aparece cuando intentas hacer una operación matematica con otros caracteres que no sean un número
Null = nada, no confundir con el 0
True y false tiene valor de 1 y 0
La consola del navegador deja de sumar en el momento que ve caracteres de texto , todos los siguientes caracteres los concatenara aunque
sean numeros , PERO si quiero que sume los sig numeros tendre que usar PARENTESIS()

console.log(1+2+3)
console.log(1+2+"3"+4+5+6)//33456
console.log(("1"+4)+2+3)//145
console.log(('1'+5)+(2+3))//155
console.log(('1'+6)+(2+4)+(5+'7'))//16657
console.log(true+'1')//true1
console.log((false+3)+'4'+false+(8+9));//34false17
console.log(false+1)//0+1 =
console.log(true*8)//1*8 = 8
console.log("hola"*2)//NaN(Not a Number)
console.log("mundo"-2)//NaN
console.log(2*4-("hola"))//NaN
console.log(true-"mundo")//NaN
console.log(NaN + true)//true ó 1
console.log(null + true)//1
console.log(null + "hola")//hola
console.log(null + 4)//4
console.log(null + 0)//0

Undefined + algo mas

console.log(undefined + null)//Nan
console.log(undefined + 1)//Nan
console.log(undefined - 1)//Nan
console.log(undefined + true)//Nan
console.log(undefined + "hola")//undefinedhola
console.log(undefined + undefined)//Nan
console.log(undefined + [] )//undefined
console.log(undefined + {} )//undefined[Object object]

console.log([] + 1)//1
console.log([] - 1)//-1
console.log([2,3] - 1)//Nan
console.log([2,3] - true)//Nan
console.log([2,3] + true)//2,3true
console.log([] + true)//true
console.log([] - true)//-1
console.log([] + null)//null
console.log([] - null)//0
console.log([] - undefined)//Nan es una operacion aritmetica pero no tengo numeros
console.log([] - "hola")//Nan
console.log([] + "hola")//hola


console.log({} + "hola")//[Object object] hola
console.log({} + 1)//[Object object] 1 
console.log({a:2} + "hola")//[Object object]hola
console.log({} - "hola")//Nan 
console.log({} + null)//[Object object]null
console.log({} * null)//Nan
console.log({} + undefined)//[Object object]undefined

console.log({} + [])//[Object object] el objeto de tipo array no lo imprime , pero no significa que imprima un 0
console.log({} + {})//[Object object][Object object]

console.log(null + "hola")//nullhola
console.log(null * 1)//0
console.log(null + true)//1
console.log(null + false)//0
console.log(null * [])//null 
console.log(null * {})//Nan
console.log(null + null)//0 
console.log(null + undefined)//Nan
console.log(null + [])//null
console.log(null + {})//null[Object Object]

*/
/* DATOS PRIMITIVOS 
numerico - number
cadena de texto - string
undefined - se desconoce el tipo de dato
Boleano - verdadero y falso
Null - Un tipo de dato que nosotros ponemos

NUEVOS TIPOS DE DATOS PRIMITIVOS
bigint
symbol


TIPOS DE DATOS NO PRIMITIVOS
object
funciones

*/
/*--------------------------------------------------------------------------------------------------------
let saludar = "hola";
console.log(saludar)

let nombre = "HUGO";
console.log('"hola mi nombre es"' + nombre );
------------------------------------------------------------------------------
//      TEMPLATE STRINGS
let edad = 19;
let apellidopaterno ="GOMEZ";
console.log(`hola mi nombre es ${nombre + " " + apellidopaterno} mi edad es ${edad}`);
-----------------------------------------------------------------------------
//      ARRAYS

typeof sirve para conocer un tipo de dato que contiene una variable

let animales = ["perro","gato","pajaro","pez"];
console.log(typeof nombre);

let numero = 1.5;
console.log(typeof numero);

let datos = ["Ricardo",20,true,undefined,null];
console.log(typeof datos[2]);
-----------------------------------------------------------------------

ARRAY MULTIDIMENSIONAL
let amigos =["Antonio","Carlos","Gerardo",["Bryan","Pedro","Diego"],"Juan","Raul"];
console.log(amigos[3][2]);

----------------------------------------------------------------------
OBJETO
let persona = {
    nombre: "Hugo",
    edad: 19,
    estudiante: true,
    amigos:["Antonio","Juan","Luis"]
}

console.log(persona.amigos[2]);
---------------------------------------------------------------------
/*TAREA 
Creame un Array que contenga estados de la república y que dentro tenga un objeto que contenga capitales de la republica,
después de debes imprimir con template string 2 estados de la república con su correspondiente capital.
*/

let mexico = {
    estados:["Baja California Norte" , "Chiapas", "Coahuila", "Guerrero", "Morelos", "Nayarit"],
    capitales:["Mexicali", "Tuxtla Gutierrez", "Saltillo", "Chilpancingo","Cuernavaca", "Tepic"]
}

console.log("ESTADOS Y CAPITALES")
console.log(`El estado es ${mexico.estados[4]} y su capital es ${mexico.capitales[4]} `);
console.log(`El estado es ${mexico.estados[1]} y su capital es ${mexico.capitales[1]} `)

/*Snippets
en file 
luego preference y configure user snippets y escribir el nombre del lenguaje 

*/