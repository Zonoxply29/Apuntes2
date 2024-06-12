/*

REST Y SPREAD son dos caracteristicas de JS que aparecieron en la version "Es6" (tambien conocida como Es2015) y te permiten
trabajar con ARRAYS Y OBJETOS de una manera mas facil y elegante

REST: Permite empaquetar multiples elementos en un ARRAY 
En una funcion, el REST permite aceptar cualquier numero de argumentos y empaquetarlos en un ARRAY
Se utiliza el operador de tres puntos(...), para indicar que queremos empaquetar los elementos restantes de un ARRAY

SPREAD: Permite Desempequetar elementos de un ARRAY O UN OBJETO
Se utiliza el operador de tres puntos(...) para indicar que queremos desempaquetar

-----------------------------------------------------------------------------------------------------------------------------------

EJERCICIO 1 : EMPAQUETANDO CON EL PARAMETRO REST

    let mascotas =["perro","gato","pez","Loro","Ajolote"]
    let[a,b,...c] = mascotas
    console.log(c)
 
----------------------------------------------------------------

 EJERCICIO 2: EMPAQUETANDO CON EL PARAMETRO REST DIFERENTES TIPOS DE DATOS

    let datos =["perro",true,undefined,null,[],1,{},NaN,function saludar(){return "hola mundo"}]
    let[a,b,c,d,e,f,g,h,i] = datos
    console.log(i())

------------------------------------------------------------------

EJERCICIO 3: EMPAQUETANDO CON EL PARAMETRO REST DIFERENTES TIPOS DE DATOS Y EJECUTANDO UNA FUNCION DENTRO DE UN ARRAY
QUE ESTA DENTRO DE UN ARRAY Y QUE LO DESTRUCTURE

let datos =["perro",true,undefined,null,[function caminar(){console.log("Estoy caminando")}],1,{},NaN,function saludar(){return "hola mundo"}]
    let[a,b,c,d,e,f,g,h,i] = datos
    console.log(e[0]())

-----------------------------------------------------------------------

 
*/
   