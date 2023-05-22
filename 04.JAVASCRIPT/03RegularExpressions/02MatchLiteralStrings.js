let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Changed this line from Search to Waldo
let result = waldoRegex.test(waldoIsHiding);
//en una variable aplicas el método test a la expresión regular y le pasas como parámetro la variable que contiene la cadena



/*
Hacer coincidir cadenas literales
En el último desafío, buscaste la palabra Hellousando la expresión regular /Hello/. Esa expresión regular buscó una coincidencia literal de la cadena Hello. Aquí hay otro ejemplo que busca una coincidencia literal de la cadena Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Esta testllamada volverá true.

Cualquier otra forma de Kevinno coincidirá. Por ejemplo, la expresión regular /Kevin/no coincidirá kevino KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
Esta testllamada volverá false.

Un desafío futuro mostrará cómo combinar esas otras formas también.

Complete la expresión regular waldoRegexpara buscar "Waldo"en la cadena waldoIsHidingcon una coincidencia literal.

*/