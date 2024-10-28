alert("Estas son sus funciones en consola");

/* Ejercicio funciones 

1. Vamos a definir una variable llamada 'heroe'que tenga un dato en 'string' con el nombre de un superhéroe. 
2. Definimos una opción llamada 'obtenerPoder'.
3. Esta función recibe el parametro 'heroe' que será validado en el cuerpo de la función. 
4. En el cuerpo de la función: 

 Si heroe === "Superman" -> "Tu poder es superfuerza"
 Si heroe === "Flash" -> "Tu poder es la supervelocidad"
 Si heroe === "Batman" -> "Tu poder es supermillonario"
 Si no === "No te invitaron a la Fiesta de Super amigos!"

5. Invocar a la función con su parámetro 'heroe'
6. Deben cambiar el valor de la variable 'heroe'

Reto Extra:
**Hacer que el valor de la variable 'heroe' la asigne al usuario. 

*/
let miHeroe = prompt("Elige un héroe!")
let heroe = "Batman";
function obtenerPoder(parametro){

  if (heroe === "Batman"){
    console.log("Tu poder es supermillonario")
  } else if (heroe === "Flash"){
    console.log("Tu poder es la supervelocidad")
  } else if (heroe === "Superman"){
  }  else {
      console.log("No te invitaron a la fiesta de Super Amigos!")
  }   
}

obtenerPoder(miHeroe)