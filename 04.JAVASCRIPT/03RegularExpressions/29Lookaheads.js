let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);



/*
Previsión positiva y negativa
Las búsquedas anticipadas son patrones que le indican a JavaScript que mire hacia adelante en su cadena para buscar patrones más adelante. Esto puede ser útil cuando desea buscar varios patrones en la misma cadena.

Hay dos tipos de anticipación: anticipación positiva y anticipación negativa .

Una búsqueda anticipada positiva buscará asegurarse de que el elemento en el patrón de búsqueda esté allí, pero en realidad no lo coincidirá. Se utiliza una búsqueda anticipada positiva (?=...)donde el ...es la parte requerida que no coincide.

Por otro lado, una búsqueda anticipada negativa buscará asegurarse de que el elemento en el patrón de búsqueda no esté allí. Se utiliza una búsqueda anticipada negativa (?!...)donde ...está el patrón que no desea que esté allí. El resto del patrón se devuelve si la parte de anticipación negativa no está presente.

Las previsiones son un poco confusas, pero algunos ejemplos ayudarán.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Ambas matchllamadas regresarían ["q"].

Un uso más práctico de las búsquedas anticipadas es verificar dos o más patrones en una cadena. Aquí hay un (ingenuamente) simple verificador de contraseñas que busca entre 3 y 6 caracteres y al menos un número:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Utilice búsquedas anticipadas en el pwRegexpara buscar contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
*/