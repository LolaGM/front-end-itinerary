function urlSlug(title) {
    return title
    .split(/[\s+,.]/) //lo dividimos en partes con regex quitando spacios que podría tener más de uno y puntuación
    .map(word => word.toLowerCase()) //recorremos el array dividido y lo pasamos a minusc
    .filter(word => word !== "") //con filter eliminamos espacios que hubiera entre elementos word
    .join("-") //lo unimos con guiones 

}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

/*
Aplicar programación funcional para convertir cadenas en slugs de URL

NOTA: El slug, también conocido como URL slug, es la sección que identifica a una página específica y se encuentra justo después de la extensión de dominio y /.

Los últimos desafíos cubrieron varios métodos útiles de matrices y cadenas que siguen los principios de programación funcional. También aprendimos sobre reduce, que es un método poderoso que se usa para reducir los problemas a formas más simples. Desde el cálculo de promedios hasta la clasificación, se puede lograr cualquier operación de matriz aplicándola. Recuerde que mapy filterson casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de administración de contenido (CMS) tienen los títulos de una publicación agregados a parte de la URL para propósitos simples de marcadores. Por ejemplo, si escribe una publicación de Medium titulada Stop Using Reduce, es probable que la URL tenga algún tipo de cadena de título ( .../stop-using-reduce). Es posible que ya haya notado esto en el sitio de freeCodeCamp.

Rellene la urlSlugfunción para que convierta una cadena titley devuelva la versión con guión de la URL. Puede usar cualquiera de los métodos que se tratan en esta sección y no use replace. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazados por un guión ( -)

La salida debe ser todas las letras minúsculas

La salida no debe tener espacios.

function urlSlug(title) {
    return title
    .toLowerCase() // pasamos a minúscula el array title
    .split(/[\s,.]/) //lo dividimos en partes con regex quitando spacios y puntuación
    .join("-") //lo unimos con guiones 

}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

*/