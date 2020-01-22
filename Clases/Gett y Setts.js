"use strict";
var Avenger = /** @class */ (function () {
    //metodo que puedo llamar donde quiera que este, sin inicializarla
    //static name:string="Viuda Negra";
    function Avenger(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger.prototype, "getnombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "setnombre", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var ciclope = new Avenger("Ciclope");
console.log(ciclope.getnombre);
ciclope.setnombre = "Wolverine";
