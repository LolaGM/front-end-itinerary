function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"; //guardamos en variable el alfabeto
    let first = alphabet.indexOf(str[0]); //en variable aparte guardamos la búsqueda por índice del str0
    let last = alphabet.indexOf(str.slice(-1));  //en variable aparte guardamos la búsqueda por índice del str usando slice con el último en length

    for (let i = first; i <= last; i++) { //recorremos con bucle inicializando en first, que sea menor o iogual a last y que se incremente
      if (!str.includes(alphabet[i])) { //si el string no incluye el indice del alfabeto devuelve indice alfabeto
        return alphabet[i];
        }
    }
}

fearNotLetter("abce");
fearNotLetter("fghk");

/*
Cartas perdidas
Encuentre la letra que falta en el rango de letras aprobadas y devuélvala.

Si todas las letras están presentes en el rango, devuelve undefined.

function fearNotLetter(str) {
    return str;
}

fearNotLetter("abce");

El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.


You will need to convert from character to ASCII code using the two methods provided in the description.

Hint 2
You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

Hint 3
You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.
*/