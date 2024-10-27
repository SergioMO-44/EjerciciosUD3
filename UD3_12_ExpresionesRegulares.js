let text =
  "Hola vamos a probar algunas expresiones regulares en este texto 12345678, hola de nuevo";
let result = "";
//Search devuelve el indice de la primera concurrencia
result = text.search("vamos");

//Utilizando una expresion regular
//result = text.search(/vamos/);

//Match puede buscar mas de una concurrencia
// result = text.match("hola");
// result = text.match(/hola/);
// result = text.match(/ola/g);
// result = text.match(/hola/gi);
// result = text.match(/[1-4]/g);
// result = text.match(/\d/g); //Busca digitos

console.log(result);
