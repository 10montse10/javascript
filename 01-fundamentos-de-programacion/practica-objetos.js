class Arma {
  constructor(nombre, tipo, daño) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = 100;
  }
  describir() {
    console.log(`Arma ${this.nombre}, tipo ${this.tipo}, daño ${this.daño} `)
  }
}

let arsenal = {
  armas:[],
  
  agregarArma(arma) {
    this.armas.push(arma);
  }
  
}

let arma1 = new Arma("Pistola","Arma de fuego", 100);
let arma2 = new Arma("Arco","Arma de proyectil", 50);
let arma3 = new Arma("Navaja","Arma blanca", 10);

arsenal.agregarArma(arma1);
arsenal.agregarArma(arma2);
arsenal.agregarArma(arma3);

console.log(arma1);
console.log(arma2);
console.log(arma3);

for(let i = 0; i < arsenal.armas.length; i++) {
  arsenal.armas[i].describir();
}
