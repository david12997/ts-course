"use strict";
class User {
    printName() {
        return ` ${this.name}`;
    }
}
class Seller2 extends User {
    Greeting(message) {
        return `${message} ${this.id} `;
    }
}
