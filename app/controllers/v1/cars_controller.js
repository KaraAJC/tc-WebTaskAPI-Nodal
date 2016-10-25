'use strict';

const Nodal = require('nodal');
const Car = Nodal.require('app/models/car.js');

class V1CarsController extends Nodal.Controller {

  index() {

    Car.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Car.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Car.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Car.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Car.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1CarsController;
