'use strict';

const Nodal = require('nodal');

class PageStat extends Nodal.Model {}

PageStat.setDatabase(Nodal.require('db/main.js'));
PageStat.setSchema(Nodal.my.Schema.models.PageStat);

module.exports = PageStat;
