/* 
  Concatenación
  
  La concatenación es un proceso para unir o combinar dos o más cadenas de texto en una sola.
  
  Hay dos formas de realizar la concatenación.
  
  1. Operador (+) - Este es el método más común para concatenar cadenas de texto.
  
  2. Template Strings, Plantillas de Cadenas o Literales. (``) - Alt Gr + C (Portugesa). Utilizamos los backtics o acentos invertidos, dentro podemos insertar cadenas de texto, variables y expresiones.

*/

// Concatenar con el operador (+)

let nombre = "Montse";

let apellido  = "Torres";

let nombreCompleto = nombre + " " + apellido;

// console.log(nombreCompleto);

// Concatenar con Template Strings.

let saludo = `Hola ${nombre} ${apellido}! Cómo estás? Sabías que 2 + 2 es igual a ${2+2}`;

console.log(saludo);