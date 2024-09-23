alert("Tipos enlazados")

/* Tipos de Datos

Los tipos de datos se dividen dos categorías: Primitivos y complejos.

1. Tipos de datos Primitivos 

Datos básicos que no se consideran "objetos" y no tienen "métodos".

Number o Número 

Representación de valores númericos ya sea enteros o con decimales (punto flotante).

* Strings o cadena de caracteres 

Se usa para representar texto. El texto se coloca entre comillas dobles o simples. 

"texto" "text"

* Boolean o Boleanos 

Estos representan un valor lógico que puede ser 'true' o 'false'.

* Undefined o Indefined

Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

2. Tipos de Datos complejos 

* Array o Arreglo

Es un conjunto de datos que los almacena en una lista ordenada de elementos. 
Los datos dentro de los arreglos se escriben entre corchetes [] 

* Object 

Es un conjunto de múltiples datos en parres 'claves', 'valor'. Se escriben entre llaves {} y separados por comas''

* Function o Funciones 

Es un tipos de dato que puede ser "invocado"

*/

let miNumeroNuevo = 5; 
let Decimal = 6.1416;

console.log(miNumeroNuevo);
console.log(Decimal);

let miNombre = 'Luis';
let miApellido = 'Toscano';

console.log(miNombre);
console.log(miApellido);

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let puchunguito; //Declarar una variable sin iniciarla. 

console.log(puchunguito);  /*Undefined*/

puchunguito = prompt("¿Cual es tu numero favorito¨?");

console.log(puchunguito); //Valor que el usuario introduzca.

/* Array */

let misFrutasFavoritas = ["Durazno", "Uvas", "Manzanas"];
let misNumerosFavoritos = [5, 10, 15, 1957];
let otroArray = ["Puchunguito", 56, true];

console.log(misFrutasFavoritas);
console.log(misNumerosFavoritos);
console.log(otroArray);

/* Object */

let persona = {
  // Clave = valor,
  nombre : "Luis",
  edad : "20",
  colorCabello : "Negro",
  colorOjos : "Cafés",
  altura : "1.68",
  peso : "69 ks",
  vivo : true,
  novia: false,
}

console.log(persona);
// Accedemos a los datos de una clave dentro de un objeto 
// Con la notación de punto 

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.altura);

/* Function */

let mensajito = function () {
// Pasamos el código que ejecuta la función 
}
console.log("Este es un mensaje lanzado por una función");

mensajito ();

// "Aprendimos Objetos y Funciones como tipos de datos"

