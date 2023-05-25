// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(arg) { //le pasamos argumento a la función
    return arg + 1;

  // Only change code above this line
}

//En este caso no es necesario pero podríamos llamar a la función y le podríamos pasar valores que quisieramos
console.log(incrementer(2)); 

/*
Pasar argumentos para evitar la dependencia externa en una función
El último desafío fue un paso más cerca de los principios de la programación funcional, pero todavía falta algo.

No modificamos el valor de la variable global, pero la función incrementerno funcionaría sin la variable global fixedValuepresente.

Otro principio de la programación funcional es declarar siempre tus dependencias explícitamente. Esto significa que si una función depende de la presencia de una variable u objeto, pase esa variable u objeto directamente a la función como argumento.

Hay varias buenas consecuencias de este principio. La función es más fácil de probar, sabe exactamente qué entrada necesita y no dependerá de nada más en su programa.

Esto puede brindarle más confianza cuando modifica, elimina o agrega código nuevo. Sabría lo que puede o no puede cambiar y puede ver dónde están las trampas potenciales.

Finalmente, la función siempre produciría la misma salida para el mismo conjunto de entradas, sin importar qué parte del código la ejecute.

Actualicemos la incrementerfunción para declarar claramente sus dependencias.

Escriba la incrementerfunción para que tome un argumento y luego devuelva un resultado después de aumentar el valor en uno.

>>>>>>> The global variable
let fixedValue = 4;

>>>> Only change code below this line
function incrementer() {


>>>>>>>>>Only change code above this line
}

*/