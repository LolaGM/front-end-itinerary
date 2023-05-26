function splitify(str) {
    //retornamos el array con el método split
    //le pasamos una regex que no contenga s espacios ni puntuacion ni guion
        return str.split(/[\s.,-]/);
}

console.log(splitify("Hello World,I-am code"));
//muestra por pantalla [ 'Hello', 'World', 'I', 'am', 'code' ]

/*
Dividir una cadena en una matriz usando el método de división
El splitmétodo divide una cadena en una matriz de cadenas. Toma un argumento para el delimitador, que puede ser un carácter para dividir la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, obtiene una matriz de palabras, y si el delimitador es una cadena vacía, obtiene una matriz de cada carácter de la cadena.

Aquí hay dos ejemplos que dividen una cadena por espacios, luego otra por dígitos usando una expresión regular:

const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
bySpacetendría el valor ["Hello", "World"]y byDigitstendría el valor ["How", "are", "you", "today"].

Dado que las cadenas son inmutables, el splitmétodo facilita el trabajo con ellas.

Use el splitmétodo dentro de la splitifyfunción para dividir stren una matriz de palabras. La función debe devolver la matriz. Tenga en cuenta que las palabras no siempre están separadas por espacios y que la matriz no debe contener signos de puntuación.

function splitify(str) {
    
}

splitify("Hello World,I-am code");

*/