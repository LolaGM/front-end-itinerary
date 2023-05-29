function uniteUnique(arr) {
    let arrays = []; //array vacío
    //usamos dos bucles para recorrer el primer array arguments
    for (let i = 0; i < arguments.length; i++) { //segundo bucle 
        for (let j = 0; j < arguments[i].length; j++) {
        arrays.includes(arguments[i][j]) || arrays.push(arguments[i][j]); //array incluya array arguments con índices ij o empuja al final de arrays el array arguments con indices ij
        }
    }

    return arrays; //retorna ese array 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
Unión ordenada
Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final.

Los números únicos deben clasificarse según su orden original, pero la matriz final no debe clasificarse en orden numérico.

Consulte las pruebas de aserción para ver ejemplos.

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

*/