alert("Estamos en los arreglos del sistema! 🔧");

/* 
Arreglos o Arrays

Son una estructura de datos que permite almacenar
múltiples valores en una sola variable.

Los elementos dentro del array tienen una posición 
o índice que permite acceder a ellos.

Los índices de los datos comienzan en 0.

Los arrays pueden contener datos de cualquier tipo:
números, strings, booleanos, incluso arrays anidados. 

Sintaxis 

let nombreArray = [ elemento1, elemento2, elemento3];

*/

let frutasFavoritas = ["Durazno", "Manzana", "Mango"];
let numerosSuerte = [5, 10, 15, 20, 25];
let meQuieroNoMeQuiere = [true, false, false, true];
let misDatos = ["Luis", "Toscano", 20, "false"];
let anidandoArrays = [ [123, 345, 789], ["Perro", "Gato", "Ardilla"], [false, true, false] ];

/* 
array -> ["Durazno", "Manzana", "Mango"]
índice ->     0          1         2    

array -> [5 , 10 , 15 , 20 , 25 
índice -> 0    1    2    3    4  

*/

/* 
Acceder a los elementos de un array 

Para acceder a un dato usamos la siguiente sintaxis:

nombreArray[índice]

*/

console.log(frutasFavoritas[2]);
console.log(numerosSuerte[1]);
console.log(anidandoArrays [2][2]);

/* 
Modificar elementos del Array

Para cambiar el valor de cualquier elemento del array usamos la siguiente sintaxis:

nombreArray[índice] = nuevoDato */

console.log( frutasFavoritas );

frutasFavoritas[0] = "pera";

console.log( frutasFavoritas );

/* 
Métodos útiles para los Arrays

los métodos son "funciones" que trabajan con los datos de los Arrays su sintaxis en la siguiente:

1. nombreArray.nombreMetodo
2. nombreArray.nombreMetodo(Parametro)
*/

// lenght nos dice cuantos elementos tiene un array 

console.log(frutasFavoritas.length)
console.log(numerosSuerte.length)
console.log(anidandoArrays[0].length)

/* 
push() - Agrega un elemento al final del array.

nombreArray.push(Dato)
*/

console.log(frutasFavoritas);

frutasFavoritas.push("Maracuya");

console.log(frutasFavoritas);

/* pop()= elementos que se usan para quitar la primera cadena de la pila */
