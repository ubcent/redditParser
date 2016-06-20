'use strict';

module.exports = (articles, params) => {
  let csv = '';
  const {separator} = params;

  for (let i = 0; i < articles.length; i++) {
    let line = '';
    for (let index in articles[i]) {
      if (line != '') line += separator;

      line += '"' + articles[i][index] + '"';
    }
    csv += line + '\r\n';
  }

  return csv;
};