"use strict";
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
