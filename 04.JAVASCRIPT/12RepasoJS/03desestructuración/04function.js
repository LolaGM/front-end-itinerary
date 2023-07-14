/*Desestructurar funciones: se usa mucho en REACT en el use state
*/

function myState(object) {
    this.getter = object;
    this.setter = function(value) {
        return 'Hola! El valor es ' + value;
    }
    return [this.getter, this.setter];
}

//pongo nombre a las partes del arreglo y llamo a la funcion con un valor

const [value, setValue] = myState(5);
console.log(value); //5

//pongo un valor
console.log(setValue(10)); //

//TODO: BUSCAR EJEMPLOS DESESTRUCTURAR FUNCIón  