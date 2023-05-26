/*Acceso a objetos anidados---
Se puede acceder a las subpropiedades de los objetos encadenando la notación de punto o corchete.

Aquí hay un objeto anidado:

const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2sería la cadena secrets, y ourStorage.desk.drawersería la cadena stapler.

Accede al myStorageobjeto y asigna el contenido de la glove boxpropiedad a la gloveBoxContentsvariable. Siempre que sea posible, use la notación de puntos para todas las propiedades; de lo contrario, use la notación de corchetes. */

const myStorage = {
        "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
        }
};
//guardamos este acceso en una variable y en ella con los puntos vamos accediendo a cada parte. Como glove box tiene un espacio en medio,usamos corchetes
const gloveBoxContents = myStorage.car.inside["glove box"];