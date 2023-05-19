let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('bananas');
fruits.indexOf('oranges');
fruits.indexOf('pears');

//indexOf('bananas')devuelve -1 porque no existe en el array 
//indexOf('oranges')devuelve 2 
//indexOf('pears')devuelve 1(el primer índice en el que existe cada elemento).

//ejercicio
function quickCheck(arr, elem) {//función con dos argumentos:arr y elem
    if (arr.indexOf(elem) >= 0) {//comprobamos si en el array [] existe el elem mushrooms teniendo algún índice posición
      return true; //como no existe en el array y da -1, retornará false ya que es menor que 0
    }
    return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

/*Comprobar la presencia de un elemento con indexOf()
Dado que las matrices se pueden cambiar o mutar en cualquier momento, no hay garantía sobre dónde estará una parte de los datos en particular en una matriz determinada, o si ese elemento aún existe. Afortunadamente, JavaScript nos brinda otro método incorporado, indexOf()que nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz. indexOf()toma un elemento como parámetro y, cuando se llama, devuelve la posición o el índice de ese elemento, o -1 si el elemento no existe en la matriz.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates')devuelve -1, indexOf('oranges')devuelve 2y indexOf('pears')devuelve 1(el primer índice en el que existe cada elemento). */