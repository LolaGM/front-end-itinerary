function whatIsInAName(collection, source) {
    
    const sourceKeys = Object.keys(source); //variable que contiene Object.keys(source) que devuelve un array con las claves de un objeto que pasamos por paréntesis

    // filtramos la colección y le pasamos ub objeto. El array creado lo mapeamos y esa clave le preguntamos si el objeto tiene propiedad clave y si el objeto es igual a la clave 
    return collection.filter(obj => sourceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
        .reduce((a, b) => a && b)); //reducimos 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*

Code Explanation
We start by filtering through collection using Array.filter().
Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
This single Boolean will be used to filter through the collection.
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

Donde estás
Cree una función que mire a través de una matriz de objetos (primer argumento) y devuelva una matriz de todos los objetos que tienen pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección si se va a incluir en la matriz devuelta.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]y el segundo argumento es { last: "Capulet" }, entonces debe devolver el tercer objeto de la matriz (el primer argumento), porque contiene el nombre y su valor, que se pasó como el segundo argumento.

function whatIsInAName(collection, source) {

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

*/