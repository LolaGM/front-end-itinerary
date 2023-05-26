function checkPositive(arr) {
    // Only change code below this line
      return arr.some(function(value){ //metodo some aplicado al array y con la funcion le pasamos el valor 
        return value >=0; //retornamos si es valor es mayor o igual a cero
    })

// Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5])); //veremos por pantalla true

/*
Use el método some para verificar que cualquier elemento en una matriz cumpla con un criterio
El somemétodo funciona con matrices para verificar si algún elemento pasa una prueba en particular. Devuelve un valor booleano, truesi alguno de los valores cumple los criterios, falsesi no.

Por ejemplo, el siguiente código comprobaría si algún elemento de la numbersmatriz es inferior a 10:

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
    return currentValue < 10;
});
El somemétodo devolvería true.

Use el somemétodo dentro de la checkPositivefunción para verificar si algún elemento arres positivo. La función debe devolver un valor booleano.

function checkPositive(arr) {
  
}

checkPositive([1, 2, 3, -4, 5]);

*/