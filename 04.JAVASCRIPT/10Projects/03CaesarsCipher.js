function rot13(str) {
    return str //aplicamos método replace a str
    //replace recibe dos parámetros
    //en primer lugar un regex con un patrón az que busca todas las coincidencias con g y con i no diferencia mayus/minus
    //en segundo lugar, para cada letra encontrada, recibe en este caso una función de reemplazo que recibe como parámetro l
    //dentro se obtiene el código ASCII usando charCodeAt con la primera posición 0 de la cadena recibida por l
    //se verifica si la letra es mayúscula
    //se comprueba que sea menor que la posición n 13 con la condicional para saber si suma 13 o resta al código ASCII recibido (true suma 13, false resta 13)
    //pasamos el primer carácter a minusc de esa l 
    //
    //se utiliza la expresión String.fromCharCode para convertir el nuevo código ASCII en el carácter correspondiente y se retorna como resultado del reemplazo.
    .replace(/[a-zA-Z]/gi,function(l){
        return String.fromCharCode(l.charCodeAt(0)+(l.toLowerCase()<'n'?13:-13)
    );
    });
}

console.log(rot13("SERR PBQR PNZC"));

/*
Cifrado César
Uno de los cifrados más simples y ampliamente conocidos es el cifrado César , también conocido como cifrado de desplazamiento . En un cifrado por desplazamiento, los significados de las letras se modifican en una cantidad determinada.

Un uso moderno común es el cifrado ROT13 , donde los valores de las letras se desplazan 13 lugares. Así A ↔ N, B ↔ Oy así sucesivamente.

Escriba una función que tome una cadena codificada ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero páselos.


*/