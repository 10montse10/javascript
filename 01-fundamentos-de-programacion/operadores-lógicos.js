/* 
  Operdores lógicos.
  
  Estos operadores lógicos permiten evaluar expresiones qe dan como resultado verdadero o falso.
  
  *> Una expresión es un trozo de código que evalua, es decir resulta en "true" o "false"
  
  1. AND (&&) - Devulve "true" solo si ambos operadores son verdaderos.
  
  2. OR (||) - Devuelve "true" si al menos uno de los operandos es verdadero.
  
  3. NOT (!) - Invierte el valor boleano. Se escribe del lado izquierdo de la variable y sin espacios-

*/

let a = 5 < 10; // true

let b = 5 < 7; // true

let c = 5 < 1; // false

// console.log( a && b ); // true

// console.log( a && c ); // false

// console.log(c || c); // flase

console.log(!c); // true

console.log(!a); // false