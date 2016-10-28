'use strict';

const Nodal = require('nodal');

class Car extends Nodal.Model {}

Car.setDatabase(Nodal.require('db/main.js'));
Car.setSchema(Nodal.my.Schema.models.Car);

module.exports = Car;
