alert("Enlazando Operadores");

/* Operadores

Son símbolos utilizados para realizar operaciones sobre valores y variables.

1. Aritméticos
2. Asignación
3. Comparación

*/

/* 1. Operadores aritméticos 

Se utilizan para realizar calculos matemáticos.

*/

// Suma (+): Suma dos valores.

let suma = 16 + 6; // 22
console.log(suma);

// Resta (-): Resta el segundo.

let resta = 54 - 15; // 39
console.log(resta);

// Multiplicación (*): multiplica los dos valores.

let multi = 4 * 8; // 32
console.log(multi);

// División (/): Divide el primer valor por el segundo.

let divi = 20 / 4; // 5
console.log(divi);

// Módulo (%): Devuelve el restode la división entre dos valores.

let mod = 7 % 2; // 1
let mod2 = 9 % 3; // 0
console.log(mod);
console.log(mod2);

// Exponenciación (**): Eleva un número a la potencia del otro.

let expo = 3**2; // 9
let expo2 = 5**12; // 244140625 
console.log(expo); 
console.log(expo2);

// Incremento (++): Incremento el valor de 1.

let x =2; 
x++;
console.log(x);

// Decremento (--): Decrementa el valor en 1. 

let y = 6;
y--; // 5
console.log(y);

/* 2. Operadores de Asignación 

Estas operaciones tienen una asignación a una variable sin tener que repetirlo. 

*/

// Asignación (=): Asigna un valor a una variable.

let w = 45;

// Asignación con suma (+=): Suma el valor a una variable y la reasigna.

w += 5; // 50
console.log(w)

// Asignación con resta (-=): Resta el valor a una variable y la reasigna.

w -=15; //35
console.log(w)

// Asignación con multiplicación (*=): Multiplica el valor a una variable y la reasigna. 

w *= 2; // 70
console.log(w)

// Asignación con división (/=): Divide una variable por un valor y la reasigna. 

w /= 10; //7
console.log(w)


/* 3. Comparación

Estos operaciones comparan dos valores y devuelven 'true' o 'false'.

*/

// Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tener en cuenta el tipo de dato.

let valor = "5";
let compara = 5 == valor;
console.log(compara) // true

// Igualdad estricta (===): Comparar dos valores y su tipo, para ver si son exactamente iguales. 

compara = 5 === valor;
console.log(compara) // false

// Desigualdad (!=): Verificar si dos valores no son iguales. NOTA: No tome en cuenta el tipo de dato.  

let valor1 = "10";
let valor2 = 10; 

console.log(valor1 != valor2); // false

// Desigualdad estricta (!==): Verifica si dos valores y sus tipos no son exactamente iguales. 

valor1 = "10";
valor2 = 10; 

console.log(valor1 !== valor2) // true

// Mayor que (>): Verifca si el primer valor es mayor que el segundo.

compara = 5 > 10;
console.log(compara) // false

// Mayor o igual que (>=): Verificar si el valor es mayor o igual que el segundo.

compara = 5 >= 5;
console.log(compara) // true

// Menor que (<): Verifica si el valor es menor que el segundo. 

console.log(3 < 8); // true
console.log(10 < 8); // false
console.log("5" < 5); // false

// Menor o igual que (<=): Verifica si el primer valor es menor o igual que el segundo valor. 

console.log( 4 <= 10); // true
console.log(20 <= 100); // true
console.log(45 <= 7); // false
console.log(8 <= 8); // true

// "Aprendimos operaciones de asignación y comparación"




