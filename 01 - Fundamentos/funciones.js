/* Funciones 

Son bloques de código reutilizables, ya que realizan una tarea específica.

En lugar de escribir el mismo código una y otra vez, podemos definir una 
función una sola vez y usarla siempre que la necesitemos.

Conceptos de las funciones: 

*Definir: Creamos la función con un nombre y los datos llamamos parámetros. (opcionales)

*Invocan: Llamamos la función cuando queremos que ejecute su código, es decir que haga su tarea.

*Retorna: Puede devolver un resultado la función. (Opcional) 'return'

Sintaxis 
 
 function nombreFunction(param1, param2) {
 // Código que se va a ejecutar. 

return resultado; }

function -> La palabra clave para declarar una función. 

nombreFunction -> El nombre que le asignamos a la función. Este nombre lo usamos para invocarla:

param1, param2 -> Son los datos que le pasamos a la función para que trabaje con ellos en su bloque de código.

Cuerpo de la función -> El código que se ejecuta y realiza la tarea de la función. 

return -> Devuelve o retorna un resultado. (opcional)

*/

function saludo(){
  console.log("Hola nariz de bolita!! 🥸")
}

/* saludo(); */

function saludoPersonalizado(nombre) {
  console.log(`¡Hola ${nombre} tienes nariz de bolita!`)
}

/* saludoPersonalizado("Luisito")
saludoPersonalizado("Luigi")
saludoPersonalizado("Mario") */

function sumar(a,b) {
  return a + b 
}

/* console.log( sumar(10, 20) ) */

let resultado = sumar(10, 20);

console.log(resultado * 5 );