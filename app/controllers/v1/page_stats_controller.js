'use strict';

const Nodal = require('nodal');
const PageStat = Nodal.require('app/models/page_stat.js');

class V1PageStatsController extends Nodal.Controller {

  index() {

    PageStat.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    PageStat.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    PageStat.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    PageStat.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    PageStat.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1PageStatsController;
