"use strict";
function GenericReceptor(prop) {
    console.log(prop);
}
;
GenericReceptor(5);
GenericReceptor(['a', 'b', 'c']);
//classes
class Printer {
    Print(prop) {
        console.log(prop);
    }
}
let printer = new Printer();
printer.Print(false);
