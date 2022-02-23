"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoratorProperty(isModify) {
    return function (target, nombrePropiedad) {
        let descriptor = {
            writable: isModify
        };
        return descriptor;
    };
}
class PeopleGreeting3 {
    constructor(name) {
        this._name = name;
    }
    Message() {
        console.log('enviando mensaje');
    }
}
__decorate([
    DecoratorProperty(true)
], PeopleGreeting3.prototype, "_name", void 0);
let people32 = new PeopleGreeting3('David');
console.log(people32);
