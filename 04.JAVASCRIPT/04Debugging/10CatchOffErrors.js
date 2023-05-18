function countToFive() {
    let firstFive = "12345"; //string
    let len = firstFive.length; //array method length
    // Only change code below this line
    for (let i = 0; i <= len-1; i++) { //i en 0 y luego restar al largo -1 porque no sabemos nunca el largo del array
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();


/*
Catch Off By One Errors al usar la indexación --Off by one errors (sometimes called OBOE)
Los errores de apagado por uno (a veces llamados OBOE) surgen cuando intenta apuntar a un índice específico de una cadena o matriz (para dividir o acceder a un segmento), o cuando recorre los índices de ellos. La indexación de JavaScript comienza en cero, no en uno, lo que significa que el último índice siempre es uno menos que la longitud del elemento. Si intenta acceder a un índice igual a la longitud, el programa puede arrojar un error de referencia de "índice fuera de rango" o imprimir undefined.

Cuando usa métodos de cadena o matriz que toman rangos de índice como argumentos, es útil leer la documentación y comprender si son inclusivos (el elemento en el índice dado es parte de lo que se devuelve) o no. Estos son algunos ejemplos de errores de apagado por uno:

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
El primer ejemplo aquí repite demasiadas veces, y el segundo repite una demasiado pocas veces (falta el primer índice, 0). El tercer ejemplo es correcto.

Solucione los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola.
*/