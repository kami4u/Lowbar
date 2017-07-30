var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './reject'));


// reject method
describe('#reject', function () {
    function isGreater4(num) {
        return num > 4;
    }
    function isEven(num) {
        return num % 2 === 0;
    }
    it('is a function', function () {
        expect(_.reject).to.be.a('function');
    });
    it('should return an array', function () {
        var result = _.reject([1, 2, 3, 4, 5], isEven);
        expect(result).to.be.an('array');
    });
    it('rejects out of the array the elements that don\'t pass the condition of the function', function () {
        var result = _.reject([1, 2, 3, 4, 5], isEven);
        expect(result).to.eql([1, 3, 5]);
    });
    it('rejects out of the array the elements that greater than 4', function () {
        var result = _.reject([1, 2, 3, 4, 5], isGreater4);
        expect(result).to.eql([1, 2, 3, 4]);
    });
});