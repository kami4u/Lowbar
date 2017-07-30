var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './last'));

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
        var result = _.last([{
            name: 'kami'
        }, {
            name: 'wassan'
        }, {
            name: 'men'
        }], 2);
        expect(result).to.eql([{
            name: 'wassan'
        }, {
            name: 'men'
        }]);
    });
});