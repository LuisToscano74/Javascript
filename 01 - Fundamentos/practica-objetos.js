alert("Aquí se encuentra mi evaluación 2do Parcial ✍️💻");

/* Práctica Clases y Objetos 

1. Crea una clase llamada Arma 

Debe tener las siguientes propiedades en su constructor:

* nombre (string): nombre del arma.
* tipo (string): tipo de arma (ej. "espada", "pistola", "arco").
* daño (número): cantidad de daño que puede causar. 

Agrega un método llamado describir que imprima en consola.

'Arma: Galadhrim | Tipo: arco | Daño: 40'

2. Crea un objeto llamado Arsenal que contenga: 

* Una propiedad armas que sea un array vacío.
* Un método agregarArma que se recibe un arma como parámetro y la agrega al array armas. 

3. Instancia Armas: 

* Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño. 

4. Agrega las armas al arsenal

* Usa el método agregarArma del objeto arsenal para agregar cada una de las armas al array armas. 

5. Muestra la Descripción de las Armas: 

* Usa un bucle for para recorrer el array armas dentro del objeto arsenal.

* En cada iteración, llama al método describir de cada arma para mostrar sus detalles en la consola.

git commit -m "Ejercicio de Objetos, clases y ciclos, evaluación 2do Parcial"

*/

class Arma {
  constructor (nombre, tipo, daño) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = daño;  
  }
  descripcion(){
    console.log(`Arma: ${this.nombre} | tipo: ${this.tipo} | daño: ${this.daño}`)
  }
}

let arma1 = new Arma("Espada de Diamante", "espada",60);
let arma2 = new Arma("R27", "pistola", 48);
let arma3 = new Arma("Varita de Sauco", "varita", 50);



let Arsenal = {
  armas : [],

  agregarArma : function(arma){
    this.arma.push(arma);
  }
}

Arsenal.agregarArma(arma1);
Arsenal.agregarArma(arma2);
Arsenal.agregarArma(arma3);

for (let i = 0; i <= 2; i++){
  Arsenal.armas[i].descripcion()
}


