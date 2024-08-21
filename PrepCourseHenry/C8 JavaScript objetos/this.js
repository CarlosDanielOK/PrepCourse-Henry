let persona = {
    nombre: "Naruto",
    edad: 15,
    saludar: function() {
        console.log("Hola " + this.nombre);
    },
    edadEnAnos: function(anos) {
        console.log("En " + anos + " años " + this.nombre + " tendra " + (this.edad + anos) );
    },
}

persona.saludar();
persona.edadEnAnos(15);

// ------------------------------------------------

let libro = {
    titulo: "Naruto Shippuden",
    autor: "Naruto Uzumaki",
    anio: 2010,
    mostrarDetalles: function() {
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Año: " + this.anio);
    }
}

libro.mostrarDetalles();