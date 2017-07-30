var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './sortBy'));


describe('#sortBy', function () {
    it('should handle undefined values', function () {
        var list = [undefined, 4, 1, undefined, 3, 2];
        var result = _.sortBy(list, function (i) {
            return i;
        });

        expect(result).to.eql([1, 2, 3, 4, undefined, undefined]);
    });

    it('should sort by length', function () {
        var list = ['one', 'two', 'three', 'four', 'five'];
        var sorted = _.sortBy(list, 'length');

        expect(sorted).to.eql(['one', 'two', 'four', 'five', 'three']);
    });
});