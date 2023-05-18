function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine(); //Corregir el código para que la variable result con () para que se establezca en el valor devuelto al llamar a la función getNine.
console.log(result);



/*
Detectar paréntesis de apertura y cierre faltantes después de una llamada de función
Cuando una función o método no acepta ningún argumento, puede olvidarse de incluir los paréntesis de apertura y cierre (vacíos) al llamarlo. A menudo, el resultado de una llamada de función se guarda en una variable para otro uso en su código. Este error se puede detectar registrando valores de variables (o sus tipos) en la consola y viendo que uno está configurado en una referencia de función, en lugar del valor esperado que devuelve la función.

Las variables en el siguiente ejemplo son diferentes:

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
Aquí varOneestá la función myFunction, y varTwoes la cadena You rock!.

Corrija el código para que la variable resultse establezca en el valor devuelto al llamar a la función getNine.
*/