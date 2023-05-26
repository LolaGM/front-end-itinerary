/*
Ejercicio 4
Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

*/

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

//método filter y método includes que devuelve valor booleano
//usamos el operador condicional ternario con 3 partes y el operador && para que incluya al 3er array

const commonNumbers = arrNumber1.filter(num =>
    arrNumber2.length > 0 ? arrNumber2.includes(num) : true && 
    arrNumber3.length > 0 ? arrNumber3.includes(num) : true );

console.log(commonNumbers);