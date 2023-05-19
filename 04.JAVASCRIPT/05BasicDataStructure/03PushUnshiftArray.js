function mixedNumbers(arr) {
        arr.push(7, 'VIII', 9); //añadir elementos que le pasamos al final del array 
        arr.unshift('I', 2, 'three');//añadir elementos al principio
    return arr; //retorna el valor del array después de los métodos aplicados
}

console.log(mixedNumbers(['IV', 5, 'six'])); 
//mostramos por pantalla la función con parámetros pero también lo añadido al principio y final

/*Agregue elementos a una matriz con push() y unshift()
La longitud de una matriz, como los tipos de datos que puede contener, no es fija. Las matrices se pueden definir con una longitud de cualquier número de elementos, y los elementos se pueden agregar o eliminar con el tiempo; en otras palabras, las matrices son mutables . En este desafío, veremos dos métodos con los que podemos modificar una matriz mediante programación: Array.push()y Array.unshift().

Ambos métodos toman uno o más elementos como parámetros y agregan esos elementos a la matriz a la que se llama el método; el push()método agrega elementos al final de una matriz y unshift()agrega elementos al principio. Considera lo siguiente:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumeralstendría el valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumeralstendría el valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Tenga en cuenta que también podemos pasar variables, lo que nos permite una mayor flexibilidad para modificar dinámicamente los datos de nuestra matriz.

Hemos definido una función, mixedNumbersa la que le estamos pasando una matriz como argumento. Modifique la función usando push()y unshift()para agregar 'I', 2, 'three'al principio de la matriz y 7, 'VIII', 9al final para que la matriz devuelta contenga representaciones de los números 1-9 en orden */