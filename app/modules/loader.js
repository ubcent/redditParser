'use strict';

let co = require('co');
let request = require('co-request');

co(function* () {
  // You can also pass options object, see http://github.com/mikeal/request docs
  let result = yield request('http://google.com');
  let response = result;
  let body = result.body;
}).catch(function (err) {
  console.error(err);
});