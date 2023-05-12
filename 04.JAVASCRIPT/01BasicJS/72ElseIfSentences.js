/*Introducción a las sentencias Else If
Si tiene varias condiciones que deben abordarse, puede encadenar ifdeclaraciones junto con else ifdeclaraciones.

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}
 */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else{
        return "Between 5 and 10";
    }
}

testElseIf(7);