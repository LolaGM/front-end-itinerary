function chunkArrayInGroups(arr, size) {
    const newArr = [];//declaras un array nuevo vacío que luego retornamos
    for (let i = 0; i < arr.length; i += size) {//recorres con for el arr y el incremento que sea i con suma de i más size
        console.log(arr[i]);//muestro por pantalla 
        newArr.push(arr.slice(i, i + size)); 

    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //divide el array en elementos en dos sub arrays
chunkArrayInGroups(["a", "b", "c", "d"], 3); //divide el array en dos arrays con 3 elementos el primero
chunkArrayInGroups(["a", "b", "c", "d"], 1);//divide el array en elementos individuales

/*


Hint 1
The links above suggest to use Array.push(), so let’s start by first creating a new array to store the smaller arrays we will soon have like this:

var newArray = [];
Hint 2
Next we’ll need a for loop to loop through arr.

Hint 3
Finally, we need a method to do the actual splitting and we can use Array.slice() to do that. The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.push() all work together.


mono fornido
Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional.

function chunkArrayInGroups(arr, size) {
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/