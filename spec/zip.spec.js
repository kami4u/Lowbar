var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './zip'));


describe('#zip', function () {
    it('is a function', function () {
        expect(_.zip).to.be.a('function');
    });
    it('should zip together arrays', function () {
        var names = ['moe', 'larry', 'curly'],
            ages = [30, 40, 50],
            leaders = [true, true, true];

        expect(_.zip(names, ages, leaders)).to.eql([
            ['moe', 30, true],
            ['larry', 40, true],
            ['curly', 50, true]
        ]);
    });
});