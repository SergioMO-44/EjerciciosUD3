let vector = [1, 2, 8, 4, 2, 1, 8, 3, 2, 4, 2];
let resultado = [];
for (let i = 0; i < vector.length; i++) {
  if (vector[i] > 5) {
    //console.log(0);
    resultado.push(0);
  } else {
    //console.log(vector[i]);
    resultado.push(vector[i]);
  }
}
console.log(resultado);
