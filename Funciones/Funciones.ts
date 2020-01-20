let heroe:string = "Flash";

function imprime_heroe():string{
  return heroe;
}

let activar_batisenal = function() {
  return "Batisenal activada."
}
console.log(imprime_heroe);
console.log(activar_batisenal);

//parametros obligatorios
function nombreCompleto(nombre:string, apellido:string):string {
  return nombre + ' ' + apellido;
}

let nombre = nombreCompleto("Bruja","Scarlata");

console.log(nombre);

//parametros opcionales
function nombreCompleto2(nombre2:string, apellido2?:string):string {

if (apellido2) {
return nombre2 + ' ' + apellido2;
}
else
{
  return nombre2;
}
}

let nombreConcat = nombreCompleto2("Bruja","Escarlata");

console.log(nombreConcat);

//Parametros por defecto
function nombreCompleto3(
  nombre3:string, apellido3:string, capitalizado:boolean=true) {

if (capitalizado) {
  return capitalizar(nombre3) + " " + capitalizar(apellido3);
}
else  {
  return nombre3 + " " + apellido3;
}

}

function capitalizar(palabra:string) {
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();

}

let nombreConcat2 = nombreCompleto3("viuda","negra",false);
console.log(nombreConcat2);

//Parametros REST

function nombreCompletito(nombre:string,... losDemasParametros:string[]):string{
  return name + " " + losDemasParametros.join(" ");
}
let superman:string = nombreCompletito("Clark", "Joseph", "Kent");
let ironman:string = nombreCompletito("Antony", "Edward","Tony","Stark");
console.log(superman);
console.log(ironman);

//tipo de Funcion
function sumar (a:number, b:number):number{
  return a+b;
}
function saludar(nombre:string):string {
  return "I'm " + nombre;
}

let miFunction : (x:number, y:number)=>number;

miFunction=sumar
console.log(miFunction(5,5));

miFunction=saludar
console.log(miFunction("Batman"));

/*Funciones con flecha gorda, si hay muchas funciones una dentro de otra, puede haber errores en las variables, que
no sean identificadas, entonces con la flecha gorda nos evitamos meter nuestros nuevos datos entre llaves y aislandolo*/
let capitan_america = {
 hulk: "Hulk",
 dar0rden_hulk:function(){
   setTimeout(()=>console.log(this.hulk +  "smash"),1000)
 }
};

capitan_america.dar0rden_hulk();
