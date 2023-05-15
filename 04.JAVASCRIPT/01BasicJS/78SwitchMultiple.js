/*Múltiples opciones idénticas en declaraciones de cambio
Si breakse omite la declaración de una switchdeclaración case, las siguientes casedeclaraciones se ejecutan hasta que breakse encuentra a. Si tiene varias entradas con la misma salida, puede representarlas en una switchdeclaración como esta:

let result = "";
switch (val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
}
Los casos 1, 2 y 3 producirán todos el mismo resultado.*/

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
        switch(val){
            case 1:
            case 2:
            case 3:
            answer ="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer ="Mid";
            break; 
        case 7:
        case 8:
        case 9:
            answer ="High";
            break;
        }
    // Only change code above this line
    return answer;
}

sequentialSizes(1);