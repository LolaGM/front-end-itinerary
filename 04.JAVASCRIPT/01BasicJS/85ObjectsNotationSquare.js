/*Acceso a propiedades de objetos con notación de corchetes
La segunda forma de acceder a las propiedades de un objeto es la notación de corchetes ( []). Si la propiedad del objeto al que intenta acceder tiene un espacio en su nombre, deberá usar la notación de corchetes.

Sin embargo, aún puede usar la notación de corchetes en las propiedades del objeto sin espacios.

Aquí hay una muestra del uso de la notación de corchetes para leer la propiedad de un objeto:

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"]sería la cadena Kirk, myObj['More Space']sería la cadena Spocky myObj["NoSpace"]sería la cadena USS Enterprise.

Tenga en cuenta que los nombres de propiedad con espacios en ellos deben estar entre comillas (simples o dobles).

 */

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

  // Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line