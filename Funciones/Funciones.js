"use strict";
var heroe = "Flash";
function imprime_heroe() {
    return heroe;
}
var activar_batisenal = function () {
    return "Batisenal activada.";
};
console.log(imprime_heroe);
console.log(activar_batisenal);
//parametros obligatorios
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("Bruja", "Scarlata");
console.log(nombre);
//parametros opcionales
function nombreCompleto2(nombre2, apellido2) {
    if (apellido2) {
        return nombre2 + ' ' + apellido2;
    }
    else {
        return nombre2;
    }
}
var nombreConcat = nombreCompleto2("Bruja", "Escarlata");
console.log(nombreConcat);
//Parametros por defecto
function nombreCompleto3(nombre3, apellido3, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre3) + " " + capitalizar(apellido3);
    }
    else {
        return nombre3 + " " + apellido3;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombreConcat2 = nombreCompleto3("viuda", "negra", false);
console.log(nombreConcat2);
//Parametros REST
function nombreCompletito(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return name + " " + losDemasParametros.join(" ");
}
var superman = nombreCompletito("Clark", "Joseph", "Kent");
var ironman = nombreCompletito("Antony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
//tipo de Funcion
