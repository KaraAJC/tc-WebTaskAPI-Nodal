'use strict';

const Nodal = require('nodal');

class CreateCars extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016102423174071;
  }

  up() {

    return [
      this.createTable("cars", [
        {"name":"make","type":"string"},
        {"name":"model","type":"string"},
        {"name":"year","type":"int"},
        {"name":"price_range","type":"string"},
        {"name":"mileage","type":"int"},
        {"name":"cylinders","type":"string"},
        {"name":"city_MPG","type":"int"},
        {"name":"highway_MPG","type":"int"},
        {"name":"engine","type":"int"},
        {"name":"vin","type":"string"},
        ])
    ];

  }

  down() {

    return [
      this.dropTable("cars")
    ];

  }

}

module.exports = CreateCars;
