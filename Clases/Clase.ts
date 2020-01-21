class Avenger {
  public nombre:string;
  protected equipo: string;
  private nombreReal: string;

  private puedePelear:boolean=false;
  private peleasGanadas:number=0;

// Inicializa variables o permite hacer una funcion antes que la clase sea utilizada en otra parte
constructor(nombre:string, equipo:string, nombreReal:string){
  this.nombre = nombre;
  this.equipo = equipo;
  this.nombreReal = nombreReal;
}

//metodo publico
public bio():void{
  let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
  console.log(mensaje);
}

}

let antman:Avenger= new Avenger("AntMan","Cap","Scott Lang");
console.log(antman);

antman.bio();
