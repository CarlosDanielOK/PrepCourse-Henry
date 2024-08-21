//AGREGAR UN ELEMENTO A UN ARRAY
var colores = ["amarrillo", "azul"];
console.log(colores);

colores.push("verde"); // push agrega un elemento AL FINAL del array colores
console.log(colores);

colores.unshift("rojo"); // unshift agrega un elemento AL INICIO del array colores
console.log(colores);

//ELIMINAR UN ELEMENTO DE UN ARRAY
colores.pop(); // pop elimina EL ULTIMO ELEMENTO del array colores
console.log(colores);

colores.shift(); // shift elimina EL PRIMER ELEMENTO del array colores
console.log(colores);

//DETERMINAR SI UN ELEMENTO ESTA DENTRO DE UN ARRAY O NO
var nombres = ["Naruto", "Sasuke", "Itachi", "Madara", "Obito"];
var incluyeNombre = nombres.includes("Naruto"); //includes retorna true si el elemento entre parentesis esta dentro del array nombres y retorna false si no lo esta
console.log(incluyeNombre);

//DETERMINAR SI TODOS LOS ELEMENTOS DE UN ARRAY CUMPLEN UNA CONDICION
var numeros = [5, 6, 7, 8, 9, 10];
var cumplenCondicion = numeros.every(num => {
    return num > 4; // evalua si todos los elementos son mayores que 4, retorna true si si son, o retorna false si no son
});
console.log(cumplenCondicion);

//CONVERTIR UN STRING EN UN ARRAY
var palabra = "Naruto";
var palabraSeparada = palabra.split(''); // split convierte el string de la variable palabra a un array y lo almacena en la variable palabraSeparada. ('') si colocamos comillas simples sin espacio significa que separa el string por cada caracter. Si pusieramos un (' ') separaria el string por cada espacio que encuentre.
console.log(palabraSeparada);

//CONVERTIR UN ARRAY EN UN STRING
var palabra2 = palabraSeparada.join(''); // join convierte un array a string, ('') las comillas sin espacio significa que unira todos los caracteres u elementos del array sin espacios
console.log(palabra2);

//RECORRER ARRAY Y VERFICAR UNA CONDICION
// el método every es una función de los arrays que se usa para verificar si todos los elementos del array cumplen con una condición especificada. El parametro element almacena el elemento actual del array que se esta procesando. element > 10 es la condicion que verificara para cada elemento del array. Retorna true si todos los elementos del array cumplen la condicion, o retorna false si al menos un elemento no cumple la condicion.
let arrayNumero = [11,12,13,14,15];
const sonMayoresQue10 = arrayNumero.every(element => element > 10);
console.log(sonMayoresQue10);

//RECORRER ARRAYS O ARREGLOS
// forEach. Permite ejecutar una instruccion a cada elemento del array pero sin retornar un valor especifico.
var numero = [1, 2, 3, 4, 5];
let numeroNuevo = numero.forEach(num => console.log(num)); // imprime cada elemento del array
console.log(numeroNuevo); // lanzara undifined ya que forEach no retorna un nuevo array

// map. Permite crear un nuevo array con los resultados de la aplicación de una función a cada elemento del array original. A diferencia de forEach, que se utiliza para ejecutar efectos secundarios, map se utiliza para transformar datos y crear un nuevo array basado en esa transformación. Es decir, hace lo mismo que forEach con la diferencia que map retorna el nuevo array
var nuevoArray = numero.map(num => num + 1); // suma uno a cada elemento del array y almance el nuevo array que retorna map en nuevoArray
console.log(nuevoArray);