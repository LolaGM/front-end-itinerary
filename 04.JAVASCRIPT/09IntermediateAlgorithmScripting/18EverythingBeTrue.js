function truthCheck(collection, pre) {
    //retorna array recorrido con map en el que un element le pasamos el predicado(segundo argumento) y que CADA UNO de ese elemento NO NO sea element
    return collection.map(el => el[pre]).every(el => !!el);
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"); //muestra false

/*
Que todo sea verdad
Comprueba si el predicado (segundo argumento) es verdadero en todos los elementos de una colección (primer argumento).

En otras palabras, se le proporciona una colección de matriz de objetos. El predicado preserá una propiedad de objeto y deberá devolver truesi su valor es truthy. De lo contrario, regresa false.

En JavaScript, truthylos valores son valores que se traducen truecuando se evalúan en un contexto booleano.

Recuerde, puede acceder a las propiedades de los objetos a través de la notación de puntos o []la notación.

function truthCheck(collection, pre) {
    return pre;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

Array.map()
Array.every()

La exclamación doble de JavaScript !!(not not) ofrece los mismos resultados que las expresiones booleanas (true, false). El operador de doble exclamación en JavaScript es una sola repetición del operador lógico unario !(not).

*/