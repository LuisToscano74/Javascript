alert("Soy concatenación!!"); 

/* Concatenación 

La concatenación es un proceso para unir o combinar dos o más cadenas de texto en una sola.

Hay dos formas de realizar la concatenación. 

1. Operador (+) - Este es el método más común para concatenar cadenas de texto. 
2. Template Strings, Plantilla de Cadenas o Literales. (``) - Alt Gr + C (portuguesa) Alt 96. Utilizamos los backtics o acentos invertidos,
 dentro podemos insertar cadenas de texto, variables y expresiones. 
*/

// Concatenar con operador (+)

let nombre = "Luis";
let apellido = "Toscano";

let nombreCompleto = nombre + " " + apellido; 

console.log(nombreCompleto);

// Concatenar con Template Strings

let saludo = `${nombre} ${apellido}! ¿Cómo estás? 
Sabías que 2 + 2 es igual a ${2+2}`;

console.log(saludo);