/*Búsqueda de perfiles
Tenemos un arreglo de objetos que representan a diferentes personas en nuestras listas de contactos.

1-Una función lookUpProfileque recibe nombre ( name) y una propiedad ( prop) como argumentos preescritos para ti.

2-La función debe verificar si el nombre ( name) es el nombre de pila del contacto ( firstName) y la propiedad ( prop) dada es una propiedad de ese contacto.

3-Si ambos son verdaderos, entonces devolverán el "valor" de esa propiedad.

4- Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.

5- Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincide con nameentonces devuelve la cadena No such property.
*/
// Configuración
const contacts = [
        {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
        },
        {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
        },
];

function lookUpProfile(name, prop) {
    for( let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){// accedemos al objeto contacts y luego accedemos a su nombre y si el nombre del contacto es igual a nombre
          return contacts[i][prop] || "No such property"; //entonces devuelve el contacto que estamos verificando y accedemos a la propiedad. NO podemos usar notación de punto porque es una variable PROP: si ese valor existe, su contenido se devuelve
          //usamos || para decir en una misma línea: si existe devuelve y si no di este mensaje
        } 
    }
      return "No such contact"; //si no existe el contacto que devuelva que no existe
}

lookUpProfile("Akira", "likes"); //llamamos a la función con los parámetros que deseamos
console.log(lookUpProfile("Paqui","job")); //pasamos otros parámetros a la función para comprobar que existen
//la podemos guardar en una variable pero no es obligatorio.
let contactData = lookUpProfile("Sherlock", "lastName");
console.log(contactData);
contactData = lookUpProfile("Lola", "hobbies"); // actualizamos la variable con nueva información
console.log(contactData);