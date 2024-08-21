function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5);

/*
//formas de declarar una funcion
//primero
function sumaTress(x) {
    return x + 3;
}

//segundo
var sumaTresss = function(x) {
    return x + 3;
}

//tercero
var sumaTressss = (x) => {
    return x + 3;
}
*/

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return ("El nombre retornado por la función 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog("Naruto"));
}

function cuidadoConElReturn(nombre) {
    return nombre;
}