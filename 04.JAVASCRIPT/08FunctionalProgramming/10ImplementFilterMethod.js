Array.prototype.myFilter = function(callback) { //
    const newArray = []; //array vacío
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {//usamos bucle for para recorrer este objeto
      if (callback(this[i], i, this) == true) {
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };



/*
Implementar el método de filtro en un prototipo
Puede aprender mucho sobre el filter método si implementa su propia versión. Se recomienda utilizar un for bucle o Array.prototype.forEach().

Escribe el tuyo propio Array.prototype.myFilter(), que debería comportarse exactamente como Array.prototype.filter(). No debe utilizar el método incorporado filter. ArraySe puede acceder a la instancia en el myFilter método usando this.
*/