'use strict';

const co        =  require('co');
const minimist  =  require('minimist');
const config    =  require('./config/main');

module.exports = co(function*(){
  // Забираем параметры командной строки
  const argv = minimist(process.argv.slice(2));

  // Забираем статьи
  let articles = yield require('./modules/loader');

  // Сортируем
  articles = yield require('./modules/sorter')(articles, argv.orderBy, argv.order);

  // Забираем из параметров командной строки нужное
  const {format, separator, tableName} = argv;

  // Преобразуем в нужный формат
  articles = yield require('./modules/converter')(articles, {format, separator, tableName});

  console.log(articles);
}).catch(console.log.bind(console));