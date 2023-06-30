/*
https://somospnt.com/blog/207-funciones-flecha-vs-funciones-regulares

Las funciones flecha o arrow functions son funciones con una sintaxis más compacta que aparecieron en ECMAScript 6.

Las arrow functions fueron creadas para simplificar el scope de las funciones y hacer uso de la palabra reservada this de una manera más clara

Supongamos que tenemos un objeto 'persona' que tiene como atributo 'nombre' y valor 'Agustin', también tiene una función que loguea por consola el nombre 
*/

//function
const persona = {
	nombre: 'Agustin',
	decirNombre(){
		console.log(this.name)
	}
}
console.log(persona.decirNombre()) // OUTPUT : 'Agustin'

//arrow function
const persona2 = {
	nombre: 'Agustin',
	
	decirNombre: function() {
		console.log(this.nombre)
	}
	
	/* decirNombreFuncionFlecha: () => {
		console.log(this.nombre)
	} */
}

persona2.decirNombreFuncionFlecha(); // OUTPUT : undefined

/*
La palabra reservada this... THIS es el objeto contexto de Javascript en el cual se está ejecutando el código actual. En el caso de la función regular, this hace referencia al objeto desde el que se llamo a la funcion 'decirNombre', o sea al objeto persona. Si hacemos un console log de this dentro de la función decirNombre veremos que por consola this es nuestro objeto persona.
Dicho esto, nos queda ver porqué con la función flecha no estamos teniendo el mismo resultado. Lo que ocurre es que las arrow functions, a diferencia de las funciones regulares, no se les asigna un this propio sino que heredan el this del contexto superior, que estando dentro del contexto del objeto persona, this hace referencia al objeto window. Por lo tanto, la propiedad 'nombre' no esta definida en el objeto window, y recibimos el mensaje undefined.
*/

const persona3 = {
	nombre: 'Agustin',
	
	decirNombre: function() {
		setTimeout(() => {
			console.log(this.nombre);
		},
		3000);
	}
}

/*
¿Por qué el this en la función flecha hace referencia al objeto persona?. Dijimos que las arrow functions no tienen su propio this sino que lo heredan del contexto superior, que en este caso vendría a ser la función decirNombre, y dentro de este contexto this apunta al objeto que llama a dicha función, o sea persona. Por lo tanto this dentro de la arrow function apunta a persona
*/

