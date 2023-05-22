let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);

/*
Encuentra personajes con coincidencia perezosa
En las expresiones regulares, una coincidencia codiciosa encuentra la parte más larga posible de una cadena que se ajusta al patrón de expresiones regulares y la devuelve como una coincidencia. La alternativa se llama coincidencia perezosa , que encuentra la parte más pequeña posible de la cadena que satisface el patrón de expresión regular.

Puede aplicar la expresión regular /t[a-z]*i/a la cadena "titanic". Esta expresión regular es básicamente un patrón que comienza con t, termina con iy tiene algunas letras en el medio.

Las expresiones regulares son codiciosas de forma predeterminada, por lo que la coincidencia devolvería ["titani"]. Encuentra la subcadena más grande posible para ajustarse al patrón.

Sin embargo, puede usar el ?carácter para cambiarlo a coincidencia perezosa. "titanic"comparado con la expresión regular ajustada de /t[a-z]*?i/devoluciones ["ti"].

Nota: se debe evitar analizar HTML con expresiones regulares, pero el patrón que hace coincidir una cadena HTML con expresiones regulares está completamente bien.

Corrija la expresión regular /<.*>/para devolver la etiqueta HTML <h1>y no el texto "<h1>Winter is coming</h1>". Recuerde que el comodín .en una expresión regular coincide con cualquier carácter.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

*/