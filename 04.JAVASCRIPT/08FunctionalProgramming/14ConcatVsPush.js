function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem); //cambiamos el método push por concat al array del parámetro 1 de la función y le pasamos el parámetro 2
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);





/* 
Agregue elementos al final de una matriz usando concat en lugar de empujar
La programación funcional tiene que ver con la creación y el uso de funciones que no mutan.

El último desafío introdujo el concatmétodo como una forma de fusionar arreglos en un nuevo arreglo sin mutar los arreglos originales. Comparar concatcon el pushmétodo. pushagrega elementos al final de la misma matriz a la que se llama, lo que muta esa matriz. Aquí hay un ejemplo:

const arr = [1, 2, 3];
arr.push(4, 5, 6);
arrtendría un valor modificado de [1, 2, 3, 4, 5, 6], que no es la forma de programación funcional.

concatofrece una forma de fusionar nuevos elementos al final de una matriz sin efectos secundarios de mutación.

Cambie la nonMutatingPushfunción para que se use concatpara fusionarse newItemhasta el final originalsin mutar originalo newItemmatrices. La función debe devolver una matriz.


function nonMutatingPush(original, newItem) {

    return original.push(newItem);

}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

*/
