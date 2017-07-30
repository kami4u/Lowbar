var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './contains'));


// contains method
describe('#contains', function () {

    it('is a function', function () {
        expect(_.contains).to.be.a('function');
    });
    it('should return boolean', function () {
        var result = _.contains([1, 2, 3, 4, 5], 3);
        expect(result).to.be.an('boolean');
    });
    it('Should return true if value is found in array', function () {
        var result = _.contains([1, 2, 3, 4, 5], 1);
        expect(result).to.eql(true);
    });
    it('Should return false if value not found in array', function () {
        var result = _.contains([1, 2, 3], 4);
        expect(result).to.eql(false);
    });
    it('Should return true if value found in object', function () {

        var result = _.contains({
            a: 3,
            b: 5,
            c: 1
        }, 3);
        expect(result).to.eql(true);
    });
    it('Should return false if value not found in object', function () {

        var result = _.contains({
            a: 3,
            b: 5,
            c: 1
        }, 2);
        expect(result).to.eql(false);
    });
});