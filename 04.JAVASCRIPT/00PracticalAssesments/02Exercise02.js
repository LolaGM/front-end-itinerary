/*
Ejercicio 2
Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

NOTA:In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN . JavaScript uses type coercion in Boolean contexts.
*/

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];
const truthyValues = arrDirty.filter(Boolean);
console.log(truthyValues);

/*se puede usar la expresión !!

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
const truthyValues = arrDirty.filter(value => !!value);
console.log(truthyValues); // muestra por pantalla [ 5, -1, 3, 'test' ]

*/