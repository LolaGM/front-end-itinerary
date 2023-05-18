//usamos IMPORT seguido de * AS  seguido del nombre del objeto FROM rutaarchivo
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/*
Use * para importar todo desde un archivo
Suponga que tiene un archivo y desea importar todo su contenido al archivo actual. Esto se puede hacer con la import * assintaxis. Aquí hay un ejemplo donde el contenido de un archivo llamado math_functions.jsse importa a un archivo en el mismo directorio:

import * as myMathModule from "./math_functions.js";
La declaración anterior importcreará un objeto llamado myMathModule. Este es solo un nombre de variable, puede nombrarlo cualquier cosa. El objeto contendrá todas las exportaciones desde math_functions.jsél, por lo que puede acceder a las funciones como lo haría con cualquier otra propiedad del objeto. Así es como puede usar las funciones addy subtractque se importaron:

myMathModule.add(2,3);
myMathModule.subtract(5,3);
El código de este archivo requiere el contenido del archivo: string_functions.js, que se encuentra en el mismo directorio que el archivo actual. Use la import * assintaxis para importar todo, desde el archivo a un objeto llamado stringFunctions.
*/