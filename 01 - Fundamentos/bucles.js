alert("Estamos dentro de Bucles! 🔄️");

/* Ciclos o Bucles 

Nos permite ejecutar un bloque de código varias veces.

Facilita tareas repetitivas, ahorrando código y tiempo.


1. for

Este bucle tiene 3 partes clave:

1. Inicialización de una variable. 
2. Conción que evalua el valor de la variable.
3. Actualización del valor de la variable.

Sintaxis 

for ( inicialización; condición; actualización ) {
// Código que se ejecuta.
}
*/

for (let i = 0 ; i <= 10 ; i++ ){
// Código que se ejecuta   
console.log("Mensaje: " + i )

}

for ( let i = 10 ; i >= 0 ; i--) {
  console.log()
}

/* 

2. while

Ejecuta su bloque de código mientras la condición especificada sea verdadera.

Sintaxis: 

Se define la variable fuera del ciclo

let nombreVariable = valor;

while (condición) {
 // código a ejecutar 
 nombreVariable++ //Actualización
 }
 */

let contador = 0; // Definición 

while ( contador < 3) {
  console.log("Gato "+ contador);

  contador++; // Actualización 
}

let veces = 5; 

while (veces > 2) {
  console.log("Veces : "+ veces);

  veces--;
}

/* do...while

Es similar a while, pero garantiza que el bloque de código se ejecute al menos una vez. 

primero se ejecuta el código y luego se verifica la condición.

Sintaxis:

// La variable se define fuera del ciclo.

let nombreVariable = valor // definición 

  do {
// Código que se ejecuta 
} while (condición);
*/

let numero = 0; 
do {
  // Código que se ejecuta al menos una vez.
  console.log("El número es: " +  numero);

  numero ++; 
}  while (numero < 6 );

let miNumero = 10;
while (miNumero > 5) {
  console.log("Perrito "+ miNumero);
}