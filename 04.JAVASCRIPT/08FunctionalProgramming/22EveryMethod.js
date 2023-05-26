function checkPositive(arr) {
    return arr.every(function(value){ //usamos every con su functión y valor 
        return value >=0; // retorna si el valor es mayor oigual a cero (o sea positivo y no negativo)
    })
}

checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5])); //retorna booleano false si hay algún elemento que no sea mayor o igual a cero


checkPositive([1, 2, 3, 4, 5]);
console.log(checkPositive([1, 2, 3, 4, 5])); //retorna booleano true si hay algún elemento mayor o igual a cero

/*
Use el método every para verificar que cada elemento en una matriz cumpla con un criterio
El everymétodo funciona con matrices para verificar si cada elemento pasa una prueba en particular. Devuelve un valor booleano, truesi todos los valores cumplen los criterios, falsesi no.

Por ejemplo, el siguiente código comprobaría si cada elemento de la numbersmatriz es inferior a 10:

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
El everymétodo volvería falseaquí.

Use el everymétodo dentro de la checkPositivefunción para verificar si cada elemento arres positivo. La función debe devolver un valor booleano.

function checkPositive(arr) {
 
}

checkPositive([1, 2, 3, -4, 5]);

*/