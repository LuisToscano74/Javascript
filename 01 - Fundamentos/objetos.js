alert("Aquí se escuentran Objetos 📦"); 

/* Objetos 

Es una colección de propiedades y métodos. 

Las propiedades describen las características del objeto. 

Los métodos describen los comportamientos del objeto. 

Los objetos pueden tener diferentes tipos de datos:

Strings, numbers, arrays, booleans, "undefined", otros objetos e 
incluso funciones. 

Sintaxis:
let nombreArray * [];

let nombreObjeto * {
  // Propiedades y métodos 
};

Propiedades dentro de un objeto se escriben pares "clave": "valor"

nombre : "Luis" // Propiedad 
let nombre = "Luis" // Variable 

Las propiedades de un objeto se separan por comas ',' después del valor. 

Las claves de las propiedades pueden tener más de una palabra. Pero se 
deberán escribir entre comillas "" o ''

"nombre real" = "Luis"

También se puede escribir en formato Camel Case y sin comillas.

nombreReal = "Luisito"
*/

//Definir un objeto 


let personaje = {
  nombre : "Ben Tennyson",
  edad : 10,
  residencia : "Bellwood",
  poderes : true,
  TransformaciónDeOmnitrix : ["Reloj", "Alienígena", "Compañerismo"]
}

/* Accedemos al valor de las propiedades del objeto. */

console.log(personaje.nombre);
console.log(personaje.TransformaciónDeOmnitrix);

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["Vilgax", "Dr Ánimo"]; // Agregar 

delete poderes;

/* Crear solitas y solitos un objeto llamado mascota que tenga tres propiedades:
nombre, tipo y edad, con sus respectivos valores.

Anidamos objetos 
Nombramos al objeto anidado y lo definos con las llaves {} - Dentro de las llaves 
se declaran las propiedades en pares "clave" : "valor"

Métodos 

Un método es una función que se define como propiedad de un objeto.

Sintaxis

nombreClave : function(parametros) {
 // Código que se ejecuta*/

let mascota = {
  nombre : "Becker",
  tipo : "Gato",
  edad : 3,
 // Objeto Anidado 
  fisico : {
    estatura : 20,
    peso : 3,
    color : "Negro"
  },
  
// Declaramos un método 
 saludo : function(amo) {
  // Código que se ejecuta al invocar la función 
  alert(`miau miau miau! Me llamo ${this.nombre} y mi amo es ${amo} ❤️`);
}
}

console.log(mascota.tipo);

console.log(mascota.fisico.color);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.peso);

console.log(mascota.fisico.colorOjos = "Verde"); // Agregar 
delete mascota.fisico.color; // Eliminamos

/* Accedemos el método saludo del objeto mascota */

mascota.saludo("Luis");

/* git commit "Aprendimos a crear objetos, definir sus propiedades y métodos" */
