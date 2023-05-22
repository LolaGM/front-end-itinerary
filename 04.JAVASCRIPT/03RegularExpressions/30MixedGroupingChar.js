let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
// After passing the challenge experiment with myString and see how the grouping works

/*

Hint 1
Use a|b to check for either a or b.

Hint 2
Your regex should use mixed grouping like /P(engu|umpk)in/g.

Hint 3
Use .* to allow for middle names.

Verifique la agrupación mixta de caracteres
A veces queremos verificar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().

Si desea encontrar Penguino Pumpkinen una cadena, puede usar la siguiente expresión regular:/P(engu|umpk)in/g

Luego verifique si los grupos de cadenas deseados están en la cadena de prueba usando el test()método.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
El testmétodo aquí devolvería true.

Arregle la expresión regular para que verifique los nombres de Franklin Roosevelto Eleanor Rooseveltdistinga entre mayúsculas y minúsculas y debería hacer concesiones para los segundos nombres.

Luego corrija el código para que la expresión regular que ha creado se verifique myStringy truese false devuelva dependiendo de si la expresión regular coincide.

let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

*/