'use strict';


export class Animal {
    constructor(name) {
        this.name = name;
        this.eat = 'food';
        this.drink = 'water';
    }

    say(word = 'whatever') {
        return console.log(`${this.name} say ${word}`);
    }

    run(speed) {
        return console.log(`I am running with speed ${speed} 
        because I eat ${this.eat} and drink ${this.drink}`);
    }
}


export class Cat extends Animal {
    constructor(name, color) {
        super(name);

        this.drink = 'milk';
        this.color = color;
    }

    sing() {
        return console.log(`${this.color} cat singing la-la-la`);
    }
}