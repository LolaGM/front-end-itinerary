/*Ejercicio 3

Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

*/

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
];


const notSpanishCapital = arrCities.filter(city => city.country === "Spain" && city.capital === false);
console.log(notSpanishCapital);

/*se puede usar la expresión ! para no usar ===true o false delante del objeto
se puede no usar la variable que contiene la llamada a la función si la hay y poner directamente el código dentro de console.log:

console.log(arrCities.filter(city => city.country === "Spain" && !city.capital);

*/
