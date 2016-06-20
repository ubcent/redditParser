'use strict';

const co  = require('co');
const _   = require('co-lodash');

module.exports = (articles) => co(function*() {
  articles = _.groupBy(articles, 'domain');

  return yield* _.coMap(articles, function*(article, key) {
    return {
      domain: key,
      count: article.length,
      sum: _.sumBy(article, 'score')
    };
  });
});