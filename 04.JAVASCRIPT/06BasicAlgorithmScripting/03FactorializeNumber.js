function factorialize(num) {//usando recursividad de usar la misma función dentro de la funcioón
    if (num === 0) { //si el numero es estrictamente cero
        return 1;//devuelve 1
    } //si no
    return num * factorialize(num - 1); // devuelve num multiplicado y le restas 1
}

factorialize(5);

/*

(using Recursion)
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

Code Explanation
Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow 1.8k.
----------------------------------------------------------------
Factorizar un número
Devuelve el factorial del entero proporcionado.

Si el entero se representa con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales a menudo se representan con la notación abreviada n!

Por ejemplo:5! = 1 * 2 * 3 * 4 * 5 = 120

1 por 2,2
2 por 3,6
6 por 4,24
24 por 5, 120

Solo se proporcionarán a la función números enteros mayores o iguales a cero.

function factorialize(num) {
    return num;
}

factorialize(5);

*/