class Avenger {
  private _nombre:string;

//metodo que puedo llamar donde quiera que este, sin inicializarla
//static name:string="Viuda Negra";

  constructor (nombre:string){
    this._nombre=nombre;
  }

  get getnombre():string{
    return this._nombre;
  }
  set setnombre(nombre:string){
    this._nombre=nombre;
  }

}

let ciclope = new Avenger ("Ciclope");

console.log(ciclope.getnombre);
ciclope.setnombre="Wolverine";
