// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
    oopsGlobal = 5; //no usamos las palabras clave
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/*
Alcance global y funciones
En JavaScript, el alcance se refiere a la visibilidad de las variables. Las variables que se definen fuera de un bloque de funciones tienen alcance global . Esto significa que se pueden ver en todas partes en su código JavaScript.

Las variables que se declaran sin las palabras clave leto constse crean automáticamente en el globalalcance. Esto puede crear consecuencias no deseadas en otras partes de su código o al ejecutar una función nuevamente. Siempre debe declarar sus variables con leto const.

Usando leto const, declare una variable global nombrada myGlobalfuera de cualquier función. Inicialícelo con un valor de 10.

Dentro de la función fun1, asigne 5 sin usar las palabras clave var, let o const oopsGlobal .

Assign 5 to oopsGlobal here:

function fun1() {
    

}

Only change code above this line:

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

*/