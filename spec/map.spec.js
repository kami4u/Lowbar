var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './map'));


// Map method
describe('#map', function () {
    function multBy3(num) {
        return num * 3;
    }

    function addDollar(num) {
        return '$' + num;
    }
    it('is a function', function () {
        expect(_.map).to.be.a('function');
    });
    it('should return an array', function () {
        var result = _.map([1, 2, 3, 4, 5], multBy3);
        expect(result).to.be.an('array');
    });
    it('map out a new array it\'s elements equal to input elements array multiplied by 3', function () {
        var result = _.map([1, 2, 3, 4, 5], multBy3);
        expect(result).to.eql([3, 6, 9, 12, 15]);
    });
    it('map out a new array containnig dollar character', function () {
        var result = _.map([1, 2, 3], addDollar);
        expect(result).to.eql(['$1', '$2', '$3']);
    });
    it('map out a new array from object', function () {

        var result = _.map({
            a: 3,
            b: 5,
            c: 1
        }, addDollar);
        expect(result).to.eql(['$3', '$5', '$1']);
    });
});