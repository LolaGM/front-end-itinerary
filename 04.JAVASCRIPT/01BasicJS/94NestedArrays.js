/*Acceso a matrices anidadas
Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. De manera similar al acceso a objetos anidados, la notación de corchete de matriz se puede encadenar para acceder a matrices anidadas.

Aquí hay un ejemplo de cómo acceder a una matriz anidada:

const ourPets = [
    {
        animalType: "cat",
        names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
        "Spot",
        "Bowser",
        "Frankie"
        ]
    }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1]sería la cadena Fluffy, y ourPets[1].names[0]sería la cadena Spot.

Con la notación de puntos y corchetes, establezca la variable secondTreeen el segundo elemento de la treeslista desde el myPlantsobjeto.

 */

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
        },
        {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
//dentro de la variable guardamos la ruta: primero accedemos al índice 1 de trees y luego dentro de ese indicamos que también tiene posición 1

const secondTree = myPlants[1].list[1];