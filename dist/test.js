'use strict';

var _classical = require('./classical');

var _es = require('./es6');

var _prototypal = require('./prototypal');

var _functional = require('./functional');

var _chai = require('chai');

var chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var expect = chai.expect;
var animals = [new _classical.Animal('bozo'), _prototypal.animal.create('bozo'), (0, _functional.animal)('bozo'), new _es.Animal('bozo')];
var cats = [new _classical.Cat('puss', 'black'), _prototypal.cat.create('puss', 'black'), (0, _functional.cat)('puss', 'black'), new _es.Cat('puss', 'black')];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = animals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var bozo = _step.value;

        console.log(bozo);
        console.log(bozo.name);

        expect(bozo.name).to.equal('bozo');
        expect(bozo.eat).to.equal('food');
        expect(bozo.drink).to.equal('water');
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = cats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var puss = _step2.value;

        expect(puss.name).to.equal('puss');
        expect(puss.eat).to.equal('food');
        expect(puss.drink).to.equal('milk');
        expect(puss.color).to.equal('black');
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}
//# sourceMappingURL=test.js.map