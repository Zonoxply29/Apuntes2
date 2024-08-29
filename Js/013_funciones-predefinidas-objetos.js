/*
Object.freeze = Sirve para congelar a el objeto y no pueda ser modificado , generalmente se utiliza para rutas que no deben
de ser Modificadas

let persona = {
    Nombre:"Hugo",
    Edad:20
}

Object.freeze(persona)
persona.Nombre = "Juan"

console.log(persona) // Hugo

hasOwnProperty = Busca si existe el valor que se busca dentro del objeto y lo regresa como true o false

let persona = {
    Nombre:"Hugo",
    Edad: 20,
    Redes_Sociales: ["Instagram","Facebook","TikTok"],
    amigos:{
        secu:["Tona","Rafa","Brayan"],
        prepa:["Gustavo","Hector","Lenin"],
        uni:["Luis","Gerardo","Marco"]
    }
}
console.log(persona.amigos.hasOwnProperty("secu"))

Object.entries = Convierte un Objeto en Array

let persona = {
    Nombre:"Hugo",
    Edad: 20,
    Redes_Sociales: ["Instagram","Facebook","TikTok"],
    amigos:{
        secu:["Tona","Rafa","Brayan"],
        prepa:["Gustavo","Hector","Lenin"],
        uni:["Luis","Gerardo","Marco"]
    }
}

let convertir = Object.entries(persona)
console.log(convertir)

.getOwnPropertyNames(persona) = Obtiene las UNICAMENTE las propiedades de el Objeto

let persona = {
    Nombre:"Hugo",
    Edad: 20,
    Redes_Sociales: ["Instagram","Facebook","TikTok"],
    amigos:{
        secu:["Tona","Rafa","Brayan"],
        prepa:["Gustavo","Hector","Lenin"],
        uni:["Luis","Gerardo","Marco"]
    }
}

let propiedades = Object.getOwnPropertyNames(persona)
console.log(propiedades)

Object.values(persona) = Obtiene UNICAMENTE los valores de las propiedades

let persona = {
    Nombre:"Hugo",
    Edad: 20,
    Redes_Sociales: ["Instagram","Facebook","TikTok"],
    amigos:{
        secu:["Tona","Rafa","Brayan"],
        prepa:["Gustavo","Hector","Lenin"],
        uni:["Luis","Gerardo","Marco"]
    }
}

let valores = Object.values(persona)
console.log(valores)


*/

let persona = {
    Nombre:"Hugo",
    Edad: 20,
    Redes_Sociales: ["Instagram","Facebook","TikTok"],
    amigos:{
        secu:["Tona","Rafa","Brayan"],
        prepa:["Gustavo","Hector","Lenin"],
        uni:["Luis","Gerardo","Marco"]
    }
}

let valores = Object.values(persona)
console.log(valores)