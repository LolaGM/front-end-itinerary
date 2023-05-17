 //declaramos dos variables
var a;
var b;

//asignamos valores con la desestructuración
[a,b] = [8,6];//asigno valores a las variables en el mismo orden y si hubiera otra variable más le podría poner un 3 valor
console.log(a,b);//muestro por pantalla

let a = 1, b = 2; //declaramos las variables con valores 
// Only change code below this line
[a, b] = [b, a]; // con esto cambiamos el valor por asginacion de A a B y de B a A

let a = 8, b = 6; //con esto intercambiamos el valor de unas variables por otras
[a, b] = [b, a];
console.log(a, b); // en un mismo console.log puedes llamar a las variables. Aquí se ha intercambiado el valor 

let c = 3, d = 4;
[c, d] = [d,c];
console.log(c,d); // en un mismo console.log puedes llamar a las variables

//Podemos saltar posiciones del array para la asignación de valor de cada variable usando la coma , para saltarnos la posición 3 y 4
let x;
let y;
let z;
[x, y,,, z] = [1,2,3,4,5,6];
console.log(x,y,z); // da en consola 1,2,5
/*
Utilice la asignación de desestructuración para asignar variables de matrices
ES6 hace que la desestructuración de matrices sea tan fácil como la desestructuración de objetos.

Una diferencia clave entre el operador de distribución y la desestructuración de la matriz es que el operador de distribución desempaqueta todo el contenido de una matriz en una lista separada por comas. En consecuencia, no puede elegir qué elementos desea asignar a las variables.

Desestructurar una matriz nos permite hacer exactamente eso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
La consola mostrará los valores de ay bcomo 1, 2.

A la variable ase le asigna el primer valor de la matriz y bse le asigna el segundo valor de la matriz. También podemos acceder al valor en cualquier índice en una matriz con desestructuración usando comas para alcanzar el índice deseado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
La consola mostrará los valores de a, by cas 1, 2, 5.

Use la asignación de desestructuración para intercambiar los valores de ay bpara que areciba el valor almacenado en b, y breciba el valor almacenado en a.
*/