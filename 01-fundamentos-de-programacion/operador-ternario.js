/* 

  Ejemplo condicionales if / else

  1. Declarar una variable edad y le asignamos un valor númeirco.
  2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje: "Eres mayor de edad"
  3. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebé"

*/

/* let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres un bebé");
}
 */
/* 

  El operador ternario es una forma más concisa de escribir una condición if / else.

  Trabaja con tres operandos:

  1. Una condición
  2. La expresión si la condición es verdadera
  3. La expresión si la condicón es falsa

  SINTAXIS

  condición ? expresiónsioverdadera : expresiónsifalsa

*/

let edad = 20;

let resultado = edad >= 18 ? "Eres mayor de edad": "Eres un bebé"

console.log(resultado);