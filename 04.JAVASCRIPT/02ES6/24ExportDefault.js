export default function subtract(x, y) {
    return x - y;
}
//export default no puede usar VARL,LET o CONST
/*
Cree un respaldo de exportación con el valor predeterminado de exportación
En la exportlección, aprendió sobre la sintaxis denominada exportación con nombre . Esto le permitió hacer múltiples funciones y variables disponibles para su uso en otros archivos.

Hay otra exportsintaxis que debe conocer, conocida como export default . Por lo general, utilizará esta sintaxis si solo se exporta un valor de un archivo. También se utiliza para crear un valor alternativo para un archivo o módulo.

A continuación se muestran ejemplos utilizando export default:

export default function add(x, y) {
    return x + y;
}

export default function(x, y) {
    return x + y;
}
La primera es una función con nombre y la segunda es una función anónima.

Dado que export defaultse utiliza para declarar un valor alternativo para un módulo o archivo, solo puede tener un valor como exportación predeterminada en cada módulo o archivo. Además, no puede usar export defaultcon var, letoconst

La siguiente función debe ser el valor de reserva para el módulo. Por favor agregue el código necesario para hacerlo.
*/