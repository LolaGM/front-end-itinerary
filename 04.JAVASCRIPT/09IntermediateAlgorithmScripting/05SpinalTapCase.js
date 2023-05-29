function spinalCase(str) {
    return str
      .split(/\W|_|(?=[^a-z])/) //dividimos el array 
      .join("-") //unimos esa división con guiones
      .toLowerCase(); //pasamos a minúsculas
  }
  
  console.log(spinalCase('This Is Spinal Tap')); //mostramos por pantalla

/*
Caso de punción lumbar
Convierte una cuerda en una caja espinal. El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.

function spinalCase(str) {
    return str;
}

spinalCase('This Is Spinal Tap');

*/