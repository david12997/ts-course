namespace Exaple{

    export class Saludar{

        public saludar:string = 'Hola';

        SaludarPersona(name:string):string{

            return `${this.saludar} ${ name}`;
        }
    }

    export const url:string = 'https://lsdfjgsdk'

    const Privado :string[] = ['no se puede', 'usar', 'fuera del','namespace']
}

let saludo: Exaple.Saludar = new Exaple.Saludar();
saludo.SaludarPersona('juan');