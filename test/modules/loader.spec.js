'use strict';

const cwd = process.cwd();
const co = require('co');
const expect = require('chai').expect;

describe('Loader', () => {
  it('должен работать', (done) => co(function*(){
    let articles = yield require(cwd + '/app/modules/loader');

    if(typeof articles == 'object') {
      done();
    } else {
      done(new Error('Loader не работает'));
    }
  }));
});
