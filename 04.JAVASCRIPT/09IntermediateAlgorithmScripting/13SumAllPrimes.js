function sumPrimes(num) {
    // Check all numbers for primality
    let primeNumbers = []; //array vació que retornare con método reduce
    for (let i = 2; i <= num; i++) { //recorro el array que comienza en 2
        if (primeNumbers.every((prime) => i % prime !== 0)) //si cada primo del array su resultado es par
        primeNumbers.push(i); //entonces añadelo
    }
    return primeNumbers.reduce((sum, prime) => sum + prime, 0);//retorna ese array con la suma 
}

sumPrimes(10);

/*
Suma todos los números primos
Un número primo es un número entero mayor que 1 con exactamente dos divisores: 1 y él mismo. Por ejemplo, el 2 es un número primo porque solo es divisible por 1 y 2. En cambio, el 4 no es primo porque es divisible por 1, 2 y 4.

Reescribe sumPrimespara que devuelva la suma de todos los números primos que son menores o iguales que num.

function sumPrimes(num) {
    return num;
}

sumPrimes(10);

Hints
Hint 1
You can use the definition of prime numbers 6.2k or try learning and implementing your own Sieve of Eratosthenes 6.3k. Check this link 6.5k to see a StackOverflow discussion on various ways of finding prime numbers.

Hint 2
This problem can be hard if you create your own code to check for primes, so don’t feel bad if you use someone’s algorithm for that part. Research is an important part of coding!

In this solution we retain a list of all primes found so far and check if any of these numbers divide into each number in our range.
Note that this solution is actually less efficient than Solution 1 for very large values of n. Frequently growing the size of an array in JavaScript can be inefficient and slow.

*/