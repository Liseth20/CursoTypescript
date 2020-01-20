//booleanos
let esSuperman:boolean = true;
let esBatman:boolean;
 if (esSuperman) {
   console.log("Estamos salvados")
 }
 else  {
   console.log("Opps")
 }

 esSuperman = convertirClark();

 if (esSuperman) {
   console.log("Estamos salvados")
 }
 else  {
   console.log("Opps")
 }

 function convertirClark(){
   return false;
 }

 //numeros

 let n1:number = 5
 let n2:number = 7
 if (n1>n2) {
   console.log("Si es mayor")
 }
 else{
   console.log("No es mayor")
 }

  //string

  let nombre1:string = "Liseth";
  let nombre2:string = "Darian";

  console.log(nombre1);
  console.log(nombre2);
  let concat:string = `Mi nombre es: ${ nombre1 }, ${nombre2}`
  console.log(concat);

  //any
  // las variables que no se especifican son por defecto any

  let variable;

  variable = "Doctor Strange";
  console.log (variable.charAt(0));
  variable = 150;
  console.log (variable.toFixed(2));
  variable = true;
  console.log (variable);

//Arrays

let arreglo:number[] = [1,2,3,4,5,6,7];
let villanos2:string[]= ["Omega rojo","duende verde"];
console.log(villanos2[0]);

// destructurar un Array, asi obtenemos un dato especidifco en el array
let heroesMarvel = ["Samuel","Robert","Paul"];
let [ ,avenger2]= heroesMarvel;
console.log(avenger2);

//tuplas
let tupla:[number, string] = [341, "hola"];

//Emun
enum Volumen{
  min = 1,
  medio = 5,
  max = 10
}

let audio:number = Volumen.min;
console.log(audio);

//never lineas de codigo que nunca deben suceder
//function error(mensaje):never { throw new Error(mensaje);}
//error("Error critico");

//Aserciones de tipo, transformar una vari
able en otra para un fin determinado
let cualquierValor:any = "Cualquier cosa";
let largoDelString:number = (<string>cualquierValor).length;
console.log(largoDelString);

//constante
const nombre = "Liseth";

//templates literales otra forma de string
let name:string="Bruce"
let menssage:string = `1.esta es una linea
2. Hola ${name}
3. ${5+7}`;

console.log(menssage);

// ciclo For
let viudaNegra={
  nombre: "Viuda Negra",
  arma: "Pistolas",
};

let brujaEscarlata={
  nombre:"Bruja Escarlata",
  arma:"Magia"
};

let capi={
  nombre:"Capitan America",
  arma:"Escudo"
};

let vengadores= [viudaNegra, brujaEscarlata, capi];

//For of
for (let vengador of vengadores){
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
