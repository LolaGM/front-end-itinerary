function frankenSplice(arr1, arr2, n) { // parámetros array1 array2 y el índice n
    let finalArray = arr2.slice(); //creamos array que contenga copia de arr2
    for (let i = 0; i < arr1.length; i++) {//recorremos array nuevo creado 
        console.log(arr1[i]);
        console.log(finalArray);
        finalArray.splice(n, 0, arr1[i]);//le aplicamos método splice que cambia el contenido del array y le pasamos 3 parámetros
      n++; //incremento en 1
    }
    return finalArray;//devuelve el array final
  }

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*
Code Explanation
Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensure that neither arr1 or arr2 have been mutated.

Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, finalArray.

Now that we have an array that we can mutate on, we can iterate using for through every item in the first array arr1. For each item in the first array we can use the splice() function to insert the item into index n of finalArray.

We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

Finally, we return the localArray and end the function.
----------------------------------------------------------------

Hint 1
Create a copy of the second array inside of the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

Hint 2
Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

Hint 3
Increment the index after performing the splice.

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function

Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....

localArr is returned and the function is complete.
----------------------------------------------------------------
Cortar y empalmar
Se le dan dos matrices y un índice.([1, 2, 3], [4, 5, 6], 1);

Copie cada elemento de la primera matriz en la segunda matriz, en orden.

Comience a insertar elementos en el índice n de la segunda matriz.Es decir en el 4

Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.

function frankenSplice(arr1, arr2, n) {
    return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

*/