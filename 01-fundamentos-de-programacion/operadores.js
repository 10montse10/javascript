/* 
  Operadores
  Son símbolos utilizados para realizar operaciones sobre valores y variables.
  1. Aritméticos
  2. Asignación
  3. Comparación
*/

/* 
  1. Operadores Aritméticos
  Se utilizan para realizar matemáticas.

  */
// Suma (+): Suma dos valores

let suma = 16 + 6; //22
console.log(suma);

// Resta (-): Resta el segundo valor el primero

let resta = 64 - 15; //49
console.log(resta);

// Multiplicación (*): Multiplica los valores

let multi = 15 * 5; //75
console.log(multi);

//División (/): Divide el primer valor por el segundo

let divi = 80 / 2; //40
console.log(divi);

// Módulo (%): Devuelve el resto de la división entre dos valores.

let mod = 7 % 2; //1
let modulus = 9 % 3; //0

console.log(mod);
console.log(modulus);

//Exponenciación (**) Eleva un número a la potencia del otro.

let expo = 3 ** 2; //9

console.log(expo);

// Incremento (++): Incrementa el valor de una unidad en 1.

let x = 6;
x++;
console.log(x);

// Decremento (--): Decrementa el valor en 1.

let y = 8;
y--;
console.log(y);

/* 
  
  2. Asignación.
  
    Estos operadores asignan o reasigan un valor a una variable.

*/


// Asignación (=): Asigna un valor a una variable.

let w = 45;


// Asignación con suma (+=): Suma el valor de una variable y la reasigna.

w += 5; // 50
console.log(w);


// Asignación con resta (-=): Resta el valor a una variable y la reasigna.

w -=15; // 35
console.log(w);


// Asignación con Multiplicación (*=):Multiplica una variable por un valor y la asigna

w *=2; // 70
console.log(w);


// Asignación con división (/=): Divide una varible con un valor y la reasinga.

w /=10;
console.log(w);


/* 
  3. Comparación
  Estos operadores comparan dos valores y devuelven 'true' o 'false'.
*/


// Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tomar en cuenta el tipo de dato.

let valorUNO = "5";
let compara = 5 == valorUNO;
console.log(compara) // true


// Igualdad estricta (===): Compara dos valore y su tipo, para ver si son exactamente iguales.

compara = 5 === valorUNO;
console.log(compara) // false


// Desigualdad (!=): Verificar si dos valores no son iguales. NOTA: No tom en cuenta el tipo de dato.

let valorDOS = "10";
let valorTRES = 10;
console.log(valorDOS != valorTRES);


// Desiguladd estricta (!==) Verifica si dos valores y sus tipos no son exactamente sus iguales.

valorDOS = "10";
valorTRES = 10;
console.log(valorDOS !== valorTRES) // True


// Mayor que (>): Verifica si el primer valor es mayor que el segundo.

compara = 5 > 10;
console.log(compara); // false


// Mayor o igual que (>=): Verifica si el primer valor es mayor o igual que el segundo.

compara = 10 >= 10;
console.log(compara); // true


// Menor que (<): Verifica si el primer valor es menor que el segundo

let Lili = 20;
let SuCrush = 18;
console.log (SuCrush < Lili); // true
console.log(10 < 6); // false


// Menor o igual que (<=): Verifica si el primer valro es menor o igual que el segundo valor

console.log(4 <= 20); //true
console.log(20 <= 100); //true
console.log(45 <= 7); // false
console.log(8 <= 8); // true