let animales = ["perro", "gato", "pajaro"];
let numeros = [2323, 28, 44];

//AÑADIR ELEMENTOS
animales.push("tortuga"); // añade un nuevo elemento al final
animales.unshift("tortuga"); // añade un nuevo elemento al principio
animales.splice(2, 0, "mosquito", "pez"); // añade elementos (posicion, cuantos elimina, nuevos elementos a añadir)

//ELIMINAR ELEMENTOS
animales.pop(); // elimina el ultimo elemento
animales.shift(); // elimina el primer elemento
delete animales[0]; //cambia el elemento a undefined (no se recomienda)
animales.slice(2, 1); // Extrae una sección del array: indice de inicio , indice a cortar
animales.splice(2, 1); // elimina elementos (indice de inicio, cuantos elimina)

//ORDENAR MATRIZ
animales.sort(); // Ordena la matriz alfabeticamente
animales.reverse(); // Ordena la matriz en orden inverso
// numeros.sort(function (a, b) {
//     return a - b;
//   });

//TRANSFORMACION
let cosas = animales.concat(numeros); // une varias matrices
animales.toString(); // Transforma la matriz a string: results ""perro", "gato", "pajaro""
animales.join(" * "); // Transforma la matriz a string: resuls "perro*gato*pajaro"

//SLICE = Corte
// let corteSlice = animales.splice(2, 1); // corta los elementos: indice , numero de elementos a cortar
// console.log(corte);
// console.log(animales);

//SPLICE = Corte + Substitucion
// let corteSplice = animales.splice(2, 1, "mosquito", "mosca"); // añade elementos (indice , numero de elementos a cortar, nuevos elementos a añadir)
// console.log(corteSplice);
// console.log(animales);
