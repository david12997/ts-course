function GenericReceptor<Type>(prop:Type){

    console.log(prop);
};

GenericReceptor<number>(5);
GenericReceptor<string[]>(['a','b','c']);


//classes

class Printer<Type2>{

    Print(prop:Type2){

        console.log(prop);
    }
}

let printer:Printer<boolean> = new Printer();
printer.Print(false);
