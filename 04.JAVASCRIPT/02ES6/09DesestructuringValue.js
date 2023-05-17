//antes usaríamos esta sintaxis para añadir propiedades a los objetos siguiente:
const user = {
    "name": "Lola",
    "age":42
}
//const name = user.name; // para tener en una constante el valor de esa propiedad nombre
//const age = usuario.age; // para tener en una constante el valor de esa propiedad edad
//ahora con ES6 se hace así estas dos líneas en 1:
const {nombre , edad} = usuario; // en español se ha traducido las variables y propiedades
//dentro de las llaves los nombres de las propiedades del objeto y después del igual el nombre del objeto,ASí se buscará dentro de usuario las propiedades

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// estas constantes de ES5 pasarían a ser en ES6 :
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;

//ES6 cambiamos cada una de las constantes así según la propiedad que queremos tener:
const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;

/*Utilice la asignación de desestructuración para extraer valores de los objetos---
La asignación de desestructuración es una sintaxis especial introducida en ES6, para asignar claramente valores tomados directamente de un objeto.

Considere el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
nametendría un valor de la cadena John Doe, y agetendría el número 34.

Aquí hay una declaración de asignación equivalente que usa la sintaxis de desestructuración de ES6:

const { name, age } = user;
Nuevamente, nametendría un valor de la cadena John Doey agetendría el número 34.

Aquí, las variables namey agese crearán y se les asignarán los valores de sus respectivos valores del userobjeto. Puedes ver cuánto más limpio es esto.

Puede extraer tantos o tan pocos valores del objeto como desee.

Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar las variables todayy tomorrowlos valores de todayy tomorrowdesde el HIGH_TEMPERATURESobjeto.

 */