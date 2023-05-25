// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea'; //arrow function that just returns string with text

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => { //arrow function que le pasas el numero de tazas
  const teaCups = [];//array vacio donde guardarás el resultado y le haces push para añadir al final

  for(let cups = 1; cups <= numOfCups; cups += 1) {//bucle inicializado en 1 con variable cups en vez de i para rellenar el array anterior mientras que sea menor a 40
    const teaCup = prepareTea(); //dentro de la constante le pasas la función anterior
    teaCups.push(teaCup);
  }
  return teaCups; //retorna ese array
  console.log(teaCups);
};

// Only change code below this line
//llamamos a la función dentro de la variable y pasarle el numero
const tea4TeamFCC = getTea(40); 
// Only change code above this line




/*
Aprenda sobre la programación funcional
La programación funcional es un estilo de programación donde las soluciones son funciones simples y aisladas, sin efectos secundarios fuera del alcance de la función:INPUT -> PROCESS -> OUTPUT

La programación funcional se trata de:

Funciones aisladas: no depende del estado del programa, que incluye variables globales que están sujetas a cambios.

Funciones puras: la misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTeay getTeaya están definidas para usted. Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable.
const prepareTea = () => 'greenTea';


Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).

const getTea = (numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = null;
*/