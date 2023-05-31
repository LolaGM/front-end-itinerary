/*Ejercicio 4

Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

Pista: usar en este orden los métodos:
reduce() de dos arrays para encontrar la intersección de array 1 y 2 y a ese resultado le aplicas filter
filter() filtra el resultado único
includes() devuelve true/false si se incluye 

*/

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

arrNumber1.reduce((number1,number2) => arrNumber1.filter(number => arrNumber3.includes(number)));

console.log(arrNumber1.reduce((number1,number2) => arrNumber1.filter(number => arrNumber3.includes(number)))
);


/* otra forma de hacerlo es sumar los arrays en un nuevo array y a ese aplicarle el método reduce con parámetros 
const allArrays = [arrNumber1, arrNumber2, arrNumber3];

const intersectionArray = allArrays.reduce((number1,number2) =>number1.filter(number =>number2.includes(number)));

console.log(intersectionArray);

refactorizando código:
console.log(allArrays.reduce((number1,number2) =>number1.filter(number =>number2.includes(number))));

*/




