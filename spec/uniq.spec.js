var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './uniq'));


// uniq method
    describe('#uniq', function () {
        it('is a function', function () {
            expect(_.uniq).to.be.a('function');
        });
        it('it should return unique elements only', function () {
            var result = _.uniq([1, 2, 3, 4, 5, 2, 4, 5]);
            expect(result).to.eql([1, 2, 3, 4, 5]);
        });
        it('should return an array', function () {
            var result = _.uniq([1, 2, 3, 4, 5]);
            expect(result).to.be.an('array');
        });
        it('It should return an array of unique elements', function () {
            var result = _.uniq(['a', 'b', 'c', 'c', 'b']);
            expect(result).to.eql(['a', 'b', 'c']);
        });
    });