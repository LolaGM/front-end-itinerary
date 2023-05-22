let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);


/*
Coincidencia de caracteres que aparecen cero o más veces
El último desafío usó el signo más +para buscar caracteres que ocurren una o más veces. También hay una opción que hace coincidir los caracteres que aparecen cero o más veces.

El caracter para hacer esto es el asterisco o estrella: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
/*
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
En orden, las tres matchllamadas devolverían los valores ["goooooooo"], ["g"]y null.

Para este desafío, chewieQuotese ha inicializado como la cadena Aaaaaaaaaaaaaaaarrrgh!detrás de escena. Cree una expresión regular chewieRegexque use el *carácter para que coincida con un Acarácter en mayúscula seguido inmediatamente por cero o más acaracteres en minúscula en chewieQuote. Su expresión regular no necesita banderas ni clases de caracteres, y no debe coincidir con ninguna de las otras comillas.

let chewieRegex = /change/; // Change this line

Only change code above this line:

let result = chewieQuote.match(chewieRegex);

*/