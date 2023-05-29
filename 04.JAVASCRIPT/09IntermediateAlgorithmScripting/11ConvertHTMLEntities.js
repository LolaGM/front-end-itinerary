function convertHTML(str) {
    return str //retorna ese array con  3 métodos: split,map,join
        .split("") //partimos en palabras
        .map(el => { //analizamos el array y le pasamos element con SWITCH para cada caso de caracter que fuera posible
            switch (el) {
            case "&":
                return "&amp;"; //&
                break;
            case "<":
                return "&lt;"; // <
                break;
            case ">":
                return "&gt;";  // >
                break;
            case '"':
                return "&quot;"; // comillas dobles ""
                break;
            case "'":
                return "&apos;"; //''
                break;
            default:
                return el; //por defecto retorna el element
                break;
        }
    })
        .join(""); //une de nuevo lo partido ya con el elemento retornado (sustituido)
}

convertHTML("Dolce & Gabbana");// 'Dolce &amp; Gabbana'

convertHTML("<h1>"); // '&lt;h1&gt;'

/*
Convertir entidades HTML
Convierta los caracteres &, <, >, "(comillas dobles) y '(apóstrofe) de una cadena en sus entidades HTML correspondientes.

function convertHTML(str) {
    return str;
}

convertHTML("Dolce & Gabbana");

*/