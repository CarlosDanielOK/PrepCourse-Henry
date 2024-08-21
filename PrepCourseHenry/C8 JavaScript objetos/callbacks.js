//  un callback en JavaScript es básicamente pasar una función como argumento sin paréntesis a otra función, para que se ejecute en un momento posterior. Si pasas la función con paréntesis, estás ejecutando la función inmediatamente y pasando el valor que retorna, no la función en sí para que se ejecute más tarde.

function saludar(nombre, callback) { // callback es el parametro que recibe una referencia a la funcion despedirse pero aun no la ejecuta
    console.log('Hola, ' + nombre);
    callback(); // hace referencia a la funcion despedirse y la ejecuta
}

function despedirse() {
    console.log('Adiós!');
}

saludar('Carlos', despedirse); // pasa como argumento la funcion despedirse pero sin parentesis ya que de tener parentesis "despedirse()" se estaria ejecutando inmediatamente la funcion y daria error ya que despedirse no retorna nada, y si retornara algo tambien daria error ya que en la funcion saludar espera una funcion como parametro en "callback"