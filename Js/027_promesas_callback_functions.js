//! Hacer un programa que use promesas y debe de buscar id dentro de objetos 
///! Crear un programa que busque los id dentro de los objetos y imprimirlo en consola
/*
const posts = [
    {
      userId: 1,
      id: 1,
      title: "Volver al Futuro",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatem hic voluptate nam quos deserunt eum, quo nostrum consequatur dolor tempora obcaecati dolorem incidunt facere numquam recusandae ad eligendi porro."
    },{
       userId: 1,
       id: 2,
       title: "Rapidos y Furiosos",
       body:"Praesentium beatae sint facere? Officiis quaerat atque laudantium! Ullam nostrum delectus, tenetur similique impedit quisquam veniam dolore architecto, eius, laboriosam rem laborum."
    },{
        userId: 1,
        id: 3,
        title:"Jumanji",
        body:"Fuga, temporibus delectus tempora quisquam nam omnis recusandae facilis velit voluptatem consectetur sunt doloribus, quo laborum nostrum? Iste sit provident error aliquid?"
    }
]

let busqueda = (id) =>{
   return new Promise((resolve, reject) => {
    let resultado = posts.find(post => post.id === id)
    if(resultado){
    resolve(resultado)
    }else{
     reject("No se encontro el objeto con ese ID")
    }  
    })
}
busqueda(0)
.then((objeto)=>{
 console.log("El objeto es ", objeto)
})
.catch((error)=>{
console.log("Error",error)
})
*/
const posts = [
    {
      userId: 1,
      id: 1,
      title: "Volver al Futuro",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatem hic voluptate nam quos deserunt eum, quo nostrum consequatur dolor tempora obcaecati dolorem incidunt facere numquam recusandae ad eligendi porro."
    },{
       userId: 1,
       id: 2,
       title: "Rapidos y Furiosos",
       body:"Praesentium beatae sint facere? Officiis quaerat atque laudantium! Ullam nostrum delectus, tenetur similique impedit quisquam veniam dolore architecto, eius, laboriosam rem laborum."
    },{
        userId: 1,
        id: 3,
        title:"Jumanji",
        body:"Fuga, temporibus delectus tempora quisquam nam omnis recusandae facilis velit voluptatem consectetur sunt doloribus, quo laborum nostrum? Iste sit provident error aliquid?"
    }
]

let busqueda = (id) =>{
   return new Promise((resolve, reject) => {
    let resultado = posts.find(post => post.id === id)
    if(resultado){
    resolve(resultado)
    }else{
     reject("No se encontro el objeto con ese ID")
    }  
    })
}
busqueda(1)
.then((objeto)=>{
 console.log("El objeto es ", objeto)
 return busqueda(2)
})
.then((x)=>{
    console.log(x)
})

.catch((error)=>{
console.log("Error",error)
})