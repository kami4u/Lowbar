var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './sortedIndex'));

describe('#sortedIndex', function () {
    it('is a function', function () {
        expect(_.sortedIndex).to.be.a('function');
    });
    it('it should return index to be insertion', function () {
        var result = _.sortedIndex([1, 2, 4, 5], 3);
        expect(result).to.eql(2);
    });
    it('it should return index to be inserted', function () {
        var result = _.sortedIndex([1, 2, 3, 4, 5], 7);
        expect(result).to.eql(5);
    });
});