let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/*
Coincidir con espacios en blanco
Hasta ahora, los desafíos han abarcado el emparejamiento de letras del alfabeto y números. También puede hacer coincidir los espacios en blanco o los espacios entre letras.

Puede buscar espacios en blanco usando \s, que es una minúscula s. Este patrón no solo coincide con los espacios en blanco, sino también con los caracteres de retorno de carro, tabulación, avance de página y nueva línea. Puedes pensar en ello como similar a la clase de personaje [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Esta match llamada volvería [" ", " "].

Cambie la expresión regular countWhiteSpacepara buscar múltiples caracteres de espacio en blanco en una cadena.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

*/