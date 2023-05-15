/* Iterar números impares con un bucle For----------------------------------------------------------------
Los bucles for no tienen que iterar uno a la vez. Cambiando nuestro final-expression, podemos contar por números pares.

Comenzaremos en i = 0 y repetiremos while i < 10. Incrementaremos i en 2 cada ciclo con i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
ourArray ahora contendrá [0, 2, 4, 6, 8]. Cambiemos nuestro initializationpara que podamos contar por números impares.

Empuje los números impares del 1 al 9 para myArrayusar un for bucle.*/


// Setup
const myArray = [];
//en las condiciones del for podemos inicializarlo en cero o en 1 pero luego el valor de i en la condicion 3 vamos a sumarle
for (let i = 1; i < 10; i += 2) { 
    myArray.push(i);
    //i lo empezamos en 1 y vamos desde ahí de 2 en 2 hasta antes de 10
    //a i sería igual a i +2 y lo abreviamos i+=2
}
console.log(myArray);//mostrar por pantalla