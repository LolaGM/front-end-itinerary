let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*
Coincidencia de caracteres individuales no especificados
Hasta ahora, ha creado un conjunto de caracteres con los que desea hacer coincidir, pero también podría crear un conjunto de caracteres con los que no desea hacer coincidir. Estos tipos de conjuntos de caracteres se denominan conjuntos de caracteres negados .

Para crear un conjunto de caracteres negados, coloque un carácter de intercalación ( ^) después del corchete de apertura y antes de los caracteres que no desea que coincidan.

Por ejemplo, /[^aeiou]/gicoincide con todos los caracteres que no son una vocal. Tenga en cuenta que los caracteres como ., !, [, @y /espacios en blanco coinciden: el conjunto de caracteres de vocal negada solo excluye los caracteres de vocal.

Cree una sola expresión regular que coincida con todos los caracteres que no sean un número o una vocal. Recuerde incluir las banderas apropiadas en la expresión regular.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

*/