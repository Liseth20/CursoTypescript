class Avenger {
  constructor (public nombre:string, privatenombreReal:string){
  }
  public getNombre():string{
    return this.nombre;
  }
}

//herencia
class Xmen extends Avenger {

}

let ciclope = new Avenger ("Ciclope", "Scott");
console.log(ciclope.getNombre());
