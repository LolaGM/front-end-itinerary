function orbitalPeriod(arr) { //función con parámetro
    const GM = 398600.4418; //constante 1
    const earthRadius = 6367.4447; //constante 2

    //método map en array para iterar sobre cada objeto y realizar operación con eseos elementos individuales
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt; //cálculo
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };  //se crea objeto que contiene propiedades name y orbitalP y se retorna
    });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



/*
Mapa de los escombros
De acuerdo con la Tercera Ley de Kepler, el período orbital T
 de dos masas puntuales que orbitan entre sí en una órbita circular o elíptica es:

T= 2 pia3m−−−√
 
a
 es el semieje mayor de la órbita
μ =GRAMOMETRO
  es el parámetro gravitacional estándar
GRAMO
  es la constante gravitacional,
METRO
  es la masa del cuerpo más masivo.
Devuelve una nueva matriz que transforma la altitud promedio de los elementos en sus períodos orbitales (en segundos).

La matriz contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la Tierra es 6367,4447 kilómetros y el valor GM de la Tierra es 398600,4418 km 3 s -2 .

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

*/