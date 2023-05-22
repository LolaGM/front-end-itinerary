let myStr = "Jello World";
//asignamos un nuevo valor a la variable con el string correcto
myStr = "Hello World"; 

/*
Comprender la inmutabilidad de cadenas
En JavaScript, Stringlos valores son inmutables , lo que significa que no se pueden modificar una vez creados.

Por ejemplo, el siguiente código generará un error porque la letra Bde la cadena Bobno se puede cambiar a la letra J:

let myStr = "Bob";
myStr[0] = "J";
Tenga en cuenta que esto no significa que myStrno se pueda reasignar. La única forma de cambiar myStrsería asignarle un nuevo valor, así:

let myStr = "Bob";
myStr = "Job";
Corrija la asignación para myStrque contenga el valor de cadena del Hello Worlduso del enfoque que se muestra en el ejemplo anterior.

let myStr = "Jello World";

myStr[0] = "H"; // Change this line
*/