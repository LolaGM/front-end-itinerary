/*Este método nos permite introducir uno o varios elementos al FINAL de la lista y además retorna el tamaño de la lista. */

let  arreglo = [1,2,3,4,5];

arreglo.push(6);
console.log(arreglo); //output (6) [1, 2, 3, 4, 5, 6]

arreglo.push(70, 80);
console.log(arreglo); //output (8) [1, 2, 3, 4, 5, 6, 70, 80]

console.log(arreglo.push(99)); // output 9 => el tamaño de nuestro arreglo;
console.log(arreglo); //output (9) [1, 2, 3, 4, 5, 6, 70, 80, 99]