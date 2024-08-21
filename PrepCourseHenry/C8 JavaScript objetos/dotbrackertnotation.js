// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones']; // esto seria igual a: atuendos.piernas = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// Diferencia
let comidas = {};

let diferenciaDeNotaciones = function(prop1, prop2) {
    // si queremos crear una propiedad con el valor que pasamos por parametro en la funcion se debe usar BracketNotation pero sin las comillas
    comidas[prop1] = ["Naranja", "Manzana"];
    comidas[prop2] = ["Banana", "Mandarina"];
}
diferenciaDeNotaciones("Saludable", "NoSaludable");
console.log(comidas);