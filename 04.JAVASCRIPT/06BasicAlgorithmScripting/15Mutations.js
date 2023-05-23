function mutation(arr) {
    const test = arr[1].toLowerCase(); //hago los dos cadenas a minusculas y las guardo en dos variables: una prueba y otra objetivo
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {//recorro la variable test 
        if (target.indexOf(test[i]) < 0) return false;//compruebo si la variable objetivo tiene un indice encontrable comparado con la variable test y que este sea menor que cero 
    }
    return true; //retorna verdadero
}

mutation(["hello", "hey"]); //false
mutation(["lola", "lalo"]); //true


/*
Code Explanation
First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

(El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta)
If they are all found, the loop will finish without returning anything and we get to return true.

<<<<<<<<<<<<<<<<<<<<<<<
Hint 1
If everything is lowercase it will be easier to compare.
Hint 2
Our strings might be easier to work with if they were arrays of characters.
Hint 3
A loop might help. Use indexOf() to check if the letter of the second word is on the first.

<<<<<<<<<<<<<<<<<<<

Mutaciones
Retorna true si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

Por ejemplo, ["hello", "Hello"] debería regresar true porque todas las letras en la segunda cadena están presentes en el primer caso, ignorando.

Los argumentos ["hello", "hey"] deberían regresar false porque la cadena hello no contiene un y.

Por último, ["Alien", "line"] debería volver true porque todas las letras de line están presentes en Alien.

function mutation(arr) {
    return arr;
}

mutation(["hello", "hey"]);

*/