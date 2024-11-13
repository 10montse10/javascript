/* 

OBJETOS

Es una colección de propiedades y métodos.

Las propiedades describen las características del objeto.

Los métodos describen los comportamientos del objeto.

Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, underfined, otros objetos e incluso funciones.

SINTAXIS:

let nombreArray = [];
let nombreArray = {
  //propiedades y métodos

};

Propiedades dentro de un objeto se escriben en pares "clave" : "valor"

let nombre = "Montse" // Variable
nombre : "Montse" // Propiedad

Las propiedades de un ubjeto se separan por comas ',' despues del valor

Las claves de las propiedades pueden tener más de una palabra. Pero se debran escribir entre comillas, dobles o simples.

"nombre real" = "Montse"

También se pueden escribir en formaato Caamel Caase y sin comillas.

nombreReal = "Montsesita"

*/

/* definir un objeto */

let personaje = {
  nombre : "Montse",
  edad : 20,
  residencia : "La victoria",
  poderes : false,
  "habilidades humanas" : 
  ["valor", "determinación", "compañerismo"]
}

/* Accedemos al valor dentro de las propiedades humanas */

console.log(personaje.nombre);
// console.log(personaje["habilidades humanas"][2]);
console.log(personaje["habilidades humanas"])

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["chaparrotas", "mamis"]; // agregar

delete personaje.poderes; 

let mascota = {
  nombre : "walker",
  tipo : "minino",
  edad : 15,

  // objeto anidado
  fisico : {
    estatura : 20,
    peso : 3,
    raza : "siames"
  },
  // Declaramos un método
  saludo : function(dueño) {
    // codigo que se ejecuta al invocar la funcion
    alert(`Hola Karen, me llamo ${this.nombre} y mi dueño es ${dueño} ❤`);
  }
  
}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.raza);

mascota.fisico.sonido = "ronrronear"; //agregar
mascota.fisico.colorojos = "azul";

delete mascota.fisico.colorojos;

/* 

METODOS

Un método es una función que se define como propiedad de un objeto.

SINTAXIS

nombreClave : function(parametros) {
  // codigo que se ejecuta

  This

  Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus propiedades del mismo.
}

*/

/* Accedemos la método saludo del objeto mascota */

mascota.saludo("Josue");
