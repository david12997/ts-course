interface UserInterface {

    name: string,
    id:number,
    status:boolean
    printName():string
}

class Seller implements UserInterface{

    public name: string;
    public id:number;
    public status:boolean;


    printName(): string {
        
        return  `${ this.name}`;
    }

}

class Buyer implements UserInterface{

    public name: string;
    public id:number;
    public status:boolean;


    printName(): string {
        
        return  `${ this.name}`;
    }

}


class MarketPlace{

    static VerifyUser(user:UserInterface){
        //validar el usuario que cumpla con la interfaz User
    }
}