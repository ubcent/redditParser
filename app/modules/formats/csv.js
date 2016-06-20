'use strict';

module.exports = (articles, params) => {
  let csv = '', i;

  for (i = 0; i < articles.length; i++) {
    let line = '', index;
    for (index in articles[i]) {
      if (line != '') line += params.separator;

      line += '"' + articles[i][index] + '"';
    }
    csv += line + '\r\n';
  }

  return csv;
};