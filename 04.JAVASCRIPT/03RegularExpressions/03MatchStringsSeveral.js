let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // changed this line to include the OR | operator and write the options separated by this symbol
let result = petRegex.test(petString);


/*
Haga coincidir una cadena literal con diferentes posibilidades
Usando expresiones regulares como /coding/, puede buscar el patrón codingen otra cadena.

Esto es poderoso para buscar cadenas individuales, pero está limitado a un solo patrón. Puede buscar varios patrones utilizando el operador alternationo : .OR|

Este operador coincide con los patrones anteriores o posteriores. Por ejemplo, si desea hacer coincidir las cadenas yeso no, la expresión regular que desea es /yes|no/.

También puede buscar más de dos patrones. Puede hacer esto agregando más patrones con más ORoperadores separándolos, como /yes|no|maybe/.

Complete la expresión regular petRegexpara que coincida con las mascotas dog, cat, birdo fish.

*/