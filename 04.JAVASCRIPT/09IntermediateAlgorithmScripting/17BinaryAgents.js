function binaryAgent(str) {
    return str //pasamos varios métodos a str
    .split(" ")  //partimos en unidades
    .map(char => String.fromCharCode(parseInt(char, 2))) //esas unidades las mapeamos y con el objeto String lo pasamos a código UTF-16 letras con parseInt ese elemento char con base 2
    .join(""); //lo unimos sin espacios
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
Agentes binarios
Devuelve una oración traducida al inglés de la cadena binaria pasada.

La cadena binaria estará separada por espacios.

function binaryAgent(str) {
    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

String.split()

Array.map()

String.fromCharCode() se usa para crear una cadena a partir de la secuencia dada de unidades de código UTF-16. Este método devuelve una cadena, no un objeto de cadena.

parseInt() Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. 
cadena -->Una cadena que representa el valor que se desea convertir.
base -->Un entero que representa la base de la mencionada cadena.

Array.join()

*/