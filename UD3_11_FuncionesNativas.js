//STRING
let abc = "abcdefghijklmnopqrstuvwxyz";
let esc = "Hola, como \n estas"; // \n nueva linea
let len = abc.length; // longitud de la string
abc.indexOf("lmno"); // encontrar substring, devuelve -1 si no encuentra
abc.includes("lmno"); // encontrar substring, devuelve false si no encuentra (ES6)
let abcmod = abc.replace("abc", "123"); // Encontrar y subtituir string, devuelve una copia de la array original

let abcSliced = abc.slice(3, 6); // mismo metodo que las matrices: las string son matrices de caracteres
let abcUpper = abc.toUpperCase(); // convertir a mayusculas devuelve copia
let abcLower = abc.toLowerCase(); // convertir a minusculas devuelve copia
let abcConcat = abc.concat(" ", str2); // mismo metodo que las matrices: abc + " " + str2
abc.charAt(2); // caracter en el indice dado: "c"
abc[2]; // no funciona siempre en strings, abc[2] = "C" no funciona
let abcArray = abc.split(""); // transforma la string en una array de caracteres

//MATH
Math.random(); // numero aleatorio entre 0 y 1
Math.floor(Math.random() * 5) + 1; // numero entero aleatorio entre 1 y 5
Math.ceil(3.14); // = 4 - redondeado al alza
Math.floor(3.99); // = 3 - redondeado a la baja

let pi = Math.PI; // 3.141592653589793
Math.round(4.4); // = 4 - redondeado
Math.round(4.5); // = 5
Math.pow(2, 8); // = 256 - 2 elevado a 8
Math.sqrt(49); // = 7 - raiz cuadrada
Math.abs(-3.14); // = 3.14 - absokluto, valor positivo
Math.sin(0); // = 0 - seno
Math.cos(Math.PI); // otros: tan,atan,asin,acos,
Math.min(0, 3, -2, 2); // = -2 devuelve el valor mas bajo
Math.max(0, 3, -2, 2); // = 3 devuelve el valor mas alto
Math.max(...[1, 2, 3]);
Math.log(1); // = 0 logaritmo

//NUMBER
parseInt("3 months"); // devuelve el primer numero: 3
parseFloat("3.5 days"); // returns 3.5

let pi = 3.141;
pi.toFixed(0); // devuelve 3
pi.toFixed(2); // devuelve 3.14
pi.toPrecision(2); // devuelve 3.1
pi.valueOf(); // devuelve number
Number(true); // convierte a numero
Number(new Date()); // numero de minisegundos desde 1970
Number.MAX_VALUE; // maximo valor numerico en JS
Number.MIN_VALUE; // minimo valor numerico JS numero
Number.NEGATIVE_INFINITY; // -infinito
Number.POSITIVE_INFINITY; // infinito

//DATE
let d = new Date();
d.getDate(); // Dia del mes (1-31)
d.getDay(); // Dia de la semana (0-6)
d.getFullYear();
d.getHours();
d.getMinutes();
d.getMonth();
d.getSeconds();

//Declarar una fecha
let d = new Date(year);
let d = new Date(year, monthIndex);
let d = new Date(year, monthIndex, day);
let d = new Date(year, monthIndex, day, hours);
let d = new Date(year, monthIndex, day, hours, minutes);
let d = new Date(year, monthIndex, day, hours, minutes, seconds);
let d = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
