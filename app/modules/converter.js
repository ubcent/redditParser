'use strict';

const co      = require('co');
const config  = require('../config/main');

module.exports = (data, format = config.defaults.format) => co(function*() {
  switch(format) {
    case 'csv':
      return data;
      break;
    case 'sql':
      return data;
      break;
    default:
      return new Error('Unexpected outer format');
      break;
  }
});