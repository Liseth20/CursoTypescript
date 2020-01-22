//Una clase donde todos sus metodos son estaticos
var Validaciones;
(function (Validaciones) {
    function validadTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validadTexto = validadTexto;
})(Validaciones || (Validaciones = {}));
//Una clase donde todos sus metodos son estaticos
var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
/// <reference path="Validaciones/textos.ts" />
/// <reference path="Validaciones/fechas.ts" />
if (Validaciones.validadTexto("Barry Allen")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
