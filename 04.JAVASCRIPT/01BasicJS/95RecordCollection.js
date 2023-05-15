/*Colección de registros----
Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección está organizada como un objeto que contiene varios álbumes que también son objetos. Cada álbum está representado en la colección con un único idcomo nombre de propiedad. Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La update Recordsfunción toma 4 argumentos representados por los siguientes parámetros de función:

records- un objeto que contiene varios álbumes individuales
id- un número que representa un álbum específico en el recordsobjeto
prop- una cadena que representa el nombre de la propiedad del álbum para actualizar
value- una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el recordsobjeto completo.
Si valuees una cadena vacía, elimine la proppropiedad dada del álbum.
Si propno es tracksy valueno es una cadena vacía, asigne el valueal de ese álbum prop.
Si propes tracksy valueno es una cadena vacía, debe actualizar la tracksmatriz del álbum. Primero, si el álbum no tiene una trackspropiedad, asígnele una matriz vacía. Luego agregue el valuecomo el último elemento en la tracksmatriz del álbum.
Nota:record Collection Se utiliza una copia del objeto para las pruebas. No debe modificar directamente el record Collection objeto. */

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

  // Only change code below this line
function updateRecords(records, id, prop, value) {
    if(value === ""){ //Regla 2 si variable value es cadena vacía
      delete records[id][prop]; //si se cumple, elimina la prop del album
    }else if(prop === "tracks"){//Regla 3: si prop no es tracks 
      records[id][prop] = records[id][prop] || []; //accedemos a ella y asignamos un arreglo [] vacío dentro como respaldo usando || para alternativa que es Regla 4
      records[id][prop].push(value);  //añadimos con PUSH el valor VALUE
    }else {//sirve como respaldo si la condición 1 y la condición 2 son falsas: es la Regla 5
        records[id][prop] = value;
    }
    return records;//Regla 1
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//pasamos por la función los parámetros
//CONDICIÓN 1 --------------------------------
//vamos a acceder a esta función UPDATERECORDS antes de hacer el cambio y después para ver qué ha pasado
console.log(recordCollection[7853].albumTitle);
updateRecords(recordCollection, 7853, "albumTitle", ""); //entre comillas añades la propiedad y con el vacío un espacio
console.log(recordCollection[7853].albumTitle);
//CONDICIÓN 2 --------------------
console.log(recordCollection[5439].albumTitle);
updateRecords(recordCollection, 5439, "tracks", "Mamma Mia"); //entre comillas añades la propiedad y con el nombre de la canción porque antes no la había
console.log(recordCollection[5439].albumTitle);
//CONDICION 3
console.log(recordCollection[5439].artist);
updateRecords(recordCollection, 5439, "artist", "ABBA"); //entre comillas añades la propiedad y con el nombre de la canción porque antes no la había
console.log(recordCollection[5439].artist);




