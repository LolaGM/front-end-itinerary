/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter','Healing']; //arreglos con contenido string

interface Personaje{
    nombre: string;
    hp: number;
    habilidades:string[],
    puebloNatal? :string; //el signo de interrogación indica que es opcional este campo
}

const personaje: Personaje = { //le decimos a la constante que se base en la interface donde hemos indicado el tipo de dato del valor de cada clave: clave nombre valor string etc
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']

};

personaje.puebloNatal = "Pueblo Paleta";

