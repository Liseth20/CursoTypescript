//Una clase donde todos sus metodos son estaticos
namespace Validaciones{
  export function validadTexto(texto:string):boolean{
    if (texto.length >3) {
      return true;
    }
    return false;
  }



}
