/* Use la recursividad para crear una cuenta regresiva
En un desafío anterior , aprendiste a usar la recursividad para reemplazar un forbucle. Ahora, veamos una función más compleja que devuelve una matriz de enteros consecutivos que comienzan con 1el número pasado a la función.

Como se mencionó en el desafío anterior, habrá un caso base . El caso base le dice a la función recursiva cuándo ya no necesita llamarse a sí misma. Es un caso simple donde el valor de retorno ya se conoce. También habrá una llamada recursiva que ejecuta la función original con diferentes argumentos. Si la función se escribe correctamente, eventualmente se alcanzará el caso base.

Por ejemplo, suponga que desea escribir una función recursiva que devuelva una matriz que contenga los números 1hasta n. Esta función deberá aceptar un argumento, n, que represente el número final. Entonces necesitará llamarse a sí mismo con valores progresivamente más pequeños de nhasta llegar a 1. Podrías escribir la función de la siguiente manera:

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));
El valor [1, 2, 3, 4, 5]se mostrará en la consola.

Al principio, esto parece contrario a la intuición ya que el valor de n disminuye , pero los valores en la matriz final aumentan . Esto sucede porque la inserción ocurre en último lugar, después de que la llamada recursiva haya regresado. En el punto donde nse inserta en la matriz, countup(n - 1)ya se ha evaluado y devuelto [1, 2, ..., n - 1].

Hemos definido una función llamada countdowncon un parámetro ( n). nLa función debe usar la recursividad para devolver una matriz que contenga los enteros 1según el nparámetro. Si se llama a la función con un número menor que 1, la función debe devolver una matriz vacía. Por ejemplo, llamar a esta función n = 5debería devolver la matriz [5, 4, 3, 2, 1]. Su función debe usar recursividad llamándose a sí misma y no debe usar bucles de ningún tipo.*/

// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1); // si n es mayor que 1 restale 1
        countArray.unshift(n); //coloca a ese array al principio ese n
        return countArray;//devuelve el valor
    }
}

countdown(5);
countdown(10);
console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(20));
  // Only change code above this line

  ///////////////////
//otras posibles soluciones:
//solucion 1
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
//solucion 2
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}
//solucion 3
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}
 //solucion 4
function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}