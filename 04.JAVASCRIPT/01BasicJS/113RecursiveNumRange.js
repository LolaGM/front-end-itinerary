/* Utilice la recursividad para crear un rango de números---
Continuando con el desafío anterior, le brindamos otra oportunidad para crear una función recursiva para resolver un problema.

Hemos definido una función nombrada rangeOfNumbers con dos parámetros. La función debe devolver una matriz de enteros que comienza con un número representado por el startNump arámetro y termina con un número representado por el endNum parámetro. El número inicial siempre será menor o igual que el número final. Su función debe usar recursividad llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar para los casos en los que ambos startNumy endNumson iguales.*/

//la recursividad se da siempre en la parte del ELSE
//es como una espiral que empieza por el final y por eso va para atrás restando -1

function rangeOfNumbers(startNum, endNum) { //dos parámetros
    if (endNum < startNum) { //ponemos el if como algo que "no se va a cumplir"
      return [];//retorna vacío 
    } else {//en el ELSE contenemos 
      const numbers = rangeOfNumbers(startNum, endNum - 1);//llamamos a la función aquí y pasamos los parámetros
      numbers.push(endNum);//al array anterior le añadimos al final el endNum
      return numbers;//retorna ese array
    }
  }
  console.log(rangeOfNumbers(1,10)); //mostramos por pantalla la función con dos números en rango 1-10 por ejemplo
  console.log(rangeOfNumbers(10,1)); //mostramos por pantalla la función con dos números en rango 10-1 por ejemplo y sale array vacío por cunmplirse el IF

