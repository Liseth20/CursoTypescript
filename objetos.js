"use strict";
//Objetos basicos
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
//Objetos especificos
var flash2 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
//Metodos dentro de los objetos
var flash3 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Volar", "Velocidad", 200],
    getNombre: function () {
        return this.nombre;
    }
};
var random = "Liseth";
nombre: "Viuda negra";
edad: 24;
random = 10;
//Revisar el tipo de un objeto o variable
var cosa = {};
console.log(typeof cosa);
if (typeof cosa === "string") {
    console.log("Cosa es un string");
}
else {
    console.log("Este codigo indica que no es un string");
}
