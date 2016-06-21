'use strict';

const co        =  require('co');
const minimist  =  require('minimist');

module.exports = co(function*(){
  // Забираем параметры командной строки
  const argv = minimist(process.argv.slice(2));

  // Забираем статьи
  let articles = yield require('./modules/loader');

  // Сортируем
  articles = yield require('./modules/sorter')(articles, argv.orderBy, argv.order);

  // Забираем из параметров командной строки нужное
  const {format, separator, tableName} = argv;

  // Если нужна аггрегация
  if(argv.a) {
    // Аггрегируем
    articles = yield require('./modules/aggregator')(articles);
    // Сортируем по убыванию
    articles = yield require('./modules/sorter')(articles, ['count', 'sum'], 'desc');
  }

  // Преобразуем в нужный формат
  articles = yield require('./modules/converter')(articles, {format, separator, tableName});

  // Выводим результат
  console.log(articles);
}).catch(console.log.bind(console));