"use strict";
//un decorador es una funcion, un valor que se coloca antes para agregar nuevas opciones a la funcion
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
//@consola
//Decorador Factory
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        imprimirConsola(true)
    ], Villano);
    return Villano;
}());
// Decorador anidado
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de: " + this.nombre + " es dominar el mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var Villano2 = /** @class */ (function () {
    function Villano2(nombre) {
        this.nombre = nombre;
    }
    Villano2 = __decorate([
        imprimible,
        planVillano
    ], Villano2);
    return Villano2;
}());
var lex = new Villano2("Lex Luthor");
lex.imprimirPlan();
lex.imprimir();
//permiso de sobreescritura
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
var Villano3 = /** @class */ (function () {
    function Villano3(nombre) {
        this.nombre = nombre;
    }
    Villano3.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editable(false)
    ], Villano3.prototype, "plan", null);
    return Villano3;
}());
var lexL = new Villano3("Lex Luthor");
lexL.plan = function () {
    console.log("Es salvar a las personas");
};
lexL.plan();
//decorador de propiedades
function editablePropiedad(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
//@editablePropiedad(false)
