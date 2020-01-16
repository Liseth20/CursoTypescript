// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
  acuaman=0,
  flash=5,
  batman=1,
  superman=100
}
let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.batman;
let fuerzaAcuaman = Fuerza.acuaman;

// Retorno de funciones
// retorna un estring
function activar_batiseñal():string{
  return "activada";
}
//no retorna nada
function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.toString().length;
console.log( largoDelPoder );
