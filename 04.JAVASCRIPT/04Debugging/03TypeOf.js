let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

/*
Use typeof para verificar el tipo de una variable
Puede utilizar typeofpara comprobar la estructura de datos, o el tipo, de una variable. Esto es útil en la depuración cuando se trabaja con varios tipos de datos. Si cree que está sumando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores tipográficos pueden estar al acecho en los cálculos o en las llamadas a funciones. Tenga especial cuidado cuando acceda y trabaje con datos externos en forma de un objeto de notación de objetos JavaScript (JSON).

Aquí hay algunos ejemplos usando typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
En orden, la consola mostrará las cadenas string, number, objecty object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): , , , , Boolean( Nullnuevo Undefinedcon NumberES6 ) y (nuevo con ES2020), y un tipo para elementos mutables: . Tenga en cuenta que en JavaScript, las matrices son técnicamente un tipo de objeto.StringSymbolBigIntObject

Agregue dos console.log()declaraciones para verificar cada typeofuna de las dos variables seveny threeen el código.
*/