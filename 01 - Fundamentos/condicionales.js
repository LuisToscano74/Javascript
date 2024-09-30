/*  Condicionales

Son estructuras que permiten ejecutar diferentes bloques de código en función de si una condición (expresión) es verdadera o falsa.

Estas estructuras controlan el flujo de los progrmas. 

1. If -> si condicional

El bloque if se ejecuta solo si la condición que se le pasa es verdadera 'true'. Si la condición es falsa 'false' el código dentro de if se omite. 

2. Else -> de lo contrario 

Este bloque ejecuta un código cuando las condicionales anteriores no son verdaderas. 

if (condición) 
Código que se ejecuta en caso de que la condición anterior o anteriores sean falsos.

3. else if -> si no 

Else if nos ayuda a comprobar condiciones adicionales si la condición if es falsa. Podemos tener tantos else if como necesitamos. Los 'else if' se esdcriben entre el 'if' y el 'else'.

if (condicional) {
// codigo... 
else if (condicional) 
// codigo ejecutar...
}*/

alert("Soy Condicionales");

// Sentencia o bloque if 

let numero = 300;
if (false) {
  console.log("Me ejecute porque la condición es verdadera")
} else if (5 < 10) {
  console.log("Me ejecute porque la segunda condición es verdadera");
} else { 
  console.log("Me ejecute porque las condiciones anteriores son falsas")
}




