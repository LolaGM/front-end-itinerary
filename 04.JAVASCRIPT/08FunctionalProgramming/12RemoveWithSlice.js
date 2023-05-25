function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities); //se queda con las 3 primeras
  console.log(inputCities); //las muestra todas

/*
Eliminar elementos de una matriz usando corte en lugar de empalme
Un patrón común al trabajar con matrices es cuando desea eliminar elementos y conservar el resto de la matriz. JavaScript ofrece el splicemétodo para esto, que toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos que se eliminarán. Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el splicemétodo muta la matriz original a la que se llama. Aquí hay un ejemplo:

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
Aquí splicedevuelve la cadena Londony la elimina de la matriz de ciudades. citiestendrá el valor ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos en el último desafío, el slicemétodo no muta la matriz original, sino que devuelve una nueva que se puede guardar en una variable. Recuerde que el slicemétodo toma dos argumentos para que los índices comiencen y finalicen el segmento (el final no es inclusivo) y devuelve esos elementos en una nueva matriz. Usar el slicemétodo en lugar de spliceayuda a evitar cualquier efecto secundario de mutación de matriz.

Reescriba la función nonMutatingSpliceutilizando sliceen lugar de splice. Debería limitar la citiesmatriz proporcionada a una longitud de 3 y devolver una nueva matriz con solo los tres primeros elementos.

No cambie la matriz original proporcionada a la función.

function nonMutatingSplice(cities) {
  return cities.splice(3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
*/