function findLongestWordLength(str) {
    let words = str.split(' '); //dividimos el str en palabras
    let maxLength = 0; //variable con número por el largo

    for (let i = 0; i < words.length; i++) {//recorremos con el for el array words
        if (words[i].length > maxLength) {//si el array de largo es mayor que cero maxlength
            maxLength = words[i].length; //entonces maxlength es igual al largo de ese array
        }
    }
    return maxLength;// retorna el largo en número de esa variable
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


/*
Code Explanation
Take the string and convert it into an array of words. 
Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.
Then check for the longest word by comparing the current word to the previous one and storing the new longest word. 
At the end of the loop just return the number value of the variable maxLength.
----------------------------------------------------------------
Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Su respuesta debe ser un número.

function findLongestWordLength(str) {
    return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/