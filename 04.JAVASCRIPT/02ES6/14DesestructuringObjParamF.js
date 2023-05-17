//objeto como parámetro de una función flechada usando desestrucuración
const nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicación: "España"
};
//hacemos una función para actualizar la información del cliente con flecha funcion
const actualizarPerfil = (infoPerfil) =>{ //descomponemos el objeto inforPerfil dentro de la función mediante const y en ella aladimos las propiedades
    const{nombre,edad,nacionalidad,ubicación} = infoPerfil//del lado derecho de la constante que contiene las propiedades del objeto nuevoPerfilCliente, escribimos el nombre del objeto inforPerfil
    console.log(nombre,edad,nacionalidad,ubicación); // mostramos por pantalla las propieades del objeto
};
//llamamos a la funcion pasando como parámetro la const nuevoPerfilCliente
actualizarPerfil(nuevoPerfilCliente); //da por pantalla: Jane Doe 24 Española España

//podemos también llamar al objeto de manera independiente para cada propiedad  que queramos dentro del parámetro de la funcion
const actualizarPerfilIndividualmente = ({nombre,edad}) =>{ //descomponemos el objeto inforPerfil dentro de la función mediante const y en ella aladimos las propiedades
    console.log(nombre,edad); // mostramos por pantalla las propieades del objeto
};
//llamamos a la funcion pasando como parámetro
actualizarPerfilIndividualmente(nuevoPerfilCliente);

//-------------------------
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
// hacemos función flechada halft y nos piden max y min
//como parámetros de la funcion flechada le pasamos las dos propiedades solicitadas sin usar variable que las contenga y sumamos max + min para dividirlas por 2.0
//en este caso la fucnion flechada no tiene llaves {} al ser sólo una línea
const half = ({max,min}) => (max + min) / 2.0; 
//max y min se convierten en variables que usamos para sumarlas y luego dividir

/*
Usar asignación de desestructuración para pasar un objeto como parámetro de una función
En algunos casos, puede desestructurar el objeto en un argumento de función en sí mismo.

Considere el siguiente código:

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;

}
Esto efectivamente desestructura el objeto enviado a la función. Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}
Cuando profileDatase pasa a la función anterior, los valores se desestructuran del parámetro de la función para su uso dentro de la función.

Use la asignación de desestructuración dentro del argumento de la función halfpara enviar solo maxy mindentro de la función.
*/