'use strict';

const Nodal = require('nodal');

class CreatePageStats extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016102500091812;
  }

  up() {

    return [
      this.createTable("page_stats", [
        {"name":"views","type":"int"},
        {"name":"saves","type":"int"},
        {"name":"shares","type":"int"},
        {"name":"carId","type":"int"}
        ])
    ];

  }

  down() {

    return [
      this.dropTable("page_stats")
    ];

  }

}

module.exports = CreatePageStats;
