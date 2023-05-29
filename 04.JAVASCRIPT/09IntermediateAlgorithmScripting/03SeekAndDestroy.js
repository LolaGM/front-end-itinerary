function destroyer(arr) {
    return arr. //devuelve ese array filtrado por elemento
    filter(element =>![...arguments].includes(element)); //que ese elemento sea distinto a una copia del obj arguments y si incluye (true /false) ese element
  }
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //muestra por pantalla los elementos de arr que sean del mismo valor

/*
Buscar y destruir
Se le proporcionará una matriz inicial (el primer argumento de la destroyerfunción), seguida de uno o más argumentos. Elimina todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que usar el arguments objeto.

function destroyer(arr) {
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

*/