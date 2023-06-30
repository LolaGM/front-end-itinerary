/*
Este método nos permite introducir uno o varios elementos al PRINCIPIO de la lista y además retorna el tamaño de la lista.

*/
let  arreglo = [1,2,3,4,5];

arreglo.unshift(6);
console.log(arreglo); //output (6) [6, 1, 2, 3, 4, 5]

arreglo.unshift(70, 80);
console.log(arreglo); //output (8) [70, 80, 6, 1, 2, 3, 4, 5]

console.log(arreglo.unshift(99)); // output 9 => el tamaño de nuestro arreglo;
console.log(arreglo); //output (9) [99, 70, 80, 6, 1, 2, 3, 4, 5]
