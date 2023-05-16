/*Genera números enteros aleatorios dentro de un rango---
Puede generar un número entero aleatorio en el rango de cero a un número dado. También puede elegir un número inferior diferente para este rango.

Llamarás a tu número mínimo miny a tu número máximo max.

Esta fórmula da un número entero aleatorio en el rango de mina max. Tómese un momento para leerlo e intente comprender qué está haciendo este código:

Math.floor(Math.random() * (max - min + 1)) + min
Cree una función llamada randomRangeque tome un rango myMiny myMaxdevuelva un número entero aleatorio que sea mayor o igual que myMiny menor o igual que myMax.*/


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    //usamos método Random que multiplicamos por un rango o intervalo y eso lo redondeamos con FLOOR y le sumamos el mín
    //una vez redondeado el resultado se le suma el mínimo
}

console.log(randomRange(0,10)); // probamos con un rango o intervalo y eso lo redondeamos
console.log(randomRange(20,30)); // probamos con otro rango o intervalo