'use strict';

const co = require('co');
const request = require('co-request');

module.exports = co(function* () {
  const result = yield request({
    method: 'GET',
    uri: 'http://www.reddit.com/r/javascript/.json',
    json: true
  });

  return result.body;
});