/*
Este método inserta o elimina uno o varios elementos en cualquier posición del arreglo (dependiendo de los parámetros), para saber qué acción realizar es importante entender su sintaxis:

arreglo.splice(a,b,c);

a — El índice donde va a iniciar el arreglo (recordemos que inicia con 0)
b — (opcional) Es el número de elementos a eliminar de acuerdo a la posición inicial (a)
c — (opcional) Son los valores que vamos a insertar

Es importante considerar las siguientes reglas para los parámetros:

Para el parámetro ‘a’ —Si nosotros ponemos un número mayor a la longitud del arreglo SIEMPRE será la última posición del arreglo; en caso de que sea negativo, empezará esa cantidad de elementos contando desde el final.
Para el parámetro ‘b’ — Si le indicamos el valor 0 o negativo, no va a borrar ningún elemento; si ponemos un valor mayor a 1, desde la posición indicada borrará los elementos indicados

*/

//cortar desde una posición
let arreglo1 = [1, 2, 3, 4, 5, 100, 200];

arreglo1.splice(3);

console.log(arreglo1); //output [1,2,3] cortando desde la posicíon 3 que es el valor 4

//cortar desde una POSICIÓN y decirle CUÁNTOS cortar incluyendo esa posicion 
let arreglo2 = [1, 2, 3, 4, 5, 100, 200];

arreglo2.splice(3,2); //POSICION 3 CANTIDAD 2

console.log(arreglo2); //output [1, 2, 3, 100, 200]

//insertar valores a partir de posición

let arreglo3 = [1, 2, 3, 4, 5, 100, 200];

arreglo3.splice(3, 0, 10, 20, 30, 40); //POSICION 3 CANTIDAD 0 borrados INSERTA los que les indicamos

console.log(arreglo3); //output [1, 2, 3, 10, 20, 30, 40, 4, 5, 100, 200]