'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var animal = exports.animal = {
    eat: 'food',
    drink: 'water',

    create: function create(name) {
        var instance = Object.create(this);
        instance.name = name;
        return instance;
    },
    say: function say() {
        var word = arguments.length <= 0 || arguments[0] === undefined ? 'whatever' : arguments[0];

        return console.log(this.name + ' say ' + word);
    },
    run: function run(speed) {
        return console.log('I am running with speed ' + speed + ' \n        because I eat ' + this.eat + ' and drink ' + this.drink);
    }
};

var cat = exports.cat = Object.create(animal);

cat.drink = 'milk';
cat.create = function (name, color) {
    var instance = Object.create(this);
    instance.drink = 'milk';
    instance.name = name;
    instance.color = color;
    return instance;
};
cat.sing = function () {
    return console.log(this.color + ' cat singing la-la-la');
};
//# sourceMappingURL=prototypal.js.map