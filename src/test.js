'use strict';

import {Animal as classicalAnimal, Cat as classicalCat} from './classical';
import {Animal as es6Animal, Cat as es6Cat} from './es6';
import {animal as prototypalAnimal, cat as prototypalCat} from './prototypal';
import {animal as functionalAnimal, cat as functionalCat} from './functional';
import * as chai from 'chai';

const expect = chai.expect;
const animals = [
    new classicalAnimal('bozo'),
    prototypalAnimal.create('bozo'),
    functionalAnimal('bozo'),
    new es6Animal('bozo')
];
const cats = [
    new classicalCat('puss', 'black'),
    prototypalCat.create('puss', 'black'),
    functionalCat('puss', 'black'),
    new es6Cat('puss', 'black')
];

for (let bozo of animals) {
    console.log(bozo);
    console.log(bozo.name);

    expect(bozo.name).to.equal('bozo');
    expect(bozo.eat).to.equal('food');
    expect(bozo.drink).to.equal('water');
}

for (let puss of cats) {
    expect(puss.name).to.equal('puss');
    expect(puss.eat).to.equal('food');
    expect(puss.drink).to.equal('milk');
    expect(puss.color).to.equal('black');
}