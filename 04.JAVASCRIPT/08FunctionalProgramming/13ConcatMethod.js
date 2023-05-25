function nonMutatingConcat(original, attach) {
    // Only change code below this line
      return original.concat(attach); //retorna el concatenado de original y attach
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);



/*
Combine dos arreglos usando el método concat
Concatenación significa unir elementos de extremo a extremo. JavaScript ofrece el concatmétodo tanto para cadenas como para matrices que funcionan de la misma manera. Para las matrices, se llama al método en uno, luego se proporciona otra matriz como argumento para concat, que se agrega al final de la primera matriz. Devuelve una nueva matriz y no muta ninguna de las matrices originales. Aquí hay un ejemplo:

[1, 2, 3].concat([4, 5, 6]);
La matriz devuelta sería [1, 2, 3, 4, 5, 6].

Use el concatmétodo en la nonMutatingConcatfunción para concatenar attachhasta el final de original. La función debe devolver la matriz concatenada.

function nonMutatingConcat(original, attach) {
    
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

*/