/*Ejercicio 1

Dado un array de objetos, obtener el objeto con el id 3

NOTA: console.log(arrNames[2]); es la forma más simple de acceder al arrNames pero aquí para buscar usamos el método filter

*/

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
];

const myObject = arrNames.filter(object => object.id === 3);
console.log(myObject);
