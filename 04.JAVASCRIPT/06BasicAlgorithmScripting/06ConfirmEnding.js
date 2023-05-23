function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target; 
    //método slice aplicado a str cadena
    //dentro de slice restamos el largo del string y el largo del objetivo
    //que todo eso junto sea exactamente igual a target para que de true o false

}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");


/*
Code Explanation
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.
----------------------------------------------------------------
Confirmar el final
Compruebe si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío se puede resolver con el .endsWith()método, que se introdujo en ES2015. Pero para el propósito de este desafío, nos gustaría que use uno de los métodos de subcadena de JavaScript en su lugar.

function confirmEnding(str, target) {
    return str;
}

confirmEnding("Bastian", "n");

*/