class Coche {
    constructor( marca, modelo, anio ) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    mostrarDetalles() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.anio);
    }
    esAntiguo() {
        return this.anio > 10 ? "Es antiguo" : "No es antiguo";
    }
}

let nombreCoche = "Ferrari1";

let coche = new Coche(nombreCoche, "A510", 5);
coche.mostrarDetalles();
console.log(coche.esAntiguo());