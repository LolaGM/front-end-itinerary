function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base,exp);
console.log(power);

/*
Capturar argumentos pasados ​​en el orden incorrecto al llamar a una función
Continuando con la discusión sobre las funciones de llamada, el siguiente error a tener en cuenta es cuando los argumentos de una función se proporcionan en el orden incorrecto. Si los argumentos son de diferentes tipos, como una función que espera una matriz y un número entero, es probable que genere un error de tiempo de ejecución. Si los argumentos son del mismo tipo (todos los números enteros, por ejemplo), la lógica del código no tendrá sentido. Asegúrese de proporcionar todos los argumentos requeridos, en el orden correcto para evitar estos problemas.

La función raiseToPowereleva una base a un exponente. Desafortunadamente, no se llama correctamente: corrija el código para que el valor de powersea el 8 esperado.

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
*/