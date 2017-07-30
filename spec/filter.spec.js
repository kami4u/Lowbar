var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './filter'));

// Filter method
describe('#filter', function () {
    function isEven(num) {
        return num % 2 === 0;
    }
    it('is a function', function () {
        expect(_.filter).to.be.a('function');
    });
    it('should return an array', function () {
        var result = _.filter([1, 2, 3, 4, 5], isEven);
        expect(result).to.be.an('array');
    });
    it('should return an array of even numbers', function () {
        var result = _.filter([1, 2, 3, 4, 5], isEven);
        expect(result).to.eql([2, 4]);
    });
});