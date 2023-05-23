function repeatStringNumTimes(str, num) {
    let accumulatedStr = ""; //variable vacía que tendrá al final de la función la variable

    for (let i = 0; i < num; i++) {//bucle for para recorrer el número de veces que le indiques como numero
        console.log(accumulatedStr);//muestra por pantalla si quiero la variable cada vez que va acumulando la cadena y sumandole de nuevo
        accumulatedStr += str; //suma a esta variable el string  y también la variable en sí
    }

    return accumulatedStr;//retorna esa variable con el resultado
}
repeatStringNumTimes("abc", 3);//cadena a repetir y número de veces que quieres que se repita
repeatStringNumTimes("abcd", 10);//cadena a repetir y número de veces que quieres que se repita

/*

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
Code Explanation
This solution uses recursion.
We check if num is negative and return an empty string if true.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.
-------------------------------------

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

Code Explanation
Create an empty string variable to store the repeated word.
Use a for loop or for loop to repeat code as many times as needed according to num
Then we add the string to the variable created on step one inside of the loop.
At the end of the loop, return the variable for the repeated word.



----------------------------------------------------------------
Repetir una cadena Repetir una cadena
Repetir una cadena dada str(primer argumento) por num tiempos (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. A los efectos de este desafío, no utilice el método incorporado .repeat().

function repeatStringNumTimes(str, num) {
    return str;
}

repeatStringNumTimes("abc", 3);

*/