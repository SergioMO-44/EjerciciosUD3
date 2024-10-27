let clasi = ["1º.", "2º.", "3º.", "4º.", "5º.", "6º."];
let clasifinom = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
var r = [];

for (i = 0; i < clasi.length; i++) {
  r[i] = clasi[i] + clasifinom[i];
  r1 = [];
  for (i = 0; i < clasi.length; i++) {
    let cambios1 = clasifinom.splice(3, 2);
    let cambios2 = cambios1.splice(2, 3);
    r1[i] = clasi[i] + cambios2[i];
  }
}
//console.log(r);
//let cambios1 = clasifinom.splice(3, 2, "Celia");
//let cambios2 = cambios1.splice(2, 3, "Raúl");
console.log(r1);
