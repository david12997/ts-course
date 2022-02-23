"use strict";
var Exaple;
(function (Exaple) {
    class Saludar {
        constructor() {
            this.saludar = 'Hola';
        }
        SaludarPersona(name) {
            return `${this.saludar} ${name}`;
        }
    }
    Exaple.Saludar = Saludar;
    Exaple.url = 'https://lsdfjgsdk';
    const Privado = ['no se puede', 'usar', 'fuera del', 'namespace'];
})(Exaple || (Exaple = {}));
let saludo = new Exaple.Saludar();
saludo.SaludarPersona('juan');
