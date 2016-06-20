'use strict';

const co        =  require('co');
const minimist  =  require('minimist');

module.exports = co(function*(){
  // Забираем параметры командной строки
  const argv = minimist(process.argv.slice(2));

  console.log(argv);

  // Забираем статьи
  const articles = yield require('./modules/loader');

  console.log(articles);
}).catch(console.log.bind(console));