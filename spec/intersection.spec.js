var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './intersection'));

describe('#intersection', function () {
    it('is a function', function () {
        expect(_.intersection).to.be.a('function');
    });
    it('it should return the intersection array', function () {
        var result = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
        expect(result).to.eql([1, 2]);
    });
});