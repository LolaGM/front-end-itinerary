/*
Este método nos permite eliminar el ÚLTIMO elemento de la lista y además retorna el tamaño de la lista.
 */
let  arreglo = [1,2,3,4,5];

arreglo.pop();
console.log(arreglo); //output (4) [1, 2, 3, 4]

arreglo.pop();
console.log(arreglo); //output (3) [1, 2, 3]

console.log(arreglo.pop()); // output 3 => el tamaño de nuestro arreglo;
console.log(arreglo); //output (2) [1, 2]

/* Una de las ventajas que tiene este método, es que aunque el arreglo este vacío y se utilice, solo nos va a retornar undefined */
let  arregloVacio = [];

arreglo.pop();
console.log(arregloVacio); //output undefined

