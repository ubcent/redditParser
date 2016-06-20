const co = require('co');

module.exports = co(function*(){
  const json = yield require('./modules/loader');

  console.log(json);
});