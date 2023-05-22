let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

/*
Coincide con todas las letras y números
Usando clases de caracteres, pudo buscar todas las letras del alfabeto con [a-z]. Este tipo de clase de carácter es tan común que existe un atajo para ella, aunque también incluye algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este atajo es igual a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Tenga en cuenta que esta clase de caracteres también incluye el carácter de subrayado ( _).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
Las cuatro testllamadas regresarían true.

Estas clases de caracteres abreviados también se conocen como clases de caracteres abreviados .

Use la clase de caracteres abreviados \wpara contar la cantidad de caracteres alfanuméricos en varias comillas y cadenas.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

*/