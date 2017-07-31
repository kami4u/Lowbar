var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './flatten'));

describe('#flatten', function () {
    it('is a function', function () {
        expect(_.flatten).to.be.a('function');
    });
    it('it should return the flatten array', function () {
        var result = _.flatten([1, [2], [3, [[4]]]]);
        expect(result).to.eql([1, 2, 3, 4]);
    });
});