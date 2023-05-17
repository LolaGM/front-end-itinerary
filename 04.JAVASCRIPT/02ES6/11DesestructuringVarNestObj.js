const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

//ES5    
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

//ES6 así podremos trabajar con variables que contengan estos datos del objeto anidado las veces que queramos
const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST 
console.log(lowToday);
console.log(highToday);
//así tendremos por pantalla el valor de esas propieades de la propiedad TODAY del objeto LOCAL_FORECAST

/* Utilice la asignación de desestructuración para asignar variables de objetos anidados
Puede usar los mismos principios de las dos lecciones anteriores para desestructurar valores de objetos anidados.

Usando un objeto similar a los ejemplos anteriores:

const user = {
    johnDoe: { 
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
Aquí se explica cómo extraer los valores de las propiedades del objeto y asignarlos a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;
Y así es como puede asignar los valores de las propiedades de un objeto a las variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;
Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar las variables lowTodayy highTodaylos valores de today.lowy today.highdesde el LOCAL_FORECASTobjeto.
*/