/* Genera números enteros aleatorios con JavaScript---
Puede generar números decimales aleatorios con Math.random(), pero a veces necesita generar números enteros aleatorios. El siguiente proceso le dará un número entero aleatorio menor que 20:

Úselo Math.random()para generar un número decimal aleatorio.
Multiplique ese número decimal aleatorio por 20.
Use Math.floor()para redondear este número a su número entero más cercano.
Recuerde que Math.random()nunca puede devolver un 1, por lo que es imposible obtenerlo 20ya que está redondeando hacia abajo con Math.floor(). Este proceso le dará un número entero aleatorio en el rango de 0a 19.

Poniendo todo junto, así es como se ve su código:

Math.floor(Math.random() * 20);
Está llamando Math.random(), multiplicando el resultado por 20, luego pasando el valor a Math.floor()para redondear el valor al número entero más cercano.

Utilice esta técnica para generar y devolver un número entero aleatorio en el rango de 0 a 9.*/

function randomWholeNum() {
    return Math.floor(Math.random() * 10); //para que salga de 0a9 el numero indicamos 10
}

console.log(randomWholeNum());


//hacemos otra función cambiando el número por el que multiplicamos
function anotherRandomWholeNum() {
    return Math.floor(Math.random() * 20);//para que salga de 11a20 el numero indicamos 10

}

console.log(anotherRandomWholeNum());
