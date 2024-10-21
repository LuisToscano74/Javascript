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

/* unshift() - Agrega  un elemento al inicio del Array  

nombreArray.unshift(dato)
*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("mandarina");

console.log(frutasFavoritas);

/* shift() - Elimina el primer elemento del Array y lo devuelve. 

nombreArray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/* 
   indexOf() - Encuentra el índice de un elemento en el Array.
   nombreArray.indexOf(dato);
   
*/

let indice = frutasFavoritas.indexOf("papaya");

console.log(indice)

/* 
 splice() - Eliminar o agregar elementos al array desde una posición específica.
 
 Eliminar 
 
 nombreArray.splicer(indiceInicio, indiceFinal)
 
 Agregar 
 
 nombreArray.splicer(indiceInicio, pasos, valor1, valor2)
 */

 console.log(frutasFavoritas);

 frutasFavoritas.splice(1,3);

 console.log(frutasFavoritas)

 frutasFavoritas.splice(1,0, "fresa", "Banana", "mora", "granada")

 /*

 Slice() - Crear una copia de una porción del array. No modifica el original, se crea un nuevo array. 

 nombreArray.slice(indiceInicio, indiceFinal)
 
 */

 let frutasCopia = frutasFavoritas.slice(3,5)
     console.log(frutasCopia)

/* 
  sort() - Ordena los elementos de un array de mayor o menor.
  
  nombreArray.sort()- De primera no pasamos datos entre parentesis. 
  
*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);

console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);



