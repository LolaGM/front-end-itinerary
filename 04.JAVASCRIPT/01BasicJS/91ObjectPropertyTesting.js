/* Probar objetos para propiedades--
Para verificar si una propiedad en un objeto dado existe o no, puede usar el método siguiente:
.hasOwnProperty(). 

someObject.hasOwnProperty(someProperty) devuelve true o false dependiendo de si la propiedad se encuentra realmente en el objeto o no.

Ejemplo:

function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

La primera checkForProperty llamada de función contiene entre paréntesis el OBJETO y luego seprado por coma la propiedad como los parámetros que le pasamos en la función.
En cada ejemplo: regresa true, mientras que la segunda regresa false.

*/
// Setup
var obj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
  
function checkObj(obj,checkProp) {
    // Your Code Here
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp]; // If true return the prop
    } else {
        return "Not Found"; 
    }
}

  // Test your code by modifying these values
checkObj("gift");
