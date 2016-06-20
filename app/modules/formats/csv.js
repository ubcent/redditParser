'use strict';

module.exports = (articles, params) => {
  let csv = '', i;
  console.log(articles.length);
  for (i = 0; i < articles.length; i++) {
    console.log(i);
    let line = '', index;
    for (index in articles[i]) {
      if (line != '') line += params.separator;

      line += articles[i][index];
    }
    console.log(line);
    csv += line + '\r\n';
  }

  return csv;
};