/*
Por defecto este método ordenará los elementos con base a la posición del valor del string de acuerdo a su valor UNICODE[ref], y retorna el arreglo ordenado.

*/

let  arreglo = [1,2,3,4,5,10,'a','b',100,200];

arreglo.sort();
console.log(arreglo); // output [1, 10, 100, 2, 200, 3, 4, 5, "a", "b"]


/*
En el ejemplo anterior, podemos observar que el orden de los valores quizás no es el que esperábamos, ya que por lógica debería de ordenar de manera correcta los números y después las letras; por fortuna el método sort nos permite introducir una función para personalizar la forma de ordenamiento.

*/

//usando arrow functions:

let numbers = [200, 4, 2, 5, 1, 3, 100];
numbers.sort((a, b) => a - b); //orden ascendente
console.log(numbers); //output [1, 2, 3, 4, 5, 100, 200]

let numbersDesc = [200, 4, 2, 5, 1, 3, 100];
numbersDesc.sort((a, b) => b - a); //orden Descendente
console.log(numbersDesc); 
//(7) [200, 100, 5, 4, 3, 2, 1]