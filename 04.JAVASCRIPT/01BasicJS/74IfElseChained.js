/*Encadenamiento de sentencias If Else --
if/elselas declaraciones se pueden encadenar juntas para una lógica compleja. Aquí está el pseudocódigo de múltiples sentencias if/ encadenadas else if:

if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
. . .
} else {
    statementN
}
 */

function testSize(num) {
    // Only change code below this line
    if(num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small";
    }else if(num < 15){
        return "Medium";
    }else if(num < 20){
        return "Large";
    }else{
        return "Huge";
    }
    return "Change Me";
    // Only change code above this line
}

testSize(7);
testSize(15);
testSize(21);
console.log(testSize(7));
console.log(testSize(15));
console.log(testSize(21));