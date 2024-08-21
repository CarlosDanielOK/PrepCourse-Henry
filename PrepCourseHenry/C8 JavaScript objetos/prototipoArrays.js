console.log(Array.prototype);

// Añadimos un método personalizado 'primer' al prototipo de Array
Array.prototype.primer = function () {
    return this[0];
};

let numeros = [10, 20, 30];
console.log(numeros.primer()); // Imprime 10
