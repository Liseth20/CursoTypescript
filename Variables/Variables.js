"use strict";
//booleanos
var esSuperman = true;
var esBatman;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Opps");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Opps");
}
function convertirClark() {
    return false;
}
//numeros
var n1 = 5;
var n2 = 7;
if (n1 > n2) {
    console.log("Si es mayor");
}
else {
    console.log("No es mayor");
}
//string
var nombre1 = "Liseth";
var nombre2 = "Darian";
console.log(nombre1);
console.log(nombre2);
var concat = "Mi nombre es: " + nombre1 + ", " + nombre2;
console.log(concat);
//any
// las variables que no se especifican son por defecto any
var variable;
variable = "Doctor Strange";
console.log(variable.charAt(0));
variable = 150;
console.log(variable.toFixed(2));
variable = true;
console.log(variable);
//Arrays
var arreglo = [1, 2, 3, 4, 5, 6, 7];
var villanos2 = ["Omega rojo", "duende verde"];
console.log(villanos2[0]);
// destructurar un Array, asi obtenemos un dato especidifco en el array
var heroesMarvel = ["Samuel", "Robert", "Paul"];
var avenger2 = heroesMarvel[1];
console.log(avenger2);
//tuplas
var tupla = [341, "hola"];
//Emun
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
//never lineas de codigo que nunca deben suceder
//function error(mensaje):never { throw new Error(mensaje);}
//error("Error critico");
//Aserciones de tipo, transformar una variable en otra para un fin determinado
var cualquierValor = "Cualquier cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
//constante
var nombre = "Liseth";
//templates literales otra forma de string
var name = "Bruce";
var menssage = "1.esta es una linea\n2. Hola " + name + "\n3. " + (5 + 7);
console.log(menssage);
// ciclo For
var viudaNegra = {
    nombre: "Viuda Negra",
    arma: "Pistolas",
};
var brujaEscarlata = {
    nombre: "Bruja Escarlata",
    arma: "Magia"
};
var capi = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var vengadores = [viudaNegra, brujaEscarlata, capi];
//For of
for (var _i = 0, vengadores_1 = vengadores; _i < vengadores_1.length; _i++) {
    var vengador = vengadores_1[_i];
    console.log(vengador.nombre, vengador.arma);
}
/*
//For in recorre todo el array
for (let i in vengadores){
  let vengador =vengadores[i];
  console.log(vengador.nombre, vengador.arma);
}

//Forma tradicional
for (let i = 0; vengadores.length - 1; i++){

}
*/
