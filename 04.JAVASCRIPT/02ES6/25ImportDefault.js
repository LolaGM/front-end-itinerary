//OJO que no lleva llaves lo que se importa
import subtract from "./math_functions.js"

subtract(7,4);

/*
Importar una exportación predeterminada
En el último desafío, aprendiste sobre export defaulty sus usos. Para importar una exportación predeterminada, debe usar una importsintaxis diferente. En el siguiente ejemplo, addes la exportación predeterminada del math_functions.jsarchivo. Aquí está cómo importarlo:

import add from "./math_functions.js";
La sintaxis difiere en un lugar clave. El valor importado, add, no está entre llaves ( {}). addaquí hay simplemente un nombre de variable para cualquiera que sea la exportación predeterminada del math_functions.jsarchivo. Puede usar cualquier nombre aquí al importar un valor predeterminado.

En el código siguiente, importe la exportación predeterminada del math_functions.jsarchivo, que se encuentra en el mismo directorio que este archivo. Dale a la importación el nombre subtract.
*/