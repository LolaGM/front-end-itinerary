/*Iterar con JavaScript Do...While Loops----------------------------------------------------------------
El siguiente tipo de bucle que aprenderá se llama do...while bucle. Se llama un do...while ciclo porque primero pasará do el código dentro del ciclo sin importar qué, y luego continuará ejecutando el ciclo while que la condición especificada evalúa true.

const ourArray = [];
let i = 0;

do {
    ourArray.push(i);
    i++;
} while (i < 5);
El ejemplo anterior se comporta de manera similar a otros tipos de bucles, y la matriz resultante se verá como [0, 1, 2, 3, 4]. Sin embargo, lo que lo do...while diferencia de otros bucles es cómo se comporta cuando la condición falla en la primera verificación. Veamos esto en acción. Aquí hay un ciclo regular while que ejecutará el código en el ciclo siempre que i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
    ourArray.push(i);
    i++;
}
En este ejemplo, inicializamos el valor de ourArrayen una matriz vacía y el valor de ien 5. Cuando ejecutamos el whileciclo, la condición se evalúa falseporque ino es menor que 5, por lo que no ejecutamos el código dentro del ciclo. El resultado es que ourArrayterminará sin valores agregados y aún se verá como []cuando todo el código en el ejemplo anterior haya terminado de ejecutarse. Ahora, eche un vistazo a un do...whilebucle:

const ourArray = []; 
let i = 5;

do {
    ourArray.push(i);
    i++;
} while (i < 5);
En este caso, inicializamos el valor de ia 5, tal como lo hicimos con el whilebucle. Cuando llegamos a la siguiente línea, no hay ninguna condición para evaluar, así que vamos al código dentro de las llaves y lo ejecutamos. Agregaremos un solo elemento a la matriz y luego lo incrementaremos iantes de llegar a la verificación de condición. Cuando finalmente evaluamos la condición i < 5en la última línea, vemos que iahora es 6, lo que falla en la verificación condicional, así que salimos del ciclo y terminamos. Al final del ejemplo anterior, el valor de ourArrayes [5]. Esencialmente, un do...whileciclo asegura que el código dentro del ciclo se ejecutará al menos una vez. Intentemos hacer que do...whilefuncione un bucle insertando valores en una matriz.

Cambie el whileciclo en el código a un do...whileciclo para que el ciclo empuje solo el número 10a myArray, y iserá igual a 11cuando su código haya terminado de ejecutarse. */

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do{
    myArray.push(i);
    i++;
}while (i < 5)

console.log(i); //lo que te muestra es 11
console.log(myArray); //el añadido al array vacío y solo lo hace una vez obligatoriamente aunque la condición no se cumpla nunca