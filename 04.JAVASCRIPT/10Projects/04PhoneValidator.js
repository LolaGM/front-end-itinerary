function telephoneCheck(str) {
    //guardamos en constante la regex para la validación encontrada para US number
    const phoneNumberUS = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
    //retornamos ese patrón al que le pasamos el método test que devuelve true o false cuando le pasamos el str
    return phoneNumberUS.test(str);
}

telephoneCheck("555-555-5555");

/*
Validador de número de teléfono
Regresa truesi la cadena pasada parece un número de teléfono válido de EE. UU.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número de EE. UU. válido. Los siguientes son ejemplos de formatos válidos para números de EE. UU. (consulte las pruebas a continuación para conocer otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
Para este desafío, se le presentará una cadena como 800-692-7753o 8oo-six427676;laskdjf. Su trabajo es validar o rechazar el número de teléfono de EE. UU. en función de cualquier combinación de los formatos proporcionados anteriormente. El código de área es requerido. Si se proporciona el código de país, debe confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono válido de EE. UU.; de lo contrario regresa false.

/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm

^ asserts position at start of a line
1st Capturing Group (1\s?)?
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
1 matches the character 1 with index 4910 (3116 or 618) literally (case sensitive)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
2nd Capturing Group (\d{3}|\(\d{3}\))
1st Alternative \d{3}
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times
2nd Alternative \(\d{3}\)
\( matches the character ( with index 4010 (2816 or 508) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times
\) matches the character ) with index 4110 (2916 or 518) literally (case sensitive)
Match a single character present in the list below [\s\-]
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
\- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{3} matches the previous token exactly 3 times
Match a single character present in the list below [\s\-]
? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
\s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
\- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
\d matches a digit (equivalent to [0-9])
{4} matches the previous token exactly 4 times

Global pattern flags 
g modifier: global. All matches (don't return after first match)
m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

function telephoneCheck(str) {
    return true;
}

telephoneCheck("555-555-5555");

*/