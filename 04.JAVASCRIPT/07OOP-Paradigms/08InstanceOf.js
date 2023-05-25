function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(4); //creo una copia instanciando con new y le paso parámetro de numBedrooms
myHouse instanceof House; //con instanceof en medio comprueblo si la variable que contiene la copia de House es realmente una copia del constructor House y no un objeto creado a la antigua...

/*
Verificar el constructor de un objeto con instanceof
Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript brinda una manera conveniente de verificar esto con el instanceof operador. instanceof le permite comparar un objeto con un constructor, devolviendo true o false en función de si ese objeto se creó o no con el constructor. Aquí hay un ejemplo:

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
Este instanceof método devolvería true.

Si se crea un objeto sin usar un constructor, instanceof se verificará que no sea una instancia de ese constructor:

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

canary instanceof Bird;
Este instanceofmétodo devolvería false porque este objeto se creo de la manera "tradicional" con iguales y dos puntos para propiedad :valor

Cree una nueva instancia del Houseconstructor, llámelo myHousey pase una cantidad de dormitorios. Luego, use instanceofpara verificar que es una instancia de House.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
*/