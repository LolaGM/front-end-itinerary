let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; //changed this line,wrote freeCodeCamp and added /i at the end
let result = fccRegex.test(myString);

/*
Ignorar mayúsculas y minúsculas durante la coincidencia
Hasta ahora, ha visto expresiones regulares para hacer coincidencias literales de cadenas. Pero a veces, es posible que también desee hacer coincidir las diferencias de mayúsculas y minúsculas.

Mayúsculas (o, a veces, mayúsculas y minúsculas) es la diferencia entre letras mayúsculas y minúsculas. Ejemplos de mayúsculas son A, By C. Ejemplos de minúsculas son a, by c.

Puede hacer coincidir ambos casos usando lo que se llama una bandera. Hay otras banderas, pero aquí se centrará en la bandera que ignora las mayúsculas y minúsculas: la ibandera. Puede usarlo agregándolo a la expresión regular. Un ejemplo del uso de esta bandera es /ignorecase/i. Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCasey IgnoreCase.

Escriba una expresión regular fccRegexpara que coincida freeCodeCamp, sin importar su caso. Su expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.
*/