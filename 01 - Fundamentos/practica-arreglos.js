alert ("Esta es la práctica de arreglos 🛠️🥸");

/* Práctica Arreglos - Liga Superhéroes  */

/* 1. Definir un arreglo llamado "heroes", que contenga 5 nombres de superhéroes y muestralo en la consola.
   2. Agrega un nuevo héroe al final de Array.
   3. Eliminar el primer héroe.
   4. Cambiamos al 3er héroe por otro distinto. 
   5. Ordenar alfabeticamente el Array 'heroes'.
   6. Crear un nuevo array llamado 'villanos', con los últimos 3 héroes del array con método.
   7. Mostrar por consola los dos arrays: Héroes y villanos. 
*/

let heroesMarvel = ["Black Panther", "Spider-Man", "Thor", "Capitán America", "Hulk"];

heroesMarvel.push("Bruja Escarlata")

heroesMarvel.shift();

heroesMarvel[2] = "Quicksilver";

heroesMarvel.sort();

let villanosMarvel = heroesMarvel.splice(2,5);

console.log(heroesMarvel);
console.log(villanosMarvel);

/* commit: "Terminamos Métodos y práctica de Array" */

