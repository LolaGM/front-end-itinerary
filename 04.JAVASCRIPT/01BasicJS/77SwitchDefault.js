/*Adición de una opción predeterminada en declaraciones de cambio
En una switchdeclaración, es posible que no pueda especificar todos los valores posibles como casedeclaraciones. En su lugar, puede agregar la defaultdeclaración que se ejecutará si no casese encuentran declaraciones coincidentes. Piense en ello como la elsedeclaración final de una if/elsecadena.

Una defaultdeclaración debe ser el último caso y es como el ELSE en un IF statement

switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    ...
    default:
        defaultStatement;
        break;
}*/

/*Escriba una declaración de cambio para establecer answerlas siguientes condiciones:
a- apple
b- bird
c- cat
default-stuff

En cada caso pondremos la letra y la variable respuesta con el equivalente y su break y al final de todas el DEFAULT*/

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
        switch(val){
            case "a":
            answer ="apple";
            break;
            case "b":
            answer ="bird";
            break;
            case "c":
            answer ="cat";
            break;
            default:
            answer ="stuff";
            break;      
        }
    // Only change code above this line
    return answer;
}

switchOfStuff(1);
