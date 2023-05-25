// tabs is an array of titles of each site open within the window
const Window = function(tabs) { //variable Ventana que contiene funcion a la que le pasamos pestañas
    this.tabs = tabs; // consttructor for Window al que le damos tabs como input de entrada
    // We keep a record of the array inside the object: ventana se compone de tabs o pestañas
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) { //función con parámetro nueva ventana con el método join que hemos aplicado
this.tabs = this.tabs.concat(otherWindow.tabs); // concatenamos a este tabs que compone a ventanas
return this; //retorna esto
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) { //función con parámetro  ventana con el método tabOpen que hemos aplicado
this.tabs.push('new tab'); // Let's open a new tab for now y la añade a las pestañas con el nombre que especificamos al push
return this; //retorna esto
};

// When you close a tab Es la que vamos a modificar el código para asegurarnos que elimina la tab correcta:
Window.prototype.tabClose = function(index) {//función con parámetro indice  con el método tabClose que hemos aplicado

// Only change code below this line
this.tabs.splice(index,1) 
    //a tabs le aplicamos método splice al que le pasamos index como primer argumento y el 1 es que solo borramos 1 como segundo parámetro del método splice
// Only change code above this line

return this;//retorna esto
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
.tabOpen() // Open a new tab for cat memes
.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);




/*
Comprender los peligros del uso del código imperativo
La programación funcional es un buen hábito. Mantiene su código fácil de administrar y lo salva de errores furtivos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para resaltar dónde puede tener problemas.

En inglés (y muchos otros idiomas), el tiempo imperativo se usa para dar órdenes. De manera similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de declaraciones para realizar una tarea.

A menudo, las declaraciones cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un forbucle que proporcione instrucciones exactas para iterar sobre los índices de una matriz.

En contraste, la programación funcional es una forma de programación declarativa. Le dices a la computadora lo que quieres que haga llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes, por lo que no necesita escribir cómo debe realizarlas la computadora. Por ejemplo, en lugar de usar el forciclo mencionado anteriormente, puede llamar al map método que maneja los detalles de iterar sobre una matriz. Esto ayuda a evitar errores semánticos, como los "Errores desactivados por uno" OBOE que se trataron en la sección Depuración.

Considere el escenario: está navegando por la web en su navegador y desea realizar un seguimiento de las pestañas que ha abierto. Intentemos modelar esto usando un código simple orientado a objetos.

Un objeto Ventana se compone de pestañas y, por lo general, tiene más de una Ventana abierta. Los títulos de cada sitio abierto en cada objeto Ventana se mantienen en una matriz. Después de trabajar en el navegador (abrir nuevas pestañas, fusionar ventanas y cerrar pestañas), desea imprimir las pestañas que aún están abiertas. Las pestañas cerradas se eliminan de la matriz y se agregan nuevas pestañas (para simplificar) al final.

El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), tabClose()y join(). La matriz tabses parte del objeto Ventana que almacena el nombre de las páginas abiertas.

Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, provocando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs, debería estar ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']pero la lista producida por el código es ligeramente diferente.

Cambie Window.prototype.tabClosepara que elimine la pestaña correcta.

*/
/*

    tabs is an array of titles of each site open within the window
    const Window = function(tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };
    
    When you join two windows into one window
    Window.prototype.join = function(otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };
    
    When you open a new tab at the end
    Window.prototype.tabOpen = function(tab) {
        this.tabs.push('new tab'); // Let's open a new tab for now
        return this;
    };
    
    When you close a tab
    Window.prototype.tabClose = function(index) {
    
        Only change code below this line
    
        const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
        const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
    
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    
        Only change code above this line
    
        return this;
    };
    
    Let's create three browser windows
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
    
    Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
        .tabOpen() // Open a new tab for cat memes
        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);

    */