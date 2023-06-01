/*Ejercicio 8

Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

La función debe tener 2 parámetros:

Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB


const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB


const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
*/
const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function convertBytesToSize(bytes,digitNumber = 3) {

    if(bytes == 0){
        return '0 Bytes';
    } 

    let k = 1000;
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toPrecision(digitNumber)) + ' ' + sizes[i];
}

convertBytesToSize(123456789);
convertBytesToSize(1000);

/*
const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];: Se define un array sizes que contiene las unidades de tamaño en orden ascendente desde "B" (bytes) hasta "YB" (yottabytes). Estas unidades se utilizarán para mostrar el resultado final.

En la función aportamos dos parámetros que son los bytes a calcular y el truncaje a 3 digitos

Con la condicional comprobamos que no se introduzca el valor cero en los bytes y si es así, le indicamos mensaje en string

En variable k indicamos el valor del kylobyte que puede ser 1000 o 1024 con la que calculamos los múltiplos de tamaño.

En otra constante i indice calculamos el valor y para ello usamos el método Floor de Math para redondear hacia abajo al que le pasamos como parámetro la división entre 1 byte son 1024 

Se usa Math.floor junto con Math.log para calcular el exponente al que se debe calcular y así obtener bytes
La fórmula utiliza el logaritmo en base 1024 para determinar en qué rango de tamaño se encuentra el valor de bytes. El resultado se redondea hacia abajo con Math.floor y se convierte en un número entero mediante parseInt.

Se aplica parseFloat junto con TOPRECISION para convertir el número resultante de la cantidad de dígitos que está indicada en 3.

Concatenamos el numero obtenido junto con la unidad correspondiende del array sizes


Math.pow(1024, i) se usa para elevar la base k a la potencia i para así obtener el tamaño en unidades de tamaño dividiendo los bytes entre math.pow(k,i)

*/
