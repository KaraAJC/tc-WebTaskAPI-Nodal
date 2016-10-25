'use strict';

const Nodal = require('nodal');

class CreatePhotos extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016102500120105;
  }

  up() {

    return [
      this.createTable("photos", [])
    ];

  }

  down() {

    return [
      this.dropTable("photos")
    ];

  }

}

module.exports = CreatePhotos;
