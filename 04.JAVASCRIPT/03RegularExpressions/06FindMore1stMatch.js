let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; //Twinkle añadido y detrás la g de global y la i para maýusculas o minúsc
let result = twinkleStar.match(starRegex); 
//en una variable guardamos la cadena aplicándole match le pasamos parámetro variable que contiene la regex

/*
Encuentra más que la primera coincidencia
Hasta ahora, solo ha podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aquí matchvolvería ["Repeat"].

Para buscar o extraer un patrón más de una vez, puede usar el indicador de búsqueda global: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
Y aquí matchdevuelve el valor.["Repeat", "Repeat", "Repeat"]

Usando la expresión regular starRegex, busque y extraiga ambas Twinklepalabras de la cadena twinkleStar.

Nota
Puede tener varias banderas en su expresión regular como/search/gi
 */