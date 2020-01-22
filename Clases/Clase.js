"use strict";
var Avenger = /** @class */ (function () {
    // Inicializa variables o permite hacer una funcion antes que la clase sea utilizada en otra parte
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    //metodo publico
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    return Avenger;
}());
var antman = new Avenger("AntMan", "Cap", "Scott Lang");
console.log(antman);
antman.bio();
