//operadores de comparación
console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);

//Igualdad vs igualdad estricta
console.log(3 == 3); // == (igualdad) verifica que los valores sean iguales
console.log(3 === "3"); // === (igualdad estricta) verifica que el tipo de dato y el valor sean iguales
console.log(3 === 3);
console.log(7 == 7);
console.log(7 === "7");

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; // se asignara de derecha a izquierda
console.log(c);

console.log(16 / 4 / 2); // se ejcuta de izquiera a derecha