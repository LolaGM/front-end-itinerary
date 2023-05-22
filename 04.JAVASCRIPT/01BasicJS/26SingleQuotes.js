const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
Citar cadenas con comillas simples
Los valores de cadena en JavaScript se pueden escribir con comillas simples o dobles, siempre que comience y termine con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan igual en JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
La razón por la que podría querer usar un tipo de comillas sobre la otra es si desea usar ambas en una cadena. Esto podría suceder si desea guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una <a>etiqueta con varios atributos entre comillas, todo dentro de una cadena.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
Sin embargo, esto se convierte en un problema si necesita usar las comillas más externas dentro de él. Recuerde, una cadena tiene el mismo tipo de comillas al principio y al final. Pero si tiene la misma cita en algún lugar en el medio, la cadena se detendrá antes de tiempo y generará un error.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Aquí badStrarrojará un error.

En goodStr anterior, puede usar ambas comillas de forma segura usando la barra invertida \como carácter de escape.

Nota: la barra invertida \no debe confundirse con la barra inclinada /. No hacen lo mismo.

Cambie la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de escape.

En este momento, la <a>etiqueta en la cadena usa comillas dobles en todas partes. Deberá cambiar las comillas externas por comillas simples para poder eliminar los caracteres de escape.
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/