'use strict';

const co      = require('co');
const config  = require('../config');
const _       = require('co-lodash');
const fs      = require('co-fs');

module.exports = (articles, params) => co(function*() {
  // Инициализируем дефолтными значениями, если не задано
  typeof params.format == 'undefined' && (params.format = config.defaults.format);
  typeof params.separator == 'undefined' && (params.separator = config.defaults.separator);
  typeof params.tableName == 'undefined' && (params.tableName = config.defaults.tableName);

  const exists = yield fs.exists(process.cwd() + '/app/modules/formats/' + params.format + '.js');

  if(!exists) {
    return new Error('Unexpected format');
  }

  return require('./formats/' + params.format)(articles, params);
});