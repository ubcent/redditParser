'use strict';

const _  = require('co-lodash');

module.exports = (articles, params) => {
  const {tableName} = params;
  let sql = 'INSERT INTO `' + tableName + '` VALUES ';

  for (let i = 0; i < articles.length; i++) {
    let line = '';
    for (let index in articles[i]) {
      if (line != '') line += ', ';

      line += '"' + articles[i][index] + '"';
    }
    sql += '(' + line + ')' + (i == articles.length - 1 ? ';' : ', ');
  }

  return sql;
};