let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Changed this line to have the . period as a comodín and write un to match the words  run, sun, fun, pun, nuny bun
let result = unRegex.test(exampleStr);
//en una variable guardamos la cadena aplicándole match le pasamos parámetro variable que contiene la regex

/*
Hacer coincidir cualquier cosa con el período comodín
A veces no conocerá (o no necesitará) los caracteres exactos de sus patrones. Pensar en todas las palabras que coincidan, por ejemplo, con una falta de ortografía llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo usando el carácter comodín:.

El carácter comodín .coincidirá con cualquier carácter. El comodín también se llama doty period. Puede usar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir hug, huh, huty hum, puede usar la expresión regular /hu./para hacer coincidir las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Ambas testllamadas regresarían true.

Complete la expresión regular unRegexpara que coincida con las cadenas run, sun, fun, pun, nuny bun. Su expresión regular debe usar el carácter comodín.
*/