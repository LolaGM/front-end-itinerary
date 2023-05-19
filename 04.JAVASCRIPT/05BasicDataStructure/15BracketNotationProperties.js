let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
strawberries: 27
};

function checkInventory(scannedItem) { //función a la que pasamos variable que luego le indicamos al objeto foods como prpoiedad
    return foods[scannedItem];//retorna el valor del objeto foods que tenga como propiedad la variable que le pasamos como argumento a la función  y que luego indicamos el valor en concreto apples
}

console.log(checkInventory("apples"));
console.log(checkInventory("grapes"));
console.log(checkInventory("oranges"));

/*
Acceder a nombres de propiedades con notación de corchetes
En el primer desafío de objetos, mencionamos el uso de la notación de corchetes como una forma de acceder a los valores de propiedad mediante la evaluación de una variable. Por ejemplo, imagine que nuestro foodsobjeto se está utilizando en un programa para una caja registradora de supermercado. Tenemos alguna función que establece el selectedFoody queremos comprobar nuestro foodsobjeto para la presencia de ese alimento. Esto podría verse como:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
Este código evaluará el valor almacenado en la selectedFoodvariable y devolverá el valor de esa clave en el foodsobjeto, o undefinedsi no está presente. La notación de corchetes es muy útil porque a veces las propiedades de los objetos no se conocen antes del tiempo de ejecución o necesitamos acceder a ellos de una manera más dinámica.

Hemos definido una función, checkInventory, que recibe un elemento escaneado como argumento. Devuelve el valor actual de la scannedItemclave en el foodsobjeto. Puede suponer que solo se proporcionarán claves válidas como argumento para checkInventory.
*/