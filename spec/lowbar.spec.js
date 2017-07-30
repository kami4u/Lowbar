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
    // First method
    describe('#first', function () {
        it('is a function', function () {
            expect(_.first).to.be.a('function');
        });
        it('it should return first element of array if num is undefined', function () {
            var result = _.first([1, 2, 3, 4, 5]);
            expect(result).to.eql(1);
        });
        it('it should return nth elements of array', function () {
            var result = _.first([1, 2, 3, 4, 5], 2);
            expect(result).to.eql([1, 2]);
        });
        it('it should return nth elements of array', function () {
            var result = _.first([{ name: 'kami' }, { name: 'wassan' }, { name: 'men' }], 2);
            expect(result).to.eql([{ name: 'kami' }, { name: 'wassan' }]);
        });
    });
    // last method
    describe('#last', function () {
        it('is a function', function () {
            expect(_.last).to.be.a('function');
        });
        it('it should return last element of array if num is undefined', function () {
            var result = _.last([1, 2, 3, 4, 5]);
            expect(result).to.eql(5);
        });
        it('it should return last nth elements of array', function () {
            var result = _.last([1, 2, 3, 4, 5], 2);
            expect(result).to.eql([4, 5]);
        });
        it('it should return last nth elements of array', function () {
            var result = _.last([{ name: 'kami' }, { name: 'wassan' }, { name: 'men' }], 2);
            expect(result).to.eql([{ name: 'wassan' }, { name: 'men' }]);
        });
    });
});