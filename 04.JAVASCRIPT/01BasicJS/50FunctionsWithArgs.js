function functionWithArgs (a,b){
    console.log(a+b); //imprimimos por pantalla la suma de esos dos parámetros pasados a la función
}

functionWithArgs(1,2);//llamada a la función y le pasamos valores a esos parámetros

/*
Pasar valores a funciones con argumentos
Los parámetros son variables que actúan como marcadores de posición para los valores que se deben ingresar a una función cuando se la llama. Cuando se define una función, normalmente se define junto con uno o más parámetros. Los valores reales que se ingresan (o "pasan" ) en una función cuando se llama se conocen como argumentos .

Aquí hay una función con dos parámetros, param1y param2:

function testFun(param1, param2) {
    console.log(param1, param2);
}
Entonces podemos llamar testFunasí: testFun("Hello", "World");. Hemos pasado dos argumentos de cadena, Helloy World. Dentro de la función, param1será igual a la cadena Helloy param2será igual a la cadena World. Tenga en cuenta que podría testFunvolver a llamar con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.

Cree una función llamada functionWithArgsque acepte dos argumentos y envíe su suma a la consola de desarrollo.
Llame a la función con dos números como argumentos.
*/