'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var animal = exports.animal = function animal(name) {
    var that = {};

    that.name = name;
    that.eat = 'food';
    that.drink = 'water';

    that.say = function () {
        var word = arguments.length <= 0 || arguments[0] === undefined ? 'whatever' : arguments[0];

        return console.log(that.name + ' say ' + word);
    };

    that.run = function (speed) {
        return console.log('I am running with speed ' + speed + ' \n        because I eat ' + this.eat + ' and drink ' + this.drink);
    };

    return that;
};

var cat = exports.cat = function cat(name, color) {
    var that = animal(name);

    that.name = name;
    that.color = color;
    that.drink = 'milk';

    that.sing = function () {
        return console.log(that.color + ' cat singing la-la-la');
    };

    return that;
};
//# sourceMappingURL=functional.js.map