const s = [5, 7, 2];
function editInPlace() {
      s.sort(); //usamos método sort aplicado con notación de punto a la const s para ordenar el array.OJO que no siempre funciona
  // Using s = [2, 5, 7] would be invalid
}
editInPlace();


/*Mutar una matriz declarada con const--------------------------------------------------------
Si no está familiarizado con const, consulte este desafío sobre la constpalabra clave .

La constdeclaración tiene muchos casos de uso en JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables usando constde forma predeterminada, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let.

Sin embargo, es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable usando constaún son mutables. El uso de la constdeclaración solo evita la reasignación del identificador de variable.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3]resultará en un error. Después de comentar esa línea, console.logmostrará el valor [5, 6, 45].

Como puede ver, puede mutar el objeto [5, 6, 7]en sí y la variable saún apuntará a la matriz alterada [5, 6, 45]. Como todas las matrices, los elementos de la matriz sson mutables, pero debido a que constse usaron, no puede usar el identificador de variable spara apuntar a una matriz diferente usando el operador de asignación.

Una matriz se declara como const s = [5, 7, 2]. Cambie la matriz para [2, 5, 7]usar varias asignaciones de elementos. */