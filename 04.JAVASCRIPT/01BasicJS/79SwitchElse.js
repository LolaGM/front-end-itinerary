/*Reemplazo de cadenas If Else con interruptor
Si tiene muchas opciones para elegir, una switchdeclaración puede ser más fácil de escribir que muchas declaraciones if/ encadenadas else if. La siguiente:

if (val === 1) {
    answer = "a";
    } else if (val === 2) {
    answer = "b";
    } else {
    answer = "c";
    }
se puede reemplazar con:

switch (val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
}*/

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
        switch(val){
            case "bob":
            answer ="Marley";
            break;
            case 42:
            answer ="The Answer";
            break;
            case 1:
            answer ="There is no #1";
            break;
            case 99:
            answer ="Missed me by this much!";
            break;
            case 7:
            answer ="Ate Nine";
            break;   
        }
        // Only change code above this line
        return answer;
}

chainToSwitch(7);