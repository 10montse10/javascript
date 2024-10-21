/* 

  Arreglo0s o arrays

  Son una estructura de datos que permite alamcenar múltiples valores en una sola variable.

  Los elementos dentro del array tienen una posisicón o índice que permite acceder a ellos.

  Los índices de los datos comienzan en 0.

  Los Arrays pueden contener datos de cualquier tipo: número, strings, booleanos, incluso arrays anidados.

  Sintaxis.

  let nombreArray = [ elemento1, elemento2, elemento3]


*/

let frutasFavoritas = ["sandia", "mango", "piña"];
let numerosSuerte = [9, 10, 8, 16, 99];
let meQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Montserrat", "Torres", 20, false];
let anidandoArrays = [ [123, 456, 789, 898], ["Gato", "Perro", "Pezcado"], [true, false, true] ];

/* 

  array -> ["sandia", "mango", "piña"]
  índice ->     0        1        2

  array ->   [9,   10,   8,   16,   99]
  índice ->   0    1     2    3     4

*/

/* 

  Acceder a los elementos de un Array

  Para acceder a un dato usamos l asiguiente sintaxis:

  nombreArray[indice];

*/

console.log(frutasFavoritas[1]);
console.log(numerosSuerte[4]);
console.log(anidandoArrays[0][2]);

/* 

  Modificar elementos del array

  Para cambiar cualquier delemento del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/

console.log(frutasFavoritas)

frutasFavoritas[2] = "Fresa";

console.log(frutasFavoritas)

/* 

  Métodos para las Arrays

  Los métodos son funciones que trabajan con los datos de los arrays.

  Su sintaxis es la suiguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nombreMetodo(parametro)

*/

/* 

  length nos dice cuantos elementos tiene un array

*/

console.log(frutasFavoritas.length)
console.log(numerosSuerte.length)
console.log(anidandoArrays[0].length)

/* 

  push() - Agrega un elementos la final del array

  nombreArray.push(dato)

*/

console.log(frutasFavoritas);
frutasFavoritas.push("piña");
console.log(frutasFavoritas);

/* 

  pop() - aqui eliminamos el ultimo elemento del array y lo devuelve

  nombreaArray.pop()

*/

console.log(numerosSuerte);
numerosSuerte.pop()
console.log(numerosSuerte);


/* 

unshift() - Agrega un elementos al inicio del array.

nombrearrayy.unshif(date)

*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("Uvas");

console.log(frutasFavoritas);

/* 

  shift() - Elimina el primer elementos del array y lo devuleve.

  nombreArray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/* 

  indexof() - Encuentra el indice de un elementos en el array.

  nombreArray-indexof(dato);

*/

let indice = frutasFavoritas.indexOf("mango");

console.log(indice);

/* 

  splice() - Elimina o agrega elementos al array desde una posisicón específica

  Eliminar

  nombreArray.splice(indiceInicio, indiceFinal);

  Agregar

  nombreaArray.splice(indiceInicio, pasos, valor1, valor2);

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1, 2);

console.log(frutasFavoritas);

frutasFavoritas.splice(1, 0, "guayaba", "mandarina");

/* 

  slice() - Crea una copia de una porción de array. No modifica el original, se crea un nuevo array.

  nombreArray.slice(indiceInicio, indiceFinal);

*/

let frutasCopia = frutasFavoritas.slice(1, 3);
console.log(frutasCopia);

/* 

  sort() - Ordena los elementos de un array de mayor a menor.

  nombreArray.sort() - No le pasamos datos entre parentesis.

*/

console.log(frutasFavoritas);
frutasFavoritas.sort();
console.log(frutasFavoritas);

console.log(numerosSuerte);
numerosSuerte.sort();
console.log(numerosSuerte);