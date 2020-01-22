// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Automovil{
  encender:boolean;
  velocidadMaxima:number;
  acelerar():void;
}

function conducirBatimovil( auto:Automovil ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil2:Automovil= {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir:boolean;
  comer?:boolean;
  llorar?:boolean;
}

let guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFunc {
  (ciudadanos:string[]):number;
}

let ciudadGotica:CiudadGoticaFunc;
ciudadGotica = function (ciudadanos:string[]):number{
 return ciudadanos.length;
}


// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Persona{
  nombre:string;
  edad:number;
  sexo:number;
  estadoCivil:string;
  imprimirBio():void;
}

class PersonaClass implements Persona{
  nombre:string;
  edad:number;
  sexo:number;
  estadoCivil:string;
  imprimirBio(){
    console.log("Una breve descripcion");
  }
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
