let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)



/*
Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input


Restringir posibles nombres de usuario
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en sus sitios favoritos.

Debe verificar todos los nombres de usuario en una base de datos. Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario solo pueden usar caracteres alfanuméricos.

Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.

Cambie la expresión regular userCheckpara que se ajuste a las restricciones enumeradas anteriormente.

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
*/