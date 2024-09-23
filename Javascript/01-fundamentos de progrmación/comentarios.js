/* 
Variables
  Las variables son contenedores que almacenan datos.
  Las variables se declaran usando las palabras reservadas:
  
  var -> Forma tradicional, pero ya no se recomienda.
  let - Forma moderna, es la recomendada.
  const -> El dato almacenado no puede cambiar.
  
  Para declarar una variable:
  
  var [nombreVariable] = [valor];
*/

var nombre = 'Montserrat';
let edad = 19;
const vivo = true;

console.log(nombre);
console.log(edad);
console.log(vivo);

/* 
  Las varibles declaradas con 'var' y 'let' pueden cambiar a lo largo del código, simpre y cuando su alcance lo permita.
  Las varialbles declaradas con 'const' no pueden cambiar.
  Si lo intentan sale un error.
  Para cambiar el valor de una variable_
  [nombreVariable] = [Nuevo valor]
  
*/

nombre = "Montse";
edad = 20;

/* vivo = false; */

// Mostrar nuevos datos.

console.log(nombre);
console.log(edad);