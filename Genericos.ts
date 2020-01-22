//Los genericos son algo que permite trabajar con cualquier tipo de datos, ayudandonos con la autocompletacion y evitando ciertos errores
//que no serian lo mismo que usar una funcion any, ya que la funcion no sabe realmente que datos digitamos

function regresar <T> (arg:T){
  return arg;
}

console.log(   regresar(     15.1432434).toFixed(2)          );
console.log(   regresar(     "Darian Barquero").charAt(0)    );
console.log(   regresar(     new Date().getTime()  )         );

// otro ejemplo con tipos personalizados

function functionGenerica<T>(arg:T){
  return arg;
}

type Heroe={
  nombre:string;
  nombreReal:string;
};
type Villano={
  nombre:string;
  poder:string;
};

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade Winston",
  poder: "Regeneracion"
};

//Especificamos si queremos solo los atributos de heroe o de villano
console.log ( functionGenerica<Heroe>(deadpool) )

//Arreglos Genericos
let heroes: Array<string>=["Flash","Batman","Superman"];

//Clases genericas, que aunque puede usar cualquier datos
//si estamos seguros que solo necesitamos dos tipos de datos, se puede limitar

class Cuadrado<T extends number|string>{
  base:T;
  altura:T;
  area():number{
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado<number|string>();
cuadrado.base=10;
cuadrado.altura = 10;
console.log(cuadrado.area());
