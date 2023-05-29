function translatePigLatin(str) {
    return "aeiou".includes(str[0]) //usamos método includes despues de string y le pasamos el array string con indice 0
        ? str + "way" //condicional ternario si es verdad que empieza por vocal,le concatena a str el way al final
        : str.replace(/(^[^\Waeiou]+)(.*)/, "$2$1ay"); //si es falso,reemplaza la consonante 
}

translatePigLatin("consonant"); //muestra 'onsonantcay'

/*

Jerga
Pig Latin es una forma de alterar palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y añádala ay.

- Si una palabra comienza con una vocal, solo agregue wayal final.

Traduce la cadena provista a Pig Latin. Se garantiza que las cadenas de entrada son palabras en inglés en minúsculas.

function translatePigLatin(str) {
    return str;
}

translatePigLatin("consonant");

Hint 1
You will probably want to use regular expressions. This will allow you to convert the words easily.

Hint 2
If the first character is a vowel, then take that whole word and add ‘way’ at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add ‘ay’. This might be confusing but, it is not just the first consonant but all of them before the first vowel.

Hint 3
You will need to use everything you know about string manipulation to get the last part right. However, it can be done with substr alone.
*/