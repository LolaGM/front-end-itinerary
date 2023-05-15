/*Contar cartas---
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja sobre la casa en la próxima mano al realizar un seguimiento del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama Conteo de Cartas.

Tener más cartas altas restantes en el mazo favorece al jugador. A cada tarjeta se le asigna un valor de acuerdo con la siguiente tabla. Cuando la cuenta es positiva, el jugador debe apostar alto. Cuando la cuenta es cero o negativa, el jugador debe apostar bajo.
Tabla:
Cambio de conteo	Tarjetas
+1	                2, 3, 4, 5, 6
0	                7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'
Escribirás una función de conteo de cartas. Recibirá un card parámetro, que puede ser un número o una cadena, e incrementará o decrementará la countvariable global según el valor de la tarjeta (ver tabla). La función luego devolverá una cadena con el conteo actual y la cadena Betsi el conteo es positivo, o Holdsi el conteo es cero o negativo. El conteo actual y la decisión del jugador ( Beto Hold) deben estar separados por un solo espacio.

Salidas de ejemplo: -3 Hold o5 Bet

Sugerencia
NO restablezca counta 0 cuando el valor sea 7, 8 o 9.
NO devuelva una matriz.
NO incluya comillas (sencillas o dobles) en el resultado.

Nuestra meta es definiir una función para contar cartas.
La función debe tener un parámetro CARTA que puede ser un numero o cadena de caracteres y luego aumentar o reducir el valor de la variable GLOBAL conteo de acuerdo al valor de la carta (ver tabla)*/

let count = 0; //variable global que irá cambiando según conteo

function cc(card) {
  // Only change code below this line
      switch(card){  //usamos un switch con parámetro carta y empezamos a casear en 2
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count ++; // esta es la consecuencia que pasará si está dentro de 2-6, se aumenta la variable global en 1 como indica la tabla del BLACKJACK
            break;

            //para el caso de conteo 0 no hace falta indicar los CASE 
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
            count --; // esta es la consecuencia que pasará si está dentro de 10-A, se disminuye la variable global en 1 como indica la tabla del BLACKJACK
            break;
    }
      //una vez hecho el SWITCH con cada posible situación, vamos a hacer el condicional para indicar si se apuesta o se espera según el valor de la variable CONTEO
    let holdbet ="Hold"; //variable para guardar la decision de apostar que luego puede cambiar

    if (count>0){
        holdbet ="Bet";
    }
    return count + " " + holdbet; // que tetorne el valor 
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

