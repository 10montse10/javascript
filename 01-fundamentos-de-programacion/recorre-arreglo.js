/* 

  Recorrer Arreglos

  Podemos acceder a cada dato de un arreglo a través de su índice. Ya sea para obtener el dato o hacer algo con ese índice.

*/


/* Definir un array */

let colores = ['rojo', 'negro', 'morado', 'azul', 'blanco'];

// Indices:      0        1        2       3       4

/* Imprimimos por consola los datos del array */

/* 

console.log(colores[0])
console.log(colores[1])
console.log(colores[2])

*/


colores.push('magenta');

/* Recorrer el array con el bucle for */

/* for ( let i = 0 ; i < colores.length ; i++ ) {
  // código que se ejectuta
  console.log( colores[i] )
} */


/* 

  Bucle for...of

  Es una manera simple y moderna de recorrer arrays en JS. Este nos permite acceder directamente al valor de cada elemento sin necesidad de usar indices.

  Sintaxis

  for ( const elemento of nombreArray ) {
    // Codigo a ejectutar por cada elemento en el array
  }

*/


for (const color of colores) {
  // codigo a ejecutar

  console.log(`Colorcito: ${color}`);
}


/* Ejercicio para recorrer un arreglo con for...of */

let alumnos = ['Lili', 'Josue', 'Ximena', 'Diana'];

for (const alumno of alumnos) {
  console.log(`No estudiaste ${alumno}, reprobaste!`);
}