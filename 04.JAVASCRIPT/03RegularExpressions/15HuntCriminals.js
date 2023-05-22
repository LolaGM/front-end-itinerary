let reCriminals = /C+/;


/*
Encuentra uno o más delincuentes en una cacería
Es hora de hacer una pausa y probar sus nuevas habilidades de escritura de expresiones regulares. Un grupo de delincuentes escapó de la cárcel y se dio a la fuga, pero no sabes cuántos. Sin embargo, sí sabes que permanecen juntos cuando están cerca de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Aquí hay un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/coincide con la letra zcuando aparece una o más veces seguidas. Encontraría coincidencias en todas las siguientes cadenas:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
Pero no encuentra coincidencias en las siguientes cadenas ya que no hay letras z:

""
"ABC"
"abcabc"
Escriba una expresión regular codiciosa que encuentre uno o más delincuentes dentro de un grupo de otras personas. Un criminal está representado por la letra mayúscula C.

let reCriminals = /./; // Change this line

*/