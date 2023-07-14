/* Asignando el resto de un arreglo

¿Qué sucede si queremos asignar parte del arreglo a variables y el resto de elementos de dicho arreglo a otra variable en particular?
Usamos ...
*/

const numbers = [1,2,3,4];
//a la izquierda indicamos nombre variables y lo igualamos a la const
const [valor1,valor2,valor3,valor4] = numbers;
console.log(valor1,valor2,valor3,valor4); // accedemos a todos los valores 1 2 3 4

//saltarnos valores usando coma ,
const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//a la izquierda indicamos nombre variables y lo igualamos a la const
const [,num2,num3,num4] = numbers2;
console.log(num2,num3,num4); // accedemos a los valores menos el primero por la coma

//lo mismo pero accedemos elementos al azar
let [saludo, ...introduccion] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludo); // "Hola"
console.log(introduccion); // ["Yo", "soy", "Sarah"]

//ahora con numeros por ejemplo
let [numero1, ...numeros] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numero1); //
console.log(numeros);

/*
Desestructuración con Funciones
También podemos extraer datos de un arreglo devuelto por una función.
*/

function obtenerArreglo() {
    return ["Hola", "Yo" , "soy", "Sarah"];
} 

let [saludar, sujeto] = obtenerArreglo();

console.log(saludar); // "Hola"
console.log(sujeto); // "Yo"

/*
Usando Valores Predeterminados
Los valores predeterminados se pueden asignar a las variables en caso de que el valor extraído del arreglo sea undefined:*/

let [greeting = "hey", myName = "Sarah"] = ["Hola"];

console.log(greeting); // "Hola"
console.log(myName); // "Sarah"

//Por lo tanto, nombre se vuelve "Sarah" porque no está definido en el arreglo. 

/*
Intercambiando Valores mediante Desestructuración:
Podemos usar la desestructuración para intercambiar los valores de las variables:
*/

let a = 3;
let b = 6;

[a, b] = [b, a];

console.log(a); // 6
console.log(b); // 3