const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

/*
Palabras en blanco
Se le proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios. Luego completa las piezas que faltan con palabras de su elección de manera que la oración completa tenga sentido.

Considere esta oración:

It was really ____, and we ____ ourselves ____.
A esta oración le faltan tres piezas: un adjetivo, un verbo y un adverbio, y podemos agregar palabras de nuestra elección para completarla. Entonces podemos asignar la oración completa a una variable de la siguiente manera:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Debe formar una oración completa con las palabras que elija, junto con las palabras que proporcionamos.

Necesitará usar el operador de concatenación de cadenas +para construir una nueva cadena, usando las variables provistas: myNoun, myAdjective, myVerby myAdverb. A continuación, asignará la cadena formada a la wordBlanksvariable. No debe cambiar las palabras asignadas a las variables.

También deberá tener en cuenta los espacios en su cadena, de modo que la oración final tenga espacios entre todas las palabras. El resultado debe ser una oración completa.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

Only change code below this line
const wordBlanks = ""; // Change this line
Only change code above this line
*/