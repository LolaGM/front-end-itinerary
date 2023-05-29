function pairElement(str) {
    let reference = { //objeto que contiene propiedad de cada par con las dos combinaciones posibles de pares
        C: ["C", "G"],
        G: ["G", "C"],
        A: ["A", "T"],
        T: ["T", "A"],
    };

return str.split("").map(char => reference[char]); //que divida el array que le pasemos  y con map recorremos ese array dividido yendo letra por letra de ese objeto reference con index de letra
}

pairElement("GCG"); //muestra [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
pairElement("ATA"); //muestra [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'A', 'T' ] ]

/*

Emparejamiento de ADN
Los pares de cadenas de ADN consisten en pares de nucleobases. Los pares de bases están representados por los caracteres AT y CG , que forman bloques de construcción de la doble hélice del ADN.

A la hebra de ADN le falta el elemento de emparejamiento. Escribe una función para hacer coincidir los pares de bases que faltan para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, busque el carácter del par base. Devuelve los resultados como una matriz 2d.

Por ejemplo, para la entrada GCG, devuelva[["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su pareja se emparejan en una matriz, y todas las matrices se agrupan en una matriz encapsulante.

function pairElement(str) {
    return str;
}

pairElement("GCG");

*/