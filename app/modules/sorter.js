'use strict';

const co      = require('co');
const _       = require('co-lodash');
const config  = require('../config');

module.exports = (articles, orderBy, order) => co(function*() {
  typeof orderBy == 'undefined' && (orderBy = config.defaults.orderBy);
  typeof order == 'undefined' && (order = config.defaults.order);
  return _.orderBy(articles, orderBy, order);
});