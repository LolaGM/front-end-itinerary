Array.prototype.myMap = function(callback) {
    const newArray = []; //arra vacío global dentro de la función que retornamos al final 
    // Only change code below this line
    for(let i =0; i < this.length; i++) { //usamos bucle for para recorrer ESTE array global
        newArray.push(callback(this[i],i,this));  //al array vacío le metemos al final la callback function con 3 elements: index de this, el i y el propio this
    }
    // Only change code above this line
    return newArray;
};

//La función de devolución de llamada  CALLBACK acepta tres argumentos:
//El primer argumento es el elemento actual que se está procesando. 
//El segundo es el índice de ese elemento 
//el tercero es la matriz sobre la que map se llamó al método.

/*
Code Explanation
Solve this challenge using a “for” loop and this

The use of a “for” loop allows us to apply the callback function to every item in the Global array and then push the modified items to the empty new array that is returned in the end.
*/

/*Implementar mapa en un prototipo
Como ha visto al aplicar Array.prototype.map(), o simplemente map()antes, el mapmétodo devuelve una matriz de la misma longitud que la que se invocó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga.

En otras palabras, mapes una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

Puede aprender mucho sobre el mapmétodo si implementa su propia versión. Se recomienda utilizar un forbucle o Array.prototype.forEach().

Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse exactamente como Array.prototype.map(). No debe utilizar el método incorporado map. ArraySe puede acceder a la instancia en el myMapmétodo usando this.

Array.prototype.myMap = function(callback) {
    const newArray = [];

    return newArray;
};


*/