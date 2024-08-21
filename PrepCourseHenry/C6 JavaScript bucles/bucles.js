// for
var suma = 0;

for (var i = 0; i < 10; i++) {
    console.log("Variable i: " + i); // imprime el valor de i
    console.log(suma,"+",i,"="); // imprime que suma se esta haciendo en cada iteracion
    suma = suma + i;
    console.log(suma);
    console.log("-------------"); // para ayudar a ver mejor cuando termine la iteracion
}

// while
suma = 0; // reinicio el valor de suma

while (suma < 5) {
    suma = suma + 1;
    console.log(suma);
}