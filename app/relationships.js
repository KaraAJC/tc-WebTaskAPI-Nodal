'use strict';

const Nodal = require('nodal');

/* Include this file to enable Model relationships */

/* For example...
  const Post = Nodal.require('app/models/post.js');
  const Comment = Nodal.require('app/models/comment.js');

  Comment.joinsTo(Post, {multiple: true});

*/

  const Car = Nodal.require('app/models/car.js');
  const PageStat = Nodal.require('app/models/page_stat.js');
  const Photo = Nodal.require('app/models/photo.js');

  PageStat.joinsTo(Car);
  Photo.joinsTo(Car);

  Car.joinedBy(PageStat);
  Car.joinedBy(Photo, {multiple: true});

module.exports = {}; // Don't need to export anything
