// The global variable que es un array con listado de libros que queremos refactorizar
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) { //funcion añadir con parámetro variable al que añadiremos como dice la teoría el array como parámetro
    let myBookList = [...bookList];//creamos variable que contenga una copia de ese array con spread ... y con el trabajaremos
    myBookList.push(bookName); //a esa variablle con el método push le pasamos el nombre del libro
    return myBookList;//retornamos la variable ahora con ese nuevo libro
    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {//funcion eliminar con parámetro variable al que añadiremos como dice la teoría el array como parámetro
    let myBookList = [...bookList];//creamos variable que contenga una copia de ese array con spread ... y con el trabajaremos
    
    const book_index = myBookList.indexOf(bookName); //indexof devuelve indice del string del objeto dado por parámetro BookName
    if (book_index >= 0) { //si ese index es mayor o igual a cero (arrays empiezan por cero)
        myBookList.splice(book_index, 1); //si es cierto y cumple la condición (siempre lo hará si existe en el array) eliminamos con splice con ayuda de ese índice y la cantidad de 1 libro
        return myBookList;//retornamos ahora esa lista actualizada con la eliminación

        // Change code above this line
        }
}

console.log(bookList);//imprimo el array original

add(bookList, "Lola: my story"); //llamo a la función que tiene 
let addedBook = add(bookList, "Lola: my story");
console.log(addedBook); //imprimo el array con la variable que contiene la función con sus dos parámetros: listado y nombre de Libro

remove(bookList, "Philosophiæ Naturalis Principia Mathematica"); //llamo a la función que tiene que borrar el libro de la lista que yo le diga
let deletedBook = remove(bookList,"Philosophiæ Naturalis Principia Mathematica");
console.log(deletedBook);//muestro esa variable que contiene el nuevo array actualizado

/*
Refactorizar variables globales fuera de funciones
Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como const newArr = arrVar, where arrVaris a array simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.

Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función, y no de ningún objeto o variable global.

Sumar uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con matrices u objetos más complejos.

Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. La addfunción debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.

Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookNameparámetro.

>>>>>>>> The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


>>>>>Change code below this line
function add(bookName) {

bookList.push(bookName);
    return bookList;

}

function remove(bookName) {
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    
    }
}

*/