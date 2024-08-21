let libro = { autor: "Kishimoto", tomo: 590, genero: "Shonnen" };
// El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.
let tienePropiedad = libro.hasOwnProperty("autor");
console.log(tienePropiedad);

// El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
let todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

// for in
let mundo = { contienentes: 7, paises: 195, oceanos: 5 };
for (let prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + mundo[prop]);
}

//THIS
let mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un ' + this.raza);
    },
 };

 mascota.info();