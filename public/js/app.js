"use strict";
console.log('hola desde typescipt');
//data types
let name1 = 'Juan';
const edad = 25;
let visa = true;
//solo se almacenan  strings
let ArregloStrings = ["juan", "cristian", "jose"];
//aceptar todo tipo de dato
let comodin = ['hola', 1, false];
//definir el tipop de dato que contendra 
let data;
data = ['hola', 5, false];
//funciones 
//void solo puede retornar undefined o null
function Sumar(n1, n2) {
    return n1 + n2;
}
const RestarConMensaje = (n1, n2) => {
    return `El resultado de la resta es: ${n1 + n2}`;
};
const ImprimirEnConsola = (mensaje) => {
    console.log(mensaje);
    //void solo permite retornar null o undefined
    return undefined;
};
