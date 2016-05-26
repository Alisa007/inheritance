'use strict';


export let animal = function (name) {
    let that = {};

    that.name = name;
    that.eat = 'food';
    that.drink = 'water';

    that.say = function(word = 'whatever') {
        return console.log(`${that.name} say ${word}`);
    };

    that.run = function (speed) {
        return console.log(`I am running with speed ${speed} 
        because I eat ${this.eat} and drink ${this.drink}`);
    };

    return that;
};


export let cat = function (name, color) {
    let that =  animal(name);

    that.name = name;
    that.color = color;
    that.drink = 'milk';

    that.sing = function () {
        return console.log(`${that.color} cat singing la-la-la`);
    };

    return that;
};