'use strict';

const cwd = process.cwd();
const co = require('co');
const expect = require('chai').expect;

const appPromise = require(cwd + '/app');

describe('App', () => {
  it('должен работать', (done) => co(function*(){
    done();
    expect(yield appPromise).to.be.an('object');
  }));
});
