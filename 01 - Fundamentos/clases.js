alert("Hola, yo soy Clases!! 📚");

/* + Clases 

Una clase en Javscript es una plantilla para crear objetos. 

Es una forma moderna y natural de trabajar con la programación orientada a objetos.

Los nombres de las clases se recomienda escribirse en mayúsculas 

+ Método constructor 

El método construtor es un método especial que se ejecuta automáticamente cuando se 
crea una nueva instancia de la clase. 

Dentro del método constructor, pasamos las propiedades y valores de la clase. 

Las propiedades pasan como parametros y luego se asignan con 'this'.

Sintaxis Básica

class NombreClass {
  // Método constructor 
  constructor(par1, par2){
   this.par1 = par1;
   this.par2 = par2;
  }
}  

+ Métodos de clase 

Se definen dentro de una clase y asignan automaticamente en el 'prototipo' del objeto.
Estro permite que todas las instancias compartan el mismo método. 
  
Instancia de Clase

Para crear un objeto usando la clase, se utiliza la palabra 'new', esto invoca al cons-
tructor de la clase.
*/

// Definir la clase más corta 

class Mascota {
  constructor(nombre, edad) {
  this.nombre = nombre; // Esto crea la propiedad 'nombre'
  this.edad = edad; // Esto crea la propiedad 'edad' 
  }

saludo(){
  console.log(`¡Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
}

}
// Instancear la cvlase Mascota. Creamos un objeto con la plantilla Mascota. 

let mascota1 = new Mascota("Milly", 8);
let mascota2 = new Mascota("Willy", 4);

(mascota1.saludo)
(mascota2.saludo)

// Accedemos a los datos de las instancias.

console.log(mascota1.nombre)
console.log(mascota2.edad)

// Lanzar los métodos 

// git commit -m "Aprendimos a usar clases y métodos"
