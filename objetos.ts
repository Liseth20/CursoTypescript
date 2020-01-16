//Objetos basicos
let flash = {
  nombre: "Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"]
};

//Objetos especificos
let flash2:{nombre:string, edad:number, poderes:string[]} = {
  nombre: "Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"]
};
//Metodos dentro de los objetos
let flash3:{nombre:string, edad:number, poderes:string[],getNombre:()=>string} = {
  nombre: "Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};

//Tipos personalizados
type Heroe = {
  nombre:string, edad:number, poderes:any[],getNombre:()=>string
};

let superman:Heroe = {
  nombre: "Clark Kent",
  edad:500,
  poderes:["Volar","Velocidad",200],
  getNombre(){
    return this.nombre;
  }
};

//Multiples tipos

type Heroe2 = {  nombre:string, edad:number };

let random:string|number| Heroe2 = "Liseth";
nombre:"Viuda negra"
edad:24
random=10

//Revisar el tipo de un objeto o variable
let cosa:any = {};
console.log(typeof cosa);
if (typeof cosa === "string") {
console.log("Cosa es un string");
}
else{
  console.log("Este codigo indica que no es un string")
}
