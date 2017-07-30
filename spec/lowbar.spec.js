var path = require('path');
var { expect } = require('chai');

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function() {
    it('is an object', function() {
        expect(_).to.be.an('object');
    });
    // Identity
    describe('#identity', function () {
        it('is a function', function () {
            expect(_.identity).to.be.a('function');
        });
        it('it should return first argument', function () {
            var result = _.identity('s', 3);
            expect(result).to.eql('s');
        });
    });
});