function externa() {
    let variableExterna = "soy la variable externa";

    function interna() {
        console.log(variableExterna)
    }
    //si comento el return, me debe arrojar undifined, por el return implicito
    return interna;
}


const closure = externa();
console.log(typeof closure)
closure()
