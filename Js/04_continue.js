// Continue termina la iteracion actual pero no detiene por completo el ciclo
//IMPRIMIENDO DEL 1 AL 10 SALTANDO EL 6 UTILIZANDO LA PALABRA RESERVADA CONTINUE

for(i = 0; i<=10; i++){
    if(i == 6){
        continue;
    }
    console.log(i)
}

// Imprime los numeros pares cuando la condicion de el resultado de el modulo sea 0

let number = 1;
while (number < 10 ){
  number++;
  if(number % 2) continue; // si la condicion es verdadera ya no se ejecuta la liena y regresa al inicio 
  console.log(number)
  
}
