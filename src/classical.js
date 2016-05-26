'use strict';


export let Animal = function (name) {
    this.name = name;
    this.eat = 'food';
    this.drink = 'water';

    this.say = function(word = 'whatever') {
        return console.log(`${this.name} say ${word}`);
    };
};

Animal.prototype.run = function (speed) {
    return console.log(`I am running with speed ${speed} 
        because I eat ${this.eat} and drink ${this.drink}`);
};


export let Cat = function (name, color) {
    this.name = name;
    this.color = color;
    this.drink = 'milk';
};

Cat.prototype = new Animal();
Cat.prototype.sing = function () {
    return console.log(`${this.color} cat singing la-la-la`);
};