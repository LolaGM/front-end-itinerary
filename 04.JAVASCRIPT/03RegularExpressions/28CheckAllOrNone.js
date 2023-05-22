let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/*
Comprobar si hay todos o ninguno
A veces, los patrones que desea buscar pueden tener partes que pueden o no existir. Sin embargo, puede ser importante verificarlos de todos modos.

Puede especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto verifica cero o uno de los elementos anteriores. Puede pensar en este símbolo como diciendo que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias entre el inglés americano y el inglés británico y puede usar el signo de interrogación para hacer coincidir ambas ortografías.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Ambos usos del testmétodo devolverían true.

Cambie la expresión regular para que coincida con la versión de la palabra favRegexen inglés americano ( favorite) e inglés británico ( ).favourite

let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

*/