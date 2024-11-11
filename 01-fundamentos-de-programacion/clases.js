/* 

Clases

Una clase en js es una plantilla para crear objetos.

Es una forma moderna y natural de trabajar con la programación orientada a objetos.

Método constructor
Es un método especial que se ejcuta automáticamente cuiando se crea una nueva estancia de la clase.
Dentro del método constructor pasamos las propiedades y valores de clase.
Las propiedades pasan como parámetros y luego se asignan con 'this'.

Sintaxis Básica

class NombreClase {

  // Método constructor

  constructor(par1, par2) {
    this.par1 = par1;
    this.par2 = par2;
  }
}

Intancias de clases

Paraa crear un objeto usando la clase se utiliza la palabra new, esto invoca al constructor de la clase.

Sintaxis

new NombreClase(par1, par2); 

Esta instancia se asigna a una variable o constante.

Métodos de clase

Se definen dentro de una clase y están automáticamente en el prototipo del objeto. Este permite que todas las instancias compartan el mismo método.

Sintáxis

nombreMetodo(parm...) {
  // código que se ejecuta
}

*/

// Definir la clase mascota

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }

  saludo() {
    console.log(`Hola me llamo ${this.nombre}, y tengo ${this.edad} años 🐾`)
  }

}

// Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota("Kitty",14);
let mascota2 = new Mascota("Walker", 10);

// Acc3edemos a los datos de las instancias

console.log(mascota2.nombre);
console.log(mascota2.edad);

// Lanzar los métodos de los objetos

mascota1.saludo();
mascota2.saludo();