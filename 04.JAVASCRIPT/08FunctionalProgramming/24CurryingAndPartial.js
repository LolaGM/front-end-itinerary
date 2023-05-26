function add(x) {
    // Only change code below this line
    return function(y) {
        return function(z){
          return x + y + z; //en la función final devolvemos la suma de las 3
        }
    }
  
    // Only change code above this line
  }
  
  const sum = x => y => z => x +  y + z; //variable que contiene las funciones 
  (add(10)(20)(30));
  (add(1)(2)(3));
  console.log((add(10)(20)(30)));
  console.log((add(1)(2)(3)));



/*
Introducción al Curry y Aplicación Parcial
La aridad de una función es el número de argumentos que requiere. Currar una función significa convertir una función de N aridad en N funciones de aridad 1.

En otras palabras, reestructura una función para que tome un argumento, luego devuelva otra función que tome el siguiente argumento, y así sucesivamente.

Aquí hay un ejemplo:

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
curried(1)(2)regresaría 3_

Esto es útil en su programa si no puede proporcionar todos los argumentos a una función al mismo tiempo. Puede guardar cada llamada de función en una variable, que contendrá la referencia de función devuelta que toma el siguiente argumento cuando esté disponible. Aquí hay un ejemplo usando la función curry en el ejemplo anterior:

const funcForY = curried(1);
console.log(funcForY(2)); // 3
De manera similar, la aplicación parcial se puede describir como aplicar algunos argumentos a una función a la vez y devolver otra función que se aplica a más argumentos. Aquí hay un ejemplo:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
Rellene el cuerpo de la addfunción para que use curry para agregar parámetros x, yy z.

function add(x) {
 
}

add(10)(20)(30);

*/