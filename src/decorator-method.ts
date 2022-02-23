function DecoratorMethod(isModify:boolean){

    return function(target:any,nameProperty:string,descriptor:PropertyDescriptor){

        descriptor.writable = isModify; //if modify true you can modify a function else you can't it 
    }

}


class PeopleGreeting2{

    constructor(){

    }

    @DecoratorMethod(true)
    Message():void{ 

        console.log('enviando mensaje');
    }
}



let people2:PeopleGreeting2 = new PeopleGreeting2();
people2.Message();

// if decoratormethod is false this part is wrong
people2.Message = function(){

    console.log('modify');
}

people2.Message();