/*Devolver patrón temprano para funciones
Cuando returnse llega a una declaración, la ejecución de la función actual se detiene y el control vuelve a la ubicación de llamada.

Ejemplo

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();
Lo anterior mostrará la cadena Hello en la consola y devolverá la cadena World. La cadena byebyenunca se mostrará en la consola, porque la función finaliza en la return declaración. */

//Modifique la función abTestpara que si a o b son menores que 0 la función salga inmediatamente con un valor de undefined.Es decir usamos una condicion y dentro ||

// Setup
function abTest(a, b) {
    // Only change code below this line
        if (a<0 || b <0){
            return undefined;
        }      
        // Only change code above this line
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
abTest(-2,2);