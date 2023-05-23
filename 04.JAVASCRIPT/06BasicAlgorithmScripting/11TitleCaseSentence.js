function titleCase(str) {
    return str
    .toLowerCase() //pasamos a minúsculas
    .split(" ") //partimos str que es una frase en palabras
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" "); //unimos de nuevo las palabras en un string
}

titleCase("I'm a little tea pot");
titleCase("hello there");

/*
Code Explanation
We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.

Hint 1
You should start by splitting the string into an array of words. -->SPLIT
Hint 2
You should make the word lowercase -->.TOLOWERCASE and make the first letter uppercase.-->TOUPPERCASE
Hint 3
You will need to create a new string with pieces of the updated words.

----------------------------------------------------------------
Título Caso una Oración
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de la palabra esté en minúsculas.

A los efectos de este ejercicio, también debe escribir en mayúsculas las palabras de conexión como the y of.

function titleCase(str) {
    return str;
}

titleCase("I'm a little tea pot");

*/