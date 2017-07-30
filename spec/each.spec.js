var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './each'));

// each method
describe('#Each', function () {
    it('is a function', function () {
        expect(_.each).to.be.a('function');
    });
    it('calls the function as many times as items in the array', function () {
        var count = 0;

        function incrementCount() {
            count++;
        }
        _.each([1, 2, 3], incrementCount);
        expect(count).to.equal(3);
    });
    it('calls the function with each item of the array as the first argumet', function () {
        var count = 0;

        function incrementCount() {
            count++;
        }
        _.each([1, 2, 3], incrementCount);
        expect(count).to.equal(3);
    });
    it('calls the function with each item of the array as the first argumet', function () {
        var basket = [];

        function putItemInBasket(item) {
            basket.push(item);
        }
        _.each([1, 2, 3], putItemInBasket);
        expect(basket).to.eql([1, 2, 3]);
    });

    it('calls the function with the index of each item as the second argumet', function () {
        var basket = [];

        function putIndexInBasket(item, index) {
            basket.push(index);
        }
        _.each([1, 2, 3], putIndexInBasket);
        expect(basket).to.eql([0, 1, 2]);
    });

});