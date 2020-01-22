"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al Cuartel: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
var Mutante = /** @class */ (function () {
    function Mutante() {
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola" + nombre);
    };
    return Mutante;
}());
var wolverine2 = new Mutante();
var sumar;
sumar = function (a, b) {
    return a + b;
};
