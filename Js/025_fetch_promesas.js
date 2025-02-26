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
*/
// consumiendo la api de placeholder con fetch 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(x => console.log(x))