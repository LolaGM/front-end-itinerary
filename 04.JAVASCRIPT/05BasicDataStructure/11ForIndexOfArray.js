function greaterThanTen(arr) {
    let newArr = []; //array vacío donde iremos empujando los elementos de arr que cumplan la condición de ser mayor que 10
    for (let i = 0; i < arr.length; i++) {
      console.log(i); //mostramos por pantalla las 6 posiciones del arr
        if (arr[i] > 10) {//comprueba el elemento de la condición de ser mayor
            newArr.push(arr[i]);
            console.log(newArr);//mostrar por pantalla lo que va añadiendo en cada iteración
        }
    }
    return newArr;
}
//llamamos a la función y le pasamos parámetros 
greaterThanTen([2, 12, 8, 14, 80, 0, 1]); //array con 6 posiciones

//ejercicio
function filteredArray(arr, elem) {
  let newArr = []; //array vacío que contendra el arr filtrado con lo que sí tenga presencia

  for (let i = 0; i < arr.length; i++) { //
  console.log(i);//muestra la posición de cada array individual como elemento
    if (arr[i].indexOf(elem) == -1) { //si 
      //Comprueba cada parte del elemento y SI NO está continúa el código
      newArr.push(arr[i]); //inserta el elemento del array al final del array newArr filtrado
    }
  }
  return newArr;//retorna el array filtrado
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]]));
console.log(filteredArray([[2, 3], [3, 13, 26], [19, 3, 9]], 2));
console.log(filteredArray([[3, 2, 3], [19, 3, 9]], 2));

/*
Hint 1---
A for loop must be used to search through every element in the array.
for (let i = 0; i < arr.length; i++) {}
Hint 2---
Every element of the array must then be compared to the elem parameter passed through the filteredArray() function.
if (arr[i].indexOf(elem) == -1) {
}
Hint 3----
If a match is NOT found then newArr have that entire subarray added. The push() function is very useful here.
newArr.push(arr[i]);
Once that entire subarray is added to newArr the loop continue with the next element.*/

/*
Iterar a través de todos los elementos de una matriz usando bucles for
A veces, cuando se trabaja con matrices, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular una matriz en función de qué elementos de datos cumplan con un determinado conjunto de criterios. JavaScript ofrece varios métodos integrados, cada uno de los cuales itera sobre las matrices de maneras ligeramente diferentes para lograr diferentes resultados (como every(), forEach(), map(), etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un forbucle simple.

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
Usando un forbucle, esta función itera y accede a cada elemento de la matriz, y lo somete a una prueba simple que hemos creado. De esta forma, hemos determinado fácil y programáticamente qué elementos de datos son mayores que 10, y hemos devuelto una nueva matriz, [12, 14, 80] que contiene esos elementos.

Hemos definido una función, filteredArray, que toma arr, una matriz anidada y elemcomo argumentos, y devuelve una nueva matriz. elemrepresenta un elemento que puede o no estar presente en una o más de las matrices anidadas dentro de arr. Modifique la función, utilizando un forbucle, para devolver una versión filtrada de la matriz pasada de modo que se elimine cualquier matriz anidada dentro de arrla que contiene .elem


 */