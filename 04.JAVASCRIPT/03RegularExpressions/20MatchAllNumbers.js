let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

/*
Coincide con todos los números
Ha aprendido métodos abreviados para patrones de cadenas comunes, como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con minúsculas d. Esto es igual a la clase de caracteres [0-9], que busca un solo carácter de cualquier número entre cero y nueve.

Use la clase de caracteres abreviados \dpara contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.

let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;

*/