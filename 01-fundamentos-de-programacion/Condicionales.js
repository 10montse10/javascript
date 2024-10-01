/* 
    Con diionales

    Son estructuras que permiten ejecutar diferentes bloques de código en función de si na condición (expresión) es verdadera o falsa.

    Estas estructuras controlan el flujo de los programas.

    1. if (si)

    El bloquee if se ejecuta sollo si a condición que se le pasa es verdadera 'true'. Si la condición es falsa  'false' el código dentro de if se omite.

    if (condición) {
        código que se ejecuta si es verdadera
    }

    2. Else -> de lol contrario

    Este bloque ejecuta un código cuando las condiciones antgeriores no son verdaderas. 

    if(Condición){
        Código que se ejecuta en caso de que la condición sea verdadera
    } else {
        Código que se jecuta en caso de que la condición sea falsa 
    }

    3. else if -> si no 

    El se if nos ayuda a comprobar condiciones adicionales si la condición es falsa. Podemos tener tantos else if como necesitemos. Los eelse if se escriben entre el if y entre el 'else'

    if (condicional) {
        // codigo...
    } else if (condicional) {
        // codigo ejecutar... 
    } else if (condicional) {
        // codigo ejecutar...
    }
*/

// Sentencia o bloque if 

let numero = 10;

if (numero > 20) {
    console.log("Me ejecuté porque la primera condición es verdadera");
} else if (numero < 20) {
    console.log("Me ejecuté porque la segunda condición es verdadera");
} else {
    console.log("Me ejecuté porque las condiciónes anteriores son falsas");
}