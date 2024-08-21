let objeto = { anime: ["Naruto", "Dragon Ball", "Boruto"] };

let estudiante = { nombre: "Naruto", edad: 22, estudios: { esProgramador: true } };

// acceder a un objeto
console.log(estudiante.edad);

// modificar un objeto
console.log(estudiante.nombre);
estudiante.nombre = "Sasuke";
console.log(estudiante.nombre);

// crear una nueva propiedad en un objeto
let habilidad = {};
habilidad.jutsu = ["Rasengan", "Chidori"];
console.log(habilidad);

// eliminar una propiedad de un objeto
delete habilidad.jutsu;
console.log(habilidad);

// crear una funcion dentro de un objeto
let miFuncion = {
    saludar: function saludo() {
        console.log("Hola");
    }
};

miFuncion.saludar();