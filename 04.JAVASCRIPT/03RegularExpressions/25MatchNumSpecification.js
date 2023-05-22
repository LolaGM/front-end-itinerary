let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

/*
Especifique el número superior e inferior de coincidencias
Recuerde que utiliza el signo más +para buscar uno o más caracteres y el asterisco *para buscar cero o más caracteres. Estos son convenientes, pero a veces desea hacer coincidir una cierta gama de patrones.

Puede especificar el número inferior y superior de patrones con especificadores de cantidad . Los especificadores de cantidad se utilizan con corchetes ( {y }). Pones dos números entre las llaves, para el número inferior y superior de patrones.

Por ejemplo, para hacer coincidir solo la letra aque aparece entre 3y 5veces en la cadena ah, su expresión regular sería /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
La primera testllamada regresaría true, mientras que la segunda regresaría false.

Cambie la expresión regular ohRegexpara que coincida con la frase completa Oh nosolo cuando 3 tenga 6 letras h. 

let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

*/