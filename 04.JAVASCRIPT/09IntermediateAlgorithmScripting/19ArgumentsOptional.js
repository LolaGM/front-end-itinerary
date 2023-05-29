function addTogether() {
const [first, second] = arguments; //desestructuramos la variable asignandole arguments

    if (typeof (first) === "number") { //si el tipo de dato de first es un numero
        if (typeof (second) === "number") return first + second; //si el tipo de second es un numero retorna concatenacion de 1º y 2º
        if (arguments.length === 1) return (second) => addTogether(first, second); //si el largo del array arguments es 1, retorna 
    }
}

addTogether(2,3);

/*
Argumentos Opcional
Cree una función que sume dos argumentos. Si solo se proporciona un argumento, devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3)debe devolver 5y addTogether(2)debe devolver una función.

Llamar a esta función devuelta con un solo argumento devolverá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3)regresa 5_

Si alguno de los argumentos no es un número válido, devuelve indefinido.

function addTogether() {
    return false;
}

addTogether(2,3);

It has to add two numbers passed as parameters and return the sum.
It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
It has to check if it has one or two arguments passed. More are ignored.
If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

*/