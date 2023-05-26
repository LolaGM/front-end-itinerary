const squareList = arr => {
    // Only change code below this line
    //retorna un array al que le aplicamos los:
    //método filter para sólo numeros enteros en la primera línea 
    //método map en la segunda línea para que recorra el array como lo haría FOR y hacemos que nos devuelva los numeros cuadrados (num*num)
    return arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => (num * num));
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/*
Utilice el mapa, filtro o reducción de funciones de orden superior para resolver un problema complejo
Ahora que ha superado algunos desafíos usando funciones de orden superior como map(), filter()y reduce(), ahora puede aplicarlas para resolver un desafío más complejo.

Complete el código de la squareListfunción usando cualquier combinación de map(), filter()y reduce(). La función debe devolver una nueva matriz que contenga los cuadrados de solo los números enteros positivos (los números decimales no son enteros) cuando se le pasa una matriz de números reales. Un ejemplo de una matriz de números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Su función no debe usar ningún tipo de forbucle whileo la forEach()función.

const squareList = arr => {
 
  return arr;

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


*/