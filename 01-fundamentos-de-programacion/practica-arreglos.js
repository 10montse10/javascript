/* 

  Prácticaa arreglos - Liga Superheroes

  1. Decidir un arreglo llamado Heroes, que contenga 5 nombres de superheroes y muestralo en la consola.

  2. Agrega un nuevo héroe al final del array.

  3. Eliminar el primer heroe.

  4. Cambiamops al tercer heroe por otro más poderoso.

  5. Ordenar alfabeticamente el array heroes.

  6. Craer un nuevo array llamado enemigos, con los ultimos 3 heroes del array con metodo: slice.

  7. Mostrar por consola los dos arrays: heroes y enemigos.

*/

let superHeroes = ["spiderman", "batman", "ironman", "hulk", "thor"];

superHeroes.push("superman");

superHeroes.shift();

superHeroes[2] = "capitanamaerica";

superHeroes.sort();

let superEnemigos = superHeroes.splice(3, 6);

console.log(superEnemigos);

console.log(superHeroes);
