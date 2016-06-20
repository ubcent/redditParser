module.exports = {
  fields: {'id': false, 'title': false, 'created_utc': true, 'score': true},
  url: 'http://www.reddit.com/r/javascript/.json',
  defaults: {
    format: 'csv',
    order: 'asc',
    orderBy: 'id'
  }
};