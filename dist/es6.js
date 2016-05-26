'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.eat = 'food';
        this.drink = 'water';
    }

    _createClass(Animal, [{
        key: 'say',
        value: function say() {
            var word = arguments.length <= 0 || arguments[0] === undefined ? 'whatever' : arguments[0];

            return console.log(this.name + ' say ' + word);
        }
    }, {
        key: 'run',
        value: function run(speed) {
            return console.log('I am running with speed ' + speed + ' \n        because I eat ' + this.eat + ' and drink ' + this.drink);
        }
    }]);

    return Animal;
}();

var Cat = exports.Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(name, color) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cat).call(this, name));

        _this.drink = 'milk';
        _this.color = color;
        return _this;
    }

    _createClass(Cat, [{
        key: 'sing',
        value: function sing() {
            return console.log(this.color + ' cat singing la-la-la');
        }
    }]);

    return Cat;
}(Animal);
//# sourceMappingURL=es6.js.map