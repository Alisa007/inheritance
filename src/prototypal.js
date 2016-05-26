'use strict';


export let animal = {
    eat: 'food',
    drink: 'water',

    create(name) {
        let instance = Object.create(this);
        instance.name = name;
        return instance;
    },
    
    say(word = 'whatever') {
        return console.log(`${this.name} say ${word}`);
    },

    run(speed) {
        return console.log(`I am running with speed ${speed} 
        because I eat ${this.eat} and drink ${this.drink}`);
    }
};


export let cat = Object.create(animal);

cat.drink = 'milk';
cat.create = function (name, color) {
    let instance = Object.create(this);
    instance.drink = 'milk';
    instance.name = name;
    instance.color = color;
    return instance;
};
cat.sing = function () {
    return console.log(`${this.color} cat singing la-la-la`);
};