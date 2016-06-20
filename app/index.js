'use strict';

const co        =  require('co');
const minimist  =  require('minimist');

module.exports = co(function*(){
  // Забираем параметры командной строки
  const argv = minimist(process.argv.slice(2));

  // Забираем статьи
  const articles = yield require('./modules/loader');

}).catch(console.log.bind(console));