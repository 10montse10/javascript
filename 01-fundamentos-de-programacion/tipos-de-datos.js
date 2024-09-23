/* 
  Los tipos de datos se dividen en 2 categorias: Primitivos y Complejos
  
  1. Tipos de Datos Primitivos
  
  Datos básicos que no se consideran 'objetos' y no tienen 'métodos'.
  
  Number = Número
  
  Representación de valores numéricos ya sea con enteros o con decimales (punto flotante)
  
  
  * String o Cadena de Caractéres.
  
  Se usa para representar texto. El texto se coloca entre comillas dobles o simlpes "Texto" 'Text'.
  
  *Boolean o Buleanos
  
  Estos representan un valor lógico qie puede ser 'true' o 'false'
  
  * Undefined o Indefinido
  
  Es el valor que se asigna a una varible que ha sido declara pero no inicializada.
  
  2. Tipo de Datos Complejos o de Objetos.
  
  * Array = Arreglo
  
  Es un conjunto de datos que los almacena en una lista odenada de elementos. Los datos dentro de los arreglos se escrbiben entre corchetes [] y separados por coma ,

  *Object
  
  Es un conjunto de múltiples datos en pares 'clave' 'valor'. Se escreben entre llaves {} y separados por comas ,
  
  * Functions o Funciones
  
  Es un tipo de datos que puede ser "invocado". Se declaran con la palabra reservada "function" y el código que ejecuta entre llave ["código"]

*/

/* Numbers */

let miNumero = 9;
let miNumeroDecimal = 8.5

console.log(miNumero);
console.log(miNumeroDecimal); 

/* Strings */

let miNombre = 'Montserrat';
let miNombreApellido = 'Torres';

console.log(miNombre);
console.log(miNombreApellido)

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentura);

/* Undefined */

let x; // Declarar una variable sin inicializarla

console.log(x);

x = prompt('¿Cuál es tu número favorito?')

console.log(x); // Valor que el usuario introduzca.

/* Array */

let misVideojuegosFavoritos = ["Subway Surfes", "Zig Zag"];
let misNumerosSuerte = [8, 9, 1];
let otroArray = ["Noble 9", 8, true]

// Accedemos a los datos de una clave dentro de un objeto.

// Con la notación de []

console.log(misVideojuegosFavoritos);
console.log(misNumerosSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
  
  // clave : valor,
  
  nombre : "Montserrat",
  edad : 19,
  colorCabello : "Castaño - obscuro",
  colorOjos : "Cafes Claro",
  altura : 1.64,
  peso : "56 kg",
  vivo : true,
  novie : false,
}

console.log(persona);

// Accedemos a los datos de una clave dentro de un objeto.

// Con la notación de .

console.log(persona.nombre);
console.log(persona.novie);

/* Function */

let mensajito = function () {
  
  // Pasamos el código que ejecuta la función
  
  console.log("Este es un mensaje lanzado por una función");
}

//Invocamos la función

mensajito();