function DecoratorClass(target:Function){

    target.prototype.Hello = function(){

        console.log('hello');
    }
}

@DecoratorClass
class PeopleGreeting{

    constructor(){

    }
}

let persona: PeopleGreeting = new PeopleGreeting();

//persona.Hello();