module.exports = {
  fields: ['id', 'title', 'created_utc', 'score'],
  url: 'http://www.reddit.com/r/javascript/.json',
  defaults: {
    format: 'csv',
    order: 'asc',
    orderBy: 'id'
  }
};