/* Seleccionar entre muchas opciones con sentencias de cambio ---
Si necesita hacer coincidir un valor con muchas opciones, puede usar una declaración de cambio . Una switchdeclaración compara el valor con las declaraciones de caso que definen varios valores posibles. Cualquier instrucción de JavaScript válida se puede ejecutar dentro de un bloque de casos y se ejecutará desde el primer casevalor coincidente hasta que breakse encuentre a.

Aquí hay un ejemplo de una switchdeclaración:

switch (fruit) {
    case "apple":
        console.log("The fruit is an apple");
        break;
    case "orange":
        console.log("The fruit is an orange");
        break;
}
caselos valores se prueban con igualdad estricta ( ===). Le breakdice a JavaScript que deje de ejecutar declaraciones. Si se breakomite, se ejecutará la siguiente instrucción.*/

/*se abre SWITCH y dentro en cada case le decimos case 1 expresando que es igual igual igual
luego en ANSWER = a cada respuesta posible según el número en vez de usar CONSOLE.LOG
BREAK se usa para finalizar cada statement para no evaluar nada más en caso de que sea correcto
despues del SWITCH usamos el retorno con la respuesta  variable*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
        switch(val){
            case 1:
            answer = "alpha"
            break;
            case 2:
            answer ="beta";
            break;
            case 3:
            answer ="gamma";
            break;
            case 4:
            answer ="delta";
            break;
        }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);
console.log(caseInSwitch(2));


