let clasificacion = [
  "1º.Ana",
  "2º.Oswaldo",
  "3º.Raúl",
  "4º.Celia",
  "5º.María",
  "6º.Antonio",
];
console.log(clasificacion.join("-"));
clasificacion.splice(2, 2, "3º.Celia", "4º.Raúl");
//console.log(clasificacion);
clasificacion.pop();
//console.log(clasificacion);
clasificacion.splice(1, 0, "2º.Roberto", "3º.Amaya");
clasificacion.splice(3, 4, "4º.Oswaldo", "5º.Celia", "6º.María", "7º.Antonio");
//console.log(clasificacion);
clasificacion.unshift("1º.Marta");
clasificacion.splice(
  1,
  7,
  "2º.Ana",
  "3º.Roberto",
  "4º.Amaya",
  "5º.Oswaldo",
  "6º.Celia",
  "7º.María",
  "8º.Antonio"
);
console.log(clasificacion.join("-"));
