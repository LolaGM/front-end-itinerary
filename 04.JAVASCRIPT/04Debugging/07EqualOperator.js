let x = 7;
let y = 9;
let result = "to come";

if(x == y) { //añadimos otro = a la condición. Podría ser también el estricto ===
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);


/*Uso de captura del operador de asignación en lugar del operador de igualdad
Los programas de bifurcación, es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones, se basan en declaraciones if, else ify elseen JavaScript. La condición a veces toma la forma de probar si un resultado es igual a un valor.

Esta lógica se habla (en inglés, al menos) como "si x es igual a y, entonces...", lo que puede traducirse literalmente en código usando el =operador de asignación o . Esto conduce a un flujo de control inesperado en su programa.

Como se trató en desafíos anteriores, el operador de asignación ( =) en JavaScript asigna un valor a un nombre de variable. Y los operadores ==y ===verifican la igualdad (las ===pruebas triples para la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales).

El siguiente código asigna xser 2, que se evalúa como true. Casi todos los valores por sí solos en JavaScript se evalúan como true, excepto los que se conocen como valores "falsos": false, 0, ""(una cadena vacía), NaN, undefinedy null.

let x = 1;
let y = 2;
if (x = y) {

} else {

}
En este ejemplo, el bloque de código dentro de la ifinstrucción se ejecutará para cualquier valor de y, a menos yque sea falso. El elsebloque, que esperamos que se ejecute aquí, en realidad no se ejecutará.

Corrija la condición para que el programa ejecute la rama derecha y se asigne el valor apropiado a result.*/