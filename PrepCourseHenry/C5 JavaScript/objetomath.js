//Math.pow() nos permite potenciar un número. Por ejemplo, 2 elevado al cubo, sería igual a multiplicar 2 x 2 x 2. Es decir, 8.
var a = Math.pow(2,3); //El primer argumento es la base, y el segundo será la potencia.
console.log(a);

//Math.round redondeará el número decimal al entero más próximo. Es decir que, si tenemos 0.49, el resultado será 0. En cambio, si tenemos 0.50, el resultado será 1.
var b = Math.round(-5.99);
console.log(b);

//Math.floor redondeará el número decimal al entero de menor valor. Por ejemplo, si tenemos el número 5.93, el resultado será 5.
var c = Math.floor(5.93);
console.log(c);

//Math.ceil al contrario que el anterior, redondeará un número al siguiente entero. Por ejemplo, si tenemos 3.27 el resultado será 4.
var d = Math.ceil(3.27);
console.log(d);

//Math.max y Math.min nos permitirán conocer el valor máximo o mínimo de un conjunto de números. Por ejemplo, si tenemos los números 1, 2, 3, 4 y 5, el máximo será el 5 y el mínimo el número 1.
var e = Math.max(1,2,3,4,5);
var f = Math.min(1,2,3,4,5);
console.log(e);
console.log(f);

//Math.random nos permitirá generar un número aleatorio. Es importante tener en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.
var g = Math.random();
console.log(g);