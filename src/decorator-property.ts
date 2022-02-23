function DecoratorProperty(isModify:boolean){

   return function(target:any,nombrePropiedad:string):any{

        let descriptor:PropertyDescriptor = {

            writable:isModify
        }

        return descriptor;
   }

}


class PeopleGreeting3{

    @DecoratorProperty(true)
    _name:string;

    constructor(name:string){

        this._name=name;
    }

    Message():void{ 

        console.log('enviando mensaje');
    }
}



let people32:PeopleGreeting3 = new PeopleGreeting3('David');
console.log(people32);