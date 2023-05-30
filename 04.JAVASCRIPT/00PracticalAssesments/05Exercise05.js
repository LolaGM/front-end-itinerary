/*
Ejercicio 5
Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
Ejemplo: {city: "Logroño", isSpain: "true"}
*/

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
];

function getTowns(arrCities) { //función con parámetro array que aplicamos filter
    //filtramos en una variable por town que sea falso ser capital
    const nonCapitalTowns = arrCities.filter(town => town.capital === false);
    //en otra variable guardamos el nuevo array con map y le pedimos que muestre city y isSpain
    const resultTowns = nonCapitalTowns.map(town => {
        return { city: town.city, isSpain: town.country === 'Spain' };
    });

    return resultTowns; //retorna el resultado de ese mapeo
}

const resultArrCities = getTowns(arrCities2); //en variable guardamos la función y le pasamos el array original 
console.log(resultArrCities); //mostramos por pantalla la variable anterior