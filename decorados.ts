//un decorador es una funcion, un valor que se coloca antes para agregar nuevas opciones a la funcion

function consola(constructor:Function){
  console.log(constructor);

}
//@consola


//Decorador Factory
function imprimirConsola(imprimir:boolean):Function{
  if (imprimir) {
      return consola;
  }
  else{
    return null;
  }
}

@imprimirConsola(true)
class Villano{
  constructor (public nombre:string){}
}


// Decorador anidado

function planVillano(constructor:Function){
  constructor.prototype.imprimirPlan=function(){
    console.log("El plan de: "+ this.nombre + " es dominar el mundo!");
  }
}

function imprimible(constructor:Function){
  constructor.prototype.imprimir=function(){
    console.log(this);
  }
}

@imprimible
@planVillano
class Villano2{
  constructor (public nombre:string){}
}

let lex = new Villano2 ("Lex Luthor");
(<any>lex).imprimirPlan();
(<any>lex).imprimir();

//permiso de sobreescritura
function editable (esEditable:boolean ){
  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
    descriptor.writable=esEditable;
  }
}

class Villano3{
  constructor (public nombre:string){}
  @editable(false)
  plan(){
    console.log("Es dominar el mundo");
  }
}

let lexL = new Villano3("Lex Luthor")
lexL.plan=function(){
  console.log("Es salvar a las personas");
}

lexL.plan();

//decorador de propiedades
function editablePropiedad (esEditable:boolean ){
  return function(target:any, nombrePropiedad:string){
  let descriptor:PropertyDescriptor={
    writable:esEditable
  }
  return descriptor;
  }
}
//@editablePropiedad(false)
