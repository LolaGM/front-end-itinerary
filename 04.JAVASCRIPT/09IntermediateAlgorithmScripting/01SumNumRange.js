function sumAll(arr) {
    let maxNum = Math.max(arr[0], arr[1]); //la función Math.max encuentra el valor máximo de dos numeros y lo guardamos en variable maxNum
    let minNum = Math.min(arr[0], arr[1]); //la función Math.min encuentra el valor mínimo de dos numeros y lo guardamos en variable minNum
    let sumBetween = 0; //variable que guardará el resultado de la suma entre esos numeros y que ahora es cero
    for (let i = minNum; i <= maxNum; i++) { //recorremos con for e inicializa en el numero min y el valor se para en el mayor o igual que el max num y se le suma 1+
      sumBetween += i;// sumBetween = sumBetween + i
    }
    return sumBetween;//retorna ese valor
  }
  sumAll([2,5]);
  sumAll([1, 4]);
  console.log(sumAll([2,5]));
  console.log(sumAll([1,4]));

/*
Suma todos los números en un rango
Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre vendrá primero.

Por ejemplo, sumAll([4,1])debe regresar 10porque la suma de todos los números entre 1 y 4 (ambos inclusive) es 10.

function sumAll(arr) {
    return 1;
}

sumAll([1, 4]);

Code Explanation
First create a variable to store the max number between two.
The same as before for the Smallest number.
We create a accumulator variable to add the numbers.
Since the numbers might not be always in order, using max() and min() will help organize.

Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in between so this would require a way to get those numbers.
*/