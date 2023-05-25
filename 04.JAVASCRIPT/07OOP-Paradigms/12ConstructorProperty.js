function Dog(name) {//funcion constructor original
    this.name = name; //propiedad propia nombre
}

function joinDogFraternity(candidate) { //creo función para comprobar que tipo de objeto es y que me devuelva true or false
    if (candidate.constructor === Dog) { //comprobamos si la propiedad del candidato es estrictamente Dog (el objeto creado con la funcion constructor)
        return true; //retorna true
    } else {
        return false; //retorna false
    }
}

/*
Comprender la propiedad del constructor
Hay una constructor propiedad especial ubicada en las instancias del objeto duck y beagle que se creó en los desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas console.logllamadas se mostrarían trueen la consola.

Tenga en cuenta que la constructorpropiedad es una referencia a la función constructora que creó la instancia. La ventaja de la constructorpropiedad es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Aquí hay un ejemplo de cómo se podría usar esto:

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}
Nota: dado que la constructorpropiedad se puede sobrescribir (lo cual se tratará en los siguientes dos desafíos), generalmente es mejor usar el instanceofmétodo para verificar el tipo de un objeto.

Escriba una joinDogFraternity función que tome un candidate parámetro y, usando la constructor propiedad, devuelva true si el candidato es un Dog, de lo contrario devuelva false.

function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {

}
*/