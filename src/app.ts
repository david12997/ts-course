console.log('hola desde typescipt');
//data types
let name1:string = 'Juan';
const edad:number = 25;
let visa:boolean=true;

//solo se almacenan  strings
let ArregloStrings : string[] = ["juan", "cristian","jose"];

//aceptar todo tipo de dato
let comodin : any[] = ['hola',1,false];

//definir el tipop de dato que contendra 
let data:[string,number,boolean];
data=['hola',5,false];

//funciones 
//void solo puede retornar undefined o null

function Sumar(n1:number,n2:number):number{

    return n1+n2;
}

const RestarConMensaje = (n1:number,n2:number):string =>{
    
    return `El resultado de la resta es: ${n1 + n2}`;
}

const ImprimirEnConsola = (mensaje:string):void=>{

    console.log(mensaje);

    //void solo permite retornar null o undefined
    return undefined;
}