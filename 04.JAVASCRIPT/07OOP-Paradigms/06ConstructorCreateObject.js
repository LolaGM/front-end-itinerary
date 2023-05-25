function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog(); // crear una nueva instancia de Dog, asignándola a una variable hound.

/*
Usar un constructor para crear objetos
Aquí está el Bird constructor del desafío anterior:

function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();
NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Tenga en cuenta que el new operador se usa cuando se llama a un constructor. Esto le dice a JavaScript que cree una nueva instancia o copia de Bird called blueBird. Sin el new operador, this dentro del constructor no apuntaría al objeto recién creado, dando resultados inesperados. Ahora blueBird tiene todas las propiedades definidas dentro del Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Al igual que cualquier otro objeto, se puede acceder a sus propiedades y modificarlas:

blueBird.name = 'Elvira';
blueBird.name;
Usa el Dog constructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

*/