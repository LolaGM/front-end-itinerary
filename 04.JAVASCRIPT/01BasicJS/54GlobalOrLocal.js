const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    const outerWear = "sweater";

    // Only change code above this line
    return outerWear;
}

myOutfit();

/*
Ámbito global frente a local en funciones
Es posible tener variables locales y globales con el mismo nombre. Cuando hace esto, la variable local tiene prioridad sobre la variable global.

En este ejemplo:

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}
La función myFundevolverá la cadena Headporque la versión local de la variable está presente.

Agregue una variable local a myOutfit la función para anular el valor de outerWear con la cadena sweater.


*/