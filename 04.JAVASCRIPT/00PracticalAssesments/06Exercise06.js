/*Ejercicio 6

Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 

-Primer parámetro es un número float con x decimales
-Según parámetro es un int que indique el número de decimales al que redondear

Evitar usar el método toFixed()

Ejemplo de uso de la función:
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457

*/

function round(number, decimal){
    //guardamos en constante el número de decimales al que redondear
    const decimalPlaces = Math.pow(10, decimal);
    //multiplicamos el numero con decimales con el numero de decimales y lo redondeamos y eso lo dividimos 
    return Math.round(number*decimalPlaces) / decimalPlaces;  
}

let result1 = round(2.123, 2);
console.log(result1); 

let result2 = round(1.123456789, 6);
console.log(result2); 

let result3 = round(2.5689, 1);
console.log(result3);