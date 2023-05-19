let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
//thatArraytendría el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'] porque se ha ñadido el array a este otro array

//ejercicio:
function spreadOut() {
    let fragment = ['to', 'code']; //variable con array
    let sentence = ['learning', ...fragment, 'is', 'fun']; // variable con array incluido con ...
    return sentence;
}

console.log(spreadOut());

/* Combinar matrices con el operador de propagación
Otra gran ventaja del operador de dispersión es la capacidad de combinar matrices, o de insertar todos los elementos de una matriz en otra, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar arreglos, pero esto solo nos permite combinar arreglos al final de uno y al comienzo de otro. La sintaxis extendida hace que la siguiente operación sea extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
thatArraytendría el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis extendida, acabamos de lograr una operación que hubiera sido más compleja y detallada si hubiéramos usado métodos tradicionales.

Hemos definido una función spreadOutque devuelve la variable sentence. Modifique la función utilizando el operador de propagación para que devuelva la matriz ['learning', 'to', 'code', 'is', 'fun'].*/