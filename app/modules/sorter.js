'use strict';

const co      = require('co');
const _       = require('co-lodash');
const config  = require('../config');

module.exports = (articles, orderBy = config.defaults.orderBy, order = config.defaults.order) => co(function*() {
  return _.orderBy(articles, orderBy, order);
});