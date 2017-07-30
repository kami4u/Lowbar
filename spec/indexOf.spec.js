var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './indexOf'));

// indexOf method
    describe('#indexOf', function () {
        it('is a function', function () {
            expect(_.indexOf).to.be.a('function');
        });
        it('it should return index if found otherwise -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 3);
            expect(result).to.eql(2);
        });
        it('it should return -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 7);
            expect(result).to.eql(-1);
        });
        it('it should return index if found otherwise -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 1);
            expect(result).to.eql(0);
        });
        it('it should return index if found and start from given index if third argument is passed', function () {
            var result = _.indexOf([1, 2, 3, 4, 5, 1], 1, 2);
            expect(result).to.eql(5);
        });
    });