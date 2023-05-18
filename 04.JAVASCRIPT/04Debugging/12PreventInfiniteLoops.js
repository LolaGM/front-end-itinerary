function myFunc() {
    for (let i = 1; i <= 4; i += 2) { //iniciamos en 0 y sumamos dos cada vez al resultado
        console.log("Still going!"); //se mostrará tantas veces
        console.log(i);//mostramos el valor
    }
}

let myLoop = myFunc(); // variable para llamar a la función

/* Prevenir bucles infinitos con una condición terminal válida
El último tema es el temido bucle infinito. Los bucles son una gran herramienta cuando necesitas que tu programa ejecute un bloque de código un determinado número de veces o hasta que se cumpla una condición, pero necesitan una condición terminal para que finalice el bucle. Los bucles infinitos pueden congelar o bloquear el navegador, y causar un caos en la ejecución del programa en general, lo que nadie quiere.

Había un ejemplo de un bucle infinito en la introducción de esta sección - no tenía ninguna condición terminal para salir del bucle while dentro de loopy(). ¡NO llames esta función!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
El trabajo del programador es asegurarse de que la condición terminal, que indica al programa cuándo debe salir del código del bucle, se alcance finalmente. Un error es incrementar o decrementar una variable de contador en la dirección incorrecta desde la condición terminal. Otra es reiniciar accidentalmente un contador o una variable de índice dentro del código del bucle, en lugar de incrementarlo o decrementarlo.

La función myFunc() contiene un bucle infinito porque la condición terminal i != 4 nunca se evaluará a false (y romperá el bucle) - i se incrementará en 2 en cada pasada, y saltará justo sobre 4, ya que i es impar para empezar. Corrige el operador de comparación en la condición terminal para que el bucle sólo se ejecute para i menor o igual a 4.*/