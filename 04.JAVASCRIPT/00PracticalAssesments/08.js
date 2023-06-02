/*Ejercicio 8

Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

La función debe tener 2 parámetros:

Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:

const result1 = convertBytesToSize(1000);
console.log(result); // 1KB


const result2 = convertBytesToSize(123456789);
console.log(result); // 123MB


const result3 = convertBytesToSize(-12145489451.5932, 5);
console.log(result); // -12.145GB

NOTA: 
-usar 1024 como medida informática
-Potencia medidas a otra
-Poder usar números negativos en lo que pasemos a la función. Para esto se usa Math.abs() 
es una función integrada en JavaScript que se utiliza para obtener el valor absoluto de un número. 
El valor absoluto de un número es su valor numérico sin tener en cuenta su signo, es decir, el número positivo equivalente.

*/

const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function convertBytesToSize(bytes, digitNumber = 3) {
    if (bytes === 0) {
        return '0 Bytes';
    }

    let k = 1024;
    let i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
    let convertedSize = parseFloat((Math.abs(bytes) / Math.pow(k, i)).toPrecision(digitNumber));
    let sizeLabel = sizes[i];

    return (bytes < 0 ? '-' : '') + convertedSize + ' ' + sizeLabel;
}

console.log(convertBytesToSize(0));
console.log(convertBytesToSize(12580000));
console.log(convertBytesToSize(-12145489451.5932, 5));



/*

actualizado el valor de k a 1024 para usarlo como la base para la conversión de bytes a otras unidades de tamaño.

También hemos utilizado Math.abs() para asegurarnos de que trabajemos con el valor absoluto de bytes, para que la función pueda manejar tanto números positivos como negativos.

El resto del código es similar al original. Calculamos el índice i basado en el logaritmo en base 1024 del valor absoluto de bytes. Luego, realizamos la conversión dividiendo el valor absoluto de bytes por Math.pow(k, i) y redondeamos el resultado utilizando parseFloat() y toPrecision(digitNumber).

Finalmente, agregamos una etiqueta de tamaño utilizando el array sizes y formateamos el resultado final con un posible signo negativo si bytes es menor que cero.

En el ejemplo, utilizamos console.log() para imprimir los resultados de la función convertBytesToSize().

parseFloat() solo analiza la parte inicial de la cadena hasta que encuentra un carácter no numérico.
Para convertir una cadena completa en un número entero, puedes usar parseInt() en su lugar.
*/
