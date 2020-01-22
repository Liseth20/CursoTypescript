interface Xmen {
  nombre:string,
  poder:string;

}
function enviarMision(xmen : Xmen){
  console.log("Enviando a: "+xmen.nombre);
};

function enviarCuartel (xmen : Xmen){
  console.log("Enviando al Cuartel: "+xmen.nombre);

};

let wolverine:Xmen={
  nombre: "Wolverine",
  poder: "Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);

//Interfaces y clases
interface Xmen2{
  nombre:string;
  nombreReal?:string;
  regenerar(nombreReal:string):void;
}

class Mutante implements Xmen2 {
  nombre:string;
  poder:string;
  esBueno:boolean;
  regenerar(nombre){
    console.log("Hola"+nombre);
  }
}

let wolverine2 = new Mutante();

//Interfaces y funciones
interface DosNumeroFunc{
  (x:number, y:number):number
}
let sumar : DosNumeroFunc;

sumar=function(a:number, b:number){
  return a+b;
}
