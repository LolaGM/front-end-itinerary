let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // todas las letras del abecedario y después de la barra global
let result = quoteSample.match(alphabetRegex); // Change this line

/*
Une las Letras del Alfabeto
Ya vio cómo puede usar conjuntos de caracteres para especificar un grupo de caracteres para hacer coincidir, pero eso es mucho escribir cuando necesita hacer coincidir una gran variedad de caracteres (por ejemplo, cada letra del alfabeto). Afortunadamente, hay una característica incorporada que hace que esto sea corto y simple.

Dentro de un conjunto de caracteres, puede definir un rango de caracteres para que coincidan usando un carácter de guión: -.

Por ejemplo, para unir letras minúsculas ahasta eusted, usaría [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
En orden, las tres matchllamadas devolverían los valores ["cat"], ["bat"]y null.

Haz coincidir todas las letras de la cadena quoteSample.

Nota : asegúrese de hacer coincidir las letras mayúsculas y minúsculas.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

*/