/*FOR*/
/*IMPRIMIENDO DEL UNO AL 10 

for (let index = 0; index <11 ; index++) {
    const element = index;
    console.log(element)
}
 CODIGO RESUMIDO
for ( i = 0; i < 11; i++) {
console.log(i);    
}
--------------------------------------------------------------------------------------------------------------

Creando un for del 1 al 10 pero marca undefined porque le hace falta valores para completar el conteo

let paises = ["Mexico","Guatemala","Brazil","Chile","Argentina"];

for( i=0; i <= 10; i++){
console.log(paises[i])
}
---------------------------------------------------------------------------------

RESTANDO CON UN BUCLE
for ( i = 15; i > 4; i--) {
console.log(i)    
}
--------------------------------------------------------------------------------
IMPRIMIENDO DEL 10 AL 1
for(i=10; i>=1; i--){
    console.log(i)
}
-------------------------------------------------------------------------------
IMPRIMIENDO DEL 15 AL 5
for(i=15; i>=5; i--){
    console.log(i)
}
--------------------------------------------------------------------------------

IMPRIMIENDO DEL 1 AL 10 DETENIENDO EL BUCLE EN EL 5 UTILIZANDO LA PALABRA RESERVADA BREAK
for(i = 0; i<=10; i++){
    if(i == 6){
        break;
    }
    console.log(i)
}
----------------------------------------------------------------------------------------- 
IMPRIMIENDO DEL 1 AL 10 SALTANDO EL 6 UTILIZANDO LA PALABRA RESERVADA CONTINUE

for(i = 0; i<=10; i++){
    if(i == 6){
        continue;
    }
    console.log(i)
}
----------------------------------------------------------------------------------------
EJEMPLO FOR ANIDADO IMPRIMIENDO DEL 1 AL 10 CON DECIMALES
    for( i=0; i<=10; i++){
        for(j=0; j<=10; j++ ){
        console.log(i + "-" + j )
    }
}
EJEMPLO FOR ANIDADO IMPRIMIENDO DEL 10 AL 1 CON DECIMALES
    for( i=10; i>=1; i--){
    for(j=10; j>=1; j-- ){
    console.log(i + "-" + j )
    }
}

REPASADO POR ULTIMA VEZ TODOS EL 21 DE DICIEMBRE DEL 2023

REPASADO DE NUEVO EL 22 DE AGOSTO DEL 2024 XD
-----------------------------------------------------
REPASO EN CODIGO FACILITO DE CICLOS FOR 19/05/2026
/*
//* Mi solucion  -> Debe de recorrer de 3 en 3 y solo imprime números pares del 0 al 100 
for(let contador=0; contador <= 100; contador= contador +3){
  if(contador % 2 === 0){
     console.log(contador)
   }
}

///? Solucion de el codigo facilito
for(let i=0; i <= 100; i = i + 3){
    i % 2 === 0 ? console.log(i) : null;  
}
For in -> Nos permite iterar sobre las propiedades enumerables de un OBJETO

let user = {
  name : 'Hugo',
  edad : 22
}
for(let property in user){
  console.log(property) -> "name" ,"edad"
}

-
*/

