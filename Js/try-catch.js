/*
Se llama Try - catch - finally es una estructura de control que nos ayuda en el manejo de errores, evalua ciertos fragmentos de codigo 
y cuando halla algun fragmento de error se va a capturar en el catch
    
    Try:Cuando se quiera encontrar un error al momento de ocupar try se detiene en la linea de codigo donde esta el error y lo demas no lo ejecuta

    Catch: No suelta ningun error en color rojo porque el catch es ahora el que gestiona el error, para ver ese error podemos poner
    en console log el error y nos muestra el error 

    throw new Error: Personaliza el mensaje de Error
    
    Finally: No suele Utilizarse mucho pero siempre se ejecutara al final de un bloque try catch. No es obligatorio siempre usar el finally
    El finally SIEMPRE SE IMPRIME INCLUSO SI HAY UN ERROR


    try {
    console.log(Holamundo)
    } catch (error) {
    console.log(error)
    } finally{
    console.log("soy el finally, siempre me voy a imprimir")
    }
    
    Eror en la linea 2 del codigo se detiene al momento de encontrar el error
    try {
    console.log("Todo bien");
    console.log(hola)
    console.log("Segundo mensaje del Try")
    } catch (error) {
    console.log("algo salio mal")
    } finally{
    console.log("Soy el Finally")
    }

    Dividiendo 10 entre variables para que nos muestre el error en consola

    try {
    let resultado = 10/"holamundo"
    console.log(resultado)
    } catch (error) {
        console.log("Algo salio mal: ",error)
    }finally{
    console.log("Soy yo otra vez Finally")
    }

    Ejecutando el try antes de la funcion y provoca un error ya que la funcion es de tipo Expresada y no se puede llamar antes de su 
    declaracion

    try {
    clientes()
    } catch (error) {
    console.log(error)
    }finally{
    console.log("De nuevo me vuelvo a ejecutar")
    }

    let clientes =()=>{
    console.log("Descargando...")
    setTimeout(()=>{
        console.log("Completado")
    },4000)
    }
----------------------------------------------------------------------------------------------------
    isNan(): Es una funcion que retorna un true o un false

    Provocamos un error aproposito para personalizar nuestro mensaje de error

    try {
    let numero = "hola"
    if(isNaN(numero)){
        throw new Error("El caracter no es un numero")// La E de Error debe de ir con MAYUSCULA
    }
    console.log(numero * numero)
    } catch (error) {
    console.log(`Algo salio mal ${error}`)
    }
----------------------------------------------------------------------------------------------------

    Personalizando nuestro mensaje de Error
    
    try {
    let numero = "texto"
    throw new Error("El caracter no es un numero")
    console.log(numero *  numero)
    } catch (error) {
    console.log(`Algo salio mal ${error}`)
    }

*/
