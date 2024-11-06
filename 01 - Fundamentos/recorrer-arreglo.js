alert("Aquí se recorren los arreglos");

/* Recorrer Arreglos 

Podemos acceder a cada dato de un arreglo a traves de su indice. 
Ya sea para obtener el dato o hacer algo con ese índice.*/

/* Definir un array  */

let colores = ["rojo", "azul", "morado", "amarillo", "rosa"]

colores.push("magenta")

// Indices:      0        1        2         3          4

/* Imprimimos por consola los datos del Array  */

/* console.log(colores[0])
   console.log(colores[1])
   console.log(colores[2]) */

console.log( colores.lenght)

/* Recorrer el Array con el bucle for */

for ( let i = 0 ; i < 4 ; i++ ) {
  // Código que se ejecuta 
  console.log( colores[i] )
}

/*
 Bucle for...of

Es una manera simple y moderna de recorrer arrays en JS. Este nos
permite acceder directamente al valor de cada elemento sin necesidad 
de usar indices. 

Sintaxis 

for ( const elemento of nombreArray )
  // Código a ejecutar por cada elemento en el Array.*/

for( const color of colores) {

 console.log(`Colorcito: ${color}`)
}

/* Ejercicio para recorrer un arreglo con for...of */

let meses = ["Enero", "Febrero", "Marzo", "Abril"]

 meses.push("Mayo")

for ( const mes of meses) {
 console.log(`Mes: ${mes}`)
}

// git commit "Aprendimos ciclos for...of"