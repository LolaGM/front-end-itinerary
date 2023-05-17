/* const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
Se convierte en:*/
const sum = (...args) => {// aplicamos rest con 3 puntos y la constante args que luego borramos
    let total = 0; // declaramos el total de cero que luego retornamos
    for (let i = 0; i < args.length; i++) { //para leer este array usamos FOR como siempre recorriendo el largo length
      total += args[i]; // total = total +args[i]; 
    }
    return total; //retorna total con el valor
}

console.log(sum(1,2));
console.log(sum(4,2))

// aplicamos rest con 3 puntos y la constante args que luego borramos

/*Usar el parámetro Rest con parámetros de función
Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro de descanso para los parámetros de función. Con el parámetro rest, puede crear funciones que toman un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder más tarde desde dentro de la función.
Se suele usar tres puntos seguido de la palabra args argumentos pero se puede usar otra palabra
Lo que hace es flexibilizar el uso de parámetros al largo de un array (los que haya se usarán)

Mira este código:

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
La consola mostraría las cadenas You have passed 3 arguments.y You have passed 4 arguments..

El parámetro rest elimina la necesidad de usar el arguments objeto y nos permite usar métodos de matriz en la matriz de parámetros pasados ​​a la función howMany.

Modifique la función sum usando el parámetro rest de tal manera que la función sum pueda tomar cualquier cantidad de argumentos y devolver su suma.

*/