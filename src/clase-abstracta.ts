abstract class User{

    name:string;
    id:number;
    status:boolean

    printName():string {

        return ` ${ this.name}`;
    }

    abstract Greeting(message:string):string;
}

class Seller2 extends User{


    Greeting(message: string): string {
        
        return `${message} ${this.id} `;
    }
}