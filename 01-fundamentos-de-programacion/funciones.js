/* 

  Funciones

  Son bloques de código reutilizables, ya que realizan una tarea especifica.

  En lugar de escribir el mismo código una y otra vez, podemos definir una función una sola vez y usarlaa siempre que la necesitemos.

    Conceptos de las Funciones

    * Definir: Creamos la función con un nombre y los datos llamados parámetros. (opcionales).

    * Invocan: Llamamos la función cunado queremos que nos ejecute su código, es decir que haga su tarea.

    * Retorna: Puede devolver un resultado la función. (opcional).

  Sintaxis

    function nombreFunciones(param1, param2) {
     // Código que se va a ejcutar (CUERPO DE LA FUNCIÓN)
     return resultado;
    }

    function -> La palabra clave para declarar una función.

    nombrefuncion -> El nombre que le asignamos a la función. Este nombre lo usamos para invocarla.

    parm1, parm2, ... -> Son los datos que le pasamos a la función para que trabaje con ellos en su bloque de código.

    Cuerpo de la función -> El código que se ejecuta y realizan la tarea de la función.

    return -> Devuelve o retorna un resultado.

*/

function saludo() {
  console.log("Hola nariz de bola 😋")
}

/* saludo(); */

function saludoPersonalizado(nombre) {
  console.log(`¡Hola querida ${nombre}, tienes una bonita sonrisa! ❤`)
}

/* saludoPersonalizado("Montse");
saludoPersonalizado("Lili");
saludoPersonalizado("Xime"); */

function sumar(a, b) {
  return a + b 
}

let resultado = sumar(20, 23);
console.log (resultado * 2);
