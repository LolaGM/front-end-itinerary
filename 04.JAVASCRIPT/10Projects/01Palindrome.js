function palindrome(str) {
    const regexp = /[^a-zA-Z0-9]/g; //expresión regular que elimina caracteres no alfanuméricos. POdríamos usar también /[\W_]/g para esto mismo
    //guardamos en constante la cadena del derecho llevada a minúsculas. Usamos replace para identificar y reemplazar todos los caracters que no sean letras.Luego usamos caracteres vacíos que reemplazarán a lo que no coincida con la regex
    const straightStr = str 
      .toLowerCase()
      .replace(regexp,'');
    //Se crea una nueva variable reversedStr donde al dividir cleanStr en un array de caracteres individuales utilizando split(''), se invierte el orden de los elementos del array usando reverse() y luego se une nuevamente en una cadena utilizando join(''). Esto nos da la versión invertida de la cadena que luego compararemos
    const reversedStr = straightStr
        .split('')
        .reverse()
        .join('');
    return straightStr === reversedStr; //comparamos ambas cadenas y retorna true o false si son palíndromos o no
  }
  
  palindrome("eye"); //true
  palindrome("Lola"); //false

/*

Comprobador de palíndromo
Devuelve truesi la cadena dada es un palíndromo. De lo contrario, regresa false.

Un palíndromo es una palabra u oración que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, el caso y el espacio.

Nota: deberá eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en el mismo caso (minúsculas o mayúsculas) para verificar si hay palíndromos.

Pasaremos cadenas con diferentes formatos, como racecar, RaceCar y race CARentre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2y 2_A3*3#A2.

function palindrome(str) {
    return true;
}

palindrome("eye");

*/