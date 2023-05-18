//los objetos pueden tener funciones asociadas a esos objetos: getter, setter. Podemos definir funciones en una clase para que cuando creemos un objeto, tenga todas esas funciones asociadas
//funciones específicas que nos permiten proteger los datos de ese objeto, dando acceso a ellas con getter, setter. 
class Libro {
    constructor(autor){ //propiedad autor de la que podemos cambiar el valor en cualquier momento pero podría ser un error cambiarlo a cualquier valor no válido como que el autor sea un número. Por eso protegemos esos datos
        this._autor = autor; //hacemos que la propiedad sea privada añadiendo guión bajo _autor para que otros desarrolladores sepan que no se debe cambiar esta propiedad. Pero podemos dar acceso con getter y setter
    }
    get autor(){//get + nombre propiedad con paréntesis vacíos
        console.log("Getter");
        return this._autor; //retornamos este valor privado
    } 

    set autor(nuevoAutor){ //set + nombre propiedad con paréntesis que contengan el valor.Podemos usar condicionales
        console.log("Setter");
        this._autor = nuevoAutor; //tomamos el valor del parámetro y lo asignamos a la propiedad autor privada _
        //aquí podría haber un condicional para verificar si este valor es válido
    }
}
//creamos objeto a aprtir de la clase con new y le pasamos parámetro
const libro = new Libro("anónimo");
console.log(libro.autor); //por pantalla se muestra anónimo. Hemos podido obtenerlo gracias al getter a pesar de ser privado
//cambiamos ahora con el setter el valor de la propiedad autor: accedemos al objeto instanciado libro y a la propiedad autor y le asignamos el nuevo valor que queramos
libro.autor = "Gino Smith";
console.log(libro.autor);


//getters nos permiten obtener al valor de una propiedad privada de forma indirecta. Por ejemplo  _autor
//setters función que nos permite actualizar el valor de una propiedad. Podemos verificar el valor nuevo antes de asignarlo con condicionales

//ejercicio freeCodeCamp
class Thermostat { //Utilice la classpalabra clave para crear una Thermostatclase.
    constructor(fahrenheit) { //El constructor acepta una temperatura Fahrenheit
        this._fahrenheit = fahrenheit;
    }
    
    get temperature() { //cree un getterpara obtener la temperatura en Celsius 
      return (5 / 9) * (this._fahrenheit - 32);
    }
    
    set temperature(celsius) { //setter para establecer la temperatura en Celsius.
      return this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*Use getters y setters para controlar el acceso a un objeto
Puede obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

Estos se denominan clásicamente getters y setters .

Las funciones getter están destinadas simplemente a devolver (obtener) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones de establecimiento están destinadas a modificar (establecer) el valor de la variable privada de un objeto en función del valor pasado a la función de establecimiento. Este cambio podría implicar cálculos, o incluso sobrescribir el valor anterior por completo.

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
La consola mostraría las cadenas anonymousy newAuthor.

Observe la sintaxis utilizada para invocar getter y setter. Ni siquiera parecen funciones. Los getters y setters son importantes porque ocultan detalles de implementación internos.

Nota: Es una convención preceder el nombre de una variable privada con un guión bajo ( _). Sin embargo, la práctica en sí no hace que una variable sea privada.

Utilice la classpalabra clave para crear una Thermostatclase. El constructoracepta una temperatura Fahrenheit.

En la clase, cree un getterpara obtener la temperatura en Celsius y un setterpara establecer la temperatura en Celsius.

Recuerda que C = 5/9 * (F - 32)y F = C * 9.0 / 5 + 32, donde Fes el valor de la temperatura en Fahrenheit, y Ces el valor de la misma temperatura en Celsius.

Nota: Cuando implemente esto, hará un seguimiento de la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál rastrees.

En otras palabras, está abstrayendo los detalles de implementación del usuario.

 */