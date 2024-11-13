/* 
  Ciclos o Bucles

  Nos permiten ejecutar un bloque de código varias veces. 
  
  Facilita tareas repetitivas, ahorrando código y tiempo.

*/

/* 
  1. for

  Este bucle tiene 3 partes clave: 

  1. Iniciaclización de una variable.
  2. Condición que evalua el valor de la variable.
  3. Actualización del valor de la variable.

  Sintaxis

  for ( inicializacion ; condición ; actualización ) {
    // Código que se ejecuta.
  }
  
*/

for ( let i = 1 ; i <= 10 ; i++ ) {
    // código que se ejecuta
  /*   console.log("Mensaje: " + i)
   */}


for ( let i = 10 ; i >= 0 ; i-- ) {
    /* console.log(i) */
  }


  /* 
    2. while

    Ejecuta su bloque de código mientras la condición especificada sea verdadera.

    sintaxis:

    // Se define la variable fuera del ciclo

    let nombreVariable = valor;

    while (condicion) {
      // Código a ejecutar

      noimbreVariable++ //Actualización
    }

  */


  let contador = 0; // Definición

  while ( contador < 3  ) { // Condición
    console.log("Gato " + contador);

    contador++; // Actualización
  }


  let veces = 5;

  while ( veces > 2 ) {
    
    console.log("Veces: " + veces);

    veces--;
  }


  /* 
    3. do...while

    Es similar a while, pero garantiza que el bloque de código se ejectute al menos una vez.

    Primero se ejectuta el código y luego se verifica la condición.

    Sintaxis:

    // La variable se define fuera del ciclo.

    let nombreVariable = valor // Definición
    do {
      // Codigo que se ejecuta
      nombreVariable++ // Actualización
    } while (condición);

  */


  let numero = 6;

  do {
    // codigo que se ejecuta al menos una vez
    console.log("El número es: " + numero);

    numero++;
  } while ( numero < 6 );


  let valor = 10;

  do {
    console.log("Valor es :" + valor);
    numero--;

    
  } while ( valor < 10)