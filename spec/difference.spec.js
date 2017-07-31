var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './difference'));

describe('#difference', function () {
    it('is a function', function () {
        expect(_.difference).to.be.a('function');
    });
    it('it should return the difference array', function () {
        var result = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
        expect(result).to.eql([1, 3, 4]);
    });
});