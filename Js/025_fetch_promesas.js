/*
/// consumir una api con fetch y promesas
fetch('https://restcountries.com/v3.1/all')
    .then((response)=>{
        return response.json() //transforma el objeto JSON a un objeto de JS
    }).then((json)=>{
        let countries = json
        console.log(countries)
    })

    /// Se resumio en la funcion flecha anonima y se agrego un error 
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json =>{
            let countries = json
            console.log(countries)
        }).catch(error => console.log("Errores:"+ error))

     /// consumiendo la api de placeholder con fetch 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(x => x.json())
        .then(x => console.log(x))   

    /// consumiendo la api de placeholder con fetch 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(x => console.log(x))   

  ///! IMPORTANTE 
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(x => console.log(x)) // este objeto representa la respuesta completa del servidor a mi peticion fetch el estatus representa el protocolo HTTP 
     /// el ok , representa un valor boleano , true si el estado es de 200 al 299 , (fue exitosa la peticion), false si salio negativa la peticion, 
     /// la URL representa de donde viene la respuesta,
     /// y headers representa la informacion como tipo de contenido

     let traditionalFn = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(x => x.json())
        .then(x => console.log("traditional Fetch",x))
        console.log("Esto se imprimira primero") // por el tiempo de respuesta de la peticion se ejecuta primero
    }
    
    traditionalFn()

///! Consumir dos Apis Y Fusionar sus respuestas

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/posts')
])
.then(xs => Promise.all(xs.map((response)=>{ // aqui xs significa en plural
    return response.json()
})))
.then(x => console.log(x))

let getUsers = (usuario) =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${usuario}`) // aqui se pasa el valor del parametro 
        .then((response)=>{
            if(response.ok){
              return response.json()  
            }
            throw("ocurrio un error") //! maneja el error 
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    getUsers(10)

///! consumir la api y dentro de la api se encuentra una seccion con el tipo de clima 
fetch('https://api.weather.gov/gridpoints/LWX/97,71/forecast')
    .then(response => response.json())
    .then(propiedades => console.log(propiedades.properties.periods[0].shortForecast))

*/
let fetchData = () =>{
    return new Promise((resolve, reject) => {
        fetch('https://api.weather.gov/gridpoints/LWX/97,71/forecast')
            .then(response => response.json())
            resolve(propiedades => propiedades.properties.periods[0].shortForecast)
    })
}

let mostrarData = (clima) =>{
    console.log(clima)
}

let mostrandoError = (error) =>{
    console.log(`Error inesperado ${error}`)
}

fetchData()
    .then(mostrarData)
    .catch(mostrandoError)