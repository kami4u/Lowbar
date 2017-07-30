var path = require('path');
var { expect } = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './identity'));

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