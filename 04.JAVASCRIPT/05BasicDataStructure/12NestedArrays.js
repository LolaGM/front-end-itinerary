let myNestedArray = [
    ["unshift", false, 1, 2, 3,["deep"], "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread",[["deeper"]], "array" ],
    ["mutate", 1327.98, "splice", "slice", [[["deepest"]]],"push", ],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", ]
];

/*
Cree matrices multidimensionales complejas

let threeLevelArray = [
    "first level",
    ["Two levels deep", 
        ["Three levels deep"]
    ]
];
Tenemos dentro del primer corchete el 1 nivel y dentro de el segundo corchete es el tercero y así
¡Impresionante! ¡Acabas de aprender mucho sobre arreglos! Esta ha sido una descripción general de nivel bastante alto, y hay mucho más que aprender sobre cómo trabajar con arreglos, mucho de lo cual verá en secciones posteriores. Pero antes de pasar a mirar Objetos , echemos un vistazo más y veamos cómo las matrices pueden volverse un poco más complejas que lo que hemos visto en desafíos anteriores.

Una de las características más poderosas cuando se piensa en arreglos como estructuras de datos es que los arreglos pueden contener, o incluso estar completamente compuestos por otros arreglos. Hemos visto arreglos que contienen arreglos en desafíos anteriores, pero bastante simples. Sin embargo, los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, cada uno con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, una matriz puede convertirse muy rápidamente en una estructura de datos muy compleja, conocida como matriz multidimensional o anidada. Considere el siguiente ejemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
La deepmatriz está anidada a 2 niveles de profundidad. Las deepermatrices tienen 3 niveles de profundidad. Las deepestmatrices son de 4 niveles y la deepest-est?de 5.

Si bien este ejemplo puede parecer intrincado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de una matriz tan compleja con notación de paréntesis:

console.log(nestedArray[2][1][0][0][0]);
Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si lo necesitamos:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
Ahora se registra deeper still.

Hemos definido una variable, myNestedArrayigual a una matriz. Modifique myNestedArray, usando cualquier combinación de cadenas , números y valores booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerde, la matriz más externa es el nivel 1). En algún lugar del tercer nivel, incluya la cadena deep, en el cuarto nivel, incluya la cadena deeper, y en el quinto nivel, incluya la cadena deepest.


 */