function myReplace(str, before, after) {
    return before.match(/^[A-Z]/) //método match con regex mayusc
    ? str.replace(before, [after[0].toUpperCase() + after.slice(1)]) //condicional si es verdad, reemplaza el array before con el array after pasando a mayúsculas y concatenando ese array 
    : str.replace(before, after.toLowerCase()); //condicional si es falso, reemplaza before con after y ese after que no tenga la mayúscula que podría tener
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*
Buscar y reemplazar
Realice una búsqueda y reemplace en la oración utilizando los argumentos proporcionados y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazar.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es con lo que reemplazará el segundo argumento (después).

Nota: Preserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando lo reemplace. Por ejemplo, si desea reemplazar la palabra Bookcon la palabra dog, debe reemplazarse comoDog

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

Hint 1
Find the index where before is in the string.
Hint 2
Check first letter case.
Hint 3
Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.

El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.

La cadena original permanecerá inalterada.
*/