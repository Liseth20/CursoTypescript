"use strict";
//Los genericos son algo que permite trabajar con cualquier tipo de datos, ayudandonos con la autocompletacion y evitando ciertos errores
//que no serian lo mismo que usar una funcion any, ya que la funcion no sabe realmente que datos digitamos
function regresar(arg) {
    return arg;
}
console.log(regresar(15.1432434).toFixed(2));
console.log(regresar("Darian Barquero").charAt(0));
console.log(regresar(new Date().getTime()));
// otro ejemplo con tipos personalizados
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade Winston",
    poder: "Regeneracion"
};
//Especificamos si queremos solo los atributos de heroe o de villano
console.log(functionGenerica(deadpool));
//Arreglos Genericos
var heroes = ["Flash", "Batman", "Superman"];
//Clases genericas, que aunque puede usar cualquier datos
//si estamos seguros que solo necesitamos dos tipos de datos, se puede limitar
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
