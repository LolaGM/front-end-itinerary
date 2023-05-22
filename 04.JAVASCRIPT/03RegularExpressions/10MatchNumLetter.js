let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // con un rango de letras entre hy s, y un rango de números entre 2 y 6 + banderas global y máyusc/minusc
let result = quoteSample.match(myRegex); // le pasamos a la variable el método match con la regex como parámetro

/*
Empareja Números y Letras del Alfabeto
El uso del guión ( -) para hacer coincidir un rango de caracteres no se limita a las letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/coincide con cualquier número entre 0y 5, incluidos 0y 5.

Además, es posible combinar un rango de letras y números en un solo conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
Cree una única expresión regular que coincida con un rango de letras entre hy s, y un rango de números entre 2y 6. Recuerde incluir las banderas apropiadas en la expresión regular.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

*/