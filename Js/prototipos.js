/*

Java Script es un lenguaje orientado a Objetos basado en "PROTOTIPOS" no en clases.
JS es un lenguaje multiparadigma(estilos), con la programacion funcional, orientada a objetos.

En JS es un poco distinta la Programacion Orientada a Objetos, apartir del 2015(Estandar 2016 +es6)"Ya tenemos clases",
a estas se les conoce como "Azucar Sintactica" es un manera mas facil que nos prove el lenguaje("Para poder hacer la programacion orientada a prototipos")
, el NAVEGADOR CONVERTIRA LAS CLASES A FUNCIONES PROTOTIPICAS.

Los 4 conceptos importantes en la POO son:

    Clases:Es un modelo a seguir como un machote o una calca.

    Objetos: Es una instancia de la clase osea una copia de el modelo a seguir.

    Atributos/Propiedades: Es una propiedad del objeto (son variables dentro de un objeto)

    Metodos: Son las acciones que un objeto puede realizar (Son funciones dentro de un Objeto).


Cuando en JS tu escribes una clase el compilador la transforma a una funcion prototipal

    Prototipos en JS: Es un mecanismo a el cual un objeto puede heredar atributos y metodos de un objeto padre.
        En JS la herencia se da por la cadena de prototipos.

Cuando tu creas un objeto, "tienes propiedades y metodos", pero el prototipo mas PRIMITIVO es el Object, y tiene las definciones 
de sus getters y setters

    es este: __proto__: Object

    FUNCION PROTOTIPAL = ES UN OBJETO DE TIPO ANIMAL // lo que llega a ser extremadamente repetitivo 
-------------------------------------------------------------------------------------------------------------------
    //Funcion prototipal o Funcion constructora
    function Animal(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.sonido= function(){
            console.log(`wof wof mi nombre es ${nombre} y mi genero es ${genero}`)
    }
}

    //Agregando un metodo a la funcion constructora, al ponerlo fuera uno genera rendimiento y espacio de memoria
    Animal.prototype.saludar = function(){
        console.log("Hola mundo")
    }  

    let perro ={
        nombre:"Solobino",
        raza:"Pastor Aleman"
    }

let snoopy = new Animal("Pecas","Macho");

let bugsbunny = new Animal("Bugs","Macho"); 



console.log(snoopy.sonido()) // wof wof mi nombre es Pecas y mi genero es Macho
console.log(snoopy.nombre) // Pecas
console.log(perro)// {nombre: "Solobino", raza: "Pastor Aleman"} 
console.log(snoopy) // Animal {nombre: 'Pecas', genero: 'Macho', sonido: ƒ}
                        genero: "Macho"
                        nombre: "Pecas"
                        sonido: ƒ()
                        [[Prototype]]: Object

console.log(bugsbunny) // Animal {nombre: 'Bugs', genero: 'Macho', sonido: ƒ}
                        genero: "Macho"
                        nombre: "Pecas"
                        sonido: ƒ()
                        [[Prototype]]: Object

console.log(bugsbunny.nombre) //Bugs
console.log(bugsbunny.sonido()) // wof wof mi nombre es Bugs y mi genero es Macho
console.log(snoopy.saludar()) // Hola Mundo 
console.log(bugsbunny.saludar()) // Hola Mundo   
-----------------------------------------------------------------------------------------------------------------------------

Herencia Prototipica : 

Super: Es un metodo que manda a llamar el constructor de la clase padre 
*/
function Animal(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
    this.sonido= function(){
        console.log(`wof wof mi nombre es ${nombre} y mi genero es ${genero}`)
    }
}

Animal.prototype.saludar = function(){
    console.log("Hola mundo")
}  

function Perro (nombre,genero,tamano){
        this.super = Animal;
        this.super(nombre,genero)
        this.tamano = tamano;
}

Perro.prototype.dormir = function(){
    return "..Zzzz"
 }

// Estamos asignando al prototipo Perro una instancia de Animal
Perro.prototype = new Animal;

let oddie = new Perro("Oddie","Macho","Mediano")
/*
 Esta heredando 
Perro {nombre: 'Oddie', genero: 'Macho', tamano: 'Mediano', super: ƒ, sonido: ƒ}
    genero: "Macho"
    nombre: "Oddie"
    sonido: ƒ ()super: ƒ Animal(nombre,genero)
    tamano: "Mediano"
    
    [[Prototype]]: Animal
*/
let gato = new Animal("Garfield","Macho")

console.log(oddie.tamano)
//console.log(oddie.dormir)
console.log(oddie.saludar());

console.log(oddie)
console.log(gato)