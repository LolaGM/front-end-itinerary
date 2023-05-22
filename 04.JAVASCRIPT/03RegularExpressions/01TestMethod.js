let myString = "Hello, World!";
let myRegex = /Hello/;
let result =  myRegex.test(myString); 
//en una variable aplicas el método test a la expresión regular y le pasas como parámetro la variable que contiene la cadena

/*
Uso del método de prueba
Las expresiones regulares se utilizan en lenguajes de programación para hacer coincidir partes de cadenas. Usted crea patrones para ayudarlo a hacer esa combinación.

Si desea encontrar la palabra theen la cadena The dog chased the cat, puede usar la siguiente expresión regular: /the/. Tenga en cuenta que las comillas no son necesarias dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el .test()método. El .test()método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve trueo falsesi su patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
El testmétodo aquí devuelve true.

Aplique la expresión regular myRegexen la cadena myStringusando el .test()método.
 */