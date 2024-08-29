/* 
Esta es codigo moderno de JS para la creacion de Objetos y Instanciar Objetos

extend: sirve para heredar de otra clase
super : sirve para heredar los parametros de la clase que se esta heredando

class Animal {
    constructor(nombre,genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    Saludar = () =>{
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Persona extends Animal{
    constructor(nombre,genero,apellido){
            super(nombre,genero)
            this.apellido = apellido;
    }
    Gritar = () =>{
        console.log("Hola mundo")
    }
}

let perro = new Animal("Snoopy","Macho")

let humano = new Persona("Hugo","Masculino","Gomez")

console.log(perro.nombre)
perro.Saludar()
console.log(perro)

console.log(humano.nombre)
console.log(humano.genero)
console.log(humano.apellido)
humano.Gritar();
humano.Saludar()
console.log(humano)

------------------------------------------------------------------------------------

Metodos Estaticos : Aquel que se puede ejecutar sin necesidad de instanciar la clase 
Metodos Especiales: (Geters y Setters), Nos permiten establecerr o modificar el valor de una propiedad dentro de una clase

static: solo se utiliza cuando se te olvida algo dentro de tu clase como el metodo de OtroSaludo()

Los Getters y Setters son una caracteristica de los objetos que te permiten definir metodos para obtener 
y establecer el valor de una propiedad especifica de un Objeto

Para las cosas que aun no "Existen":

No podemos tener una clase con propiedades o metodos "PRIVADOS",esos sirven para que solo se puedan utilizar dentro del cuerpo de la clase.

Tampoco existen las clases abstractas.

Los getters y los setters en JS se comportan como propiedades.

*/
class Animal {
    constructor(nombre,genero) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    Saludar = () =>{
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Persona extends Animal{
    constructor(nombre,genero,apellido){
            super(nombre,genero)
            this.apellido = apellido;
    }
    Gritar = () =>{
        console.log("Hola mundo")
    }
    static OtroSaludo =()=>{
        console.log("Hello World")
    }
    get getRaza(){
      return this.raza     
    } 
    set setRaza(raza){ //Genera un metodo establecedor osea que modifique la propiedad raza = null
        this.raza = raza;
    }
}

let perro = new Animal("Snoopy","Macho")

let humano = new Persona("Hugo","Masculino","Gomez")


console.log(perro.nombre)
perro.Saludar()
console.log(perro)

console.log(humano.nombre)
console.log(humano.genero)
console.log(humano.apellido)
humano.Gritar();
humano.Saludar()
console.log(humano)
// Estoy ejecutando un metodo estatico, no necesito instanciar ninguna clase por eso utilizo la clase "Persona"
Persona.OtroSaludo()
//Estoy modificando el atributo Raza que esta dentro de la clase Animal
humano.setRaza = "Gran Danes";
console.log(humano.getRaza)


