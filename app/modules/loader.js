'use strict';

const co      =   require('co');
const request =   require('co-request');
const _       =   require('co-lodash');
const config  =   require('../config/main');

module.exports = co(function* () {
  const result = yield request({
    method: 'GET',
    uri: config.url,
    json: true
  });

  return yield* _.coMap(result.body.data.children, function*(article) {
    return yield _.pick(article.data, _.keys(config.fields));
  });
});