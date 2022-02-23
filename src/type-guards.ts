function isString(dato:number | string): dato is string{

    return typeof dato === 'string';

}

const PrintData = (age:number | string)=>{

    if (isString(age)){

        console.log('es un string');

    }else{

        console.log('es un string');
    }

}