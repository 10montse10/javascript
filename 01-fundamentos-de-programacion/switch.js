/* 

Instrucciones condicionales if / else if / else

1. Crear una variable día y asignarle un valor númeirco.
2. Con la sentencias if, else if, else, evaluar el valor de la variable dia con las siguientes condicionales:

-dia === 1 // Lunes
-dia === 2 // Martes
-Dia === 3 // Miercoles
-dia === 4 // Jueves
-dia === 5 // Viernes 
-dia === ? // Dia no valido

*/

/* let dia = 5;

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes")
} else if (dia === 3) {
  console.log("Miércoles")
} else if (dia === 4) {
  console.log("Jueves")
} else if (dia === 5) {
  console.log("Viernes")
} else {
  console.log("Día No Válido")
} */

/* 

Switch

Es una estructura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles para evaluar una expresión.

Es más eficiente y legible en situaciones donde se requiere comparar una sola variable con varios valores posibles.

Sintaxis:

switch (dia) {
  case valor1: 
    // Codigo que se ejecuta
    break; 
  case valor2:
    // Codigo que se ejecuta
    break;
  case valor3:
    // Codigo que se ejecuta
    break;
  default:
    // Codigo que se ejcuta por default
}

*/

let dia = 1;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Día no válido")
}

/* 

  Ejercicio switch

  1. Crear una variable pokemon y asignarle un valor string con el nombre de un pokemon.

*/

let pokemon = "charmander";

switch (pokemon) {
  case "pikachu":
    console.log(`Tu pokemon es ${pokemon} y es de tipo electrico`);
    break;
  case "charmander":
    console.log(`Tu pokemon es ${pokemon} y es de tipo fuego`);
    break;
  case "snorlax":
    console.log(`Tu pokemon es ${pokemon} y es de tipo normal`);
    break;
  default:
    console.log(`¿Quién es ese pokemon?`)
}