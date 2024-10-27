let vector = [1, 2, 8, 4, 2, 1, 8, 3, 2, 4, 2];
let cuenta = 0;
for (let i = 0; i < vector.length; i++) {
  if (vector[i] == 2) {
    cuenta++;
    //console.log("La posición " + (i + 1) + " hay un numero 2.");
  }
}
console.log("El numero 2 aparece " + cuenta + " veces.");
