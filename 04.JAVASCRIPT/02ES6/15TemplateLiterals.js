const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {//función que contiene como param el arr
    // Only change code below this line
    const failureItems = [];//array vacío para contener la lista
    // Only change code above this line
    for(let i=0; i < arr.length; i++){
        failureItems.push(//con template literals ponemos un LI y en él contemos entre {}el parámetro arr con cada iteración
            `<li class="text-warning">${arr[i]}</li>`
        );//cogemos el arraý vacío y lo vamos rellenando en cada iteración del bucle
    }
    return failureItems;
}
// aquí guardamos en constante nueva la función y le pasamos el objeto result accediendo por notación a failure
const failuresList = makeList(result.failure);
console.log(failuresList);//muestra por pantalla el código LI con 3 opciones de failure
//--------------------
//OJO CON EL NAMING DE LAS VARIABLES CON FAILURE POR SI QUEREMOS OBTENER LI CON OTRA PROPIEDAD DEL OBJETO RESULT como SKIPPED o SUCCESS

/*Crear cadenas usando literales de plantilla
Una nueva característica de ES6 es la plantilla literal . Este es un tipo especial de cadena que facilita la creación de cadenas complejas.

Los literales de plantilla le permiten crear cadenas de varias líneas y usar funciones de interpolación de cadenas para crear cadenas.

Considere el siguiente código:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
La consola mostrará las cadenas Hello, my name is Zodiac Hasbro!y I am 56 years old..

Muchas cosas sucedieron allí. En primer lugar, el ejemplo usa acentos graves ( `), no comillas ( 'o "), para envolver la cadena. En segundo lugar, observe que la cadena es de varias líneas, tanto en el código como en la salida. Esto ahorra la inserción \ndentro de las cadenas. La ${variable}sintaxis utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrá que usar la concatenación con el +operador. Para agregar variables a las cadenas, simplemente suelte la variable en una cadena de plantilla y envuélvala con ${y }. De manera similar, puede incluir otras expresiones en su literal de cadena, por ejemplo ${a + b}. Esta nueva forma de crear cadenas le brinda más flexibilidad para crear cadenas sólidas.

Use la sintaxis literal de la plantilla con acentos graves para crear una matriz de licadenas de elementos de lista ( ). El texto de cada elemento de la lista debe ser uno de los elementos de la matriz de la failurepropiedad en el resultobjeto y tener un classatributo con el valor text-warning. La makeListfunción debe devolver la matriz de cadenas de elementos de la lista.

Use un método iterador (cualquier tipo de bucle) para obtener el resultado deseado (que se muestra a continuación).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

*/