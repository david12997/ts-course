type MiTipoNumero = number;
let edadAliase : MiTipoNumero ;
edadAliase = 20;


type NumberOrString = number | string;
let fecha: NumberOrString = 1;
fecha = '';


//define data type function return
type FuncString = ()=> string | string[]

//this function need a function param data type FuncString
function Executor(fuc:FuncString){


}