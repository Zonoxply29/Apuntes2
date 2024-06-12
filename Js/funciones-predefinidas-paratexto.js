/*let numeromayor =(a,b)=>{
    return (a>b) ? `${a} es mayor que ${b}` : `${b} es menor que ${a}` 
}
console.log(numeromayor(9,2))

let persona ={
    Nombre: "Hugo",
    Edad : 20,
    saludar(){
            console.log(`Hola mi Nombre es ${this.Nombre} y mi edad es ${this.Edad}`)
    }
}

persona.saludar()

let jugador =(Nombre,Edad,Puesto) =>{
    return (Edad >= 20) ? `Hola soy ${Nombre} tengo ${Edad} y Soy ${Puesto} en el equipo` : "Necesitas  tener mas de 20 para jugar"
}

console.log(jugador("Hugo",20,"base"))

function operacion(a,b){
    let suma = a+b;
    let resta = a-b;
    let multiplicacion = a*b;
    console.log("Esta es la suma:"+ suma, "\n Esta es la resta:" + resta, "\nEsta es la multiplicacion: " + multiplicacion)
    }

    operacion(4,5)

let saludar = () =>{

}

//length devuelve el largo de la cadena de texto 
let texto = "Hola mundo";
console.log(texto.length)

//Convina dos o mas cadenas y devuelve una cadena de texto
let nombre = "Hugo"
let texto = "hola"
let mensaje = texto.concat(" ",nombre,"!")
console.log(mensaje)

//lowercase Pasa el texto a minusculas
let texto = "Hola Mundo";
console.log(texto.toLowerCase())

//trim sirve para quitar el espacio al inicio o al final
let texto = "   Hola Mundo    "
console.log(texto.trim())

//substring sirve para buscadores y acorta el texto
let texto = "JavaScript"
console.log(texto.substring(0,4))

// split busca el caracter y lo corta 
let texto = "Mi, Nombre, es Hugo"
let palabras = texto.split(",")
console.log(palabras)

//index of Muestra la posiciion de  la primer ocurrencia de la palabra que estoy buscando
let texto = "Hola , Hola , Mundo"

console.log(texto.indexOf("Hola"))

//last indexOf se puede ocupar para buscar palabras ya que busca la ultima ocurrencia
let texto = "Hola , Hola , Mundo, Hola"

console.log(texto.lastIndexOf("Hola"))

//trim start remueve el espacio del inicio

let texto = "    Hola , Hola , Mundo, Hola     "

console.log(texto.trimStart())

//trim end remueve el espacio del final

let texto = "    Hola , Hola , Mundo, Hola     "

console.log(texto.trimEnd())

///////////////AMBOS SE PUEDEN COMBINAR ///////////////

let texto = "    Hola , Hola , Mundo, Hola     "

console.log(texto.trimEnd().trimStart())

//slice si solo es un numero va a cortar el primer caracter que encuentre

let texto = "Hola , Hola , Mundo, Hola     "

console.log(texto.slice(1))

// Engañar a la funcion de substring para que aunque cambie el valor inicial de donde corte siempre invertira
el texto

let texto = "Javascript"

console.log(texto.substring(4,0))

//charAt corta un caracter en especifico solo uno

let texto = "Javascript"

console.log(texto.charAt(5))

//.repeat repite el caracter las veces que se le indique

let texto = "Monitor de 20 pulgadas"
let frase = "OFERTON ".repeat(2)

console.log(`${frase} , ${texto}`)

// toString convierte numeros a texto

let numero = 12
let convertir = numero.toString()

console.log(typeof convertir)

*/

let numero = 12
let convertir = numero.toString()

console.log(typeof convertir)
