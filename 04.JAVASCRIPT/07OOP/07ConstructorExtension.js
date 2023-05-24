function Dog(name,color) { //creo la constructor reutilizable y le paso las propiedades
    this.name = name; //uso el this de este constructor y lo igualo a la propiedad reutilizable name
    this.color = color; //uso el this de este constructor y lo igualo a la propiedad reutilizable color 
    this.numLegs = 4; //esta propiedad siempre tiene el mismo valor de 4 para perro  
}

//ahora instanciamos en una variable la función constructor y le pasamos los valores
//mostramos por pantalla esa variable
let terrier = new Dog ("Lizy", "white");
console.log(terrier); //muestra por pantalla { name: 'Lizy', color: 'white', numLegs: 4 }

/*
Extender constructores para recibir argumentos
Los constructores Birdy Dog del último desafío funcionaron bien. Sin embargo, observe que todos Birds los que se crean con el Bird constructor se denominan automáticamente Albert, son de color azul y tienen dos patas. ¿Qué pasa si quieres pájaros con diferentes valores de nombre y color? Es posible cambiar las propiedades de cada ave manualmente pero eso sería mucho trabajo:

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

Suponga que está escribiendo un programa para realizar un seguimiento de cientos o incluso miles de aves diferentes en un aviario. Llevaría mucho tiempo crear todos los pájaros y luego cambiar las propiedades a diferentes valores para cada uno. Para crear más fácilmente diferentes Bird objetos, puede diseñar su constructor Bird para aceptar parámetros:

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
Luego pase los valores como argumentos para definir cada ave única en el Birdconstructor: let cardinal = new Bird("Bruce", "red");Esto da una nueva instancia de Birdcon namey colorpropiedades establecidas en Brucey red, respectivamente. La numLegspropiedad todavía está establecida en 2. cardinalTiene estas propiedades:

cardinal.name
cardinal.color
cardinal.numLegs
El constructor es más flexible. Ahora es posible definir las propiedades de cada uno Birden el momento en que se crea, que es una forma en que los constructores de JavaScript son tan útiles. Agrupan objetos en función de características y comportamientos compartidos y definen un modelo que automatiza su creación.

function Dog() {

}

*/