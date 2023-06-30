/*
Este método nos permite eliminar el PRIMER elemento de la lista y además retorna el tamaño de la lista
*/

let  arreglo = [1,2,3,4,5];

arreglo.shift();
console.log(arreglo); //output tamaño (4) [2, 3, 4, 5]

arreglo.shift();
console.log(arreglo); //output tamaño (3) [3, 4, 5]

console.log(arreglo.shift()); // output 3 => el tamaño de nuestro arreglo;
console.log(arreglo); //output (2) [4, 5]

/*
Al igual que el método pop, el método shift tiene la ventaja de que aunque el arreglo este vacío y se utilice, solo nos va a retornar undefined */
let  arregloVacio = [];

arreglo.shift();
console.log(arregloVacio); //output undefined