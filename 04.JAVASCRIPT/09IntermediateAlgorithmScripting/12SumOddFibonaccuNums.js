function sumFibs(num) {
    let arr = []; //array vacío que devolveremos al final de la función
    //bucle for que inicializa, compara que sea menor o igual al numero pasado como parámetro de la función, y que en cuanto al incremento que i sea la suma del último del array y del penúltimo O que sea 1
    for (let i = 0; i <= num; i = arr[arr.length - 1] + arr[arr.length - 2] || 1) {
        console.log(arr); //vemos cada vez que se añade a arr
        arr.push(i); //sumamos al final del arr ese i
    }

    return arr.filter(el => el % 2 !== 0).reduce((acc, cur) => acc + cur);
}

sumFibs(4);

/*
Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales que num.

Los primeros dos números en la secuencia de Fibonacci son 0 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros siete números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10)debe volver 10porque todos los números impares de Fibonacci menores o iguales que 10son 1, 1, 3 y 5.

function sumFibs(num) {
    return num;
}

sumFibs(4);

Hint 1
To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

Hint 2
To check if a number is even all you have to check is if number % 2 == 0.

Hint 3
As you get the next odd one, don’t forget to add it to a global variable that can be returned at the end. result += currNumber; will do the trick.

*/