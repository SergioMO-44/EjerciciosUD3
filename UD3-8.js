const rl = require("readline-sync");
let valor1 = rl.questionInt("¿Introduzca un numero? ");
let valor2 = rl.questionInt("¿Introduzca otro numero? ");
let valor3 = rl.questionInt("¿Introduzca otro numero? ");
let valor4 = rl.questionInt("¿Introduzca otro numero? ");
let valor5 = rl.questionInt("¿Introduzca otro numero? ");
let juntos = [valor1, valor2, valor3, valor4, valor5];
let sumatorio = 0;
for (let i = 0; i < juntos.length; i++) {
  sumatorio = sumatorio + juntos[i];
}
console.log(" La media aritmetica de los valores es " + sumatorio / juntos.length);
