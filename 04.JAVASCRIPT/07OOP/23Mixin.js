let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
name: "Warrior",
type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj){ //creo variable que contiene el mixin pasaándole un obj
    obj.glide = function(){ //a ese obj le aplico método deseado glide
    console.log ("I can glide"); //muestro por pantalla opcionalmente
    }
}

glideMixin(bird); //ese método recibe el obj en cada caso que necesita esa propiedad glide
glideMixin(boat);  //ese método recibe el obj en cada caso que necesita esa propiedad glide

bird.glide(); //asignar método al objeto que no tiene relación entre ellos
boat.glide();

/*
Use un Mixin para agregar un comportamiento común entre objetos no relacionados
Como has visto, el comportamiento se comparte a través de la herencia. Sin embargo, hay casos en los que la herencia no es la mejor solución. La herencia no funciona bien para objetos no relacionados como Bird y Airplane. Ambos pueden volar, pero a Bird no es un tipo de Airplane y viceversa.

Para objetos no relacionados, es mejor usar mixins.
Un mixin permite que otros objetos usen una colección de funciones (métodos)

let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};

El flyMixin toma cualquier objeto y le da el fly método a ese objeto como propiedad

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

El flyMixin toma cualquier objeto y le da el fly método a ese objeto como propiedad

flyMixin(bird);
flyMixin(plane);

Aquí bird y plane se pasan a flyMixin como obj, y luego  se asigna la fly función a cada objeto. Ahora bird y plane ambos pueden volar:

bird.fly();
plane.fly();

La consola mostraría la cadena Flying, wooosh!dos veces, una para cada .fly()llamada.

Observe cómo el mixin permite que el mismo fly método sea reutilizado por objetos no relacionados bird y plane.

Cree un mixin llamado glideMixin que defina un método llamado glide. Luego usa el glideMixin para dar ambos bird y boat la habilidad de planear.

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

*/