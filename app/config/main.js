'use strict';

module.exports = {
  // Наименования поля, которое попадает в выборку и его видимость в выдаче
  fields: {'id': true, 'title': true, 'created_utc': true, 'score': true, 'domain': false},
  // Урл, с которого забираем данные
  url: 'http://www.reddit.com/r/javascript/.json',
  // Дефолтные значения
  defaults: {
    format: 'csv',
    order: 'asc',
    orderBy: 'id',
    separator: ';',
    tableName: 'articles'
  }
};