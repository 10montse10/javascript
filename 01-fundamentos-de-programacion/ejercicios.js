/* 
  Ejercicio dfe funciones
  
  1. Vamos a definir una variable llamada "heroe" que tenga un dato en 'string' con el nombre de un superheroe.
  2. Definimos una función llamada "obtenerPoder".
  3. Esta función recibe el parámetro "heroe" que será validado en el cuerpo de la función.
  4. En el cuerpo de la función:
  si heroe === "superman" -> "Tu poder es super fuerza"
  si heroe === "flash" -> "Tu poder es super velocidad"
  si heroe === "batman" -> "Tu poder es super millonario"
  
  si no -> "No te invitaron a la fiesta!"

*/

let heroe;

heroe = prompt("Elije entre superman, flash y batman para conocer tu superpoder")

function obtenerPoder(heroe){
  if (heroe === "superman") {
    console.log("Tu poder es super fuerza")
  } else if (heroe == "flash") {
    console.log("Tu poder es super velocidad")
  } else if (heroe === "batman") {
    console.log("Tu poder es super millonario");
  } else {
    console.log("¡No te invitaron a la reunión!")
  }  
}

obtenerPoder(heroe); // Así se declara la función.