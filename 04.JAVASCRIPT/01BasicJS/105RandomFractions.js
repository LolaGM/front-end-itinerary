/*Genera fracciones aleatorias con JavaScript----------------------------------------------------------------
Los números aleatorios son útiles para crear un comportamiento aleatorio.

JavaScript tiene una Math.random()función que genera un número decimal aleatorio entre 0(inclusivo) y 1(exclusivo). Por lo tanto Math.random(), puede devolver un 0pero nunca devolver un 1.

Nota: Al igual que el almacenamiento de valores con el operador de asignación , todas las llamadas a funciones se resolverán antes de que se returnejecuten, por lo que podemos determinar returnel valor de la Math.random()función.

Cambie randomFraction para devolver un número aleatorio en lugar de devolver 0.

 */

function randomFraction() { // no toma argumentos porque devuelve un número aleatorio
    // Only change code below this line
    return Math.random(); 
    // con mayúsculas es un objeto que da funciones matemáticas como random() que no toma valores y que retorna un número aleatorio entre 0 y 1 pero nunca puede ser 1.Se podría indicar otros números de rango para que nos diera un número aleatorio
}
//llamamos a la función tal y como está y nos devolverá un núm aleatorio distinto cada vez con muchos decimales
console.log(randomFraction());