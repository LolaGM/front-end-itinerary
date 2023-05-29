function sentensify(str) {
    // Only change code below this line
        return str
        //separamos el arr y con regex como delimitador del método split quitamos - y signos de puntuación
        .split(/[-.,]/) 
        //con esta cadena ya dividida en partes podemos unirla con join y pasarle espacios
        .join(" ");
    // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("Winter.is.coming"));

/*
Combine una matriz en una cadena usando el método de unión
El joinmétodo se utiliza para unir los elementos de una matriz para crear una cadena. Toma un argumento para el delimitador que se usa para separar los elementos de la matriz en la cadena.

Aquí hay un ejemplo:

const arr = ["Hello", "World"];
const str = arr.join(" ");
strtendría un valor de la cadena Hello World.

Use el joinmétodo (entre otros) dentro de la sentensifyfunción para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Warsse convertiría a I like Star Wars. Para este desafío, no utilice el replacemétodo.

function sentensify(str) {
    
}

sentensify("May-the-force-be-with-you");

*/