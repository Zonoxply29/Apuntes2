// La declaracion break te permite detener un ciclo dentro de su ejecución 

//IMPRIMIENDO DEL 1 AL 10 DETENIENDO EL BUCLE EN EL 5 UTILIZANDO LA PALABRA RESERVADA BREAK

for(i = 0; i<=10; i++){
    if(i == 6){
        break;
    }
    console.log(i)
}

let number = 1;
while (number < 10 ){
  number++;
  console.log(number)
  if(number > 5) break;
}

