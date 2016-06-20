'use strict';

const co        =  require('co');
const minimist  =  require('minimist');
const config    =  require('./config/main');

module.exports = co(function*(){
  // Забираем параметры командной строки
  const argv = minimist(process.argv.slice(2));

  console.log(argv);

  // Забираем статьи
  let articles = yield require('./modules/loader');

  if(argv.format) {
    articles = yield require('./modules/converter')(articles, argv.format);
  } else {
    articles = yield require('./modules/converter')(articles, config.defaults.format);
  }

  articles = require('./modules/sorter')(articles, argv.orderBy, argv.order);

  console.log(articles);
}).catch(console.log.bind(console));