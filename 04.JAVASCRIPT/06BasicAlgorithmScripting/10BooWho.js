function booWho(bool) {
    return typeof bool === "boolean"; // comprobamos si el tipo de parámetro es boolean estrictamente
    //se podría usar el if en la opción 2 pero con el estrictamente igual ya devuelve true or false
}

booWho(null); //llamamos a la función

/*
opción 1 más normal usando if: y comprobando que el tipo sea boleano, pero  la  if statement no es necesaria porque el operador de igualdad siempre devuelve true or false.

function booWho(bool) {
    if(typeof(bool) === “boolean”){
    return true;
    } else {
    return false;
    }
}
opcion 2:

function booWho(bool) {
    if (bool === true || bool === false){
        return true;
    }
    else{
        return false; 
    }
}
********************************
Code Explanation
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
----------------------------------------------------------------
Comprueba si un valor se clasifica como un primitivo booleano. Regresar true o false.

Las primitivas booleanas son true y false.

function booWho(bool) {
    return bool;
}

booWho(null);//llamamos a la funcion y le pasamos valor

*/