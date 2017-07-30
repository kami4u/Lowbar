var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './first'));

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
        var result = _.first([{
            name: 'kami'
        }, {
            name: 'wassan'
        }, {
            name: 'men'
        }], 2);
        expect(result).to.eql([{
            name: 'kami'
        }, {
            name: 'wassan'
        }]);
    });
});