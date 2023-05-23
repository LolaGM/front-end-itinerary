function truncateString(str, num) {//cadena y número de reducción
    if (str.length > num) { //si el largo de la cadena es mayor que el num
        return str.slice(0, num) + "...";//si se cumple retorna cortando la cadena en la posición cero y el num de elementos y le sumamos la cadena puntos suspensivos
    } else {//si no se cumple, retorna el retorna el string al completo
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 20);
truncateString("A-tisket a-tasket A green and yellow basket", 9);
truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", 7);
truncateString("A-tisket a-tasket A green and yellow basket", 6);
truncateString("A-tisket a-tasket A green and yellow basket", 0); //con cero solo devuelve los puntos suspensivos

/*

We start off with a simple if statement to determine one of two outcomes… Resultados
If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
----------------------------------------------------------------
Truncar una cadena (reducir el tamaño)
Trunca una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). 
Devuelve la cadena truncada con un ...final.

Hint 1
Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

Hint 2
You will need to use the slice() method and specify where to start and where to stop.

function truncateString(str, num) {
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/