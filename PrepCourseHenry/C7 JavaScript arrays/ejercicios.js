function combine(str1, str2, str3) {
    // Esta función debe combinar de forma alternada cada caracter de cada string. La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos. Los strings pueden tener cualquier tamaño.
    // EJEMPLOS
    // combine("abc", "", "123") == "a1b2c3"
    // combine("abc", "12345", "") == "a1b2c345"
    // combine("abc", "12345", "67") == "a16b27c345"
    // Tu código:

    // convierte los string en arrays
    let string1 = str1.split('');
    let string2 = str2.split('');
    let string3 = str3.split('');

    // calculo cual string tiene mayor tamaño
    let stringmayor;

    if (string1.length > string2.length && string1.length > string3.length)
        stringmayor = string1.length;
    else if (string2.length > string1.length && string2.length > string3.length)
        stringmayor = string2.length;
    else if (string3.length > string1.length && string3.length > string2.length)
        stringmayor = string3.length;
    else
        stringmayor = string1.length; // si ninguno es mayor significa que todos tiene el mismo tamaño

    // combino los strings
    let stringCombinado = [];

    // este for controla que string se procesa
    for (let i = 0; i < stringmayor; i++) {
        stringCombinado.push(string1[i]);
        stringCombinado.push(string2[i]);
        stringCombinado.push(string3[i]);
    }

    return stringCombinado.join(''); // convierte el array en un string y lo retorna


}

console.log(combine("abc", "12345", "67"));