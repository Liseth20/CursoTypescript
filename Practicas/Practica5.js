"use strict";
// Crear interfaces
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil2 = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica;
ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var PersonaClass = /** @class */ (function () {
    function PersonaClass() {
    }
    PersonaClass.prototype.imprimirBio = function () {
        console.log("Una breve descripcion");
    };
    return PersonaClass;
}());
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
