'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Animal = exports.Animal = function Animal(name) {
    this.name = name;
    this.eat = 'food';
    this.drink = 'water';

    this.say = function () {
        var word = arguments.length <= 0 || arguments[0] === undefined ? 'whatever' : arguments[0];

        return console.log(this.name + ' say ' + word);
    };
};

Animal.prototype.run = function (speed) {
    return console.log('I am running with speed ' + speed + ' \n        because I eat ' + this.eat + ' and drink ' + this.drink);
};

var Cat = exports.Cat = function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.drink = 'milk';
};

Cat.prototype = new Animal();
Cat.prototype.sing = function () {
    return console.log(this.color + ' cat singing la-la-la');
};
//# sourceMappingURL=classical.js.map