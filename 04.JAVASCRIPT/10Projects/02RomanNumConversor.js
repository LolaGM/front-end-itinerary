function convertToRoman(num) {
    const convert = { //constante que contiene objeto con valores romanos --> árabes
                METRO:1000,
                CM:900,
                D:500,
                CD:400,
                C:100,
                XC:90,
                L:50,
                SG:40,
                X:10,
                IX:9,
                V:5,
                IV:4,
                I:1
            }

    let romanNum = ''; //variable vacío 
    for(let i in convert){ //let i alcance de la variable i en convert se limita a este bloque
        while(num >= convert[i]){ //mientras num sea mayor o igual al índice de convert
            console.log(num); 
            console.log(i);
            romanNum += i; // a esa variable le sumamos i más ese valor de variable
            num -= convert[i]; //a num le restamos num -1
        } 
    } 
    return romanNum; //retornamos el valor de la variable creada en línea 18

}

convertToRoman(36);
console.log(convertToRoman(150));


/*
Convertidor de números romanos
Convierte el número dado en un número romano.

números romanos	números arábigos
METRO	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
SG	40
X	10
IX	9
V	5
IV	4
I	1

Todas las respuestas en números romanos deben proporcionarse en mayúsculas

function convertToRoman(num) {
    return num;
}

convertToRoman(36);

*/