/*
OPERADORES ARITMETICOS

    + , - , * , / , () , % 
    
    1.- Lo que se realiza primero es lo que esta entre parentesis
    2.- Dos operaciones que tienen preferencia son potencias y raices
    3.- Dos operaciones que tienen preferencia es la multiplicacion y la division
    4.- Dos operaciones finales son la suma y la resta

    % = modulo, me da el residuo de una division

    + * + = +
    - * - = +
    - * + = - 
    + * - = -

*/

console.log(5+5)
console.log(5+5-10)//0
console.log(5+(5-10)-20)//-20
console.log(3-5+(-20-10))//-32
console.log(-2+1+(20+40-30)-(15-25))//19
/*
console.log(  (-2+1) + (20+40-30) - (15-25)  )
console.log(  (-1) + (30) - (-10)  )//39
console.log(  (-1) + (30) + (10)  )//39
console.log(  (-1) + (40)  )//39
console.log(  -1 + 40 ) //39
*/

/*
Tarea: comparar el codigo 

CODIGO DEL PROFE
console.log(7-8+3-(35+45)+50-(55+60))//-143
console.log(7-8+3-(80)+50-(115))
console.log(2-(80)+(50-115))
console.log((2-80)+(-65))
console.log((-78-65))
console.log((-78-65))//-143
*/

/*
CODIGO MIO
console.log(7-8+3-(80)+50-(115))
console.log((-1+3)-(80)+50-(115))
console.log((-2)-(80)+50-(115))
console.log((-2-80)+(50 - 115))
console.log((82)+(-65))
*/

/*
MI CODIGO
console.log(9-11+(13-15)-17+(19+21)-23)
console.log(9-11+(-2)-17 +(40)-23)
console.log(9-11+(-2-17)+(40-23))
console.log(-2+(-19)+(17))
console.log(-2+(-19 + 17))
console.log(-2+(-2))
console.log((-2-2))//-4
*/

/*
EL DEL PROFE:
console.log(9-11+(13-15)-17+(19+21)-23)
console.log(9-11+(-2)-17+(40)-23)
console.log(9-11+-2-17+40-23)
console.log(-2+(-19)+17)
console.log(-2-19+17)
console.log(-21+17)
console.log(-4)//4

Tarea:
console.log(25+(27-29+31)-33+(35-37))
console.log((41-43)+45-(-47+51)-49)


console.log("Operacion Original")
console.log(25+(27-29+31)-33+(35-37))
//-----------------------------------------------
console.log(25+(29)-33+(-2))
console.log(25+(29)-33-2)
console.log(25+(29)-35)
console.log(25+29-35)
console.log(54-35)

console.log((41-43)+45-(-47+51)-49)
------------------------------------------
console.log((-2)+45-(4)-49)
console.log(-2+45-4-49)
console.log(43-53)

console.log((51-45)-(48-49)+(53+56))
------------------------------------------
console.log((6)-(-1)+(109))
console.log(6+1+109)//116

console.log((57-59)-(61+63-67)-71-(81+83-93))
--------------------------------------------------
console.log((-2)-(57)-71-(71))
console.log(-2-57-71-71)//-201
----------------------------------------------------------------------------------
Tarea 2: 
console.log(73-(75-79)-(85+89-79)+(-91+72+87+100))
---------------------------------------------------------
console.log(73-(75-79)-(85+89-79)+(-91+72+87+100))
console.log(73+4-95+168)
console.log(73+4-95+168)//150
----------------------------------------------------------
console.log((101-94+96-90)-77+66+(44+55)-99+(22+33-44))
console.log((101-94+96-90)-77+66+(44+55)-99+(22+33-44))
console.log((13)-77+66+(99)-99+(55-44))
console.log(13-77+66+99-99+11)//13
---------------------------------------------------------------

console.log(79-(85+100)-87+(-91-99+101)-103+5+(43+52-63-104)-2-92+105)
console.log(79-(185)-87+(-89)-103+5+(-72)-2-92+105)
console.log(79-185-87-89-103+5-72+11)
console.log(-385+5-72+11)
console.log(-380-72+11)
console.log(-452+11)

----------------------------------------------------------------------------
EJERCICIOS MODULO

console.log(5%2)
console.log(9%3)
console.log(9%7)
console.log(15%6)
console.log(40%5)

--------------------------------------------------------------------------
OPERADORES RELACIONALES
> MAYOR 
< MENOR
= ASIGNACION
== IGUAL A 
=== IGUAL EN VALOR Y TIPO
! NEGACION
!= NO ES IGUA
!== NO ES IGUAL EN VALOR NI EN TIPO DE DATO
||,OR
&&,AND
>= MAYOR QUE O IGUAL A 
<= MENOR QUE O IGUAL A

console.log(8>9)//false
console.log(9>8)//true
console.log(8>=9)//false
console.log(9>=8)//true
console.log(8>=[])//true
console.log(8>={})//false
console.log(8>{})//false
console.log(8>false)//true
console.log(1>false)//true
console.log(0>false)//false
console.log(0>=false)//true
console.log(1>=true)//true




*/
console.log(2*2)
console.log((2*2))
console.log(-2*2)
console.log(-2*2/2)//-2
console.log(-2*2/2*4)//-8
console.log((-2*2)/(2*4))//-0.5
console.log(-4/8)//-0.5
console.log(7/3*5/2)//5.8
console.log(2.3*2.5)//5.83 MULTIPLICACION DE FRACCIONES
console.log((7/3)*(5/2))//5.83 MULTIPLICACIONES DE FRACCIONES
console.log((-3/7)*(-1/2))//0.21
console.log((8/3)*(-1/7)/2)//-0.19
//--------------------------------------------------
console.log((-7/3)*(3/8)/2*8/3)//-1.16

//TAREA IMPRIMIR DEL 15 AL 10 CON NUMEROS DECIMALES
/*for(i=15; i>=10; i--)
for(j=9; j>=1; j--)
console.log(i + " , " + j)

for(i=15; i>=10; i--){
    for(j=9; j>=1; j--){
        console.log(i+"."+j)
    }
}
*/
//TAREA REPASAR TODOS LOS EJERCICIOS DE JS
//REPASAR TODOS LOS EJERCICIOS 3 VECES

