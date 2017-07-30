var path = require('path');
var { expect } = require('chai');

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function() {
    it('is an object', function() {
        expect(_).to.be.an('object');
    });
});